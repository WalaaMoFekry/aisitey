import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { auth, currentUser } from '@clerk/nextjs/server';

export async function POST(req: Request) {
  try {
    // 1. نجيب user من Clerk
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const email = user?.emailAddresses[0]?.emailAddress || 'unknown@email.com';

    const { name, description, tech_stack } = await req.json();

    if (!name || !tech_stack) {
      return NextResponse.json(
        { error: 'Name and tech stack are required' },
        { status: 400 }
      );
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // 2. نتأكد إن user موجود في Supabase
    const { data: existingUser } = await supabase
      .from('users')
      .select('*')
      .eq('clerk_id', userId)
      .single();

    let user_id;

    if (existingUser) {
      user_id = existingUser.id;
    } else {
      // 3. لو مش موجود، نعمله
      const { data: newUser, error: userError } = await supabase
        .from('users')
        .insert({
          clerk_id: userId,
          email: email,
        })
        .select()
        .single();

      if (userError) {
        console.error('Error creating user:', userError);
        return NextResponse.json(
          { error: 'Failed to create user' },
          { status: 500 }
        );
      }

      user_id = newUser.id;
    }

    // 4. نعمل project مرتبط بالـ user
    const { data: project, error: projectError } = await supabase
      .from('projects')
      .insert({
        user_id: user_id,
        name,
        description,
        tech_stack,
        status: 'active',
      })
      .select()
      .single();

    if (projectError) {
      console.error('Error creating project:', projectError);
      return NextResponse.json(
        { error: 'Failed to create project' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      project,
    });
  } catch (error) {
    console.error('Error in projects API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}