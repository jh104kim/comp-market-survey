# App Usage Guide

## 1. Purpose

This guide explains how to use the React/Tailwind workbench at:

```text
http://127.0.0.1:5173/
```

The app is a research orchestration workbench. It does not yet execute Tavily or Firecrawl directly in the browser. Its job is to align the topic, scope, agents, outputs, and handoff structure before running MCP-backed research.

## 2. What The Page Does

The page helps a user:

- Enter a research topic.
- Define company, market, competitor, technology, source, time, and monitoring scope.
- Preview the orchestrator output.
- Confirm the eight sub-agent structure.
- Confirm that deep brief mode is enabled.
- Confirm executive summary and full summary deliverables.
- Download a Markdown orchestration preview.
- See the local workflow assets that future MCP runners should use.

## 3. Main Areas

### Workflow Control Sidebar

The left sidebar is the workflow control surface.

Use it to:

- Check input readiness.
- Jump to Research setup, How to use, Sub agents, Report structure, and Local assets.
- Confirm MCP readiness categories.
- See agent and technology-axis counts.

### Research Setup

Use `Research frame` to define:

- Research topic.
- Company.
- Market scope.

Use `Research routing` to define:

- Competitors and market context.
- Technology axes.
- Source depth.
- Time window.
- Monitoring cadence.

### Orchestration Preview

The dark preview panel shows the generated Markdown structure:

- Orchestrator summary.
- Agent routing.
- Deep brief requirements.
- Executive summary and full summary deliverables.
- Priority search tracks.
- Competitor watchlist.
- Final deliverables.

Use `Refresh preview` after editing inputs. Use `Download Markdown` to export the current preview.

### How To Use

The in-page usage section describes the operating flow:

1. Fix topic and scope.
2. Adjust research routing.
3. Generate preview.
4. Export Markdown and proceed to MCP-backed research.

### Sub Agents

The agent section shows the eight research roles:

- Market & OEM.
- Core Competitors.
- Efficiency.
- Inverter & Control.
- Noise & NVH.
- Refrigerant & Regulation.
- Cold Climate & Reliability.
- Patent & Research.

### Report Structure

This section shows the final report architecture:

- Executive Summary.
- Market shifts.
- Competitor and OEM positioning.
- Technology trend analysis.
- Samsung positioning comparison.
- Gap analysis.
- Catch-up and differentiation strategy.
- 12-36 month roadmap.

### Local Workflow Assets

This section points to the local workflow files:

- `workflows/us-unitary-scroll-compressor/topic.yaml`
- `workflows/us-unitary-scroll-compressor/workflow.yaml`
- `workflows/us-unitary-scroll-compressor/agents/*.md`
- `schemas/agent-output.schema.json`

## 4. Recommended Operating Flow

1. Open the app.
2. Review the default Samsung US unitary Scroll topic.
3. Edit inputs if the research scope changes.
4. Click `Generate` or `Refresh preview`.
5. Review agent routing and deliverables.
6. Click `Download Markdown` when the orchestration preview is acceptable.
7. Run deep sub-agent research using Tavily/Firecrawl or Codex sub agents.
8. Save outputs into the Obsidian vault.

## 5. Obsidian Handoff

The current research run stores outputs under:

```text
F:\ai-obsidian\지식창고\03_지식\HVAC\미국_Unitary_Scroll_압축기_대응전략
```

Main entry point:

```text
00_DB.md
```

Use this folder as the knowledge DB for follow-up reports, monitoring updates, and future research runs.

The first stored run was generated before the expanded deep brief and two-level
summary requirements were added.
Treat it as a baseline summary database. A new run should be executed to
populate richer agent-level notes under the same Obsidian folder structure.

## 6. Current Limitations

- The app is client-side and deterministic.
- Tavily and Firecrawl execution is not yet wired into the frontend.
- Downloaded Markdown is an orchestration preview, not the final research report.
- Obsidian export currently happens through Codex workflow execution, not directly from the browser.

## 7. Next Build Direction

The next application milestone should add a backend or local runner that:

- Reads `workflow.yaml`.
- Dispatches Tavily discovery tasks.
- Dispatches Firecrawl extraction tasks.
- Stores agent briefs.
- Generates synthesis reports.
- Writes directly to the Obsidian vault.
