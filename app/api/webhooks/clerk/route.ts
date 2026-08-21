import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { createSupabaseAdminClient } from '@/lib/supabase/admin'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  let evt

  try {
    evt = await verifyWebhook(req)
  } catch (err) {
    console.error('Webhook verification failed:', err)
    return NextResponse.json({ error: 'Verification failed' }, { status: 400 })
  }

  if (evt.type === 'user.created') {
    const { id, email_addresses } = evt.data
    const primaryEmail = email_addresses?.[0]?.email_address

    if (!primaryEmail) {
      console.error('user.created event missing an email address:', id)
      return NextResponse.json({ error: 'Missing email' }, { status: 400 })
    }

    const supabase = createSupabaseAdminClient()

    const { error } = await supabase
      .from('users')
      .insert({ clerk_id: id, email: primaryEmail })

    if (error) {
      console.error('Failed to sync user to Supabase:', error)
      return NextResponse.json({ error: 'Sync failed' }, { status: 500 })
    }
  }

  return NextResponse.json({ received: true })
}