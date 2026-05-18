# Scenarios: Multi-Agent Research Workflow

## 1. Scenario Overview

This document describes how users interact with the research workflow and how the orchestrator, sub agents, and synthesis layer should behave.

## 2. Scenario 1: Initial Deep Research Report

### User Intent

A strategy or R&D user wants a full report on:

> 미국 가정용 unitary 시장의 Scroll 압축기의 대응 방안.

### Input

- Company: Samsung.
- Market: US residential ducted split AC and heat pump.
- Special focus: cold climate heat pump.
- Technology axes: efficiency, inverter, noise, refrigerant, operating environment.
- Competitors: LG, GMCC, Copeland, Donper.
- Market context: Carrier, Trane, Lennox, Daikin/Goodman, Rheem, Johnson Controls/York, Midea.
- Time window: 2021 to present, with patent trend support from 2016.

### Flow

1. Orchestrator validates the topic and expands it into research questions.
2. Orchestrator assigns tasks to eight sub agents.
3. Each agent uses Tavily for discovery and Firecrawl for extraction where specific pages are identified.
4. Agents generate evidence-backed briefs.
5. Synthesis layer consolidates findings.
6. Final outputs are created:
   - detailed report;
   - executive slide outline;
   - source register;
   - monitoring candidate list.

### Acceptance Criteria

- The report includes positioning comparison, gap analysis, catch-up strategy, and operating roadmap.
- The report separates confirmed facts from inferred insights.
- Each major claim has a source trail or is marked as an assumption.

## 3. Scenario 2: Reuse With A New Topic

### User Intent

The user wants to reuse the same workflow for a new HVAC or compressor-related topic.

### Example Input

> 미국 상업용 rooftop unit용 compressor 기술 대응 방안.

### Flow

1. Orchestrator reads the new topic.
2. Orchestrator compares it with the default domain.
3. Orchestrator recommends changes to:
   - product scope;
   - competitor set;
   - technology axes;
   - source priorities;
   - output emphasis.
4. User approves or edits.
5. Agents run with revised prompts.

### Acceptance Criteria

- The workflow does not require rewriting the whole system.
- Only topic, scope, and agent parameters are updated.

## 4. Scenario 3: Executive Brief Generation

### User Intent

The user has already generated agent briefs and wants an executive-ready summary.

### Flow

1. Synthesis layer reads all agent briefs.
2. It extracts:
   - three to five key executive messages;
   - top risks;
   - recommended investments;
   - near-term catch-up actions;
   - long-term differentiation opportunities.
3. It produces a 10-slide outline.

### Acceptance Criteria

- The slide outline is decision-oriented.
- Each slide has a title, key message, supporting bullets, and evidence notes.
- Technical details are summarized rather than copied wholesale.

## 5. Scenario 4: R&D Follow-Up Planning

### User Intent

An R&D team wants to convert the report into technology workstreams.

### Flow

1. Synthesis layer extracts technical gaps.
2. Gaps are grouped by:
   - compressor design;
   - motor and inverter;
   - NVH;
   - refrigerant compatibility;
   - cold climate reliability;
   - system integration.
3. Each gap is converted into a candidate workstream.
4. Each workstream gets:
   - objective;
   - expected benefit;
   - required validation;
   - estimated difficulty;
   - dependency;
   - suggested timeline.

### Acceptance Criteria

- The output can seed R&D project planning.
- Workstreams are prioritized using the evaluation criteria.

## 6. Scenario 5: Quarterly Monitoring

### User Intent

The user wants to rerun the workflow every quarter to detect changes.

### Flow

1. Monitoring run uses the previous report as baseline.
2. Agents search only for new or changed information.
3. Synthesis layer identifies:
   - new product launches;
   - new patents;
   - new papers;
   - regulatory updates;
   - refrigerant transition updates;
   - competitor messaging shifts.
4. Output is a monitoring update rather than a full report.

### Acceptance Criteria

- The update emphasizes changes since the prior baseline.
- Repeated facts are summarized briefly.
- New risks and action items are highlighted.

## 7. Scenario 6: Evidence Quality Review

### User Intent

The user wants to verify whether a finding is credible enough for executive reporting.

### Flow

1. The system traces the finding back to source notes.
2. It classifies sources as:
   - primary;
   - regulatory;
   - patent;
   - technical publication;
   - industry news;
   - secondary or marketing.
3. It assigns confidence:
   - High;
   - Medium;
   - Low.
4. It recommends whether further verification is required.

### Acceptance Criteria

- Weakly sourced claims are not presented as facts.
- Conflicting evidence is surfaced clearly.

## 8. Scenario 7: Gap Analysis Refresh

### User Intent

The user wants only a refreshed gap analysis after new evidence appears.

### Flow

1. The system reads the prior gap analysis.
2. Relevant agents update only the impacted sections.
3. Synthesis layer recalculates the scorecard.
4. It outputs changed gaps, unchanged gaps, and newly closed gaps.

### Acceptance Criteria

- The output is concise and change-focused.
- The user can see what strategy assumptions changed.

