import { SignUp } from '@clerk/nextjs';
import { Clock, FolderTree, MemoryStick, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function SignUpPage() {
  return (
    <div className='bg-muted grid flex-1 lg:grid-cols-2'>
      <div className='hidden flex-1 items-center justify-end p-6 md:p-10 lg:flex'>
        <div className='max-w-sm'>
          {/* Logo */}
          <div className='mb-12 flex items-center gap-3'>
            <Image
              src="/aisitey-logo.png"
              alt="aisitey logo"
              width={40}
              height={40}
              className="rounded-xl"
            />
            <span className='text-2xl font-semibold tracking-tight text-brand'>
              aisitey
            </span>
          </div>

          {/* Tagline */}
          <p className='mb-10 text-lg font-medium text-copy-primary'>
            Build with context, not chaos.
          </p>

          <ul className='space-y-8'>
            <li>
              <div className='flex items-center gap-2'>
                <Clock className='size-4 text-brand' />
                <p className='font-semibold'>Save development time</p>
              </div>
              <p className='text-muted-foreground mt-2 text-sm'>
                Write your context once, and let AI agents build from it — no re-explaining, no wasted sessions.
              </p>
            </li>
            <li>
              <div className='flex items-center gap-2'>
                <FolderTree className='size-4 text-brand' />
                <p className='font-semibold'>Build with context</p>
              </div>
              <p className='text-muted-foreground mt-2 text-sm'>
                Seven structured files keep your project scope, architecture, and standards connected.
              </p>
            </li>
            <li>
              <div className='flex items-center gap-2'>
                <ShieldCheck className='size-4 text-brand' />
                <p className='font-semibold'>Stay in control</p>
              </div>
              <p className='text-muted-foreground mt-2 text-sm'>
                AI follows your rules and boundaries. You make the decisions, AI executes precisely.
              </p>
            </li>
            <li>
              <div className='flex items-center gap-2'>
                <MemoryStick className='size-4 text-brand' />
                <p className='font-semibold'>Project memory</p>
              </div>
              <p className='text-muted-foreground mt-2 text-sm'>
                Every decision, update, and change stays attached to your project — nothing gets lost.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-1 items-center justify-center p-6 md:p-10 lg:justify-start'>
        <SignUp />
      </div>
    </div>
  );
}