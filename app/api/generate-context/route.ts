// app/api/generate-context/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const projectName = data.name || '[Project Name]';
    const description = data.description || '';
    const goals = data.goals.filter((g: string) => g.trim());
    const features = data.features.filter((f: string) => f.trim());
    const inScope = data.inScope.filter((s: string) => s.trim());
    const outScope = data.outScope.filter((s: string) => s.trim());
    const techStack = data.tech_stack || 'Custom';

    const files = [
      {
        name: 'project-overview.md',
        content: generateProjectOverview(projectName, description, goals, features, inScope, outScope),
      },
      {
        name: 'architecture.md',
        content: generateArchitecture(techStack),
      },
      {
        name: 'ui-context.md',
        content: generateUIContext(),
      },
      {
        name: 'code-standards.md',
        content: generateCodeStandards(),
      },
      {
        name: 'ai-workflow-rules.md',
        content: generateAIWorkflowRules(projectName),
      },
      {
        name: 'memory.md',
        content: generateMemory(projectName, techStack),
      },
      {
        name: 'progress-tracker.md',
        content: generateProgressTracker(),
      },
    ];

    return NextResponse.json({ files });
  } catch (error) {
    console.error('Generation error:', error);
    return NextResponse.json({ error: 'Failed to generate' }, { status: 500 });
  }
}

function generateProjectOverview(
  name: string,
  description: string,
  goals: string[],
  features: string[],
  inScope: string[],
  outScope: string[]
): string {
  return `# ${name}

## Overview

${description || 'Write your project overview here.'}

## Goals

${goals.length > 0 ? goals.map((g, i) => `${i + 1}. ${g}`).join('\n') : '1. Goal one\n2. Goal two\n3. Goal three'}

## Core User Flow

1. Step one
2. Step two
3. Step three

## Features

${features.length > 0 ? features.map((f) => `- ${f}`).join('\n') : '- Feature description'}

## Scope

### In Scope

${inScope.length > 0 ? inScope.map((s) => `- ${s}`).join('\n') : '- What you are building'}

### Out of Scope

${outScope.length > 0 ? outScope.map((s) => `- ${s}`).join('\n') : '- What you are not building'}

## Success Criteria

1. A user can complete the primary workflow.
2. All core features work end to end.
`;
}

function generateArchitecture(techStack: string): string {
  return `# Architecture Context

## Stack

| Layer | Technology | Role |
| --- | --- | --- |
| Framework | ${techStack} | Application framework |
| UI | [UI library] | User interface |
| Database | [Database] | Data storage |

## System Boundaries

- \`app/\` — Application routes and pages
- \`components/\` — Reusable UI components
- \`lib/\` — Utilities and business logic

## Core Domain Model

### Entity

Represents [what it is].

Contains:
- [field]
- [field]

## Auth and Access Model

- Users authenticate through [provider].
- Protected routes require authentication.
- Authorization is enforced on the server.

## Data Integrity Rules

1. Every entity belongs to an authenticated user.
2. Mutations must not bypass ownership checks.
`;
}

function generateUIContext(): string {
  return `# UI Context

## Theme

Clean, calm, and structured. Avoid excessive gradients and neon colors.

## Colors

| Role | CSS Variable | Hex |
| --- | --- | --- |
| Page background | \`--bg-base\` | \`#F7F6F3\` |
| Surface | \`--bg-surface\` | \`#FFFFFF\` |
| Brand primary | \`--accent-primary\` | \`#3D3B6E\` |

## Typography

| Role | Font |
| --- | --- |
| UI text | Inter |
| Code/mono | Geist Mono |

## Border Radius

- Buttons: 12px
- Cards: 24px

## Accessibility

- Maintain readable contrast.
- Never communicate status through color alone.
`;
}

function generateCodeStandards(): string {
  return `# Code Standards

## General

- Keep modules small and single-purpose.
- Prefer readable code over clever code.
- Remove dead code when no longer needed.

## Validation

- Treat all external input as untrusted.
- Validate at system boundaries.

## Error Handling

- Handle expected errors explicitly.
- Do not expose sensitive details to users.

## Before Marking a Feature Complete

1. Verify the implementation matches the feature.
2. Verify authentication and authorization.
3. Verify loading, empty, and error states.
4. Run the build.
`;
}

function generateAIWorkflowRules(projectName: string): string {
  return `# AI Workflow Rules

## Approach

Build ${projectName} incrementally using spec-driven development.

## Scoping Rules

- Work on one feature at a time.
- Do not build speculative functionality.
- Do not expand the product beyond defined scope.

## Handling Missing Requirements

- Do not invent product behavior.
- If a requirement is ambiguous, stop and ask.

## Protected Decisions

- Product scope.
- Authentication strategy.
- Status models.

## Before Moving to the Next Feature

1. The feature works end to end.
2. Architecture boundaries are respected.
3. Loading, empty, and error states are handled.
`;
}

function generateMemory(projectName: string, techStack: string): string {
  return `# Project Memory

## Project Identity

- Project name: ${projectName}
- Tech stack: ${techStack}
- Product type: [one line]
- Primary users: [who]

## Technology Decisions

### ${techStack}

Chosen because [reason].

## Known Constraints

- [constraint]

## Future Considerations

- [idea]
`;
}

function generateProgressTracker(): string {
  return `# Progress Tracker

## Current Phase

- Not started

## Current Goal

- [What you are building right now]

## Completed

- None yet.

## In Progress

- None yet.

## Next Up

- [First unit to build]

## Open Questions

- [Any unresolved decisions]

## Session Notes

- [Context for next session]
`;
}