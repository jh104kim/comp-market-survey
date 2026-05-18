# Product Requirements Document: Multi-Agent Research Workflow

## 1. Product Name

Samsung HVAC Scroll Compressor Research Orchestrator

## 2. Problem Statement

Strategic and technical research for the US residential unitary Scroll compressor market is fragmented across product catalogs, regulatory documents, patents, papers, news, and competitor announcements. Manual research is slow, inconsistent, and difficult to repeat.

The product should turn an initial topic into an orchestrated multi-agent workflow that gathers evidence, summarizes findings, compares Samsung against competitors, identifies gaps, and produces strategy-ready reports.

## 3. Goals

- Accept a research topic and company context.
- Classify the topic into market, competitor, technology, regulation, and research dimensions.
- Run eight specialized research agents with clear responsibilities.
- Use MCP search and extraction tools in a repeatable way.
- Produce evidence-backed agent briefs.
- Generate a detailed report and executive slide outline.
- Support future conversion into monthly or quarterly monitoring.

## 4. Non-Goals

- It does not replace confidential internal Samsung market research.
- It does not make final investment decisions.
- It does not guarantee complete patent freedom-to-operate analysis.
- It does not perform paid database access unless a future connector is added.
- It does not use internal Notion or Slack by default.

## 5. Primary Users

- Strategy and business planning leaders.
- R&D and advanced technology engineers.
- Product planning teams.
- Competitive intelligence analysts.
- Executive staff preparing decision materials.

## 6. Initial Use Case

Research topic:

> 미국 가정용 unitary 시장의 Scroll 압축기의 대응 방안  
> Focus areas: efficiency, inverter, noise, refrigerant, and operating environment.

Fixed scope:

- Region: United States.
- Segment: residential ducted split AC and heat pump.
- Special focus: cold climate heat pump.
- Company: Samsung.
- Period: 2021 to present, with 2016 to present patent trend support.
- Output: detailed report plus executive slide outline.

## 7. Functional Requirements

### FR-1 Topic Intake

The workflow must accept:

- Topic.
- Company context.
- Market region.
- Product segment.
- Technology axes.
- Competitor list.
- Source scope.
- Time window.
- Deliverable type.
- Evaluation criteria.

### FR-2 Orchestration

The orchestrator must:

- Normalize the topic into research questions.
- Assign tasks to eight sub agents.
- Define source priorities for each agent.
- Define expected output format.
- Detect gaps and trigger follow-up search prompts.
- Route outputs to synthesis.

### FR-3 Sub Agent Research

Each sub agent must:

- Search for relevant sources.
- Prefer official or primary sources.
- Produce deep research briefs rather than short summaries.
- Capture at least 12 detailed findings and 12 evidence entries.
- Capture at least 10 search queries or source-discovery paths.
- Include comparison tables and technology, market, regulatory, or patent logic.
- Summarize evidence with source notes.
- Separate facts, interpretation, and assumptions.
- Produce Samsung implications.
- Identify gaps, catch-up actions, and differentiation options.
- Flag low-confidence findings.

### FR-4 Synthesis

The synthesis layer must:

- Consolidate overlapping findings.
- Produce both an executive summary and a full summary.
- Compare Samsung positioning against competitors.
- Build a gap analysis.
- Score strategy options using the evaluation criteria.
- Generate catch-up and differentiation strategies.
- Create an operating roadmap.

### FR-5 Deliverables

The workflow must produce:

- Detailed report in Markdown.
- Executive summary in Markdown.
- Full summary in Markdown.
- Executive slide outline in Markdown.
- Agent evidence briefs.
- Source register.
- Monitoring update template.

### FR-6 Reusability

The workflow must be reusable for future topics by changing the topic input and selected competitor or technology axes.

### FR-7 Monitoring Readiness

The workflow must define how it can later be run monthly or quarterly to capture:

- Competitor product updates.
- Regulatory changes.
- New patents.
- New papers.
- Refrigerant transition updates.
- OEM platform shifts.

## 8. Non-Functional Requirements

- Traceability: important claims must be tied to sources.
- Repeatability: agent prompts and output schema must be stable.
- Modularity: each agent should be independently adjustable.
- Clarity: outputs must be readable by executives and engineers.
- Evidence quality: official, regulatory, patent, and technical sources should be prioritized.
- Korean reporting: final reports may be written in Korean, with source titles preserved in original language when useful.

## 9. Agent Set

The required eight agents are:

- Market & OEM Agent.
- Core Competitor Agent.
- Efficiency Agent.
- Inverter & Control Agent.
- Noise & NVH Agent.
- Refrigerant & Regulation Agent.
- Cold Climate & Reliability Agent.
- Patent & Research Agent.

## 10. Output Schema

Each agent brief should include:

- Executive mini-summary.
- Research questions and scope.
- Search log and source coverage map.
- Detailed findings.
- Comparison table.
- Technology mechanism or market logic.
- Evidence register.
- Samsung implications.
- Gap analysis.
- Catch-up actions.
- Differentiation options.
- Risks and uncertainties.
- Open questions.
- Recommended follow-up searches.
- Fact, inference, and assumption split.
- Confidence rating.

The synthesis report should include:

- Executive summary.
- Full summary.
- Market and regulatory context.
- Competitive positioning.
- Technology trend analysis.
- Samsung gap analysis.
- Catch-up strategy.
- Differentiation strategy.
- Roadmap.
- Monitoring plan.
- Appendix.

## 11. Success Metrics

- A user can change the topic and rerun the workflow without redesigning the agents.
- Each recommendation has a clear evidence trail.
- The final report separates near-term catch-up actions from longer-term differentiation bets.
- The executive summary can stand alone for decision discussion.
- The full summary preserves enough deep detail to support technical and strategic review.
- The technical appendix is detailed enough to seed R&D follow-up tasks.
- Agent briefs are detailed enough that the synthesis layer can cite agent-level evidence without rerunning discovery.

## 12. Risks

- Public sources may not expose enough product-level compressor details.
- Patent findings may be noisy without dedicated patent analytics.
- Competitor claims may be marketing-heavy.
- Some market reports may be paywalled.
- Refrigerant and safety standards may require exact date verification before final decisions.

## 13. Future Enhancements

- Add Notion internal knowledge search.
- Add Slack discussion triage for recent internal context.
- Add scheduled monitoring through automation.
- Add source scoring and duplicate detection.
- Add patent family clustering.
- Add report-to-slide export.
