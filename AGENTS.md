# AGENTS.md

## 1. Mission

This repository defines a reusable multi-agent research workflow for strategic technology intelligence.

The first domain is Samsung's response strategy for Scroll compressors in the US residential unitary HVAC market, with focus on efficiency, inverter operation, noise, refrigerants, and operating environment.

Agents working in this repository should preserve the workflow as a reusable template, not as a one-off report.

## 2. Default Company Context

- Company: Samsung.
- Market: United States residential unitary HVAC.
- Product focus: residential ducted split AC, residential ducted heat pump, and cold climate heat pump.
- Compressor focus: Scroll compressor.
- Output language: Korean for reports, English allowed for source titles and technical terms.

## 3. Research Scope

Default competitor set:

- LG.
- GMCC.
- Copeland.
- Donper.

Default market context set:

- Carrier.
- Trane.
- Lennox.
- Daikin / Goodman.
- Rheem.
- Johnson Controls / York.
- Midea.

Default technology axes:

- Efficiency.
- Inverter / variable speed.
- Noise / NVH.
- Refrigerant.
- Operating environment.
- Cold climate reliability.

Default time window:

- Primary research: 2021 to present.
- Patent trend research: 2016 to present when useful.

## 4. Required Agent Roles

Use these eight sub agents unless the user changes the scope:

1. Market & OEM Agent.
2. Core Competitor Agent.
3. Efficiency Agent.
4. Inverter & Control Agent.
5. Noise & NVH Agent.
6. Refrigerant & Regulation Agent.
7. Cold Climate & Reliability Agent.
8. Patent & Research Agent.

Use a Synthesis / Strategy Layer after the sub agents complete their briefs.

## 5. Tooling Rules

Use Tavily MCP for:

- Broad discovery.
- Recent source discovery.
- Official domain searches.
- Competitor and regulatory searches.

Use Firecrawl MCP for:

- Extracting specific URLs discovered through search.
- Parsing long pages or documents.
- Structured extraction from known pages.

Use web search for:

- Verification.
- Recent factual checks.
- Official source confirmation.

Use Notion or Slack only when the user explicitly asks to include internal knowledge.

## 6. Evidence Standards

Important claims must be traceable to a source or clearly marked as inference or assumption.

Classify sources as:

- Primary official source.
- Regulatory or standards source.
- Patent source.
- Technical publication.
- Industry news.
- Secondary analysis.
- Marketing claim.

Confidence levels:

- High: supported by official, regulatory, patent, or multiple independent sources.
- Medium: supported by credible but incomplete evidence.
- Low: supported by weak, indirect, marketing-heavy, or single-source evidence.

## 7. Agent Output Format

Each sub agent should produce a deep research brief, not a short summary.
The brief must preserve technical detail, source nuance, and strategic implications
so the synthesis layer can build a decision-ready report without redoing the
research.

Minimum depth requirements:

- At least 12 detailed findings.
- At least 12 source-backed evidence entries.
- At least 10 search queries or source-discovery paths.
- At least 1 comparison table with 8 or more rows.
- At least 6 Samsung implications.
- At least 5 gap-analysis items and 5 catch-up actions.
- Clear separation of facts, inferences, assumptions, and open questions.
- Explicit confidence rating for major claims.

Each sub agent should include:

- Executive mini-summary.
- Research questions and scope.
- Detailed findings with why-it-matters notes.
- Search log and source coverage map.
- Competitor, technology, regulatory, or patent comparison table.
- Technology mechanism or market logic explanation.
- Evidence register with source type and confidence.
- Samsung implications.
- Gap analysis.
- Catch-up actions.
- Differentiation options.
- Risks and uncertainties.
- Open questions.
- Recommended follow-up searches.
- Appendix notes for R&D or strategy follow-up.

## 8. Synthesis Output Format

The synthesis layer should produce:

- Executive summary.
- Full summary.
- Market and OEM context.
- Competitor positioning.
- Technology trend analysis.
- Samsung positioning comparison.
- Gap analysis.
- Catch-up strategy.
- Differentiation strategy.
- 12 to 36 month roadmap.
- Operating model.
- Monitoring plan.
- Appendix and source register.

The synthesis layer must retain agent-level nuance in appendices. Do not collapse
the eight briefs into a generic executive summary only.

Use two synthesis levels:

- Executive Summary: concise, decision-oriented, and focused on top conclusions, top gaps, recommended actions, scorecard highlights, and decision risks.
- Full Summary: long-form synthesis that preserves agent-level findings, source traceability, competitor-by-competitor positioning, technology mechanisms, gap root causes, and appendices.

## 9. Strategy Scorecard

Score each strategic option from 1 to 5:

- Technical feasibility.
- Market response speed.
- Differentiation potential.
- Regulatory / refrigerant fit.
- Cost and supply chain risk.
- Samsung execution difficulty.

Explain tradeoffs. Do not hide uncertainty.

## 10. Writing Rules

- Write reports in Korean by default.
- Keep executive summaries concise and decision-oriented.
- Keep technical appendices detailed enough for R&D follow-up.
- Separate facts, inferences, assumptions, and open questions.
- Preserve source names, model names, standards, and patent identifiers exactly.

## 11. Repository Editing Rules

- Keep domain definitions, requirements, scenarios, implementation direction, and agent instructions separated.
- Add new files instead of mixing unrelated concerns into one document.
- When adding automation later, keep the Markdown workflow usable without code.
- Do not remove existing user-created research outputs unless explicitly asked.

## 12. Frontend App Rules

This repository includes a React/Tailwind frontend workbench for entering a research topic and generating a multi-agent workflow preview.

Frontend stack:

- React.
- TypeScript.
- Vite.
- Tailwind CSS.
- lucide-react.

Design source:

- Use `design.md` as the canonical design direction.
- Use `docs/08-frontend-design-and-app.md` for frontend product requirements.

Frontend design rules:

- Keep the warm cream canvas, coral primary actions, serif display headlines, and dark output surfaces.
- Do not turn the app into a marketing landing page; the first screen should be the usable workflow.
- Use real input controls and generated output previews.
- Use lucide-react icons for interface actions where possible.
- Keep Tailwind design tokens aligned with `design.md`.
- Preserve responsive behavior across mobile, tablet, and desktop.
- Prevent long generated output from squeezing neighboring panels by preserving `min-w-0`, `minmax(0, ...)`, and scrollable preview containers.
- Keep Korean headings readable in constrained workbench layouts; avoid hero-scale type inside narrow panels.

## 13. Workflow Asset Rules

The reusable workflow assets live under:

- `workflows/us-unitary-scroll-compressor/topic.yaml`
- `workflows/us-unitary-scroll-compressor/workflow.yaml`
- `workflows/us-unitary-scroll-compressor/agents/*.md`
- `schemas/agent-output.schema.json`

When changing agent names, agent responsibilities, deliverables, evaluation criteria, or monitoring cadence, keep these files synchronized with:

- `src/App.tsx`
- `docs/04-implementation-direction.md`
- `docs/08-frontend-design-and-app.md`

The frontend is currently a deterministic client-side preview. Do not imply that it executes Tavily or Firecrawl until a backend MCP runner is implemented.

The frontend preview should show the workflow in deep research mode. It should
make clear that the required agent output is a deep brief with detailed findings,
comparison tables, evidence registers, gap analysis, and action recommendations.

## 14. App Usage And Obsidian Handoff Rules

The app should be treated as an operational research workbench.

Current local app URL:

- `http://127.0.0.1:5173/`

Usage guide:

- `docs/09-app-usage-guide.md`

When explaining the app to users, describe this flow:

1. Enter or adjust research topic and scope.
2. Adjust competitors, technology axes, source depth, time window, and monitoring cadence.
3. Generate the orchestration preview.
4. Review the eight sub-agent routing.
5. Download Markdown if needed.
6. Run MCP-backed research through Codex or a future runner.
7. Store final outputs into Obsidian.

Current Obsidian knowledge DB target:

- `F:\ai-obsidian\지식창고\03_지식\HVAC\미국_Unitary_Scroll_압축기_대응전략`

Do not claim the browser app writes to Obsidian directly. At the current stage, Codex performs the Obsidian file creation after research execution.

## 15. Git And Release Rules

GitHub target repository:

- `https://github.com/jh104kim/comp-market-survey.git`

Before committing or pushing:

- Run `npm run build`.
- Keep `node_modules/`, `dist/`, local environment files, and external Obsidian vault outputs out of Git.
- Commit workflow assets, schemas, docs, app source, package manifests, and configuration files.
- Keep release notes and repository handoff guidance in `docs/10-repository-release.md`.

The first commit should represent the reusable workflow template and frontend workbench, not a one-off research output.
