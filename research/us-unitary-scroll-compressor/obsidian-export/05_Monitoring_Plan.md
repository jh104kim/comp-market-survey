---
type: monitoring-plan
title: 정기 모니터링 계획
created: 2026-05-18
updated: 2026-05-18
status: draft
tags:
  - hvac
  - monitoring
  - us-unitary
---
# 정기 모니터링 계획

## 권장 주기
- 기본: 분기별 업데이트
- 규제/냉매 이슈 발생 시: 월간 임시 업데이트
- AHR Expo, DOE/EPA/ENERGY STAR 개정, 주요 OEM launch 시즌: 이벤트 기반 업데이트

## 모니터링 항목
| 영역 | 추적 신호 | 주요 질문 |
|---|---|---|
| 경쟁사 | Copeland KF, LG R-454B/R-32, GMCC CCHP, Donper 신규 HVAC 진입 | 제품화/인증/채택 신호가 나왔는가 |
| OEM | Carrier, Lennox, Trane, Goodman, Rheem, Midea, JCI/York | 냉매, compressor type, cold climate claim 변화 |
| 규제 | EPA AIM, SNAP, DOE Appendix M1/M2, ENERGY STAR, AHRI | GWP/시험/인증 기준이 바뀌었는가 |
| 냉매 | R-454B 공급/가격, R-32 채택 확대, A2L code adoption | dual-track 전략 조정 필요 여부 |
| 특허 | Copeland, LG, Midea/GMCC, Trane, Samsung | EVI, oiling, NVH, A2L protection 관련 신규 특허 |
| 연구 | vapor injection, R-454B/R-32, cold climate reliability, NVH | 기술 방향이 바뀌었는가 |
| 시장 | NEEP/utility rebate, contractor feedback, AHRI listing | 시장 진입 장벽이 무엇인가 |

## 업데이트 산출물
- 변경점 요약 1p
- 신규 소스 register
- 전략 영향: Continue / Revise / Stop / Escalate
- 갭 분석 업데이트
- 다음 분기 액션 아이템

## Watch Query 예시
- `Copeland KF variable speed scroll R-454B residential 1.5 5 ton`
- `LG scroll compressor R-454B R-32 variable speed residential`
- `GMCC scroll compressor R-454B cold climate heat pump inverter EVI`
- `EPA HFC technology transitions residential air conditioning heat pump R-454B R-32`
- `ENERGY STAR cold climate heat pump criteria 5F COP capacity`
- `AHRI 270 275 outdoor unit sound heat pump`
- `scroll compressor vapor injection R32 R454B cold climate patent`
