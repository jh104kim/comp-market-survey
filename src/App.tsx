import {
  ArrowRight,
  BarChart3,
  BookOpenText,
  CheckCircle2,
  ClipboardList,
  Download,
  FileText,
  Gauge,
  GitBranch,
  LayoutDashboard,
  LineChart,
  Network,
  PanelLeft,
  RefreshCw,
  Search,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Volume2,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";

type WorkflowInput = {
  topic: string;
  company: string;
  market: string;
  competitors: string;
  technologyAxes: string;
  sourceDepth: string;
  timeWindow: string;
  cadence: string;
};

type Agent = {
  name: string;
  icon: typeof Search;
  mission: string;
  output: string;
  accent: string;
};

const defaultInput: WorkflowInput = {
  topic:
    "미국 가정용 unitary 시장의 Scroll 압축기의 대응 방안 (효율/인버터/소음/냉매/사용환경)",
  company: "Samsung",
  market:
    "US residential ducted split AC / heat pump + cold climate heat pump",
  competitors:
    "LG, GMCC, Copeland, Donper, Carrier, Trane, Lennox, Daikin/Goodman, Rheem, Johnson Controls/York, Midea",
  technologyAxes:
    "Efficiency, inverter, noise/NVH, refrigerant, cold climate reliability",
  sourceDepth: "Public web + patents + papers",
  timeWindow: "2021-present, patent trend 2016-present when useful",
  cadence: "Reusable template, quarterly monitoring ready",
};

const baseAgents: Agent[] = [
  {
    name: "Market & OEM Agent",
    icon: BarChart3,
    mission:
      "미국 주거용 ducted split AC/heat pump 시장, OEM 플랫폼, 효율 등급, 냉매 전환 방향을 파악합니다.",
    output: "시장 변화, OEM 요구사항, 플랫폼 전환 신호",
    accent: "bg-accent-amber",
  },
  {
    name: "Core Competitor Agent",
    icon: Network,
    mission:
      "LG, GMCC, Copeland, Donper의 Scroll 압축기 포트폴리오와 미국 시장 접근을 비교합니다.",
    output: "경쟁사 포지셔닝, 제품군, 고객 연결성",
    accent: "bg-primary",
  },
  {
    name: "Efficiency Agent",
    icon: Gauge,
    mission:
      "SEER2, HSPF2, DOE, ENERGY STAR, AHRI와 고효율 Scroll 설계 방향을 분석합니다.",
    output: "효율 갭, 규제 압력, 성능 개선 후보",
    accent: "bg-success",
  },
  {
    name: "Inverter & Control Agent",
    icon: Zap,
    mission:
      "Variable speed Scroll, drive control, 저부하 안정성, partial-load 효율을 조사합니다.",
    output: "인버터 제어 전략, 속도 범위, 시스템 매칭",
    accent: "bg-accent-teal",
  },
  {
    name: "Noise & NVH Agent",
    icon: Volume2,
    mission:
      "주거용 실외기 소음, 진동, 토크 리플, 저속 운전음을 경쟁 관점으로 정리합니다.",
    output: "NVH 차별화 포인트, 체감 품질 리스크",
    accent: "bg-muted",
  },
  {
    name: "Refrigerant & Regulation Agent",
    icon: ShieldCheck,
    mission:
      "R-410A 전환, R-454B/R-32, A2L 안전 기준과 압축기 설계 영향을 추적합니다.",
    output: "냉매 전환 리스크, 규제 대응 체크리스트",
    accent: "bg-warning",
  },
  {
    name: "Cold Climate & Reliability Agent",
    icon: Snowflake,
    mission:
      "한랭지 히트펌프의 저온 난방, 오일 회수, liquid floodback, defrost, 시동성을 분석합니다.",
    output: "한랭지 신뢰성 과제, 검증 항목",
    accent: "bg-surface-dark-elevated",
  },
  {
    name: "Patent & Research Agent",
    icon: BookOpenText,
    mission:
      "최근 논문/학회자료와 10년 특허 트렌드를 바탕으로 기술 공백과 방어 전략을 찾습니다.",
    output: "특허 클러스터, 연구 방향, 회피/방어 후보",
    accent: "bg-primary-active",
  },
];

const reportSections = [
  "Executive Summary",
  "Full Summary",
  "US residential unitary / cold climate heat pump market shifts",
  "Competitor and OEM positioning",
  "Technology trend analysis",
  "Samsung positioning comparison",
  "Gap analysis",
  "Catch-up and differentiation strategy",
  "12-36 month operating roadmap",
];

const deepBriefRequirements = [
  "12+ detailed findings per agent",
  "12+ evidence entries with source type and confidence",
  "10+ search queries or source-discovery paths",
  "8+ row comparison table",
  "Technology, market, regulatory, or patent logic",
  "Samsung implications, gap analysis, catch-up actions",
  "Fact / inference / assumption / open-question split",
];

const sidebarLinks = [
  { href: "#workbench", label: "Research setup", icon: LayoutDashboard },
  { href: "#usage", label: "How to use", icon: CheckCircle2 },
  { href: "#agents", label: "Sub agents", icon: Network },
  { href: "#report", label: "Report structure", icon: FileText },
  { href: "#assets", label: "Local assets", icon: GitBranch },
];

const usageSteps = [
  {
    title: "1. 주제와 범위를 고정",
    description:
      "Research frame에서 분석 주제, 회사, 시장 범위를 입력해 오케스트레이터의 기본 방향을 정합니다.",
  },
  {
    title: "2. 조사 라우팅 조정",
    description:
      "Research routing에서 경쟁사, 기술축, 소스 깊이, 기간, 모니터링 주기를 조정합니다.",
  },
  {
    title: "3. 프리뷰 생성",
    description:
      "Generate 또는 Refresh preview로 8개 서브 에이전트 배분과 deep brief 산출물 구조를 확인합니다.",
  },
  {
    title: "4. Markdown으로 넘기기",
    description:
      "Download Markdown으로 오케스트레이션 초안을 저장하고, 필요 시 실제 MCP 리서치 실행으로 이어갑니다.",
  },
];

function splitList(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function buildMarkdown(input: WorkflowInput) {
  const axes = splitList(input.technologyAxes);
  const competitors = splitList(input.competitors).slice(0, 8);

  return `# ${input.topic}

## Orchestrator
- Company context: ${input.company}
- Market scope: ${input.market}
- Source scope: ${input.sourceDepth}
- Time window: ${input.timeWindow}
- Operating mode: ${input.cadence}
- Research depth: Deep brief mode

## Agent Routing
${baseAgents.map((agent, index) => `${index + 1}. ${agent.name}: ${agent.output}`).join("\n")}

## Deep Brief Requirements
${deepBriefRequirements.map((item) => `- ${item}`).join("\n")}

## Priority Search Tracks
${axes.map((axis) => `- ${axis}: official sources, patents, papers, and regulatory signals`).join("\n")}

## Competitor Watchlist
${competitors.map((competitor) => `- ${competitor}`).join("\n")}

## Final Deliverables
- Executive Summary for decisions
- Full Summary for deep review
- Detailed Korean strategy report
- Executive slide outline
- Deep agent evidence briefs
- Strategy scorecard
- Quarterly monitoring update template`;
}

function App() {
  const [form, setForm] = useState<WorkflowInput>(defaultInput);
  const [generatedAt, setGeneratedAt] = useState("Initial template");

  const axes = useMemo(() => splitList(form.technologyAxes), [form.technologyAxes]);
  const competitors = useMemo(() => splitList(form.competitors), [form.competitors]);
  const generatedMarkdown = useMemo(() => buildMarkdown(form), [form]);

  const setupScore = Math.round(
    ([
      form.topic,
      form.company,
      form.market,
      form.competitors,
      form.technologyAxes,
      form.sourceDepth,
      form.timeWindow,
      form.cadence,
    ].filter((value) => value.trim().length > 0).length /
      8) *
      100,
  );

  const updateField = (key: keyof WorkflowInput, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const regenerate = () => {
    setGeneratedAt(
      new Intl.DateTimeFormat("ko-KR", {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date()),
    );
  };

  const downloadMarkdown = () => {
    const blob = new Blob([generatedMarkdown], {
      type: "text/markdown;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "research-orchestration-preview.md";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <header className="sticky top-0 z-30 border-b border-hairline bg-canvas/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5">
          <div className="flex items-center gap-3">
            <div className="radial-mark" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold leading-tight">
                Research Orchestrator
              </p>
              <p className="hidden text-xs text-muted sm:block">
                Samsung HVAC Scroll Strategy
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <span className="rounded-full bg-surface-card px-3 py-1 text-xs font-medium text-muted">
              {setupScore}% setup
            </span>
            <button
              className="inline-flex h-10 items-center gap-2 rounded-md border border-hairline bg-canvas px-4 text-sm font-medium text-ink active:bg-surface-card"
              onClick={downloadMarkdown}
            >
              <Download size={16} />
              Export
            </button>
            <button
              className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-on-primary transition-colors active:bg-primary-active"
              onClick={regenerate}
            >
              <RefreshCw size={16} />
              Generate
            </button>
          </div>
          <button
            className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-on-primary md:hidden"
            onClick={regenerate}
          >
            <RefreshCw size={16} />
            Generate
          </button>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1440px] gap-6 px-5 py-6 lg:grid-cols-[296px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-[88px] lg:self-start">
          <div className="rounded-xl border border-hairline bg-surface-card p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-canvas text-primary">
                <PanelLeft size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">Workflow control</p>
                <p className="text-xs text-muted">Deep research template</p>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-center justify-between text-xs font-medium text-muted">
                <span>Input readiness</span>
                <span>{setupScore}%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-hairline">
                <div
                  className="h-2 rounded-full bg-primary"
                  style={{ width: `${setupScore}%` }}
                />
              </div>
            </div>

            <nav className="mt-6 grid gap-2">
              {sidebarLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-body transition-colors hover:bg-canvas hover:text-ink"
                  >
                    <Icon size={17} />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>

            <div className="mt-6 rounded-lg bg-canvas p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                MCP readiness
              </p>
              <div className="mt-4 grid gap-3">
                <StatusLine label="Tavily discovery" />
                <StatusLine label="Firecrawl extraction" />
                <StatusLine label="Markdown export" />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <MiniStat label="Agents" value="8" />
              <MiniStat label="Axes" value={String(axes.length)} />
              <MiniStat label="Depth" value="Deep" />
            </div>

            <div className="mt-5 rounded-lg bg-surface-cream-strong p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                Usage flow
              </p>
              <ol className="mt-3 grid gap-2 text-sm leading-6 text-body">
                <li>1. 입력값을 조정합니다.</li>
                <li>2. 오른쪽 preview를 확인합니다.</li>
                <li>3. Markdown을 내려받습니다.</li>
                <li>4. MCP 실행 결과를 Obsidian에 축적합니다.</li>
              </ol>
            </div>
          </div>
        </aside>

        <main className="min-w-0">
          <section
            id="workbench"
            className="grid min-w-0 gap-6 xl:grid-cols-[minmax(420px,0.9fr)_minmax(0,1.15fr)]"
          >
            <div className="min-w-0 rounded-xl bg-surface-soft p-5 md:p-8">
              <span className="inline-flex rounded-full bg-surface-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                Multi-agent workflow
              </span>
              <h1 className="mt-5 max-w-2xl text-balance font-display text-[34px] leading-[1.14] tracking-[-0.018em] text-ink md:text-[44px]">
                리서치 입력 정렬
                <br />
                에이전트 실행 설계
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-body md:text-lg">
                왼쪽 사이드바는 진행 흐름을 고정하고, 본문은 deep brief 기준의 입력과 출력 구조를 같은 높이에서 비교하도록 재구성했습니다.
              </p>

              <div className="mt-8 grid gap-5">
                <FormPanel title="Research frame" description="주제와 시장 범위를 먼저 고정합니다.">
                  <Field label="Research topic">
                    <textarea
                      value={form.topic}
                      onChange={(event) => updateField("topic", event.target.value)}
                      className="min-h-28 w-full resize-y rounded-md border border-hairline bg-canvas px-4 py-3 text-sm leading-6 text-ink outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
                    />
                  </Field>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Company">
                      <input
                        value={form.company}
                        onChange={(event) => updateField("company", event.target.value)}
                        className="input-control"
                      />
                    </Field>
                    <Field label="Market scope">
                      <input
                        value={form.market}
                        onChange={(event) => updateField("market", event.target.value)}
                        className="input-control"
                      />
                    </Field>
                  </div>
                </FormPanel>

                <FormPanel title="Research routing" description="검색 깊이, 기술축, 경쟁사 범위를 정합니다.">
                  <Field label="Competitors and market context">
                    <textarea
                      value={form.competitors}
                      onChange={(event) =>
                        updateField("competitors", event.target.value)
                      }
                      className="min-h-24 w-full resize-y rounded-md border border-hairline bg-canvas px-4 py-3 text-sm leading-6 text-ink outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
                    />
                  </Field>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Technology axes">
                      <input
                        value={form.technologyAxes}
                        onChange={(event) =>
                          updateField("technologyAxes", event.target.value)
                        }
                        className="input-control"
                      />
                    </Field>
                    <Field label="Source depth">
                      <select
                        value={form.sourceDepth}
                        onChange={(event) =>
                          updateField("sourceDepth", event.target.value)
                        }
                        className="input-control"
                      >
                        <option>Public web + patents + papers</option>
                        <option>Public web only</option>
                        <option>Public web + patents + papers + internal knowledge</option>
                      </select>
                    </Field>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Time window">
                      <input
                        value={form.timeWindow}
                        onChange={(event) =>
                          updateField("timeWindow", event.target.value)
                        }
                        className="input-control"
                      />
                    </Field>
                    <Field label="Monitoring cadence">
                      <select
                        value={form.cadence}
                        onChange={(event) => updateField("cadence", event.target.value)}
                        className="input-control"
                      >
                        <option>Reusable template, quarterly monitoring ready</option>
                        <option>One-time deep research report</option>
                        <option>Monthly monitoring workflow</option>
                        <option>Quarterly monitoring workflow</option>
                      </select>
                    </Field>
                  </div>
                </FormPanel>
              </div>
            </div>

            <section
              className="min-w-0 rounded-xl bg-surface-dark p-5 text-on-dark md:p-8"
              aria-label="Generated output preview"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-on-dark-soft">Generated output</p>
                  <h2 className="font-display text-3xl tracking-[-0.02em]">
                    Orchestration preview
                  </h2>
                </div>
                <span className="rounded-full bg-surface-dark-elevated px-3 py-1 text-xs text-on-dark-soft">
                  {generatedAt}
                </span>
              </div>
              <pre className="mt-6 max-h-[560px] max-w-full overflow-auto rounded-lg bg-surface-dark-soft p-5 font-mono text-sm leading-7 text-on-dark-soft">
                <code>{generatedMarkdown}</code>
              </pre>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <OutputMetric label="Agents" value="8" />
                <OutputMetric label="Competitors" value={String(competitors.length)} />
                <OutputMetric label="Mode" value="Deep" />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <button
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-on-primary active:bg-primary-active"
                  onClick={regenerate}
                >
                  <RefreshCw size={16} />
                  Refresh preview
                </button>
                <button
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-surface-dark-elevated px-4 text-sm font-medium text-on-dark active:bg-surface-dark-soft"
                  onClick={downloadMarkdown}
                >
                  <Download size={16} />
                  Download Markdown
                </button>
              </div>
            </section>
          </section>

          <section id="usage" className="mt-6 rounded-xl bg-canvas p-5 md:p-8">
              <SectionHeader
                eyebrow="How to use"
                title="입력 → 실행 → 저장"
                description="주제와 범위를 정리하고, 에이전트 실행 구조를 확인한 뒤 Markdown과 Obsidian DB로 이어갑니다."
              />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {usageSteps.map((step) => (
                <article
                  key={step.title}
                  className="rounded-lg border border-hairline bg-surface-soft p-5"
                >
                  <CheckCircle2 className="text-primary" size={20} />
                  <h3 className="mt-4 text-base font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-body">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-6 rounded-lg bg-surface-card p-5">
              <h3 className="text-lg font-semibold text-ink">실제 활용 흐름</h3>
              <div className="mt-4 grid gap-3 text-sm leading-6 text-body md:grid-cols-3">
                <p>
                  <strong className="text-body-strong">Plan:</strong> 페이지에서
                  주제, 경쟁사, 기술축, 기간을 정렬합니다.
                </p>
                <p>
                  <strong className="text-body-strong">Research:</strong> 8개
                  서브 에이전트 또는 MCP runner가 축별 deep brief를 생성합니다.
                </p>
                <p>
                  <strong className="text-body-strong">Archive:</strong> 결과는
                  Obsidian DB에 저장해 추후 모니터링과 전략 업데이트에 씁니다.
                </p>
              </div>
            </div>
          </section>

          <section id="agents" className="mt-6 rounded-xl bg-surface-soft p-5 md:p-8">
            <SectionHeader
              eyebrow="Agent layer"
              title="8개 분석 축\n병렬 리서치"
              description="각 에이전트는 12개 이상 상세 발견사항, 12개 이상 근거, 8행 이상 비교표, 갭, 캐치업 액션을 같은 형식으로 반환합니다."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {baseAgents.map((agent) => (
                <AgentCard key={agent.name} agent={agent} />
              ))}
            </div>
          </section>

          <section id="report" className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.75fr]">
            <div className="rounded-xl bg-canvas p-5 md:p-8">
              <SectionHeader
                eyebrow="Report architecture"
                title="상세 보고서와 임원 슬라이드가 같은 근거에서 나옵니다."
                description="전략 의사결정용 요약과 R&D 후속 과제용 세부 근거가 분리됩니다."
              />
              <div className="mt-8 grid gap-3">
                {reportSections.map((section, index) => (
                  <div
                    key={section}
                    className="flex items-center gap-4 rounded-lg border border-hairline bg-surface-soft p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-card text-sm font-semibold text-muted">
                      {index + 1}
                    </span>
                    <p className="text-sm font-medium text-body-strong">{section}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-xl bg-primary p-8 text-on-primary">
              <Sparkles size={28} />
              <h3 className="mt-6 whitespace-pre-line font-display text-[32px] leading-[1.16] tracking-[-0.02em]">
                MCP 실행
                {"\n"}Runner 연결
              </h3>
              <p className="mt-4 leading-7 text-white/90">
                이 프론트엔드는 입력과 출력 구조를 안정화합니다. 이후 Tavily 검색, Firecrawl 추출, 보고서 저장을 연결하면 정기 모니터링형 시스템으로 확장할 수 있습니다.
              </p>
              <div className="mt-8 grid gap-3">
                <CalloutRow icon={Search} text="Tavily discovery queue" />
                <CalloutRow icon={FileText} text="Firecrawl extraction plan" />
                <CalloutRow icon={GitBranch} text="Agent brief synthesis" />
                <CalloutRow icon={LineChart} text="Quarterly monitoring delta" />
              </div>
            </aside>
          </section>

          <section
            id="assets"
            className="mt-6 rounded-xl bg-surface-dark p-5 text-on-dark md:p-8"
          >
            <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-start">
              <div>
                <span className="inline-flex rounded-full bg-surface-dark-elevated px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-on-dark-soft">
                  Local workflow assets
                </span>
                <h2 className="mt-4 whitespace-pre-line font-display text-[32px] leading-[1.16] tracking-[-0.02em] md:text-[40px]">
                  로컬 실행 자산
                  {"\n"}연결 구조
                </h2>
                <p className="mt-4 leading-7 text-on-dark-soft">
                  다음 구현 단계에서는 이 파일들을 읽어 실제 Tavily 검색과 Firecrawl 추출을 실행하는 runner를 붙이면 됩니다.
                </p>
              </div>
              <div className="grid gap-3 font-mono text-sm text-on-dark-soft">
                <AssetPath path="workflows/us-unitary-scroll-compressor/topic.yaml" />
                <AssetPath path="workflows/us-unitary-scroll-compressor/workflow.yaml" />
                <AssetPath path="workflows/us-unitary-scroll-compressor/agents/*.md" />
                <AssetPath path="schemas/agent-output.schema.json" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function FormPanel({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-lg border border-hairline bg-canvas p-5">
      <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-ink">{title}</h2>
          <p className="mt-1 text-sm text-muted">{description}</p>
        </div>
      </div>
      <div className="grid gap-4">{children}</div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-body-strong">{label}</span>
      {children}
    </label>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <span className="inline-flex rounded-full bg-surface-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          {eyebrow}
        </span>
        <h2 className="mt-4 max-w-2xl whitespace-pre-line text-balance font-display text-[32px] leading-[1.16] tracking-[-0.02em] md:text-[40px]">
          {title}
        </h2>
      </div>
      <p className="max-w-md text-sm leading-6 text-muted">{description}</p>
    </div>
  );
}

function StatusLine({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-body">
      <CheckCircle2 className="text-success" size={16} />
      <span>{label}</span>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-canvas p-3">
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-1 font-display text-2xl tracking-[-0.02em] text-ink">
        {value}
      </p>
    </div>
  );
}

function OutputMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-surface-dark-elevated p-4">
      <p className="text-xs uppercase tracking-[0.12em] text-on-dark-soft">
        {label}
      </p>
      <p className="mt-2 font-display text-2xl tracking-[-0.02em] text-on-dark">
        {value}
      </p>
    </div>
  );
}

function AgentCard({ agent }: { agent: Agent }) {
  const Icon = agent.icon;

  return (
    <article className="rounded-lg bg-surface-card p-6">
      <div className="flex items-start justify-between gap-4">
        <div className={`h-2 w-10 rounded-full ${agent.accent}`} />
        <Icon className="text-muted" size={20} />
      </div>
      <h3 className="mt-6 text-lg font-semibold text-ink">{agent.name}</h3>
      <p className="mt-3 text-sm leading-6 text-body">{agent.mission}</p>
      <div className="mt-5 flex items-center gap-2 text-sm font-medium text-primary">
        <ClipboardList size={16} />
        <span>{agent.output}</span>
      </div>
    </article>
  );
}

function CalloutRow({ icon, text }: { icon: typeof Search; text: string }) {
  const Icon = icon;

  return (
    <div className="flex items-center gap-3 rounded-lg bg-white/[0.12] px-4 py-3 text-sm font-medium">
      <Icon size={17} />
      <span>{text}</span>
      <ArrowRight className="ml-auto" size={16} />
    </div>
  );
}

function AssetPath({ path }: { path: string }) {
  return <div className="rounded-lg bg-surface-dark-soft px-4 py-3">{path}</div>;
}

export default App;
