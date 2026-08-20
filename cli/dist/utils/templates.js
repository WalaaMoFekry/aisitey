"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTemplateContent = getTemplateContent;
exports.getAvailableContexts = getAvailableContexts;
exports.isContextTemplate = isContextTemplate;
const chalk_1 = __importDefault(require("chalk"));
const basicTemplates = {
    'project-overview': `# [Project Name]

## Overview

Write your project overview here describing what this application does,
who it's for, and what problem it solves.

## Goals

1. Goal one
2. Goal two
3. Goal three

## Core User Flow

1. Step one
2. Step two
3. Step three

## Features

### Feature Category One
- Feature description

### Feature Category Two
- Feature description

## Scope

### In Scope
- What you are building

### Out of Scope
- What you are not building

## Success Criteria

1. Condition one
2. Condition two
`,
    'architecture': `# Architecture Context

## Stack

| Layer | Technology | Role |
| --- | --- | --- |
| Framework | [e.g. Next.js + TypeScript] | [what it's responsible for] |
| UI | [e.g. Tailwind + shadcn/ui] | [what it's responsible for] |
| Database | [e.g. Prisma + PostgreSQL] | [what it's responsible for] |

## System Boundaries

- \`folder/\` — responsibility

## Application Architecture

### Presentation Layer
- Rendering pages and UI

### Application Layer
- Validating incoming data
- Applying business rules

### Data Layer
- Database access

## Core Domain Model

### Entity One
Represents [what it is].

Contains:
- [field]

Related to:
- [relationship]

## Auth and Access Model

- Users authenticate through [provider].
- Protected routes require authentication.

## Status Model

### Entity Status
Possible states:
- \`STATE_ONE\`
- \`STATE_TWO\`

## Data Integrity Rules

1. Every [entity] belongs to an authenticated user.
2. Every [child entity] belongs to a valid [parent entity].

## Invariants

1. Client components never access the database directly.
2. Authentication is enforced on every protected server operation.
`,
    'ui-context': `# UI Context

## Theme

Describe the overall visual direction.

## Colors

| Role | CSS Variable | Hex |
| --- | --- | --- |
| Page background | \`--bg-base\` | \`#______\` |
| Surface | \`--bg-surface\` | \`#______\` |
| Brand primary | \`--accent-primary\` | \`#______\` |

## Typography

| Role | Font | CSS Variable |
| --- | --- | --- |
| UI text | [font] | \`--font-______\` |

## Border Radius

| Context | Class |
| --- | --- |
| Buttons / inputs | \`[value]\` |
| Cards / panels | \`[value]\` |

## Component Library

[e.g. shadcn/ui on top of Tailwind]

## Layout Patterns

### Application Shell
- [e.g. Left sidebar for navigation]

## Buttons and Actions

- Primary actions use [rule].

## Icons

[Library] [Style]

## Accessibility

- Maintain readable contrast.
- Never communicate status through color alone.
`,
    'code-standards': `# Code Standards

## General

- Keep modules small and single-purpose.
- Fix root causes — do not layer workarounds.
- Prefer readable code over clever code.

## TypeScript

- Strict mode is required throughout the project.
- Avoid \`any\`; use explicit types.

## Components / UI Code

- Each component has one clear responsibility.
- Prefer composition over large conditional components.

## API / Server Routes

- Validate input before executing application logic.
- Enforce authentication before accessing protected resources.

## Validation

- Treat all external input as untrusted.
- Validate at system boundaries.

## Business Logic

- Business rules live in server-side application modules.

## Database

- All database access goes through [ORM/client].
- Always verify ownership before mutations.

## Error Handling

- Handle expected errors explicitly.
- Do not expose sensitive implementation details.

## Before Marking a Feature Complete

1. Verify the implementation matches the intended feature.
2. Verify architecture boundaries are respected.
3. Verify authentication and authorization.
4. Verify loading, empty, and error states.
`,
    'ai-workflow-rules': `# AI Workflow Rules

## Approach

Build [Project Name] incrementally using spec-driven development.

## Scoping Rules

- Work on one feature unit at a time.
- Keep implementation steps small and verifiable.
- Do not build speculative functionality.

## Feature Implementation Order

1. Understand the requirement.
2. Read the relevant context files.
3. Implement the feature.
4. Verify the feature end to end.
5. Update memory.md and progress-tracker.md.

## Handling Missing Requirements

- Do not invent product behavior.
- If a requirement is ambiguous, stop and identify the ambiguity.

## Protected Decisions

The AI coding agent must not silently change:
- Product scope.
- Core user flows.
- Authentication strategy.
- Data ownership rules.
- Status models.
- Major architectural boundaries.

## Before Moving to the Next Feature

1. The defined feature behavior works end to end.
2. Architecture boundaries are respected.
3. Authentication and access rules are enforced.
4. Loading, empty, error, and success states are handled.
`,
    'memory': `# Project Memory

## Project Identity

- Project name: [Name]
- Product type: [one line]
- Primary users: [who]
- Primary goal: [one line]

## Product Principles

### One Source of Truth
[What it means in practice]

## Technology Decisions

### [Technology]
[Reason it was chosen.]

## Domain Decisions

### [Entity]
[One or two lines on what it represents.]

## Ownership and Access

- Every [entity] belongs to an authenticated user.
- Authorization is enforced server-side.

## Important Implementation Decisions

### [Decision Title]

**Decision**
[What was decided.]

**Reason**
[Why this approach was chosen.]

**Impact**
[What future implementation needs to know.]

## Known Constraints

- [constraint]

## Future Considerations

- [idea]
`,
    'progress-tracker': `# Progress Tracker

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

- [Any unresolved product or technical decision]

## Session Notes

- [Context needed to resume work in the next session]
`,
};
function getTemplateContent(templateName, projectName) {
    const content = basicTemplates[templateName];
    if (!content) {
        console.log(chalk_1.default.red(`Template not found: ${templateName}`));
        console.log(chalk_1.default.gray('Run: aisitey list to see available templates'));
        return '';
    }
    if (projectName) {
        return content.replace(/\[Project Name\]/g, projectName);
    }
    return content;
}
function getAvailableContexts() {
    return Object.keys(basicTemplates);
}
function isContextTemplate(name) {
    return basicTemplates.hasOwnProperty(name);
}
