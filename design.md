# Warm Editorial AI Research App Design

## Overview

This design system translates the provided Claude.com-inspired editorial interface language into a reusable product design direction for the Samsung HVAC Scroll Compressor Research Orchestrator.

The base atmosphere is a tinted cream canvas (`#faf9f5`), with warm ink text (`#141413`) and coral primary actions (`#cc785c`). The visual voice should feel like a considered technical publication rather than a generic SaaS dashboard.

The app should avoid cool gray-white, saturated blue, cyan, and purple-led AI aesthetics. The design rhythm comes from alternating three surfaces:

1. Cream canvas: default application floor.
2. Light cream cards: input panels, feature summaries, evidence cards.
3. Dark navy product surfaces: generated output previews, agent console panels, synthesis summaries.

## Brand Tokens

### Colors

#### Brand And Accent

- `primary`: `#cc785c`
- `primary-active`: `#a9583e`
- `primary-disabled`: `#e6dfd8`
- `accent-teal`: `#5db8a6`
- `accent-amber`: `#e8a55a`

#### Surface

- `canvas`: `#faf9f5`
- `surface-soft`: `#f5f0e8`
- `surface-card`: `#efe9de`
- `surface-cream-strong`: `#e8e0d2`
- `surface-dark`: `#181715`
- `surface-dark-elevated`: `#252320`
- `surface-dark-soft`: `#1f1e1b`
- `hairline`: `#e6dfd8`
- `hairline-soft`: `#ebe6df`

#### Text

- `ink`: `#141413`
- `body-strong`: `#252523`
- `body`: `#3d3d3a`
- `muted`: `#6c6a64`
- `muted-soft`: `#8e8b82`
- `on-primary`: `#ffffff`
- `on-dark`: `#faf9f5`
- `on-dark-soft`: `#a09d96`

#### Semantic

- `success`: `#5db872`
- `warning`: `#d4a017`
- `error`: `#c64545`

## Typography

### Font Strategy

The original reference uses licensed display and body typefaces. This implementation uses open and commonly available substitutes:

- Display: `Cormorant Garamond`, falling back to `EB Garamond`, `Garamond`, `"Times New Roman"`, serif.
- Body: `Inter`, falling back to `-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, Roboto, sans-serif.
- Code: `JetBrains Mono`, falling back to `"Fira Code"`, Consolas, monospace.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
| --- | --- | --- | --- | --- | --- |
| `display-xl` | 64px | 400 | 1.05 | -1.5px | Main app headline |
| `display-lg` | 48px | 400 | 1.1 | -1px | Section heads |
| `display-md` | 36px | 400 | 1.15 | -0.5px | Output and report heads |
| `display-sm` | 28px | 400 | 1.2 | -0.3px | Panel heads |
| `title-lg` | 22px | 500 | 1.3 | 0 | Large card titles |
| `title-md` | 18px | 500 | 1.4 | 0 | Feature card titles |
| `title-sm` | 16px | 500 | 1.4 | 0 | Field and list labels |
| `body-md` | 16px | 400 | 1.55 | 0 | Default body |
| `body-sm` | 14px | 400 | 1.55 | 0 | Captions and helper text |
| `caption` | 13px | 500 | 1.4 | 0 | Badges |
| `caption-uppercase` | 12px | 500 | 1.4 | 1.5px | Status tags |
| `code` | 14px | 400 | 1.6 | 0 | Code and report preview |
| `button` | 14px | 500 | 1.0 | 0 | Buttons |
| `nav-link` | 14px | 500 | 1.4 | 0 | Navigation |

Display text should use regular weight with negative letter spacing. Body text should stay readable, calm, and human.

## Layout

### Spacing

- Base unit: 4px.
- `xxs`: 4px
- `xs`: 8px
- `sm`: 12px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `xxl`: 48px
- `section`: 96px

### Grid

- Max content width: 1200px.
- Desktop: 12-column editorial grid.
- Main app shell: input panel and output panel in a 5/7 split.
- Tablet: two-column sections collapse selectively.
- Mobile: single column, with output below input.

### Whitespace

Use generous whitespace. Major sections should breathe. Inputs should feel like a refined working surface, not a dense enterprise form.

## Elevation And Depth

Depth comes from color blocks rather than shadows.

| Level | Treatment | Use |
| --- | --- | --- |
| Flat | No shadow, no border | Body sections, top nav |
| Soft hairline | 1px `hairline` border | Inputs, cards |
| Cream card | `surface-card` background | Input and agent cards |
| Dark card | `surface-dark` background | Generated output and console |
| Subtle shadow | `0 1px 3px rgba(20,20,19,0.08)` | Rare hover or active emphasis |

## Shapes

| Token | Value | Use |
| --- | --- | --- |
| `xs` | 4px | Tiny accents |
| `sm` | 6px | Small inline controls |
| `md` | 8px | Buttons and inputs |
| `lg` | 12px | Cards and panels |
| `xl` | 16px | Hero and large output surfaces |
| `pill` | 9999px | Badges |
| `full` | 9999px / 50% | Icon buttons |

## Components

### Top Navigation

Cream nav bar with a compact radial mark, product name, lightweight navigation, and a coral primary action. Height is 64px on desktop. On mobile, it collapses to a simpler single-row header.

### Buttons

- Primary button: coral background, white text, 40px min height, 8px radius.
- Secondary button: cream background, hairline border, ink text.
- Dark secondary button: dark elevated background and cream text.
- Icon buttons: circular or compact square buttons using lucide icons.

### Inputs

Inputs use cream backgrounds, warm ink, 8px radius, and a hairline border. Focus state uses a coral border and a soft coral ring.

### Cards

- Feature cards: light cream card surface, 12px radius, 32px padding.
- Agent cards: cream cards with badges and short role summaries.
- Output console: dark surface with monospace text and structured report preview.
- Coral callout: coral surface for major action or status summary.

### Tags

- Pill tags use `surface-card` background and `ink` text.
- Coral tags mark generated or priority states.
- Teal and amber are used sparingly for status and category markers.

## Application-Specific UI

### Primary Workflow

The app should let a user enter:

- Research topic.
- Company context.
- Market scope.
- Core competitors.
- Technology axes.
- Source scope.
- Time window.
- Deliverable type.

The app should generate:

- Orchestrator summary.
- Eight sub-agent roles.
- Search plan.
- Output report outline.
- Strategy scorecard skeleton.
- Monitoring plan.

### Screen Structure

1. Header: product identity and current workflow mode.
2. Hero/workbench band: left input controls, right dark generated output preview.
3. Agent grid: eight agent cards.
4. Report architecture: detailed report and slide outline sections.
5. Monitoring band: future monthly or quarterly tracking plan.

## Do's

- Anchor every screen on the warm cream canvas.
- Use serif display type for headlines.
- Use coral only for primary actions and major callouts.
- Use dark surfaces for generated output, console-like previews, and synthesis results.
- Keep cards purposeful and information-rich.
- Preserve a calm editorial rhythm.
- Use real controls for user input rather than a static landing page.

## Don'ts

- Do not use pure white as the main canvas.
- Do not use cool gray as the dominant surface.
- Do not use blue or cyan as the main brand accent.
- Do not make display headlines bold.
- Do not overuse coral on every small visual accent.
- Do not stack cards inside cards.
- Do not make a marketing-only landing page.

## Responsive Behavior

| Breakpoint | Behavior |
| --- | --- |
| Mobile `<768px` | Single column, compact headline, output below input, agent cards 1-up |
| Tablet `768-1024px` | Input and output can stay two-column when space allows, agent cards 2-up |
| Desktop `1024-1440px` | Full 5/7 workbench split, agent cards 4-up |
| Wide `>1440px` | Max content width remains capped at 1200px |

Touch targets should be at least 40px. Code and output previews should allow horizontal scroll on small screens rather than wrapping in unreadable ways.

## Implementation Notes

- Use Tailwind tokens mapped to the design colors.
- Use `lucide-react` for action and status icons.
- Use CSS variables for core tokens.
- Use deterministic client-side generation for the first version.
- Keep generated text export-friendly so it can later be saved as Markdown.

## Known Gaps

- Licensed fonts from the reference system are not included.
- The app does not yet call Tavily or Firecrawl directly from the browser.
- The generated output is deterministic and template-based until a backend or MCP runner is added.
- Animation is intentionally minimal in the first version.

