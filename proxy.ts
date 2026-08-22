import { clerkMiddleware } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const SESSION_VISITED_COOKIE = 'aisitey_session_active'

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth()
  const isHomePage = req.nextUrl.pathname === '/'

  if (userId && isHomePage) {
    const hasVisitedThisSession = req.cookies.has(SESSION_VISITED_COOKIE)

    if (!hasVisitedThisSession) {
      // First time hitting "/" in this browser session — send them to the
      // dashboard, and mark this session so future visits to "/" during
      // the same session (e.g. clicking the logo) don't redirect again.
      const response = NextResponse.redirect(new URL('/dashboard', req.url))
      response.cookies.set(SESSION_VISITED_COOKIE, '1', {
        // No `maxAge` / `expires` set — this makes it a session cookie,
        // which the browser clears automatically when it's fully closed.
        path: '/',
      })
      return response
    }
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for Clerk's auto-proxy path
    '/__clerk/:path*',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}