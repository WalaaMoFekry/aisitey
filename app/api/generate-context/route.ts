import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Build project-overview.md
    const content = `# ${data.name || '[Project Name]'}

## Overview

${data.overview || 'Write your project overview here.'}

## Goals

${data.goals.filter((g: string) => g.trim()).map((g: string, i: number) => `${i + 1}. ${g}`).join('\n') || '1. Goal one'}

## Core User Flow

${data.coreFlow.filter((c: string) => c.trim()).map((c: string, i: number) => `${i + 1}. ${c}`).join('\n') || '1. Step one'}

## Features

${data.features.map((f: any, i: number) => {
  const category = f.category.trim();
  const items = f.items.filter((item: string) => item.trim()).map((item: string) => `- ${item}`).join('\n');
  return category ? `### ${category}\n\n${items}` : '';
}).filter(Boolean).join('\n\n') || '### Feature Category\n\n- Feature description'}

## Scope

This is the most important section in this file. It is what stops the AI
agent from silently expanding the product on its own. Be explicit — if it's
not listed In Scope, the agent should treat it as not built.

### In Scope

${data.inScope.filter((s: string) => s.trim()).map((s: string) => `- ${s}`).join('\n') || '- What you are building'}

### Out of Scope

${data.outScope.filter((s: string) => s.trim()).map((s: string) => `- ${s}`).join('\n') || '- What you are not building'}

## Success Criteria

Write each criterion so it can be verified — "a user can do X" — not as a
general quality statement like "the system is fast" or "the UI is good."

${data.successCriteria.filter((s: string) => s.trim()).map((s: string, i: number) => `${i + 1}. ${s}`).join('\n') || '1. Condition one'}`;

    return NextResponse.json({ 
      success: true,
      file: {
        name: 'project-overview.md',
        content,
      }
    });
  } catch (error) {
    console.error('Generation error:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Failed to generate' 
    }, { status: 500 });
  }
}