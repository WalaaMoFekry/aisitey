import { clerkMiddleware } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth()
  const isHomePage = req.nextUrl.pathname === '/'

  if (userId && isHomePage) {
    const referer = req.headers.get('referer')

    let cameFromSameSite = false
    if (referer) {
      try {
        cameFromSameSite = new URL(referer).host === req.nextUrl.host
      } catch {
        cameFromSameSite = false
      }
    }

    if (!cameFromSameSite) {
      // No referer (typed URL, bookmark, new tab, or the browser restoring
      // a previous session) or a referer from outside the site — treat
      // this as a fresh visit and send them straight to the dashboard.
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    // Referer is from the same site (e.g. clicked the logo while already
    // browsing) — let them view the home page normally.
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