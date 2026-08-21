"use client";

import {
  SiNextdotjs,
  SiVuedotjs,
  SiNestjs,
  SiReact,
  SiLaravel,
  SiFlutter,
  SiCodesandbox,
  SiCursor,
  SiClaude,
  SiGooglegemini,
  SiGithub,
  SiNpm,
  SiClerk,
  SiSupabase,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const items = [
  { name: "Next.js", icon: <SiNextdotjs className="size-4" /> },
  { name: "Vue", icon: <SiVuedotjs className="size-4 text-green-600" /> },
  { name: "Nest.js", icon: <SiNestjs className="size-4 text-red-600" /> },
  { name: "React", icon: <SiReact className="size-4 text-blue-500" /> },
  { name: "Laravel", icon: <SiLaravel className="size-4 text-red-600" /> },
  { name: "Flutter", icon: <SiFlutter className="size-4 text-blue-500" /> },
  { name: "Codex", icon: <SiCodesandbox className="size-4" /> },
  { name: "Cursor", icon: <SiCursor className="size-4" /> },
  { name: "Claude", icon: <SiClaude className="size-4 text-[#D97757]" /> },
  { name: "Gemini", icon: <SiGooglegemini className="size-4" /> },
  { name: "GitHub", icon: <SiGithub className="size-4" /> },
  { name: "npm", icon: <SiNpm className="size-4 text-red-500" /> },
  { name: "Clerk", icon: <SiClerk className="size-4" /> },
  { name: "Supabase", icon: <SiSupabase className="size-4 text-green-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="size-4 text-blue-600" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="size-4 text-cyan-500" /> },
];

export function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-default bg-surface py-8">
      {/* Gradient edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />

      {/* Marquee content */}
      <div className="flex w-max animate-marquee gap-4">
        {items.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex items-center gap-2.5 rounded-full border border-default bg-base px-5 py-2.5 transition-all hover:border-brand/30 hover:shadow-sm"
          >
            <span className="flex items-center">{item.icon}</span>
            <span className="text-sm font-medium text-copy-secondary">
              {item.name}
            </span>
          </div>
        ))}

        {/* Duplicate for seamless loop */}
        {items.map((item, index) => (
          <div
            key={`${item.name}-duplicate-${index}`}
            className="flex items-center gap-2.5 rounded-full border border-default bg-base px-5 py-2.5 transition-all hover:border-brand/30 hover:shadow-sm"
          >
            <span className="flex items-center">{item.icon}</span>
            <span className="text-sm font-medium text-copy-secondary">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}