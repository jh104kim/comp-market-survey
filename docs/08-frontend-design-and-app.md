# Frontend Design And App Specification

## 1. Purpose

This document connects the research workflow documentation to the React/Tailwind frontend implementation.

The app should provide a usable workbench where a user enters a research topic and receives a structured multi-agent workflow output.

## 2. Design Source

The canonical design system is stored in:

- `design.md`

The app should follow the warm editorial interface direction:

- Cream canvas.
- Coral primary actions.
- Serif display headlines.
- Humanist sans body text.
- Dark output surfaces.
- Light cream input and agent cards.

## 3. Product Experience

The first screen is not a landing page. It is the actual workflow tool.

The user should be able to:

- Edit the research topic.
- Edit company context.
- Edit market scope.
- Edit competitor list.
- Select source depth.
- Select monitoring cadence.
- Generate a workflow preview.
- Read the resulting orchestrator plan, eight agent roles, deep brief requirements, executive summary, full summary, report outline, and monitoring plan.

## 4. Frontend Requirements

### FE-1 Input Workbench

The app must include fields for:

- Research topic.
- Company context.
- Market scope.
- Competitors.
- Technology axes.
- Source depth.
- Time window.
- Monitoring cadence.

### FE-2 Generated Output

The app must generate:

- Orchestrator summary.
- Eight deep sub-agent briefs.
- Minimum depth requirements for each brief.
- Executive summary output.
- Full summary output.
- MCP execution plan.
- Detailed report outline.
- Executive slide outline.
- Strategy scorecard fields.
- Monitoring plan.

The app should also let the user download the generated orchestration preview as Markdown for handoff into the research workflow.

### FE-6 Usage Guidance

The app must include in-page guidance explaining how to use the workbench:

- Fix topic and scope.
- Adjust research routing.
- Generate orchestration preview.
- Download Markdown.
- Run MCP-backed research.
- Archive results into Obsidian.

### FE-3 Design Tokens

The app must expose Tailwind tokens for:

- `canvas`
- `surface-soft`
- `surface-card`
- `surface-dark`
- `surface-dark-elevated`
- `primary`
- `primary-active`
- `ink`
- `body`
- `muted`
- `on-dark`

### FE-4 Responsiveness

The app must support:

- Single-column mobile layout.
- Two-column desktop workbench.
- Responsive agent grid.
- Scrollable output preview on small screens.
- Grid children must use `min-w-0` or `minmax(0, ...)` where long generated output can otherwise force neighboring panels to collapse.

### FE-5 Accessibility

The app should:

- Use labels for form controls.
- Keep visible focus states.
- Maintain readable contrast.
- Use buttons for actions.
- Avoid text overlap at common viewport sizes.

## 5. Implementation Direction

Use:

- React.
- TypeScript.
- Vite.
- Tailwind CSS.
- lucide-react icons.

Initial generation should be client-side and deterministic. Later versions can connect the generated workflow to MCP-backed execution.

The deterministic preview should make the depth contract visible. It should show
that the future MCP runner must request detailed findings, comparison tables,
evidence registers, Samsung implications, gaps, catch-up actions, and
differentiation options from every agent.

The preview should also make clear that synthesis creates two layers:

- Executive Summary: concise decision layer.
- Full Summary: deep research layer preserving evidence and reasoning.

## 6. Future Integration

Future versions can add:

- Local workflow file export.
- Markdown report export.
- Tavily MCP execution through a backend runner.
- Firecrawl extraction queue.
- Saved research runs.
- Monthly or quarterly monitoring automation.

## 7. Current Local Workflow Assets

The app is aligned with the local workflow files under:

```text
workflows/us-unitary-scroll-compressor/
```

The current frontend does not execute those files directly yet. It exposes the same structure visually and provides a Markdown download for the generated orchestration preview.

## 8. Related Usage Documentation

User-facing usage guidance is documented in:

```text
docs/09-app-usage-guide.md
```

Keep the in-page `How to use` section synchronized with that document.

## 9. Layout Guardrails

The workbench contains long generated Markdown inside a `pre` block. That output can create a large intrinsic width if the grid is not constrained.

Guardrails:

- Use `minmax(0, ...)` for output-heavy grid columns.
- Add `min-w-0` to both input and output grid children.
- Keep generated output scrollable inside the preview panel.
- Avoid oversized Korean display headings inside narrow workbench columns.
- Use Korean-capable font fallbacks such as `Noto Serif KR` and `Noto Sans KR`.
