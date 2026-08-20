# Code Standards

## General

- Keep modules small and single-purpose.
- Fix root causes — do not layer workarounds.
- Prefer readable code over clever code.

## nextjs

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
