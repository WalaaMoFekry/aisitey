import { NextResponse } from 'next/server';
import JSZip from 'jszip';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const projectName = data.name || 'project';
    const description = data.description || '';
    const goals = data.goals.filter((g: string) => g.trim());
    const features = data.features.filter((f: string) => f.trim());
    const inScope = data.inScope.filter((s: string) => s.trim());
    const outScope = data.outScope.filter((s: string) => s.trim());
    const techStack = data.tech_stack || 'Custom';

    // Generate files
    const files = [
      {
        name: 'project-overview.md',
        content: `# ${projectName}\n\n## Overview\n${description}\n\n## Goals\n${goals.map((g: string, i: number) => `${i + 1}. ${g}`).join('\n')}\n\n## Features\n${features.map((f: string) => `- ${f}`).join('\n')}\n\n## Scope\n### In Scope\n${inScope.map((s: string) => `- ${s}`).join('\n')}\n\n### Out of Scope\n${outScope.map((s: string) => `- ${s}`).join('\n')}`,
      },
      {
        name: 'architecture.md',
        content: `# Architecture\n\n## Stack\n- ${techStack}\n\n## System Boundaries\n- app/ — application code\n- components/ — UI components\n- lib/ — utilities`,
      },
      {
        name: 'ui-context.md',
        content: `# UI Context\n\n## Theme\nClean, calm, structured.\n\n## Colors\n| Role | Hex |\n|------|-----|\n| Background | #F7F6F3 |\n| Brand | #3D3B6E |`,
      },
      {
        name: 'code-standards.md',
        content: `# Code Standards\n\n## General\n- Keep modules small.\n- Prefer readable code.\n\n## Validation\n- Treat all input as untrusted.`,
      },
      {
        name: 'ai-workflow-rules.md',
        content: `# AI Workflow Rules\n\n## Scoping\n- One feature at a time.\n- No speculative code.\n\n## Protected\n- Product scope.\n- Auth strategy.`,
      },
      {
        name: 'memory.md',
        content: `# Project Memory\n\n## Project Identity\n- Name: ${projectName}\n- Stack: ${techStack}\n\n## Technology Decisions\n### ${techStack}\nChosen because [reason].`,
      },
      {
        name: 'progress-tracker.md',
        content: `# Progress Tracker\n\n## Current Phase\n- Not started\n\n## Completed\n- None yet.\n\n## Next Up\n- [First unit]`,
      },
    ];

    // Create ZIP
    const zip = new JSZip();
    const folder = zip.folder(`${projectName}-context`);

    files.forEach((file) => {
      folder?.file(file.name, file.content);
    });

    const zipBlob = await zip.generateAsync({ type: 'blob' });

    return new NextResponse(zipBlob, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${projectName}-context.zip"`,
      },
    });
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json({ error: 'Download failed' }, { status: 500 });
  }
}