---
title: "The Complete Guide to Writing Project Context"
excerpt: "Learn how to write project-overview.md, architecture.md, and the other five files that make AI agents build exactly what you need."
date: "2026-08-19"
readTime: "12 min"
category: "Tutorial"
---

Writing context isn't about writing more. It's about writing the *right* things in the *right* places.

This guide walks through each of the seven context files and shows you exactly what to write—and what to leave out.

---

## Why Context Beats Prompts

A long prompt is like giving someone directions verbally. They might remember most of it, but they'll forget the details.

Context files are like giving someone a map. They can refer back to it whenever they need.

---

## File 1: project-overview.md

**Purpose:** Define what you're building.

**What to include:**

- Project name
- One-paragraph overview
- 3-5 goals
- Core user flow (step by step)
- Features organized by category
- In scope / Out of scope
- Success criteria

**Example:**

```markdown
## Goals
- Let users create accounts
- Let users create posts
- Let users comment on posts

## Out of Scope
- Direct messaging
- Payment processing
- Mobile apps
```

**Tip:** The Out of Scope section is your most powerful tool. It stops AI from adding features you didn't ask for.

---

## File 2: architecture.md

**Purpose:** Define how you're building it.

**What to include:**

- Tech stack table
- System boundaries (folders and responsibilities)
- Application layers (presentation, application, data)
- Storage model
- Core domain model
- Auth and access model
- Status model

**Example:**

```markdown
## Stack
| Layer      | Technology              |
|------------|--------------------------|
| Framework  | Next.js + TypeScript    |
| Database   | Prisma + PostgreSQL     |
| Auth       | Clerk                   |
```

**Tip:** Define every entity. If the AI doesn't know your data model, it will invent one.

---

## File 3: ui-context.md

**Purpose:** Define how it should look.

**What to include:**

- Theme description
- Color tokens
- Typography
- Border radius scale
- Component library
- Layout patterns
- Motion rules

**Example:**

```markdown
## Colors
| Role       | Variable         | Hex       |
|------------|------------------|-----------|
| Background | --bg-base        | #F7F6F3   |
| Brand      | --accent-primary | #3D3B6E   |
```

**Tip:** Never let AI pick colors. Always define them as tokens.

---

## File 4: code-standards.md

**Purpose:** Define how code should be written.

**What to include:**

- General rules
- Language-specific rules
- Component rules
- API rules
- Validation rules
- Error handling

**Example:**

```markdown
## General
- Keep modules small and single-purpose
- Prefer readable code over clever code
- Remove dead code

## Validation
- Treat all external input as untrusted
- Validate at system boundaries
```

**Tip:** These rules prevent AI from writing messy, inconsistent code.

---

## File 5: ai-workflow-rules.md

**Purpose:** Define how AI should work.

**What to include:**

- Scoping rules
- Implementation order
- Missing requirements policy
- Protected decisions
- Testing requirements
- Context synchronization rules

**Example:**

```markdown
## Scoping Rules
- Work on one feature at a time
- Do not build speculative functionality
- Do not expand scope

## Protected Decisions
- Product scope
- Authentication strategy
- Status models
```

**Tip:** This is your AI's rulebook. Make it strict.

---

## File 6: memory.md

**Purpose:** Record important decisions.

**What to include:**

- Project identity
- Product principles
- Technology decisions (with reasons)
- Domain decisions
- Implementation decisions
- Known constraints

**Example:**

```markdown
## Technology Decisions
### Next.js
Chosen because: Server components, TypeScript support, Vercel integration

## Known Constraints
- No payment processing (out of scope)
- No mobile apps (out of scope)
```

**Tip:** Record *why* you chose something, not just *what* you chose.

---

## File 7: progress-tracker.md

**Purpose:** Track where you are.

**What to include:**

- Current phase
- Current goal
- Completed items
- In progress items
- Next up
- Open questions
- Session notes

**Example:**

```markdown
## Current Phase
Building authentication

## Completed
- Project setup
- Database schema

## Next Up
- User dashboard
```

**Tip:** Update this file after every session. It's your project's GPS.

---

## The Golden Rules

1. **Be specific** – Vague context is worse than no context
2. **Be complete** – Define every entity, every rule
3. **Be consistent** – Use the same terms everywhere
4. **Be current** – Update context when decisions change
5. **Be protective** – Your scope is your boundary

---

## Start Today

You don't need to write all seven files perfectly on day one.

Start with project-overview.md. Then add architecture.md. Then grow from there.

The important thing is to start writing context before you start writing code.

---

**Ready to start?** [Get the templates](https://aisitey.com/templates)
