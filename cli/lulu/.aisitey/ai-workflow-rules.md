# AI Workflow Rules

## Approach

Build lulu incrementally using spec-driven development.

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
