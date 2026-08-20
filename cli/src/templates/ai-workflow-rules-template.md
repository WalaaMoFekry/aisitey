# AI Workflow Rules

## Approach

Build [Project Name] incrementally using a spec-driven development workflow.

The context files define what the product should do, how the system should
be structured, the standards the code must follow, the current UI language,
and the current implementation state.

Before implementing any feature, read the relevant context files and use
them as the source of truth.

The AI coding agent is responsible for implementing code, not inventing
product decisions.

When a requirement is not defined, do not guess. Identify the missing
requirement and resolve it before implementation.

Build one small, verifiable feature unit at a time. Each unit should be
understood, implemented, tested, and reviewed before moving to the next one.

---

## Scoping Rules

- Work on one feature unit at a time.
- Keep implementation steps small and independently verifiable.
- Prefer completing a feature end to end rather than building large partial systems.
- Do not combine unrelated features in one implementation step.
- Do not introduce infrastructure before the feature requires it.
- Do not build speculative functionality.
- Do not expand the product beyond the defined scope.
- Reuse existing project patterns before introducing new ones.

A feature unit should have a clear purpose, a defined expected outcome, and
a way to verify that it works.

---

## Feature Implementation Order

1. Understand the requirement.
2. Read the relevant context files.
3. Identify the affected system boundaries.
4. Identify required data and state changes.
5. Define the smallest implementation needed.
6. Implement the feature.
7. Verify the feature end to end.
8. Check error and empty states.
9. Run the relevant tests and checks.
10. Run the production build when appropriate.
11. Update `memory.md` with meaningful implementation decisions.
12. Update `progress-tracker.md`.
13. Run the review step/skill before moving to the next feature.

Do not move to the next feature while the current feature has unresolved
critical issues.

---

## When to Split Work

Split an implementation step when it combines unrelated concerns, such as:

- [e.g. Authentication and core resource management.]
- [e.g. Database schema changes and unrelated UI work.]
- [e.g. Multiple unrelated API routes.]
- Product behavior that has not yet been defined.

If a change cannot be verified end to end quickly, the scope is probably
too broad and should be split.

---

## Handling Missing Requirements

- Do not invent product behavior that is not defined in the context files.
- Do not assume how a workflow should behave when multiple valid behaviors are possible.
- If a requirement is ambiguous, stop and identify the ambiguity.
- Resolve important product decisions in the appropriate context file before implementing them.
- Record meaningful architectural decisions in `memory.md`.
- Record unresolved questions in `progress-tracker.md`.
- Never silently make a product decision and continue as if it had been approved.

Examples of requirements that must be clarified before implementation:

- [e.g. Who can modify a given resource?]
- [e.g. What statuses/transitions are allowed?]
- [e.g. Can a completed item be reopened?]

<!-- Replace with real examples specific to this product's domain. -->

---

## Product Scope Rules

[One-line restatement of the product's purpose, matching project-overview.md.]

The agent must not introduce features outside the defined product scope
without explicit instruction.

Do not add (mirror the Out of Scope list from `project-overview.md`):

- [item]
- [item]

If a future feature would require one of these capabilities, record it as
an open question or future consideration rather than implementing it
automatically.

---

## Data Rules

- Keep entities with different lifecycles or responsibilities separate.
- Do not duplicate the same source of truth unnecessarily.
- Do not store derived data when it can reliably be calculated, unless there's a documented reason.
- Validate data at system boundaries before using it internally.
- Preserve relationships between core entities.
- Do not delete related data automatically unless the behavior has been explicitly defined.

---

## Authentication and Access Rules

- Protected functionality requires an authenticated user.
- Authentication must be enforced at the appropriate server boundary.
- Never trust client-side authentication state as the only authorization check.
- Ownership and access rules must be enforced before mutations.
- A user must not be able to access or modify another user's private resources.

The authentication provider is an implementation decision and must remain
consistent with `architecture.md`.

---

## UI and UX Rules

- Follow the visual rules defined in `ui-context.md`.
- Do not introduce a separate visual language for individual features.
- Reuse existing components and patterns whenever possible.
- Keep loading, empty, error, and success states explicit.
- Destructive actions should require appropriate confirmation.
- Do not introduce UI behavior that conflicts with the defined product flow.

---

## API and Server Rules

- Validate request input before processing it.
- Authenticate protected requests before accessing private resources.
- Enforce ownership or access control before mutations.
- Keep request handlers focused and predictable.
- Return consistent response shapes.
- Never expose internal errors, secrets, or sensitive data to users.

---

## Error Handling Rules

Every meaningful feature should consider:

- Invalid user input.
- Missing records.
- Unauthorized access.
- Failed database/external service calls.
- Empty and loading states.
- Unexpected server errors.

Do not silently swallow errors.

---

## Testing and Verification

Before considering a feature complete:

1. Verify the primary happy path.
2. Verify invalid input where applicable.
3. Verify empty and loading states.
4. Verify unauthorized access where applicable.
5. Verify missing-resource behavior.
6. Check the console/logs for unexpected errors.
7. Run the relevant automated tests.
8. Run the production build when appropriate.

A feature is not complete simply because the UI renders or the API returns
a successful response — the complete user flow must work within scope.

---

## Context Synchronization

Update `memory.md` when:

- An important architectural decision is made.
- A technical approach is selected over alternatives.
- A product behavior is intentionally defined.
- A recurring implementation pattern is established.

Update `progress-tracker.md` when:

- A feature starts or completes.
- The current implementation phase changes.
- A meaningful blocker or open question appears.
- The next implementation unit changes.

Do not allow the context files to describe a project state that no longer
matches the codebase.

---

## Protected Decisions

The AI coding agent must not silently change:

- Product scope.
- Core user flows.
- Authentication strategy.
- Data ownership rules.
- Status models.
- Major architectural boundaries.
- Established design-system rules.

If one of these needs to change, identify the change explicitly and update
the appropriate context file before implementation continues.

---

## Dependency Rules

- Do not add a dependency unless the feature requires it.
- Prefer existing dependencies already established in the project.
- Avoid adding multiple libraries that solve the same problem.
- Record significant dependency decisions in `memory.md`.

---

## Refactoring Rules

- Do not refactor unrelated code while implementing a feature.
- Refactor when the existing structure directly prevents the feature from being implemented correctly.
- Prefer small, targeted refactors.
- Preserve existing behavior unless the task explicitly changes it.

---

## Before Moving to the Next Feature

1. The defined feature behavior works end to end.
2. The implementation matches the project overview and current scope.
3. Architecture boundaries are respected.
4. Authentication and access rules are enforced where required.
5. Loading, empty, error, and success states are handled where applicable.
6. No obvious errors remain.
7. Relevant tests and checks pass.
8. The production build passes when applicable.
9. `memory.md` reflects meaningful new decisions.
10. `progress-tracker.md` reflects the current project state.

Only then should development move to the next feature unit.
