# Repository Release And GitHub Handoff

## 1. Repository

GitHub target:

```text
https://github.com/jh104kim/comp-market-survey.git
```

This repository is the canonical working copy for the reusable compressor market survey workflow and frontend workbench.

## 2. Initial Release Scope

The initial commit should include:

- Domain and product documentation under `docs/`.
- Deep research agent template and synthesis report template.
- `AGENTS.md` repository operating rules.
- `design.md` frontend design direction.
- `workflows/us-unitary-scroll-compressor/` orchestration assets.
- `schemas/agent-output.schema.json`.
- React/Tailwind/Vite app source under `src/`.
- Package manifests and TypeScript/Tailwind/Vite configuration.

The initial commit should exclude:

- `node_modules/`.
- `dist/`.
- Local environment files.
- External Obsidian vault outputs under `F:\ai-obsidian`.

## 3. Release Verification

Run before committing:

```powershell
npm run build
```

Expected result:

- TypeScript check passes.
- Vite production build completes.

## 4. Current App Role

The frontend app is an operational workbench for aligning topic, scope, sub-agent routing, deep brief requirements, and exportable orchestration preview.

It does not yet:

- Execute Tavily directly.
- Execute Firecrawl directly.
- Write directly to Obsidian.
- Persist research runs.

Those capabilities should be added through a backend or local MCP runner in a later release.

## 5. Deep Research Contract

The workflow defaults to deep research mode.

Every sub-agent should produce a detailed evidence brief with:

- Search log.
- Source coverage map.
- 12+ detailed findings.
- 12+ evidence entries.
- Comparison tables.
- Technology or market mechanism explanation.
- Samsung implications.
- Gap analysis.
- Catch-up actions.
- Differentiation options.
- Contradictory evidence and weak signals.
- Follow-up searches.

Synthesis must produce:

- Executive Summary.
- Full Summary.
- Source register.
- Monitoring plan.

