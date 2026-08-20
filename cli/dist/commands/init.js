"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initProject = initProject;
const prompts_1 = require("@inquirer/prompts");
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const chalk_1 = __importDefault(require("chalk"));
const ora_1 = __importDefault(require("ora"));
async function initProject() {
    console.log(chalk_1.default.bold('\n🚀 Welcome to aisitey!\n'));
    console.log(chalk_1.default.gray('Build with context, not chaos.\n'));
    try {
        const projectName = await (0, prompts_1.input)({
            message: 'What is your project name?',
            validate: (value) => {
                if (value.length < 2) {
                    return 'Project name must be at least 2 characters';
                }
                return true;
            },
        });
        const techStack = await (0, prompts_1.select)({
            message: 'What is your tech stack?',
            choices: [
                { name: 'Next.js + TypeScript', value: 'nextjs' },
                { name: 'Vue 3 + TypeScript', value: 'vue' },
                { name: 'React + TypeScript', value: 'react' },
                { name: 'Laravel', value: 'laravel' },
                { name: 'Flutter', value: 'flutter' },
                { name: 'Custom', value: 'custom' },
            ],
        });
        const createFolder = await (0, prompts_1.confirm)({
            message: 'Create a new folder for this project?',
            default: true,
        });
        const spinner = (0, ora_1.default)('Creating project structure...').start();
        const projectPath = createFolder
            ? path_1.default.join(process.cwd(), projectName)
            : process.cwd();
        // Create .aisitey folder
        await fs_extra_1.default.ensureDir(path_1.default.join(projectPath, '.aisitey'));
        // Create all template files
        const templates = [
            'project-overview',
            'architecture',
            'ui-context',
            'code-standards',
            'ai-workflow-rules',
            'memory',
            'progress-tracker',
        ];
        for (const template of templates) {
            const content = getTemplateContent(template, projectName, techStack);
            await fs_extra_1.default.writeFile(path_1.default.join(projectPath, '.aisitey', `${template}.md`), content);
        }
        spinner.succeed(chalk_1.default.green('Project initialized successfully!'));
        console.log('\n📁 Created files:');
        console.log(chalk_1.default.gray(`  ${projectName}/`));
        console.log(chalk_1.default.gray('  └── .aisitey/'));
        templates.forEach((template) => {
            console.log(chalk_1.default.gray(`      ├── ${template}.md`));
        });
        console.log('\n✨ Next steps:');
        console.log(chalk_1.default.blue(`  1. cd ${projectName}`));
        console.log(chalk_1.default.blue('  2. Edit your project-overview.md'));
        console.log(chalk_1.default.blue('  3. Define your architecture'));
        console.log(chalk_1.default.blue('  4. Start building with AI'));
    }
    catch (error) {
        console.log(chalk_1.default.red('\n❌ Operation cancelled'));
        process.exit(0);
    }
}
function getTemplateContent(template, projectName, techStack) {
    const templates = {
        'project-overview': `# ${projectName}

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
| Framework | ${techStack} | Application framework |
| UI | [UI library] | User interface |
| Database | [Database] | Data storage |

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

| Role | Font |
| --- | --- |
| UI text | [font] |

## Border Radius

| Context | Class |
| --- | --- |
| Buttons / inputs | \`[value]\` |
| Cards / panels | \`[value]\` |

## Component Library

[e.g. shadcn/ui on top of Tailwind]

## Accessibility

- Maintain readable contrast.
- Never communicate status through color alone.
`,
        'code-standards': `# Code Standards

## General

- Keep modules small and single-purpose.
- Fix root causes — do not layer workarounds.
- Prefer readable code over clever code.

## ${techStack}

- Strict mode is required throughout the project.
- Use explicit types.

## Components / UI Code

- Each component has one clear responsibility.
- Prefer composition over large conditional components.

## API / Server Routes

- Validate input before executing application logic.
- Enforce authentication before accessing protected resources.

## Validation

- Treat all external input as untrusted.
- Validate at system boundaries.

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

Build ${projectName} incrementally using spec-driven development.

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

- Project name: ${projectName}
- Tech stack: ${techStack}
- Product type: [one line]
- Primary users: [who]
- Primary goal: [one line]

## Product Principles

### One Source of Truth
[What it means in practice]

## Technology Decisions

### ${techStack}
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
    return templates[template] || '';
}
