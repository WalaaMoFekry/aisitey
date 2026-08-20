# Project Memory

This file contains important project decisions, conventions, and
implementation knowledge that should remain consistent across development
sessions.

Update this file when a decision or implementation detail is important
enough that a future developer or AI agent should not have to rediscover it.

Do not use this file as a general progress log — current implementation
progress belongs in `progress-tracker.md`.

Do not restate values that are fully defined elsewhere (e.g. status models
in `architecture.md`, color tokens in `ui-context.md`). Reference them
instead — if a duplicated value and its source ever disagree, the source
file wins and this file should be fixed.

---

## Project Identity

- Project name: [Name]
- Product type: [one line]
- Primary users: [who]
- Primary goal: [one line]

---

## Product Principles

Short, durable principles that should guide every future decision — not
project-specific facts (those belong in Domain Decisions below).

### [Principle Name, e.g. One Source of Truth]

[What it means in practice for this project.]

### [Principle Name, e.g. Explicit State]

[What it means in practice for this project.]

---

## Technology Decisions

For each major technology choice: what it is and why it was chosen. Full
technical detail belongs in `architecture.md` — this section is the
reasoning, not the specification.

### [Technology]

[Reason it was chosen.]

### [Technology]

[Reason it was chosen.]

---

## Domain Decisions

For each core entity: a short summary of what it represents and any
non-obvious rule about it. Point to `architecture.md` for the full
definition and status values — don't duplicate them here.

### [Entity]

[One or two lines on what it represents and any key rule.]

Full definition: see `architecture.md` → Core Domain Model → [Entity].

### [Entity]

[One or two lines on what it represents and any key rule.]

Status values: see `architecture.md` → Status Model → [Entity] Status.

---

## Ownership and Access

- Every [entity] belongs to an authenticated user.
- Users must not access or mutate another user's private resources.
- Authorization is enforced server-side.
- Client-side UI restrictions are not considered security boundaries.

---

## Architecture Boundaries

The project follows the boundaries defined in `architecture.md`. Important
rules worth restating here because they're easy to violate accidentally:

- [rule]
- [rule]

---

## UI Decisions

The visual system is defined in `ui-context.md`. Only record a UI decision
here if it's a significant project-wide call, not a per-screen detail.

---

## Important Implementation Decisions

Record significant decisions here using this format:

### [Decision Title]

**Decision**

[What was decided.]

**Reason**

[Why this approach was chosen.]

**Impact**

[What future implementation needs to know because of this decision.]

---

## Known Constraints

Mirror the Out of Scope list from `project-overview.md`:

- [constraint]
- [constraint]

Do not implement these unless the product scope is explicitly changed.

---

## Future Considerations

Possibilities, not current requirements:

- [idea]
- [idea]

A future consideration becomes a real requirement only after it's
explicitly defined and added to the appropriate context files.

---

## Agent Notes

### Do Not Rediscover Established Decisions

Check this file and the other context files before making a significant
architectural or product decision. Do not replace an established decision
simply because another approach is technically possible.

### Do Not Treat Memory as Scope

Information here does not automatically mean a feature should be
implemented. Product scope is defined by `project-overview.md`.

### Keep Memory Intentional

Only record information useful for future development. Do not turn this
file into a copy of the codebase or a chronological conversation log.

---

## Update Rules

Update this file when:

- A significant architecture decision is made.
- A technology decision is confirmed.
- A domain rule is established.
- A recurring implementation pattern is introduced.
- A previous decision is intentionally changed.

Do not update this file for every small code change.

Current progress belongs in: `progress-tracker.md`
Architecture belongs in: `architecture.md`
Coding conventions belong in: `code-standards.md`
UI rules belong in: `ui-context.md`
Development workflow belongs in: `ai-workflow-rules.md`
