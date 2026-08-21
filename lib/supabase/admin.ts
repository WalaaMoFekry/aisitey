import { createClient } from '@supabase/supabase-js'

// Uses the service role key, which bypasses RLS entirely.
// Only import this in server-only code (webhooks, admin scripts) —
// never in client components or anything reachable from the browser.
export function createSupabaseAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}