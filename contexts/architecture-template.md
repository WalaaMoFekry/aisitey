# Architecture Context

## Stack

| Layer | Technology | Role |
| --- | --- | --- |
| Framework | [e.g. Next.js + TypeScript] | [what it's responsible for] |
| UI | [e.g. Tailwind + shadcn/ui] | [what it's responsible for] |
| Authentication | [e.g. Clerk] | [what it's responsible for] |
| Database | [e.g. Prisma + PostgreSQL] | [what it's responsible for] |
| Validation | [e.g. Zod] | [what it's responsible for] |

### Optional Technologies

- [Technology] is preferred because [reason]. List only if there's a real reason — don't fill this in just to fill it in.
- Additional services may be introduced only when a clear project requirement justifies them.

---

## System Boundaries

List the top-level folders/modules and what each one is responsible for.
This is what stops logic from leaking into the wrong place.

- `[folder/]` — [responsibility]
- `[folder/]` — [responsibility]
- `[folder/]` — [responsibility]

---

## Application Architecture

Describe the separation between presentation, application logic, and
persistence. Keep each layer's responsibility explicit so the agent knows
where new code belongs.

### Presentation Layer

Responsible for:

- [e.g. Rendering pages and UI]
- [e.g. Displaying loading, error, and empty states]

[State the hard rule, e.g. "UI components must not directly access the database."]

### Application Layer

Responsible for:

- [e.g. Validating incoming data]
- [e.g. Applying business rules]
- [e.g. Checking authentication and authorization]

[State the hard rule, e.g. "Business logic should not be duplicated across multiple routes or components."]

### Data Layer

Responsible for:

- [e.g. Database access through Prisma]
- [e.g. Persisting core entities]
- [e.g. Enforcing data integrity through the schema]

---

## Storage Model

### [Primary Database]

The database stores:

- [entity]
- [entity]
- [entity]

### File Storage

[State whether file/blob storage is needed. If not required yet, say so explicitly
and require that the strategy be defined here before it's implemented — don't
leave it silently undecided.]

---

## Core Domain Model

List every core entity. For each one: what it represents, what fields it
holds, and what it's related to. This section is what stops the agent from
inventing a data model on its own — be as complete as you can before
implementation starts, not after.

### [Entity One]

Represents [what it is].

Contains:

- [field]
- [field]

Related to:

- [relationship]

### [Entity Two]

Represents [what it is].

Contains:

- [field]
- [field]

Related to:

- [relationship]

<!-- Repeat for every core entity. Don't leave an entity implied by a
feature (e.g. mentioned only in project-overview.md) without a definition
here — that's the gap that forces the agent to guess. -->

---

## [Primary Entity] Lifecycle / Core Flow

Describe the controlled lifecycle of the main object moving through the
system, step by step, if one exists.

1. [step]
2. [step]
3. [step]

The system must prevent invalid state transitions.

---

## Auth and Access Model

- Users authenticate through [provider].
- Protected routes require authentication.
- Every user-owned resource must be associated with an authenticated user.
- A user can access only their own [resources].
- Authorization must be enforced on the server, not just the client.
- Authentication and ownership checks must happen before mutations.

---

## Status Model

This is the single source of truth for every status/enum value in the
system. Other context files should reference this section instead of
restating the values — if they're restated elsewhere and this changes,
they'll drift out of sync.

### [Entity] Status

Possible states:

- `STATE_ONE`
- `STATE_TWO`

Only valid transitions defined by the application are allowed.

<!-- Repeat per entity that has its own status lifecycle. Keep separate
entities' statuses as separate concepts — don't let one field try to
represent two different things. -->

### Open Questions

List any status/transition rule that isn't decided yet, so the agent knows
not to guess it. Move each one to "Initial Architecture Decisions" once
resolved, and delete it from here.

- [e.g. Can a completed X be reopened? — not yet decided]

---

## API and Server Boundaries

- Authentication and authorization checks happen in the route handler or a shared middleware, not deep in business logic.
- Input is validated before business logic runs.
- Route handlers stay thin — complex logic lives in reusable server-side modules.
- Database queries never run from client components.
- Responses use a consistent, predictable shape.

---

## Validation Boundary

All external input is treated as untrusted. Validation happens before
application logic executes. List where this applies:

- [e.g. Entity creation]
- [e.g. Status updates]
- [e.g. Form submissions]

---

## Data Integrity Rules

Number every relationship that must always hold true. This is what a
future refactor (by a human or an agent) must never break.

1. Every [entity] belongs to an authenticated user.
2. Every [child entity] belongs to a valid [parent entity].
3. [relationship rule]
4. Status values must come from the defined status model.
5. Deleting or modifying a resource must not bypass ownership checks.

---

## Invariants

Short, absolute rules that hold everywhere in the system, regardless of
feature. Number them so they're easy to reference elsewhere.

1. Client components never access the database directly.
2. Authentication is enforced on every protected server operation.
3. Authorization is checked before every mutation.
4. External input is validated before it reaches business logic.
5. Business rules are not duplicated across unrelated components or routes.
6. The status model defined in this file is the single source of truth.
7. The architecture must not introduce additional infrastructure without a defined requirement.

---

## Architecture Change Rules

Any change that affects one of the following must be reflected in this file
before implementation, when it affects multiple system boundaries:

- Technology stack.
- System boundaries.
- Database model.
- Authentication or authorization model.
- Storage strategy.
- Domain relationships.
- Status lifecycle.

---

## Initial Architecture Decisions

Record why each major technology or structural choice was made — future
sessions (human or AI) should not have to re-derive the reasoning.

### [Technology/Decision]

Chosen because [reason].

### [Technology/Decision]

Chosen because [reason].
