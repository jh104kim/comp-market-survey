# Implementation Direction

## 1. Objective

Build a local, reusable Markdown-based workflow that defines how to orchestrate MCP-powered research agents for strategic technology research.

The first implementation should focus on documentation, prompts, schemas, and repeatable operating rules. Code automation can be added later once the workflow is proven.

## 2. Recommended Repository Structure

```text
docs/
  01-domain-definition.md
  02-prd.md
  03-scenarios.md
  04-implementation-direction.md
  05-agent-output-template.md
  06-report-template.md
  07-monitoring-template.md
AGENTS.md
```

Future automation structure:

```text
workflows/
  us-unitary-scroll-compressor/
    workflow.yaml
    topic.yaml
    agents/
    outputs/
schemas/
  agent-output.schema.json
  source.schema.json
  scorecard.schema.json
scripts/
  run-research-workflow.*
```

## 3. Implementation Phases

### Phase 1: Documentation Foundation

Create the core documentation:

- Domain definition.
- PRD.
- Scenarios.
- Implementation direction.
- Integrated AGENTS.md.
- Agent output template.
- Report template.
- Monitoring template.

Phase 1 is complete when another agent or human can understand the workflow without additional explanation.

### Phase 2: Prompt And Template Hardening

Create reusable prompts for:

- Orchestrator.
- Each of the eight sub agents.
- Synthesis layer.
- Evidence quality reviewer.
- Monitoring update generator.

Each prompt should define:

- Mission.
- Inputs.
- Search instructions.
- Preferred sources.
- Output format.
- Confidence rules.
- Escalation rules.

### Phase 3: Manual MCP Execution

Run the first research cycle manually using available MCP tools:

- Tavily MCP for discovery.
- Firecrawl MCP for extraction.
- Web search for verification when needed.

Outputs should be stored under a date-based run folder.

### Phase 4: Semi-Automated Workflow

Introduce structured inputs and outputs:

- `topic.yaml`
- `workflow.yaml`
- `agent-output.schema.json`
- `source.schema.json`
- `scorecard.schema.json`

The goal is to make each run comparable across topics.

### Phase 5: Monitoring Automation

Add recurring monitoring:

- Monthly or quarterly cadence.
- Change-only report.
- Baseline comparison.
- Source watchlist.
- Regulatory and patent watchlist.

This can later be implemented through an automation layer once the report format is stable.

## 4. MCP Usage Pattern

### Tavily MCP

Use Tavily for:

- Broad search discovery.
- Recent updates.
- Domain-restricted searches.
- Competitor and regulatory queries.
- Finding candidate source URLs for extraction.

Recommended usage:

- Use focused queries.
- Restrict domains when searching official sources.
- Use recent time windows where appropriate.
- Store search queries and useful URLs in the source register.

### Firecrawl MCP

Use Firecrawl for:

- Scraping specific product pages.
- Extracting official pages.
- Pulling structured information from long pages.
- Parsing documents when the URL or file is known.

Recommended usage:

- Scrape known URLs after Tavily discovery.
- Use JSON extraction when specific fields are needed.
- Use Markdown extraction for full page understanding.

### Web Search

Use web search for:

- Secondary verification.
- Official source confirmation.
- Recent facts that may have changed.
- Cross-checking dates, standards, and releases.

## 5. Agent Execution Model

The workflow uses eight research agents plus one synthesis layer.

```text
Topic
  -> Orchestrator
    -> Market & OEM Agent
    -> Core Competitor Agent
    -> Efficiency Agent
    -> Inverter & Control Agent
    -> Noise & NVH Agent
    -> Refrigerant & Regulation Agent
    -> Cold Climate & Reliability Agent
    -> Patent & Research Agent
  -> Synthesis / Strategy Layer
  -> Reports
```

Agents should be run in parallel when possible. The synthesis layer should run only after all agent briefs are available or after the orchestrator explicitly marks missing sections as unavailable.

### Deep Research Mode

The default execution mode is deep research, not summary generation.

Each sub agent must produce enough detail for a strategy team or R&D reviewer to
inspect the reasoning path behind the synthesis. The orchestrator should reject
or flag briefs that only contain high-level observations.

Minimum acceptance criteria for each agent brief:

- 12 or more detailed findings.
- 12 or more evidence entries.
- 10 or more search queries or source-discovery paths.
- A comparison table with 8 or more rows.
- A technology, market, regulatory, or patent mechanism explanation.
- 6 or more Samsung implications.
- Gap analysis, catch-up actions, and differentiation options.
- Fact, inference, assumption, and open-question separation.

If public sources are weak, the agent should still document the attempted search
paths, low-confidence areas, and follow-up searches instead of filling gaps with
unsupported conclusions.

## 6. Evidence Rules

Agents must classify each important source:

- Primary official source.
- Regulatory or standards source.
- Patent source.
- Technical publication.
- Industry news.
- Secondary analysis.
- Marketing claim.

Claims should be marked:

- Fact: directly supported by a source.
- Inference: reasoned conclusion from evidence.
- Assumption: useful but not confirmed.
- Open question: requires further research.

## 7. Strategy Scoring

Each recommended action should be scored from 1 to 5:

- Technical feasibility.
- Market response speed.
- Differentiation potential.
- Regulatory / refrigerant fit.
- Cost and supply chain risk.
- Samsung execution difficulty.

The synthesis layer should explain why high-priority items scored well and why lower-priority items were deferred.

## 8. Reporting Direction

The detailed report should be written in Korean by default. Source titles and technical terms may remain in English when that improves precision.

The executive slide outline should be decision-oriented:

- One message per slide.
- Evidence kept short.
- Technical appendix referenced rather than overloaded into the main slides.

## 9. Monitoring Direction

Future monitoring should track:

- Competitor product launches.
- OEM refrigerant transition announcements.
- DOE, EPA, ENERGY STAR, AHRI updates.
- New A2L-related standards guidance.
- New patents from core competitors.
- New cold climate heat pump claims.
- New inverter Scroll compressor claims.
- Major reliability or safety incidents.

Monitoring outputs should include:

- What changed.
- Why it matters.
- Impact on Samsung positioning.
- Recommended action.
- Confidence level.

## 10. Immediate Next Build Items

Recommended next files:

- `docs/05-agent-output-template.md`
- `docs/06-report-template.md`
- `docs/07-monitoring-template.md`
- `docs/08-frontend-design-and-app.md`
- `docs/09-app-usage-guide.md`
- `design.md`
- `workflows/us-unitary-scroll-compressor/workflow.yaml`
- `workflows/us-unitary-scroll-compressor/topic.yaml`
- `workflows/us-unitary-scroll-compressor/agents/*.md`

These workflow files have now been added as the first executable research asset layer. They should be treated as the canonical local source for the current app preview.

## 11. Frontend Implementation Direction

The repository now includes a React/Tailwind frontend app that turns the workflow into an interactive workbench.

Frontend stack:

- React.
- TypeScript.
- Vite.
- Tailwind CSS.
- lucide-react.

Frontend goals:

- Let users enter a topic, company context, market scope, competitors, technology axes, source depth, time window, and monitoring cadence.
- Generate a deterministic orchestration preview.
- Show the eight sub agents in a reusable card grid.
- Show report and monitoring architecture.
- Preserve the warm editorial design system defined in `design.md`.

The current app is client-side and template-based. Future implementation can connect the same inputs to a backend MCP runner that executes Tavily discovery, Firecrawl extraction, synthesis, and Markdown export.

## 12. Local Workflow Asset Layer

The first workflow asset layer lives under:

```text
workflows/us-unitary-scroll-compressor/
  topic.yaml
  workflow.yaml
  agents/
    01-market-oem.md
    02-core-competitors.md
    03-efficiency.md
    04-inverter-control.md
    05-noise-nvh.md
    06-refrigerant-regulation.md
    07-cold-climate-reliability.md
    08-patent-research.md
```

The shared agent output schema lives at:

```text
schemas/agent-output.schema.json
```

The frontend should stay aligned with this workflow asset layer. If agent names, deliverables, or evaluation criteria change in the YAML files, update the app preview and `AGENTS.md` in the same change.

The current workflow asset layer uses deep brief requirements. The app preview
should therefore present "Deep brief" as the default mode and list the required
sections rather than implying a lightweight summary output.

The synthesis output should be split into two levels:

- Executive Summary for fast decision-making.
- Full Summary for deep review of agent findings, evidence, assumptions, gaps, and technical mechanisms.

## 13. App Usage And Obsidian Handoff

The frontend should present the workflow as an operational workbench, not a static landing page.

The intended user flow is:

1. Open `http://127.0.0.1:5173/`.
2. Edit the research setup and routing inputs.
3. Generate or refresh the orchestration preview.
4. Download the Markdown preview when useful.
5. Run MCP-backed research through Codex or a future local runner.
6. Store synthesized outputs in the Obsidian vault.

The current Obsidian target for this topic is:

```text
F:\ai-obsidian\지식창고\03_지식\HVAC\미국_Unitary_Scroll_압축기_대응전략
```

Main Obsidian entry point:

```text
00_DB.md
```

## 14. GitHub Release Direction

The project should be versioned as a reusable workflow and frontend workbench.

GitHub target:

```text
https://github.com/jh104kim/comp-market-survey.git
```

Commit scope should include documentation, workflow assets, schemas, app source,
and project configuration. Do not commit generated dependency folders,
production build artifacts, local environment files, or external Obsidian vault
outputs.

Release details are tracked in:

```text
docs/10-repository-release.md
```
