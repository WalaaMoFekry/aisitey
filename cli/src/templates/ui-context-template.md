# UI Context

## Theme

Describe the overall visual direction in a sentence or two — the feeling
the product should have (e.g. "clean, calm, structured, premium" or
"playful, bold, high-contrast"). Be specific enough that an agent could
tell if a generated screen matches or doesn't.

[What to avoid — e.g. "Avoid excessive gradients, glowing effects, neon colors."]

All colors are defined as CSS custom properties in `[globals.css or equivalent]`.
Components must use these tokens — no arbitrary colors or hardcoded hex values.

## Colors

| Role | CSS Variable | Hex / Value |
| --- | --- | --- |
| Page background | `--bg-base` | `#______` |
| Surface | `--bg-surface` | `#______` |
| Default border | `--border-default` | `#______` |
| Primary text | `--text-primary` | `#______` |
| Secondary text | `--text-secondary` | `#______` |
| Brand primary | `--accent-primary` | `#______` |
| Error | `--state-error` | `#______` |
| Success | `--state-success` | `#______` |
| Warning | `--state-warning` | `#______` |

<!-- Add/remove rows to match the real design tokens. List the Tailwind
utility names too if they don't map 1:1 to the CSS variable names, so the
agent knows which class to actually type. -->

## Typography

| Role | Font | CSS Variable |
| --- | --- | --- |
| UI text | [font] | `--font-______` |
| Code/mono | [font] | `--font-______` |

[Note the intended feel — e.g. "clean and editorial" vs "technical and dense" — and any rule about where hierarchy comes from, e.g. "use size/weight/spacing, not color, for hierarchy."]

## Border Radius

| Context | Class |
| --- | --- |
| Inline / small UI | `[value]` |
| Buttons / inputs | `[value]` |
| Cards / panels | `[value]` |
| Large dialogs | `[value]` |

Use the defined scale consistently — do not mix arbitrary radius values.

## Component Library

[e.g. shadcn/ui on top of Tailwind.]

Components live in: `[path]`

[State the reuse rule, e.g. "Use the CLI when an existing component is available. Do not recreate standard primitives from scratch."]

## Layout Patterns

Describe the recurring structural patterns of the app — not every screen,
just the shell and the repeating pieces.

### Application Shell

- [e.g. Left sidebar for navigation]
- [e.g. Main content area]
- [e.g. Optional right-side panel for X]

### [Recurring Pattern, e.g. Cards]

- [rule]
- [rule]

### [Recurring Pattern, e.g. Modals/Dialogs]

- [rule]
- [rule]

<!-- Add one subsection per recurring UI pattern the product actually has.
Don't describe every individual screen here — that belongs to the feature
itself when it's built, not to this file. -->

## Buttons and Actions

- Primary actions use [rule].
- Secondary actions use [rule].
- [Any reserved-color rule, e.g. "Highlight color is reserved for important CTAs only."]

Do not use multiple competing accent colors in the same action group.

## Icons

[Library, e.g. Lucide React.] [Style, e.g. stroke-based only.]

| Context | Size |
| --- | --- |
| Inline | `[value]` |
| Buttons | `[value]` |
| Feature / empty state | `[value]` |

## Motion

Use animation for:

- [e.g. Panel transitions]
- [e.g. Loading and progress feedback]

Avoid:

- [e.g. Constant looping animations]
- [e.g. Decorative motion without meaning]

## Accessibility

- Maintain readable contrast between text and backgrounds.
- Never communicate status through color alone.
- Interactive elements must have visible focus states.
- Icon-only controls require accessible labels.
