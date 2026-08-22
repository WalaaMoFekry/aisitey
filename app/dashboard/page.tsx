import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { DashboardContent } from '@/components/dashboard/dashboard-content';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId) {
    redirect('/sign-in');
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data: supabaseUser } = await supabase
    .from('users')
    .select('*')
    .eq('clerk_id', userId)
    .single();

  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .eq('user_id', supabaseUser?.id)
    .order('created_at', { ascending: false });

  return (
    <main className="flex min-h-screen flex-col bg-base">
      <Navbar />
      <DashboardContent 
        userName={user?.firstName || null}
        projects={projects || []}
      />
      <Footer />
    </main>
  );
}