---
type: agent-brief
agent: "Patent & Research"
confidence: "Medium"
created: 2026-05-18
updated: 2026-05-18
status: deep-draft
research_depth: deep
minimum_findings_target: 12
minimum_sources_target: 12
tags:
  - hvac
  - sub-agent
  - us-unitary
  - scroll-compressor
  - patent
  - deep-research
---
# 08 Patent & Research

> 목적: 미국 가정용 unitary HVAC / ducted heat pump / cold-climate heat pump 시장에서 Scroll 압축기 관련 특허·연구 방향을 파악하고, Samsung이 추격해야 할 기술 클러스터와 방어/차별화 후보를 도출한다.

## 1. Executive Mini-Summary

- Scroll 압축기 관련 공개 특허·연구의 핵심 클러스터는 `EVI / vapor injection`, `variable-speed + drive matching`, `A2L / R-454B / R-32 대응`, `오일 회수·윤활·floodback 신뢰성`, `NVH / 저소음 구조`, `운전 envelope / 보호 제어`로 모인다.
- Copeland는 단품 압축기보다 `compressor + drive + controller + application engineering + validation support`를 묶어 OEM risk를 낮추는 방향이 뚜렷하다. Samsung도 단품 사양 경쟁보다 package-ready 플랫폼으로 제안해야 한다.
- EVI는 오래된 특허 기반 기술이지만, cold-climate heat pump와 low-GWP refrigerant 전환이 겹치면서 다시 전략적 중요도가 높아졌다. 특허 만료 여부와 관계없이 최신 경쟁력은 flash tank / injection port / injection control / oil management / drive logic 조합에서 나온다.
- LG는 2025년 R-454B용 YRH/YGH fixed-speed scroll 시리즈를 공개했고, backpressure structure, IPRV, compressor protection module, broad operating envelope를 강조한다. 이는 A2L 전환에서 안전·보호·신뢰성 메시지가 제품 경쟁 포인트가 됨을 보여준다.
- 연구 문헌은 vapor injection이 저온 난방 capacity와 COP를 개선하고 discharge temperature를 낮추는 방향을 반복적으로 지지한다. 다만 실제 성능은 refrigerant, injection quality, intermediate pressure, EEV 제어, compressor geometry, system matching에 크게 의존한다.
- Purdue 2024 프로그램에는 vapor-injected compressor performance를 ANN으로 예측하는 연구, vapor-injection black-box compressor model, hermetic scroll motor optimization 등 모델 기반 compressor development 흐름이 보인다. Samsung은 실험 데이터 + 모델 기반 compressor map 구축이 필요하다.
- 특허 수량만으로 우열을 판단하면 안 된다. 실제 전략 판단에는 claim scope, family status, jurisdiction, expiration, continuation, product mapping, OEM adoption evidence가 필요하다.
- 현재 공개 정보만으로는 Samsung 내부 성능/원가/공급망/FTO 상태를 평가할 수 없다. 본 노트는 외부 공개 정보 기반의 기술 클러스터와 검증 과제 정의로 사용해야 한다.

## 2. Research Questions And Scope

### 핵심 질문

1. 2016년 이후 Scroll compressor 관련 특허·연구는 어떤 기술 클러스터로 이동했는가?
2. 미국 unitary / ducted heat pump / cold-climate heat pump에서 Samsung이 특히 주의해야 할 FTO 또는 특허 밀집 영역은 무엇인가?
3. EVI, vapor injection, variable speed, A2L refrigerant, NVH, oil management, cold-climate reliability가 어떻게 연결되는가?
4. Copeland, LG, GMCC, Donper 및 관련 OEM의 공개 자료에서 어떤 기술 방향이 읽히는가?
5. Samsung은 단기 catch-up과 중장기 differentiation을 어떻게 나누어야 하는가?

### 범위

- Primary time window: 2021-present.
- Patent trend support window: 2016-present when useful.
- Competitors: LG, GMCC, Copeland, Donper.
- Market context: Carrier, Trane, Lennox, Daikin/Goodman, Rheem, Johnson Controls/York, Midea.
- Technology axes: efficiency, inverter / variable speed, noise / NVH, refrigerant, cold climate reliability, operating envelope.

## 3. Search Log And Source Coverage Map

### Search Queries Used

| Query | Tool | Target | Result Quality | Follow-up Needed |
| --- | --- | --- | --- | --- |
| scroll compressor patent vapor injection EVI intermediate injection heat pump R32 R454B LG Copeland GMCC Donper 2016 2026 | Tavily | Patent / product / trend | High | Google Patents family clustering 필요 |
| Google Patents scroll compressor vapor injection oil return inverter control refrigerant R454B R32 Copeland LG GMCC | Tavily | Patent | Medium | assignee별 claim chart 필요 |
| scroll compressor research paper vapor injection cold climate heat pump R32 R454B NVH inverter control oil return 2021 | Tavily | Research papers | Medium-High | 논문 원문 접근 필요 |
| site:copeland.com scroll compressor vapor injection variable speed R454B R32 residential heat pump | Tavily | Official / product | High | residential US 라인업 직접 매핑 필요 |
| Copeland scroll compressors for HVAC and refrigeration | Firecrawl | Official product page | High | OPI / catalog detail extraction 필요 |
| Copeland heat pump solutions scroll variable speed EVI low GWP A2L | Firecrawl | Official product page | High | compressor model-level data 필요 |
| LG expanded scroll series R-454B YRH YGH | Firecrawl | Official product page | High | catalog/spec PDF 필요 |
| US7275385B2 compressor with vapor injection system | Firecrawl | Patent | High | related/cited-by family map 필요 |
| Purdue 2024 vapor injected compressor performance ANN black-box model | Tavily | Conference research | Medium | paper download / proceedings 확인 필요 |
| cold climate air source heat pumps vapor injection scroll compressor LG RED | Tavily | Technical review | Medium | source credibility and model mapping 필요 |

### Source Coverage Map

| Coverage Area | Sources Found | Coverage Quality | Missing Evidence |
| --- | --- | --- | --- |
| Copeland official product / technology | Copeland scroll compressor page, heat pump systems page, variable speed pages | High | Exact residential US model maps, operating envelopes, compressor maps |
| LG official product / technology | LG R-454B YRH/YGH 2025 blog | High | Detailed spec sheet, patent family link, US OEM adoption |
| Patent baseline | US7275385B2 vapor injection system, related Google Patents snippets | Medium-High | Full family clustering, claim chart, legal status by jurisdiction |
| Research literature | Cold-climate ASHP review, vapor-injection scroll studies, Frontiers EVI paper, Purdue 2024 program | Medium | Full paper extraction and quantitative comparison |
| GMCC / Donper | Search result coverage weak in this run | Low | Chinese patent databases, CNIPA, supplier catalogs |
| Samsung internal comparison | Not available in public search | Low | Internal compressor maps, patents, BOM/cost, reliability data |

## 4. Technology / Patent Cluster Map

| Cluster | What It Covers | Evidence Signal | Samsung Meaning | Confidence |
| --- | --- | --- | --- | --- |
| EVI / vapor injection | Injection port, flash tank/economizer, intermediate pressure vapor, subcooling | Copeland official pages and US7275385B2 | Cold-climate capacity/COP table stakes. Need platform-level design and FTO check. | High |
| Variable-speed scroll + drive | BPM motor, VFD, speed modulation, protection maps | Copeland variable-speed / heat pump pages | Compressor 단품보다 drive-matched package가 OEM 채택성을 높임. | High |
| Low-GWP / A2L refrigerant | R-454B, R-32, R-452B, R-290, safety/protection | LG R-454B page, Copeland pages | Refrigerant 대응은 재료/압력/온도/안전/제어를 함께 설계해야 함. | High |
| Oil management / lubrication | Low-speed oil return, floodback, oil circulation, bearing lubrication | Technical search and Purdue program | Inverter turndown 확대 시 field reliability 리스크. | Medium |
| NVH / low sound | Low vibration scroll, sound shell, low-speed tonal, transient | Copeland official claims, search snippets | Premium OEM 대응에는 dB보다 tonal/transient validation이 중요. | Medium |
| Compressor protection | IPRV, backpressure structure, protection module, diagnostics | LG R-454B page, Copeland drive/control page | A2L 및 wide envelope에서 보호 logic이 제품 신뢰성 메시지로 부상. | High |
| Modeling / digital twin | ANN vapor-injected compressor prediction, black-box compressor model | Purdue 2024 program | 시험 횟수 축소와 OEM application support를 위해 모델 기반 map 필요. | Medium |
| Cold-climate operating envelope | 5°F capacity, -20°F operation, DOE CCHP context | Copeland official page / DOE-related snippets | Compressor, EEV, defrost, injection, controls 통합 검증 필요. | High |

## 5. Detailed Findings

### Finding 1. EVI / vapor injection은 cold-climate heat pump 대응에서 다시 핵심 기술축이 되었다.

- Evidence: Copeland 공식 scroll compressor page는 EVI가 cold ambient에서 heating capacity와 efficiency를 개선하고, 낮은 외기온에서 standard compressor의 capacity drop을 보완한다고 설명한다.
- Interpretation: EVI는 새로운 개념은 아니지만, 미국의 heat pump 전환과 cold-climate 요구가 강해지면서 residential / light commercial 영역에서 전략적 중요도가 커졌다.
- Samsung relevance: Samsung Scroll 전략에서 EVI port geometry, flash tank/economizer circuit, injection flow control, oil/reliability 검증을 통합 platform으로 보유해야 한다.
- Confidence: High.
- Next verification: Samsung 내부 Scroll line-up 중 EVI-ready geometry, injection port, operating envelope 보유 여부 확인.

### Finding 2. Copeland의 경쟁력은 압축기 단품이 아니라 application support와 validation package에 있다.

- Evidence: Copeland heat pump solutions page는 compression platforms, drives, controls, matched components, testing/validation, application engineering, field support를 함께 제시한다.
- Interpretation: OEM 입장에서는 compressor COP보다 integration risk, certification time, field issue 대응이 더 중요할 수 있다.
- Samsung relevance: Samsung이 compressor supplier로 진입/확대하려면 `compressor + inverter drive + application guide + protection logic + certification support` 패키지가 필요하다.
- Confidence: High.
- Next verification: Copeland OPI / application guide 수준과 Samsung 제공자료 수준 비교.

### Finding 3. LG는 R-454B 전환을 fixed-speed scroll까지 빠르게 확장하고 있다.

- Evidence: LG 공식 2025년 YRH/YGH page는 R-454B용 fixed-speed scroll, 6-12 ton YRH, 13-27 ton YGH, advanced wrap design, quiet operation, broad operating envelope, IPRV, protection module을 제시한다.
- Interpretation: R-454B 전환은 premium inverter만의 문제가 아니라 rooftop/packaged/commercial fixed-speed scroll까지 확산된다.
- Samsung relevance: Samsung은 inverter scroll뿐 아니라 fixed-speed / two-stage / cost-effective R-454B platform도 고려해야 한다.
- Confidence: High.
- Next verification: LG YRH/YGH detailed catalog, UL/AHRI listing, OEM 채택 사례 확인.

### Finding 4. Vapor injection 관련 핵심 특허는 오래됐지만, 최신 FTO 리스크는 조합 특허에서 발생할 가능성이 크다.

- Evidence: US7275385B2는 flash tank, vapor outlet, scroll compressor injection port, heating/cooling mode bypass/control 구조를 다룬다. Google Patents상 Copeland/Emerson 관련 vapor injection 선행 특허가 다수 존재한다.
- Interpretation: 단순 injection 개념은 선행기술이 많고 일부는 만료/소멸 가능성이 있으나, 최신 경쟁력은 injection 제어, EEV, protection, oil return, A2L 대응, variable-speed integration 조합에서 생길 수 있다.
- Samsung relevance: FTO는 “EVI 가능/불가능”이 아니라 claim element별 product mapping으로 봐야 한다.
- Confidence: Medium-High.
- Next verification: US, CN, KR, JP, EP family status와 continuation 여부를 전문 FTO로 확인.

### Finding 5. Variable-speed scroll은 EVI와 결합될 때 cold-climate 성능과 제어 복잡성이 동시에 증가한다.

- Evidence: Copeland variable-speed pages는 variable speed와 EVI 조합, drive matching, protection features를 강조한다. 연구 문헌은 low ambient에서 injection pressure/quality가 성능에 큰 영향을 준다고 설명한다.
- Interpretation: variable speed는 part-load efficiency와 comfort에는 유리하지만, injection mass flow, oil return, discharge temperature, defrost coordination을 함께 제어해야 한다.
- Samsung relevance: compressor map만이 아니라 `speed x pressure ratio x injection state x refrigerant x ambient`의 multidimensional map이 필요하다.
- Confidence: High.
- Next verification: Samsung inverter compressor map coverage와 low-speed oil return test protocol 확인.

### Finding 6. A2L/R-454B/R-32 전환은 compressor mechanical design뿐 아니라 protection module과 safety logic을 제품 메시지로 만든다.

- Evidence: LG R-454B page는 backpressure structure, IPRV, compressor protection module을 명시한다. Copeland는 low-GWP A2L refrigerants compatibility를 강조한다.
- Interpretation: A2L 전환에서 압축기는 단순 refrigerant compatibility가 아니라 pressure/temperature/material/electrical safety/protection logic의 신뢰성 패키지로 평가된다.
- Samsung relevance: Samsung은 R-454B/R-32별 discharge temperature, oil miscibility, motor insulation, leakage/safety 관련 compressor-level evidence를 준비해야 한다.
- Confidence: High.
- Next verification: R-454B/R-32 qualification matrix, UL/ASHRAE compliance evidence, OEM application notes 확인.

### Finding 7. Cold-climate research는 vapor injection이 capacity와 COP를 개선하지만 wet compression 및 discharge temperature 제어가 중요하다고 본다.

- Evidence: vapor-injection scroll studies and cold-climate ASHP literature indicate injection improves heating capacity/COP and can reduce discharge temperature, but injection quality and intermediate pressure control are key.
- Interpretation: EVI는 “켜면 좋아지는” 기능이 아니라 control-calibrated cycle optimization 문제다.
- Samsung relevance: Samsung의 차별화는 injection hardware보다 injection control algorithm, EEV coordination, model-based optimization에서 나올 수 있다.
- Confidence: Medium.
- Next verification: 논문 원문 기반 refrigerant별 COP/capacity/discharge temperature 정량 표 작성.

### Finding 8. Purdue 2024 프로그램은 compressor 모델링과 AI 기반 예측이 연구 흐름으로 부상하고 있음을 보여준다.

- Evidence: Purdue 2024 conference program snippets include “Predicting Vapor Injected Compressor Performance Using Artificial Neural Networks” and “Development of a Black-Box Compressor Model that Captures Vapor-Injection”.
- Interpretation: OEM support와 제품 개발 속도는 실험만으로 경쟁하기 어렵고, compressor model / digital twin / map interpolation capability가 중요해진다.
- Samsung relevance: Samsung은 compressor map generator, ANN/surrogate model, customer application simulator를 전략 자산으로 만들어야 한다.
- Confidence: Medium.
- Next verification: Purdue paper/proceedings full text 입수 및 model input/output 구조 분석.

### Finding 9. NVH는 특허/연구 축에서 독립 주제이면서 inverter/EVI/A2L과 연결된다.

- Evidence: Copeland는 scroll의 smooth continuous compression과 low sound/vibration을 공식 장점으로 제시한다. Variable-speed 및 EVI는 speed range와 pressure pulsation 변화를 만든다.
- Interpretation: Scroll 자체가 low vibration 장점이 있지만, inverter carrier frequency, low-speed resonance, injection pulsation, cabinet/fan interaction은 system-level NVH 이슈를 만든다.
- Samsung relevance: Samsung은 compressor standalone sound뿐 아니라 outdoor unit mounted condition, line-set transfer, tonal noise, transient start/defrost sound까지 validation해야 한다.
- Confidence: Medium.
- Next verification: Scroll NVH patents and octave/tonal test method 검색 보강.

### Finding 10. 오일 회수와 윤활은 low-speed inverter 확대의 숨은 병목이다.

- Evidence: Research/search snippets on variable-speed scroll note low-speed oil return risk; Purdue 2024 program also includes compressor lubrication-related sessions, though not Scroll-only.
- Interpretation: Turndown ratio를 넓히면 efficiency와 comfort는 좋아지지만, refrigerant velocity 저하로 oil return, bearing lubrication, compressor temperature management가 어려워질 수 있다.
- Samsung relevance: Samsung은 “최저 운전속도”보다 oil return flush logic, minimum runtime, accumulator/application guide가 중요하다.
- Confidence: Medium.
- Next verification: low-speed oil circulation patent cluster and field failure mode 분석.

### Finding 11. Copeland의 North America / OEM support 메시지는 supply-chain 및 qualification speed 차별화로 읽힌다.

- Evidence: Copeland official pages emphasize global support, testing facilities, application engineering, selection tools, service resources. Search snippets on KF platform mention North America production and DOE CCHP alignment.
- Interpretation: 미국 OEM은 기술뿐 아니라 local sourcing, qualification support, service ecosystem을 함께 본다.
- Samsung relevance: Samsung이 미국 unitary 시장에서 Scroll 공급 포지션을 강화하려면 현지 validation/support 체계와 OEM co-development 구조가 필요하다.
- Confidence: Medium.
- Next verification: Copeland KF official page, Cooling Post 원문, OEM adoption evidence 확인.

### Finding 12. Patent & Research 관점의 Samsung 핵심 공백은 “개별 기술 보유”보다 “통합 패키지와 입증 데이터”에 있다.

- Evidence: Copeland는 compressor/drive/controller/testing/support를 묶어 제시하고, LG는 R-454B fixed-speed scroll에서 protection features를 전면화한다. 연구는 EVI/control/modeling의 coupling을 강조한다.
- Interpretation: 특허가 있어도 OEM이 바로 적용할 수 있는 operating envelope, application guide, control package, validated reliability data가 없으면 시장 대응력이 낮다.
- Samsung relevance: Samsung의 catch-up은 patent filing보다 platform validation dossier 구축이 먼저다.
- Confidence: High.
- Next verification: 내부 보유 특허와 실제 제품/검증 데이터의 연결성 평가.

## 6. Patent Cluster Table

| Cluster | Representative Source | Assignee / Actor | Claim / Technical Direction | Samsung Risk / Opportunity | Confidence |
| --- | --- | --- | --- | --- | --- |
| Vapor injection / flash tank | US7275385B2 | Copeland / Emerson Climate Technologies | Flash tank, vapor outlet, scroll injection port, heating mode injection | 선행기술·만료 가능성 검토 후, 최신 조합 claim 회피 설계 필요 | Medium-High |
| Scroll with vapor injection | US6619936B2 and related citations in Google Patents | Copeland | Scroll compressor with vapor injection | EVI 기본 구조의 crowded area. 세부 geometry와 control이 차별화 영역 | Medium |
| Digital / modulating scroll control | US6601397 / US6745584 cited families | Copeland | Digital scroll condensing unit controller / modulation | fixed-speed 대안, staged capacity, non-inverter cold-climate 전략 후보 | Medium |
| Variable-speed scroll + qualified drive | Copeland official variable-speed / heat pump pages | Copeland | BPM motor + drive + protection + application support | Samsung도 drive-matched compressor package 필요 | High |
| R-454B fixed-speed scroll | LG YRH/YGH official 2025 page | LG | R-454B, IPRV, protection module, wide operating envelope | A2L 대응 fixed-speed platform 경쟁 심화 | High |
| Low-speed oil return / lubrication | Research snippets / Purdue program | Multiple | Oil return, bearing lubrication, low-speed operation | Turndown 확대 시 reliability risk. 내부 검증 필수 | Medium |
| Vapor-injection modeling | Purdue 2024 program | Academic / industry researchers | ANN / black-box model for vapor-injected compressor | Samsung compressor map/digital twin capability 필요 | Medium |
| NVH / low sound scroll | Copeland official claims and patent-search target | Multiple | Low vibration, sound shell, pulsation/noise reduction | Premium positioning에서 tonal/transient test 차별화 가능 | Medium |

## 7. Research Literature Table

| Source / Signal | Method / Topic | Key Takeaway | Limitation | Samsung Implication |
| --- | --- | --- | --- | --- |
| Cold climate ASHP industry progress review, 2023 | Review of cold-climate ASHP progress | Vapor injection capability is important for cold-climate heat pumps; scroll is suitable because of intermediate injection ports | Not a Samsung/Copeland-specific product benchmark | EVI-ready Scroll platform 필요 |
| Study of scroll compressors with vapor injection | Experimental / theoretical vapor-injection scroll analysis | Vapor injection improves capacity/COP and can manage discharge temperature under high pressure ratio | Need exact refrigerant and condition extraction | R-454B/R-32별 injection map 필요 |
| Frontiers 2023 EVI low-GWP refrigerant system | Energy/emission performance of EVI heat pump with low-GWP refrigerants | EVI systems can outperform baseline under severe conditions; lower compression ratio helps low-temperature operation | Some cases automotive/CO2, not US unitary direct | low-GWP + EVI performance logic 참고 |
| IEA HPT Annex 54 low-GWP refrigerants | Low-GWP heat pump systems | R-454B and inverter control appear in low-GWP heat pump testing contexts | Broad heat pump scope | refrigerant transition + inverter validation 필요 |
| Purdue 2024 conference program | Compressor modeling / vapor injection / motor optimization topics | Compressor modeling and vapor-injected performance prediction are active research themes | Program snippets, not full papers | compressor digital twin and model-based support 필요 |
| DOE / ORNL cold-climate integrated heat pump snippets | Multi-stage compressor, R-454B CCHP development | Non-inverter multi-stage scroll may be a cost-effective cold-climate path | Project-specific; full report needed | inverter-only 전략 말고 staged capacity도 검토 |

## 8. Samsung Implications

1. **EVI platform readiness**: Samsung은 EVI injection port, economizer/flash tank circuit, EEV coordination, injection control logic을 포함한 compressor platform을 준비해야 한다.
2. **Drive-matched package**: Copeland처럼 compressor + VFD/drive + protection parameters + application guide를 함께 제공해야 OEM qualification friction을 줄일 수 있다.
3. **A2L protection story**: R-454B/R-32 대응은 refrigerant compatibility 표만으로 부족하다. IPRV, backpressure, motor insulation, discharge temperature, leak/safety logic을 설명해야 한다.
4. **Model-based compressor map**: Purdue 연구 흐름을 고려하면 vapor-injected compressor ANN/black-box model을 구축해 OEM system design support에 활용해야 한다.
5. **FTO workstream 분리**: vapor injection, injection control, oil management, NVH, protection module, drive matching을 각각 claim chart로 분리해야 한다.
6. **Cold-climate validation dossier**: 5°F / -15°C, -20°F / -29°C, defrost, floodback, oil return, startability 조건을 포함한 validation package가 필요하다.
7. **Fixed-speed / staged capacity도 옵션**: 고가 inverter만으로는 미국 unitary volume market 대응이 어려울 수 있으므로 multi-stage / two-stage / mechanical modulation 옵션도 검토해야 한다.
8. **Obsidian DB 운영 방식 변경**: 기존 1페이지 요약 노트가 아니라 agent별 evidence register와 source map을 누적해야 이후 quarterly monitoring이 가능하다.

## 9. Gap Analysis

| Gap | Why It Matters | Evidence | Severity | Verification Needed |
| --- | --- | --- | --- | --- |
| EVI-ready Scroll platform 공개 근거 부족 | cold-climate 대응 table stakes | Copeland EVI pages, vapor injection research | High | Samsung internal product map |
| compressor + drive + controller package 부족 가능성 | OEM adoption risk 감소에 중요 | Copeland heat pump page | High | Samsung drive/control offering |
| R-454B/R-32 protection dossier 부족 가능성 | A2L transition에서 신뢰성 메시지 핵심 | LG R-454B YRH/YGH page | High | material/oil/motor/protection qualification |
| FTO claim chart 미작성 | 특허 회피/방어 전략 불명확 | US7275385B2 and related patent clusters | High | patent counsel review |
| model-based compressor map 미흡 가능성 | OEM 설계 지원과 개발 속도 영향 | Purdue 2024 modeling topics | Medium | internal simulation/model capability |
| low-speed oil return 검증 부족 가능성 | inverter turndown reliability risk | research snippets | Medium | oil circulation test matrix |
| NVH system validation 부족 가능성 | premium residential acceptance risk | Copeland low sound claims | Medium | outdoor unit mounted NVH test |

## 10. Catch-Up Actions

| Action | Timing | Owner Candidate | Evidence Basis | Expected Outcome |
| --- | --- | --- | --- | --- |
| EVI / vapor injection patent family map 작성 | 0-3 months | IP + R&D | US7275385B2 and related Google Patents | FTO risk zones 정의 |
| R-454B/R-32 Scroll qualification matrix 정리 | 0-6 months | Compressor R&D | LG and Copeland A2L signals | OEM 대응자료 초안 |
| compressor + drive + protection package 정의 | 0-6 months | Product planning + controls | Copeland package positioning | 단품 판매에서 platform 제안으로 전환 |
| cold-climate validation test matrix 구축 | 0-9 months | Reliability + system lab | Copeland CCHP / EVI claims | 5°F/-20°F 대응 근거 확보 |
| vapor-injected compressor model PoC | 6-12 months | Simulation / AI engineering | Purdue modeling signals | OEM application simulator 기반 |
| low-speed oil return / floodback focused test | 6-12 months | Reliability | inverter low-speed risk | field failure risk 저감 |
| patent whitespace workshop | 6-12 months | IP + advanced engineering | cluster table | 방어/출원 후보 도출 |

## 11. Differentiation Options

| Option | Why It Could Differentiate | Timing | Dependencies | Confidence |
| --- | --- | --- | --- | --- |
| EVI + AI compressor map package | OEM이 system matching을 빠르게 수행 가능 | Mid | test data, ANN model, application tool | Medium |
| R-454B/R-32 dual-ready Scroll platform | refrigerant split에 대응 가능 | Mid | material/oil/motor validation | Medium |
| low-noise cold-climate mode | cold-climate + residential comfort 동시 대응 | Mid-Long | NVH test, drive control, outdoor unit integration | Medium |
| oil-return-safe wide turndown | inverter 경쟁에서 reliability 차별화 | Mid | oil circulation model/test | Medium |
| application-guide-led OEM support | Copeland식 support 경쟁 대응 | Near | documentation, local support, lab data | High |

## 12. Contradictory Evidence And Weak Signals

| Signal | Why It Is Uncertain | Decision Risk | Verification Path |
| --- | --- | --- | --- |
| Copeland KF 10:1 turndown / North America production | Search snippet 기반, official page 미확인 | competitor 대응 과대평가 가능 | Copeland official launch page 확인 |
| GMCC / Donper patent activity | 이번 검색에서 coverage 약함 | 중국 경쟁사 저평가 가능 | CNIPA / Google Patents assignee search |
| LG YRH/YGH commercial focus | US residential unitary 직접 적용성 불명확 | residential 대응 전략에 과적용 위험 | LG catalog and OEM adoption 확인 |
| Purdue program snippets | full paper 미확인 | 연구 방향 해석 과대 가능 | proceedings / papers 확보 |
| Patent expiration status | Google Patents legal status는 참고용 | FTO 판단 오류 가능 | patent counsel, jurisdiction별 status 확인 |

## 13. Source Register

| Source | Type | Date | Relevant Evidence | How Used | Reliability |
| --- | --- | --- | --- | --- | --- |
| Copeland, Scroll Compressors for HVAC and Refrigeration | Official | 2026 page accessed | EVI, variable-capacity, low-GWP, low sound, 200M installations, support | competitor baseline | High |
| Copeland, Heat Pump Solutions for Industrial, Commercial and Residential Applications | Official | 2026 page accessed | compressor + drives + controls + matched components; low ambient; A2L/natural refrigerants | package strategy | High |
| LG, New Expanded Scroll Series for R-454B Refrigerant | Official | 2025-07-28 | YRH/YGH R-454B, capacity range, IPRV, backpressure, protection module | A2L competitor signal | High |
| US7275385B2, Compressor with vapor injection system | Patent | filed 2005, granted 2007 | flash tank, vapor injection port, heating-mode vapor injection | EVI patent baseline | Medium-High |
| Copeland Variable Speed Scroll Compressors | Official | 2026 page accessed via Tavily | YAW/YAV/YDV/YHV, R-454B, EVI, variable speed | variable-speed cluster | High |
| Copeland Scroll Variable Speed Residential Compressors | Official | 2026 page accessed via Tavily | R-290, R-454B/R-452B, EVI, BPM motor/drive | residential heat pump signal | Medium-High |
| Cold Climate Air Source Heat Pumps Industry Progress 2023 | Technical review | 2023 | vapor injection capability; LG RED and Mitsubishi examples | cold-climate context | Medium |
| Study of Scroll Compressors with Vapor Injection | Technical thesis/paper | n/a | vapor injection improves capacity/COP; discharge temperature issues | mechanism support | Medium |
| Frontiers 2023 EVI low-GWP heat pump paper | Paper | 2023 | EVI performance under severe condition; low-GWP context | low-GWP/EVI mechanism | Medium |
| IEA HPT Annex 54 low-GWP refrigerants | Technical / program report | 2021 | R-454B low-GWP heat pump and inverter context | refrigerant transition | Medium |
| Purdue 2024 Final Conference Program | Conference program | 2024 | ANN vapor-injected compressor performance, black-box model | modeling trend | Medium |
| DOE / ORNL High-Efficiency Cold-Climate Integrated Heat Pump snippets | Government / research | 2024 | R-454B, multi-stage scroll, cold-climate integrated HP | staged capacity option | Medium |

## 14. Recommended Follow-Up Searches

| Priority | Follow-Up Search | Why |
| --- | --- | --- |
| High | `site:patents.google.com Copeland scroll compressor vapor injection 2021 2026` | 최신 continuation / related families 확인 |
| High | `site:patents.google.com LG scroll compressor R454B oil injection protection module` | LG R-454B 제품과 특허 연결 |
| High | `GMCC scroll compressor patent vapor injection inverter R32` | 중국 경쟁사 coverage 보강 |
| High | `Donper scroll compressor patent R454B R32 heat pump` | Donper 공개 특허/제품 확인 |
| High | `Purdue vapor injected compressor black-box model 2024 PDF` | 모델링 논문 원문 확보 |
| Medium | `scroll compressor low speed oil return patent inverter heat pump` | low-speed reliability 클러스터 |
| Medium | `scroll compressor NVH patent inverter tonal noise` | NVH 특허 클러스터 |
| Medium | `R454B scroll compressor discharge temperature oil miscibility paper` | 냉매별 설계 영향 정량화 |

## 15. Fact / Inference / Assumption Split

### Facts

- Copeland 공식 페이지는 scroll portfolio에 EVI, variable-capacity, low-GWP refrigerant compatibility, quiet operation, application engineering support를 포함한다고 설명한다.
- Copeland 공식 heat pump page는 compressors, drives, controls, matched components, testing/validation, field support를 함께 제시한다.
- LG 공식 2025년 글은 YRH/YGH R-454B fixed-speed scroll series, capacity range, backpressure structure, IPRV, protection module을 언급한다.
- US7275385B2는 flash tank와 scroll compressor vapor injection port를 포함하는 heat pump vapor injection system을 다룬다.

### Inferences

- 미국 unitary heat pump 시장에서 compressor supplier 경쟁은 단품 효율보다 package readiness와 validation support 중심으로 이동한다.
- EVI는 기술 자체보다 refrigerant / control / oil / drive / system matching 조합에서 최신 경쟁력이 나온다.
- Samsung의 단기 대응은 특허 출원보다 qualification dossier와 OEM application support 구축이 우선이다.

### Assumptions

- Samsung은 내부적으로 일부 Scroll compressor 기술과 inverter/control 역량을 보유하고 있으나, 미국 unitary OEM이 요구하는 public-facing support package는 추가 보강이 필요할 수 있다.
- GMCC/Donper의 중국어 특허·제품 정보는 본 검색에서 충분히 포착되지 않았을 가능성이 높다.
- FTO 판단은 공개 Google Patents 검색만으로 충분하지 않으며 전문 patent counsel review가 필요하다.

## 16. Appendix Notes

- 이 노트는 2026-05-18 기준 공개 웹, Tavily discovery, Firecrawl extraction 기반의 deep-draft이다.
- 특허 법적 상태와 claim scope는 참고 수준이며, 실제 회피/방어 판단에는 전문 FTO 검토가 필요하다.
- 다음 deep run에서는 본 노트의 source register를 Zotero/Obsidian source note로 분리하고, 각 patent family별 child note를 생성하는 방식이 적합하다.
