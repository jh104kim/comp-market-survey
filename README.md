# Comp Market Survey

Reusable multi-agent research workflow and React/Tailwind workbench for strategic compressor market intelligence.

The first configured domain is Samsung's response strategy for Scroll compressors in the US residential unitary HVAC market, with focus on efficiency, inverter operation, noise/NVH, refrigerants, operating environment, and cold-climate reliability.

## What This Repository Contains

- Deep-research orchestration assets under `workflows/us-unitary-scroll-compressor/`.
- Eight specialized sub-agent prompts for market, competitor, technology, regulation, reliability, and patent research.
- JSON schema for deep agent outputs under `schemas/agent-output.schema.json`.
- Documentation under `docs/` for domain definition, PRD, scenarios, implementation direction, report templates, and app usage.
- React + TypeScript + Vite + Tailwind frontend workbench under `src/`.

## Research Output Model

The workflow is designed for deep research, not lightweight summaries.

Each sub-agent brief requires:

- 12+ detailed findings.
- 12+ evidence entries.
- 10+ search queries or source-discovery paths.
- 8+ comparison-table rows.
- Samsung implications, gap analysis, catch-up actions, differentiation options, and uncertainty tracking.

The synthesis layer creates two levels:

- `Executive Summary`: concise decision layer.
- `Full Summary`: deep evidence and reasoning layer.

## Local Development

```powershell
npm install
npm run dev -- --host 127.0.0.1 --port 5173
```

Build check:

```powershell
npm run build
```

## Important Limitations

The current frontend is a deterministic client-side preview. It does not directly execute Tavily, Firecrawl, or Obsidian export. MCP-backed research execution is currently performed through Codex or a future local runner.

## Canonical Instructions

See `AGENTS.md` for repository-wide agent rules and operating assumptions.

