# Code Standards

## General

- Keep modules small and single-purpose.
- Fix root causes — do not layer workarounds.
- Follow the system boundaries defined in `architecture.md`.
- Prefer existing project patterns over introducing new ones.
- Do not introduce abstractions unless they solve a real recurring problem.
- Prefer readable code over clever code.
- Remove dead code and unused dependencies when they're no longer needed.

---

## [Primary Language, e.g. TypeScript]

- [e.g. Strict mode is required throughout the project.]
- [e.g. Avoid `any`; use explicit types.]
- Use union types or enums for controlled states (statuses, roles, etc.) —
  never arbitrary strings when a fixed set of values is expected.
- Validate unknown external input before trusting it.

---

## [Framework, e.g. Next.js / Express / Django]

- [Convention, e.g. "Default to Server Components; add client directives only when interactivity requires it."]
- [Convention, e.g. "Keep route handlers focused on a single responsibility."]
- Keep database access on the server / in the appropriate layer.
- Handle loading, error, and empty states explicitly where applicable.

---

## Components / UI Code

- Each component/module has one clear responsibility.
- Prefer composition over large conditional components.
- Keep reusable UI independent from business-specific logic.
- Keep props/interfaces explicit and typed.
- Do not duplicate the same structure across multiple screens when a reusable piece would work.

---

## Styling

- Use the tokens defined in `ui-context.md` — no hardcoded colors when a token represents the same value.
- Reuse existing UI patterns before creating a new visual pattern.
- Use existing component-library components when one already fits; don't recreate primitives from scratch without a specific reason.

---

## API / Server Routes

- Validate and parse input before executing application logic.
- Enforce authentication before accessing protected resources.
- Enforce ownership before reading or mutating user-owned resources.
- Keep handlers thin — complex logic lives in reusable server-side modules.
- Return consistent, predictable response shapes.
- Do not expose internal errors, stack traces, or sensitive data to users.
- Never trust an ID supplied by the client without verifying ownership.

---

## Authentication and Authorization

- [Auth provider] is the authentication provider.
- Authentication determines who the user is; authorization determines what they can access — never treat one as the other.
- Every protected resource must be checked against the authenticated user's ownership, on the server.
- Client-side visibility checks are not security boundaries.

---

## Validation

- Treat all external input as untrusted.
- Validate at system boundaries, before business logic runs.
- Server-side validation is required for mutations — client-side validation alone is not enough.

---

## Business Logic

- Business rules live in server-side application modules, not UI components.
- Do not duplicate lifecycle/status rules across multiple routes.
- Status transitions must follow the rules defined in `architecture.md` — do not restate the values here.
- Make invalid states difficult to create.

---

## Database

- All database access goes through [ORM/client, e.g. Prisma].
- Always verify ownership before returning or mutating user-owned records.
- Use relationships instead of manually duplicating relationship data.
- Prefer transactions when multiple related operations must succeed or fail together.
- Keep schema changes intentional and documented.

---

## Data Integrity

- Every [entity] must belong to an authenticated user.
- Every [child entity] must belong to a valid [parent entity].
- Status values must use the domain status model defined in `architecture.md`.
- Mutations must not allow users to modify another user's resources.

---

## Error Handling

- Handle expected errors explicitly — do not silently swallow failures.
- Do not expose sensitive implementation details in user-facing errors.
- Distinguish between validation errors, authorization errors, missing resources, and unexpected server failures.

---

## Loading and Empty States

- Important asynchronous operations provide loading feedback.
- Pages/components handle empty datasets intentionally, not as an afterthought.
- Do not assume queries always return data.

---

## File Organization

Mirror the structure defined in `architecture.md` → System Boundaries. Name
files after the responsibility they contain, not the technology they use.

---

## Naming

- Use descriptive names that communicate responsibility.
- Use consistent casing conventions per language/framework norms.
- Use domain terminology consistently (e.g. `clientRequest`, not `data` or `item`).
- Avoid abbreviations unless widely understood within the project.

---

## Dependencies

- Do not add a dependency unless the feature genuinely requires it.
- Before adding one, verify the project doesn't already contain an equivalent solution.
- Remove dependencies that are no longer used.
- Do not introduce infrastructure without updating `architecture.md`.

---

## Security

- Never trust client-provided ownership information.
- Never expose secrets in client-side code.
- Never commit environment secrets to the repository.
- Return only the data required by the client.

---

## Documentation and Context

When an implementation changes:

- Architecture boundaries → update `architecture.md`.
- Workflow rules → update `ai-workflow-rules.md`.
- Coding conventions → update this file.
- UI rules → update `ui-context.md`.
- Current implementation state → update `memory.md`.

Context files are part of the development system and must stay synchronized
with the actual project.

---

## Before Marking a Feature Complete

1. Verify the implementation matches the intended feature.
2. Verify architecture boundaries are respected.
3. Verify authentication and authorization.
4. Verify external input validation.
5. Verify loading, empty, and error states.
6. Verify no obvious console/server errors remain.
7. Run the project's required checks/build.
8. Update `memory.md`.
