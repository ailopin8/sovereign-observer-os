const screens = {
  overview: {
    navLabel: "Overview",
    navIcon: "▦",
    headerEyebrow: "Operational Tier 1 · ID: X-VSM-99-ALPHA",
    title: "Viability Index: 94.2%",
    description:
      "Recursive Level 0 monitoring active. Systems 1 through 5 are in nominal sync. Future projections indicate stability for the next 72 observation cycles.",
    metrics: [
      { label: "System Load", value: "24.8 TFLOPS", tone: "secondary" },
      { label: "Latency", value: "14ms", tone: "primary" },
    ],
  },
  operations: {
    navLabel: "Operations",
    navIcon: "✦",
    headerEyebrow: "System 1",
    title: "Operations & Production",
    description:
      "Real-time surveillance of autonomous operational units. Monitoring output velocity against theoretical capacity limits.",
    metrics: [
      { label: "Global Efficiency", value: "92.4%", tone: "secondary" },
      { label: "Active Nodes", value: "12 / 14", tone: "primary" },
    ],
  },
  coordination: {
    navLabel: "Coordination",
    navIcon: "⇄",
    headerEyebrow: "Strategic Command Interface",
    title: "Coordination, Control & Intelligence",
    description: "Internal monitoring, oscillation damping, environmental scanning, and temporal synchronization across recursive systems.",
    metrics: [
      { label: "Environmental Stability", value: "94.2%", tone: "secondary" },
      { label: "Resource Efficacy", value: "88.7%", tone: "primary" },
    ],
  },
  control: {
    navLabel: "Control",
    navIcon: "▣",
    headerEyebrow: "System 3",
    title: "Resource Synergy Control",
    description:
      "A focused control layer for allocation, audit, bargaining, and intervention across live operational nodes.",
    metrics: [
      { label: "Audit Closure", value: "97.1%", tone: "secondary" },
      { label: "Variance", value: "3.2%", tone: "tertiary" },
    ],
  },
  intelligence: {
    navLabel: "Intelligence",
    navIcon: "⋇",
    headerEyebrow: "System 4",
    title: "Environmental Adaptation",
    description:
      "Strategic sensing surfaces weak signals, market pulse, environmental volatility, and forward projection across adjacent environments.",
    metrics: [
      { label: "Horizon Confidence", value: "81.6%", tone: "secondary" },
      { label: "Risk Heat", value: "Low", tone: "primary" },
    ],
  },
  policy: {
    navLabel: "Policy",
    navIcon: "∿",
    headerEyebrow: "System 5: Identity Anchor",
    title: "The Sovereignty of Equilibrium",
    description:
      "Our purpose is to orchestrate the recursive balance between tactical agility and strategic foresight, ensuring the system evolves toward its highest functional potential.",
    metrics: [
      { label: "Current System Ethos", value: "Resilient Evolution", tone: "secondary" },
      { label: "Viability Index", value: "94.2%", tone: "primary" },
    ],
  },
};

const overviewData = {
  policy: {
    kicker: "System 5: Policy",
    title: "Normative Governance",
    summary:
      "System 5 is maintaining closure between Intelligence (S4) and Control (S3). No identity drift detected.",
    statusLabel: "Identity Coherence",
    statusValue: "Optimal",
    progress: 98,
  },
  intelligence: {
    kicker: "System 4: Intelligence",
    title: "Environmental Adaptation",
    badge: "Nominal Scan",
    stats: [
      { label: "Market Pulse", value: "+12.4%" },
      { label: "Risk Assessment", value: "Low", tone: "secondary" },
      { label: "External Stability", value: "Fluctuating", tone: "tertiary" },
    ],
  },
  control: [
    { label: "Operational Audit", value: "Complete" },
    { label: "Resource Allocation", value: "Balanced" },
  ],
  coordinationBars: [48, 62, 42, 18, 71, 51, 0],
  nodes: [
    {
      title: "Alpha-Core Protocol",
      copy: "Processing recursive data streams for regional nodes.",
      meta: "99.8% uptime",
      status: "Healthy",
      tone: "secondary",
    },
    {
      title: "Beta-Network Mesh",
      copy: "Inter-system coordination layer active. No collisions detected.",
      meta: "Synchronizing",
      status: "Live",
      tone: "primary",
    },
    {
      title: "Gamma-Standby Unit",
      copy: "Auto-scaling group awaiting system demand spike.",
      meta: "Idle",
      status: "Reserve",
      tone: "tertiary",
      dimmed: true,
    },
  ],
};

const operationsData = {
  gauge: { value: 88, output: "4,280 OPS/S", capacity: "5,000 OPS/S" },
  logistics: { output: "640 units/h", delta: "-12%" },
  registry: [
    { title: "Bio-Metric Monitoring", subtitle: "ID: UNIT-091-X", status: "Optimal", tone: "secondary", performance: 94.2, demand: "0.02%" },
    { title: "Resource Extraction", subtitle: "ID: UNIT-442-B", status: "Pressure", tone: "tertiary", performance: 76.8, demand: "12.45%" },
    { title: "Synapse Relay Systems", subtitle: "ID: UNIT-102-Y", status: "Optimal", tone: "secondary", performance: 91.6, demand: "0.00%" },
    { title: "Core Integrity Leak", subtitle: "ID: UNIT-ERR-0", status: "Offline", tone: "error", performance: 0.0, demand: "100.0%" },
  ],
  insights: [
    {
      title: "Strategic Operational Insight",
      copy: "Unit 442-B is exhibiting signs of oscillatory behavior. Recommend initiating Coordination (System 2) protocol to dampen throughput fluctuations before System 3 intervention is required.",
    },
    {
      title: "Efficiency Forecast",
      copy: "Current trajectory suggests a 4.2% increase in global productivity over the next 24 hours as relay systems achieve thermal equilibrium.",
    },
  ],
};

const coordinationData = {
  bargaining: [
    { label: "System 1: Production", used: 72, tone: "secondary" },
    { label: "System 1: Logistics", used: 45, tone: "primary" },
  ],
  auditTrail: [
    { title: "Policy Compliance Check", copy: "System 1 Node B aligned with Recursive Level 0 directives", time: "14:22:01", tone: "secondary" },
    { title: "Autonomy Threshold Warning", copy: "System 1 Node A reports 12% drift from operational norms", time: "13:45:12", tone: "tertiary" },
    { title: "Anti-Oscillation Cycle", copy: "System 2 protocol injected to resolve inter-unit resource conflict", time: "11:02:57", tone: "primary" },
  ],
  projections: [
    { label: "Target State", value: "Optimized", copy: "Probability stable at 86%" },
    { label: "Control Feedback Loop", value: "Active", copy: "Neural monitor consuming 8.2 GB/s" },
  ],
  timeline: [
    { label: "T-Minus 4H", copy: "Operational baseline sync", active: true },
    { label: "Current", copy: "Bargaining cycle" },
    { label: "T-Plus 12H", copy: "System 4 scan update" },
    { label: "T-Plus 48H", copy: "Strategic realignment" },
    { label: "T-Plus 7D", copy: "Policy review" },
  ],
};

const policyData = {
  directives: [
    {
      title: "01. Identity Persistence",
      copy: 'Maintaining the core architectural integrity across all recursive layers, ensuring "who we are" remains constant despite environmental flux.',
    },
    {
      title: "02. Viability Mandate",
      copy: "Prioritizing systemic health over localized optimization. Success is measured by long-term adaptation capacity, not short-term gain.",
    },
  ],
  scorecards: {
    internal: [
      { label: "System 1-3 Harmony", value: "Optimal", tone: "secondary" },
      { label: "Resource Autonomy", value: "88%", tone: "secondary" },
      { label: "Policy Compliance", value: "Review Req.", tone: "tertiary" },
    ],
    external: [
      { label: "Environment Scanning", value: "Active", tone: "secondary" },
      { label: "Strategic Alignment", value: "High", tone: "secondary" },
      { label: "Innovation Velocity", value: "Accelerating", tone: "secondary" },
    ],
  },
  horizons: [
    {
      horizon: "Horizon 1",
      title: "Cognitive Infrastructure",
      copy: "Implementing deep-learning layers across System 4 nodes to predict environmental shifts two cycles earlier.",
    },
    {
      horizon: "Horizon 2",
      title: "Redundant Coordination",
      copy: "Decentralizing System 2 protocols to prevent cascading failures during phase transitions.",
    },
    {
      horizon: "Horizon 3",
      title: "Symbiotic Expansion",
      copy: "Mapping adjacent organizational niches for autonomous System 1 branch deployment.",
    },
  ],
};

const controlData = {
  audits: [
    { label: "Operational Audit", value: "Complete", tone: "secondary" },
    { label: "Resource Allocation", value: "Balanced", tone: "primary" },
    { label: "Intervention Thresholds", value: "Tightened", tone: "tertiary" },
  ],
  bargaining: [
    { label: "Production Share", used: 64, tone: "secondary" },
    { label: "Logistics Share", used: 37, tone: "primary" },
    { label: "Recovery Buffer", used: 21, tone: "tertiary" },
  ],
};

const intelligenceData = {
  forecasts: [
    { label: "Market Pulse", value: "+12.4%", copy: "Momentum remains constructive across monitored environments." },
    { label: "External Stability", value: "Fluctuating", copy: "Edge volatility detected in three adjacent sectors." },
    { label: "Risk Assessment", value: "Low", copy: "No existential threats across the current horizon." },
  ],
  signals: [
    { title: "Weak Signal Detected", copy: "Recruitment pressure rising in adjacent ecosystems." },
    { title: "Narrative Drift", copy: "External sentiment diverging from internal optimization assumptions." },
  ],
};

const designState = {
  prompt:
    "Design a 12-agent crisis response organization for a university incident with strong coordination, legal review, communications control, and human approval on public statements.",
  schema: null,
};

const sideNav = document.querySelector("#sideNav");
const pageTitle = document.querySelector("#pageTitle");
const pageDescription = document.querySelector("#pageDescription");
const headerEyebrow = document.querySelector("#headerEyebrow");
const headerMetrics = document.querySelector("#headerMetrics");
const pageContent = document.querySelector("#pageContent");
const searchResults = document.querySelector("#searchResults");
const globalSearch = document.querySelector("#globalSearch");
const healthModal = document.querySelector("#healthModal");
const healthModalContent = document.querySelector("#healthModalContent");
const healthCheckButton = document.querySelector("#healthCheckButton");
const closeModalButton = document.querySelector("#closeModalButton");
const mobileNavToggle = document.querySelector("#mobileNavToggle");
const sidebar = document.querySelector("#sidebar");
const topLinks = document.querySelectorAll(".top-link");

let currentScreen = "overview";

function metricToneClass(tone) {
  if (tone === "secondary") return "color: var(--secondary);";
  if (tone === "tertiary") return "color: var(--tertiary);";
  return "color: var(--primary);";
}

function renderSideNav() {
  sideNav.innerHTML = Object.entries(screens)
    .map(
      ([key, screen]) => `
        <button class="nav-item ${key === currentScreen ? "active" : ""}" data-screen="${key}">
          <span class="nav-glyph">${screen.navIcon}</span>
          <span>${screen.navLabel}</span>
        </button>
      `
    )
    .join("");
}

function renderHeader() {
  const screen = screens[currentScreen];
  headerEyebrow.textContent = screen.headerEyebrow;
  pageTitle.textContent = screen.title;
  pageDescription.textContent = screen.description;
  headerMetrics.innerHTML = screen.metrics
    .map(
      (metric) => `
        <article class="header-metric">
          <p class="metric-label">${metric.label}</p>
          <p class="metric-number" style="${metricToneClass(metric.tone)}">${metric.value}</p>
        </article>
      `
    )
    .join("");

  topLinks.forEach((link) => link.classList.toggle("active", link.dataset.screen === currentScreen));
}

function renderOverview() {
  return `
    <div class="grid cols-12">
      <section class="card policy" style="grid-column: span 4;">
        <p class="card-kicker">${overviewData.policy.kicker}</p>
        <h2 class="card-title">${overviewData.policy.title}</h2>
        <div class="status-row">
          <span>${overviewData.policy.statusLabel}</span>
          <strong style="color: var(--secondary);">${overviewData.policy.statusValue}</strong>
        </div>
        <div class="bar-track"><div class="bar-fill tertiary" style="width:${overviewData.policy.progress}%"></div></div>
        <p class="card-copy">${overviewData.policy.summary}</p>
      </section>

      <section class="card intelligence" style="grid-column: span 8;">
        <div class="info-row">
          <div>
            <p class="card-kicker">${overviewData.intelligence.kicker}</p>
            <h2 class="card-title">${overviewData.intelligence.title}</h2>
          </div>
          <span class="badge secondary">${overviewData.intelligence.badge}</span>
        </div>
        <div class="mini-grid">
          ${overviewData.intelligence.stats
            .map(
              (stat) => `
                <article class="mini-stat">
                  <p class="mini-label">${stat.label}</p>
                  <p class="mini-value" style="${metricToneClass(stat.tone || "primary")}">${stat.value}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="card" style="grid-column: span 5;">
        <p class="card-kicker">System 3: Control</p>
        <h2 class="card-title">Resource Synergy</h2>
        <div class="stack" style="margin-top: 1.1rem;">
          ${overviewData.control
            .map(
              (item) => `
                <div class="node-card">
                  <div>
                    <p class="row-title">${item.label}</p>
                  </div>
                  <span class="badge ${item.value === "Complete" ? "secondary" : "primary"}">${item.value}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="card" style="grid-column: span 7;">
        <div class="info-row">
          <div>
            <p class="card-kicker">System 1: Operations</p>
            <h2 class="card-title">Active Primary Nodes</h2>
          </div>
          <button class="ghost-button">Manage Cluster</button>
        </div>
        <div class="node-list" style="margin-top: 1rem;">
          ${overviewData.nodes
            .map(
              (node) => `
                <article class="node-card ${node.dimmed ? "dimmed" : ""}">
                  <div>
                    <p class="row-title">${node.title}</p>
                    <p class="row-subtitle">${node.copy}</p>
                  </div>
                  <div style="text-align:right;">
                    <span class="badge ${node.tone}">${node.status}</span>
                    <p class="row-subtitle" style="margin-top:0.5rem;">${node.meta}</p>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="card" style="grid-column: span 5;">
        <p class="card-kicker">System 2: Coordination</p>
        <h2 class="card-title">Oscillation Damping</h2>
        <div class="chart-bars">
          ${overviewData.coordinationBars
            .map((height) => `<span style="height:${height}px;"></span>`)
            .join("")}
        </div>
        <p class="subtle-text">Conflict resolution frequency: 0.02Hz</p>
      </section>

      <section class="card intelligence" style="grid-column: span 7;">
        <div class="info-row">
          <div>
            <p class="card-kicker">Natural Language Design Studio</p>
            <h2 class="card-title">Generate Organization Schema</h2>
          </div>
          <span class="badge primary">Schema Draft</span>
        </div>
        <p class="subtle-text">Describe a viable organization in plain language and compile it into a structured operational schema.</p>
        <div class="design-studio" style="margin-top: 1rem;">
          <label class="prompt-shell">
            <span class="mini-label">Mission Prompt</span>
            <textarea id="designPromptInput" class="prompt-input" rows="5" placeholder="Design a lean 8-agent consulting organization with strong audit, low spend, and weekly strategic review.">${designState.prompt}</textarea>
          </label>
          <div class="split-actions">
            <button id="generateSchemaButton" class="cta-button">Generate Schema</button>
            <button class="ghost-button schema-hint" data-prompt="Create a product, operations, intelligence, and audit structure for an AI SaaS company with moderate autonomy and strict deployment approvals.">AI SaaS</button>
            <button class="ghost-button schema-hint" data-prompt="Design a 10-agent university crisis communications organization with legal review, coordination control, and human approval on public statements.">Crisis comms</button>
            <button class="ghost-button schema-hint" data-prompt="Set up a lean consulting mesh with delivery, audit, finance, and strategy units, low budget, and weekly executive review.">Consulting mesh</button>
          </div>
        </div>
      </section>

      <section class="card" style="grid-column: span 5;">
        <div class="info-row">
          <div>
            <p class="card-kicker">Compiled Summary</p>
            <h2 class="card-title">${designState.schema ? designState.schema.name : "Awaiting schema"}</h2>
          </div>
          <span class="badge secondary">${designState.schema ? `${designState.schema.agentCount} agents` : "Idle"}</span>
        </div>
        ${
          designState.schema
            ? `
              <div class="schema-summary-grid">
                <article class="mini-stat">
                  <p class="mini-label">Domain</p>
                  <p class="mini-value">${designState.schema.domain}</p>
                </article>
                <article class="mini-stat">
                  <p class="mini-label">Budget</p>
                  <p class="mini-value">${designState.schema.budget.profile}</p>
                </article>
                <article class="mini-stat">
                  <p class="mini-label">Autonomy</p>
                  <p class="mini-value">${designState.schema.autonomy.mode}</p>
                </article>
                <article class="mini-stat">
                  <p class="mini-label">Recursion</p>
                  <p class="mini-value">${designState.schema.recursion.enabled ? `Depth ${designState.schema.recursion.depth}` : "Flat"}</p>
                </article>
                <article class="mini-stat">
                  <p class="mini-label">Unit Count</p>
                  <p class="mini-value">${designState.schema.unitCount}</p>
                </article>
                <article class="mini-stat">
                  <p class="mini-label">Connections</p>
                  <p class="mini-value">${designState.schema.connectionCount}</p>
                </article>
              </div>
              <div class="stack" style="margin-top: 1rem;">
                <article class="schema-chip-row">
                  <p class="mini-label">Primary Units</p>
                  <div class="chip-list">${designState.schema.units.map((unit) => `<span class="badge ${unit.tone}">${unit.name}</span>`).join("")}</div>
                </article>
                <article class="schema-chip-row">
                  <p class="mini-label">Recursive Structure</p>
                  <div class="tree-shell">
                    <ul class="tree-root">${renderRecursiveTree(designState.schema.units)}</ul>
                  </div>
                </article>
                <article class="schema-chip-row">
                  <p class="mini-label">Approvals</p>
                  <div class="chip-list">${designState.schema.approvals.map((item) => `<span class="badge tertiary">${item}</span>`).join("")}</div>
                </article>
                <article class="schema-chip-row">
                  <p class="mini-label">Causal & Systemic Links</p>
                  <div class="connection-list">
                    ${designState.schema.connections
                      .slice(0, 8)
                      .map(
                        (connection) => `
                          <div class="connection-item">
                            <div>
                              <p class="row-title">${connection.fromName} → ${connection.toName}</p>
                              <p class="row-subtitle">${connection.reason}</p>
                            </div>
                            <div style="text-align:right;">
                              <span class="badge ${connection.mode === "systemic" ? "primary" : "secondary"}">${connection.mode}</span>
                              <p class="row-subtitle" style="margin-top:0.4rem;">${connection.strength}</p>
                            </div>
                          </div>
                        `
                      )
                      .join("")}
                  </div>
                </article>
                <article class="schema-chip-row">
                  <p class="mini-label">Warnings</p>
                  <div class="stack">
                    ${designState.schema.warnings.map((warning) => `<p class="subtle-text">${warning}</p>`).join("")}
                  </div>
                </article>
              </div>
            `
            : `<p class="subtle-text">Run the generator to compile a draft organization schema from your mission prompt.</p>`
        }
      </section>

      <section class="card" style="grid-column: span 12;">
        <div class="info-row">
          <div>
            <p class="card-kicker">Schema JSON</p>
            <h2 class="section-title">Operational Draft</h2>
          </div>
          <span class="badge ${designState.schema ? "secondary" : "primary"}">${designState.schema ? "Compiled" : "Empty"}</span>
        </div>
        <pre class="schema-code">${designState.schema ? escapeHtml(JSON.stringify(designState.schema, null, 2)) : "{\n  \"status\": \"awaiting-input\"\n}"}</pre>
      </section>
    </div>

    <div class="dock">
      <div class="dock-item"><span class="live-dot"></span><strong>System Live</strong></div>
      <div class="dock-item">Terminal</div>
      <div class="dock-item">Security</div>
      <div class="dock-item">Logs</div>
    </div>
  `;
}

function renderOperations() {
  return `
    <div class="grid cols-12">
      <section class="card" style="grid-column: span 8;">
        <div class="info-row">
          <div>
            <h2 class="section-title">Neural Processing Core</h2>
            <p class="subtle-text">Primary Operational Unit Alpha</p>
          </div>
          <span class="badge secondary">Stable</span>
        </div>
        <div class="grid" style="grid-template-columns: 11rem 1fr; align-items:center; margin-top: 1rem;">
          <div class="gauge-shell">
            <div class="gauge-inner">
              <div>
                <strong>${operationsData.gauge.value}%</strong>
                <span class="tiny-label">Utilization</span>
              </div>
            </div>
          </div>
          <div class="stack">
            <div>
              <div class="status-row">
                <span>Current Output</span>
                <strong>${operationsData.gauge.output}</strong>
              </div>
              <div class="bar-track"><div class="bar-fill secondary" style="width:${operationsData.gauge.value}%"></div></div>
            </div>
            <div>
              <div class="status-row">
                <span>Theoretical Capacity</span>
                <strong>${operationsData.gauge.capacity}</strong>
              </div>
              <div class="bar-track"><div class="bar-fill primary" style="width:100%; opacity:0.2;"></div></div>
            </div>
            <button class="soft-button" style="justify-self:start;">Full Node Diagnostics</button>
          </div>
        </div>
      </section>

      <section class="card policy" style="grid-column: span 4;">
        <div class="info-row">
          <div>
            <p class="card-kicker">Logistics</p>
            <h2 class="section-title">Logistics Flux</h2>
          </div>
          <span class="badge tertiary">Adaptation Req</span>
        </div>
        <p class="subtle-text">Internal distribution channel latency increasing.</p>
        <div class="mini-grid" style="grid-template-columns: repeat(2, minmax(0, 1fr));">
          <article class="mini-stat">
            <p class="mini-label">Output</p>
            <p class="mini-value">${operationsData.logistics.output}</p>
          </article>
          <article class="mini-stat">
            <p class="mini-label">Delta</p>
            <p class="mini-value" style="color: var(--tertiary);">${operationsData.logistics.delta}</p>
          </article>
        </div>
      </section>

      <section class="table-shell" style="grid-column: span 12;">
        <div class="info-row" style="padding: 1.1rem;">
          <h2 class="section-title">Operational Units Registry</h2>
          <div class="registry-actions">
            <button class="ghost-button">Export Data</button>
            <button class="cta-button">Re-Sync All</button>
          </div>
        </div>
        <div class="table-head">
          <span>System Node</span>
          <span>Status</span>
          <span>Performance / Capacity</span>
          <span>Latent Demand</span>
          <span>Action</span>
        </div>
        <div class="table-body">
          ${operationsData.registry
            .map(
              (row) => `
                <article class="registry-row">
                  <div>
                    <p class="row-title">${row.title}</p>
                    <p class="row-subtitle">${row.subtitle}</p>
                  </div>
                  <div><span class="badge ${row.tone}">${row.status}</span></div>
                  <div>
                    <div class="status-row"><span>${row.performance.toFixed(1)}%</span></div>
                    <div class="spark-line"><span style="width:${row.performance}%"></span></div>
                  </div>
                  <div>${row.demand}</div>
                  <div style="font-size: 1.2rem; color: var(--text-muted);">↗</div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="insight-grid" style="grid-column: span 12; grid-template-columns: repeat(2, minmax(0, 1fr));">
        ${operationsData.insights
          .map(
            (insight, index) => `
              <article class="insight-card" style="${index === 0 ? "background: rgba(0, 76, 86, 0.15);" : ""}">
                <h2 class="section-title">${insight.title}</h2>
                <p class="subtle-text">${insight.copy}</p>
              </article>
            `
          )
          .join("")}
      </section>
    </div>
  `;
}

function renderCoordination() {
  return `
    <div class="grid cols-12">
      <section class="card" style="grid-column: span 7;">
        <div class="info-row">
          <h2 class="section-title">Internal Monitoring Hub (System 2 & 3)</h2>
          <span class="badge primary">Live Control</span>
        </div>
        <div class="mini-grid" style="grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 1rem;">
          <article class="mini-stat">
            <p class="mini-label">Resource Bargaining</p>
            <h3 class="section-title">Operational Allotment</h3>
            <div class="stack" style="margin-top: 0.75rem;">
              ${coordinationData.bargaining
                .map(
                  (item) => `
                    <div>
                      <div class="status-row">
                        <span>${item.label}</span>
                        <strong>Used: ${item.used}%</strong>
                      </div>
                      <div class="bar-track"><div class="bar-fill ${item.tone}" style="width:${item.used}%"></div></div>
                    </div>
                  `
                )
                .join("")}
            </div>
          </article>
          <article class="mini-stat">
            <p class="mini-label">Coordination Logic</p>
            <h3 class="section-title">Oscillation Control</h3>
            <div style="height: 5rem; display:grid; place-items:center; color: var(--tertiary); font-family:'Space Grotesk', sans-serif;">
              ~~~ ∿ ~~~
            </div>
            <p class="tiny-label" style="color: var(--tertiary);">Damping Ratio: 0.84</p>
          </article>
        </div>
        <div class="audit-list" style="margin-top: 1rem;">
          <p class="card-kicker">Control Audit Trail</p>
          ${coordinationData.auditTrail
            .map(
              (item) => `
                <article class="audit-item">
                  <div class="info-row">
                    <div>
                      <p class="row-title">${item.title}</p>
                      <p class="row-subtitle">${item.copy}</p>
                    </div>
                    <div style="text-align:right;">
                      <span class="badge ${item.tone}">${item.time}</span>
                    </div>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="card policy" style="grid-column: span 5;">
        <div class="info-row">
          <div>
            <h2 class="section-title">Intelligence Hub (System 4)</h2>
            <p class="subtle-text">Adaptation layer with forward projection.</p>
          </div>
          <span class="badge tertiary">Horizon 2025</span>
        </div>
        <div class="floating-panel" style="margin-top: 1rem; padding: 1.2rem; background: rgba(255,255,255,0.03); border-radius: var(--radius-lg); min-height: 18rem; position: relative;">
          <div style="position:absolute; inset: 1rem; border: 1px solid rgba(255,255,255,0.06);"></div>
          <div style="position:absolute; inset: 50% auto auto 1rem; right: 1rem; height: 1px; background: rgba(255,255,255,0.06);"></div>
          <div style="position:absolute; left: 50%; top: 1rem; bottom: 1rem; width: 1px; background: rgba(255,255,255,0.06);"></div>
          <div style="position:absolute; left: 20%; top: 34%; width: 0.65rem; height: 0.65rem; border-radius:999px; background: var(--tertiary); box-shadow: 0 0 18px rgba(255,186,39,0.45);"></div>
          <div style="position:absolute; left: 44%; top: 57%; width: 0.45rem; height: 0.45rem; border-radius:999px; background: var(--secondary); box-shadow: 0 0 12px rgba(149,212,179,0.45);"></div>
          <div style="position:absolute; right: 1.5rem; bottom: 2.3rem; text-align:right;">
            <p class="card-kicker">System 4</p>
            <h3 class="card-title">Adaptation Layer</h3>
          </div>
        </div>
        <div class="forecast-list" style="margin-top: 1rem;">
          ${coordinationData.projections
            .map(
              (item) => `
                <article class="forecast-card">
                  <p class="mini-label">${item.label}</p>
                  <p class="mini-value">${item.value}</p>
                  <p class="subtle-text">${item.copy}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="card" style="grid-column: span 12;">
        <h2 class="section-title">System Temporal Synchronization</h2>
        <div class="temporal-line">
          ${coordinationData.timeline
            .map(
              (step) => `
                <article class="timeline-step ${step.active ? "active" : ""}">
                  <p class="mini-label">${step.label}</p>
                  <p class="subtle-text">${step.copy}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderPolicy() {
  return `
    <div class="grid cols-12">
      <section class="card" style="grid-column: span 8;">
        <div class="info-row">
          <div>
            <p class="card-kicker">Constitutional Directives</p>
            <h2 class="card-title">The Sovereignty of Equilibrium</h2>
          </div>
          <span class="badge tertiary">Identity Anchor</span>
        </div>
        <div class="mini-grid" style="grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 1rem;">
          ${policyData.directives
            .map(
              (directive) => `
                <article class="mini-stat">
                  <p class="mini-label">${directive.title}</p>
                  <p class="subtle-text">${directive.copy}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="card" style="grid-column: span 4;">
        <p class="card-kicker">Viability Index</p>
        <h2 class="card-title" style="font-size: 4rem;">94.2<span style="font-size: 1.5rem; color: var(--secondary);">%</span></h2>
        <p class="subtle-text">Aggregate systemic health score</p>
        <div class="status-row" style="margin-top: 1rem;">
          <span style="color: var(--secondary);">+1.4% from last cycle</span>
        </div>
        <div class="bar-track"><div class="bar-fill secondary" style="width:94.2%"></div></div>
      </section>

      <section class="card" style="grid-column: span 6;">
        <p class="card-kicker">Internal Perspective (Stability)</p>
        <div class="stack" style="margin-top: 1rem;">
          ${policyData.scorecards.internal
            .map(
              (item) => `
                <article class="node-card">
                  <p class="row-title">${item.label}</p>
                  <span class="badge ${item.tone}">${item.value}</span>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="card" style="grid-column: span 6;">
        <p class="card-kicker">External Perspective (Adaptation)</p>
        <div class="stack" style="margin-top: 1rem;">
          ${policyData.scorecards.external
            .map(
              (item) => `
                <article class="node-card">
                  <p class="row-title">${item.label}</p>
                  <span class="badge ${item.tone}">${item.value}</span>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="horizon-grid" style="grid-column: span 12; grid-template-columns: repeat(3, minmax(0, 1fr));">
        ${policyData.horizons
          .map(
            (item) => `
              <article class="horizon-card">
                <p class="mini-label">${item.horizon}</p>
                <h2 class="section-title">${item.title}</h2>
                <p class="subtle-text">${item.copy}</p>
              </article>
            `
          )
          .join("")}
      </section>

      <section class="policy-footer" style="grid-column: span 12;">
        <div>System Time · 2024.11.23 09:42:01</div>
        <div style="color: var(--secondary);">Node Status · Synchronized</div>
        <div>Policy Authenticator · Sig 0xBF22...DE81</div>
      </section>
    </div>
  `;
}

function renderControl() {
  return `
    <div class="grid cols-12">
      <section class="card" style="grid-column: span 7;">
        <div class="info-row">
          <div>
            <p class="card-kicker">System 3 · Control</p>
            <h2 class="card-title">Resource Synergy</h2>
          </div>
          <span class="badge primary">Balanced</span>
        </div>
        <div class="stack" style="margin-top: 1rem;">
          ${controlData.audits
            .map(
              (item) => `
                <article class="node-card">
                  <p class="row-title">${item.label}</p>
                  <span class="badge ${item.tone}">${item.value}</span>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="card" style="grid-column: span 5;">
        <p class="card-kicker">Operational Bargaining</p>
        <h2 class="card-title">Allocation Surface</h2>
        <div class="stack" style="margin-top: 1rem;">
          ${controlData.bargaining
            .map(
              (item) => `
                <div>
                  <div class="status-row">
                    <span>${item.label}</span>
                    <strong>${item.used}%</strong>
                  </div>
                  <div class="bar-track"><div class="bar-fill ${item.tone}" style="width:${item.used}%"></div></div>
                </div>
              `
            )
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderIntelligence() {
  return `
    <div class="grid cols-12">
      <section class="card intelligence" style="grid-column: span 8;">
        <div class="info-row">
          <div>
            <p class="card-kicker">System 4 · Intelligence</p>
            <h2 class="card-title">Environmental Adaptation</h2>
          </div>
          <span class="badge secondary">Nominal Scan</span>
        </div>
        <div class="mini-grid">
          ${intelligenceData.forecasts
            .map(
              (item) => `
                <article class="mini-stat">
                  <p class="mini-label">${item.label}</p>
                  <p class="mini-value">${item.value}</p>
                  <p class="subtle-text">${item.copy}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="card" style="grid-column: span 4;">
        <p class="card-kicker">Weak Signal Board</p>
        <div class="stack" style="margin-top: 1rem;">
          ${intelligenceData.signals
            .map(
              (signal) => `
                <article class="forecast-card">
                  <h2 class="section-title">${signal.title}</h2>
                  <p class="subtle-text">${signal.copy}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderScreenContent() {
  switch (currentScreen) {
    case "operations":
      return renderOperations();
    case "coordination":
      return renderCoordination();
    case "control":
      return renderControl();
    case "intelligence":
      return renderIntelligence();
    case "policy":
      return renderPolicy();
    default:
      return renderOverview();
  }
}

function renderPage() {
  renderSideNav();
  renderHeader();
  pageContent.innerHTML = renderScreenContent();
  attachScreenInteractions();
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function findAgentCount(prompt) {
  const match = prompt.match(/\b(\d{1,3})\s*[- ]?(agent|agents|node|nodes|unit|units|person|people)\b/);
  return match ? Number(match[1]) : 8;
}

function parseBudget(prompt) {
  if (/(low spend|low cost|lean|conservative budget|guarded)/.test(prompt)) {
    return { profile: "Lean", monthlyUsd: 1500, tokenPolicy: "Constrained routing" };
  }
  if (/(enterprise|high spend|premium|high budget|expansive)/.test(prompt)) {
    return { profile: "Expansive", monthlyUsd: 12000, tokenPolicy: "High-reliability routing" };
  }
  return { profile: "Balanced", monthlyUsd: 4200, tokenPolicy: "Tiered routing" };
}

function parseAutonomy(prompt) {
  if (/(strict|human approval|human-in-loop|approval control|approval controls|manual sign-off)/.test(prompt)) {
    return { mode: "Constrained", escalationBias: "Human-first" };
  }
  if (/(high autonomy|fully autonomous|autonomous)/.test(prompt)) {
    return { mode: "Expansive", escalationBias: "Exception-only" };
  }
  return { mode: "Moderate", escalationBias: "Escalate on drift" };
}

function parseDomain(prompt) {
  if (/(crisis|incident|university|public statement|communications)/.test(prompt)) {
    return { key: "crisis", label: "Crisis Response", defaultName: "Crisis Coordination Office" };
  }
  if (/(consult|agency|client|services)/.test(prompt)) {
    return { key: "consulting", label: "Consulting", defaultName: "Lean Consulting Mesh" };
  }
  if (/(saas|product|support|deployment|ai company|software)/.test(prompt)) {
    return { key: "saas", label: "AI SaaS", defaultName: "AI SaaS Operating Constellation" };
  }
  return { key: "general", label: "Adaptive Operations", defaultName: "Viable Operations Network" };
}

function parseApprovals(prompt) {
  const approvals = [];
  if (/(public statement|communications|press|pr)/.test(prompt)) approvals.push("Public statements");
  if (/(legal|compliance)/.test(prompt)) approvals.push("Legal review");
  if (/(deploy|release|production)/.test(prompt)) approvals.push("Production deploys");
  if (/(budget|spend|procurement)/.test(prompt)) approvals.push("Budget changes");
  if (!approvals.length) approvals.push("Material policy exceptions");
  return approvals;
}

function parseEscalations(prompt) {
  const chain = ["S1 -> S2"];
  if (/(audit|quality)/.test(prompt)) chain.push("S2 -> S3*");
  if (/(strategy|intelligence|future)/.test(prompt)) chain.push("S3 -> S4");
  if (/(human approval|strict|policy|identity)/.test(prompt)) chain.push("S4 -> S5 / Human");
  else chain.push("S3 -> S5");
  return chain;
}

function detectRecursion(prompt, agentCount) {
  const explicitDepth = prompt.match(/\b(\d+)\s*(level|levels|layer|layers)\s+deep\b/);
  let depth = explicitDepth ? Math.max(1, Math.min(4, Number(explicitDepth[1]))) : 1;

  if (/\brecursive|fractal|nested|federated|regional clusters|multi-layer\b/.test(prompt)) {
    depth = Math.max(depth, agentCount >= 16 ? 3 : 2);
  }

  const enabled = depth > 1 || /\brecursive|fractal|nested|federated\b/.test(prompt);

  return {
    enabled,
    depth,
    branchingFactor: depth >= 3 ? 2 : 1,
  };
}

function buildUnits(prompt, domain, agentCount, recursion) {
  const unitLibrary = {
    operations: {
      name: "Operations Cell",
      system: "S1",
      tone: "secondary",
      keywords: /(operations|delivery|execution|production|support|response)/,
      responsibilities: ["execute work", "maintain throughput", "report operational variance"],
    },
    coordination: {
      name: "Coordination Bridge",
      system: "S2",
      tone: "primary",
      keywords: /(coordination|handoff|synchroni|cross-functional|conflict)/,
      responsibilities: ["resolve collisions", "route handoffs", "dampen oscillation"],
    },
    control: {
      name: "Control Desk",
      system: "S3",
      tone: "primary",
      keywords: /(control|budget|allocation|resource|finance)/,
      responsibilities: ["allocate resources", "monitor KPIs", "trigger intervention"],
    },
    audit: {
      name: "Audit Pulse",
      system: "S3*",
      tone: "tertiary",
      keywords: /(audit|compliance|quality|legal|review)/,
      responsibilities: ["independent review", "compliance checks", "variance verification"],
    },
    intelligence: {
      name: "Intelligence Signal Lab",
      system: "S4",
      tone: "secondary",
      keywords: /(intelligence|strategy|market|forecast|environment)/,
      responsibilities: ["scan environment", "publish forecasts", "surface weak signals"],
    },
    policy: {
      name: "Identity & Policy Council",
      system: "S5",
      tone: "tertiary",
      keywords: /(policy|identity|approval|human|governance)/,
      responsibilities: ["approve sensitive actions", "protect mission integrity", "govern escalation"],
    },
    communications: {
      name: "Communications Cell",
      system: "S1",
      tone: "primary",
      keywords: /(communications|pr|message|press|public statement)/,
      responsibilities: ["shape messaging", "manage narrative", "prepare approved responses"],
    },
  };

  const selected = [];
  Object.values(unitLibrary).forEach((unit) => {
    if (unit.keywords.test(prompt)) selected.push({ ...unit });
  });

  if (!selected.length) {
    selected.push(unitLibrary.operations, unitLibrary.coordination, unitLibrary.control, unitLibrary.intelligence);
  }

  const requiredSystems = ["S1", "S2", "S3"];
  requiredSystems.forEach((system) => {
    if (!selected.some((unit) => unit.system === system)) {
      const fallback = Object.values(unitLibrary).find((unit) => unit.system === system);
      selected.push({ ...fallback });
    }
  });

  if (domain.key === "crisis" && !selected.some((unit) => unit.name === "Communications Cell")) {
    selected.push({ ...unitLibrary.communications });
  }

  if (parseAutonomy(prompt).mode === "Constrained" && !selected.some((unit) => unit.system === "S5")) {
    selected.push({ ...unitLibrary.policy });
  }

  const perUnit = Math.max(1, Math.floor(agentCount / selected.length));
  let remainder = agentCount - perUnit * selected.length;

  const rootUnits = selected.map((unit, index) => {
    const allocated = perUnit + (remainder > 0 ? 1 : 0);
    remainder = Math.max(0, remainder - 1);
    return {
      id: `unit-${index + 1}`,
      ...unit,
      allocatedAgents: allocated,
      recursionLevel: 1,
      children: [],
    };
  });

  if (!recursion.enabled) {
    return rootUnits;
  }

  const childSuffixes = ["North", "South", "East", "West", "Delta", "Prime"];

  function buildChildren(parent, level) {
    if (level > recursion.depth) return [];

    const branchCount = recursion.branchingFactor + (parent.allocatedAgents >= 4 ? 1 : 0);
    const cappedBranchCount = Math.min(branchCount, 3);
    const childAgents = Math.max(1, Math.floor(parent.allocatedAgents / (cappedBranchCount + 1)));

    return Array.from({ length: cappedBranchCount }, (_, idx) => {
      const childName = `${parent.name} ${childSuffixes[idx] || `Cell ${idx + 1}`}`;
      const child = {
        id: `${parent.id}-${idx + 1}`,
        name: childName,
        system: parent.system,
        tone: parent.tone,
        responsibilities: parent.responsibilities,
        allocatedAgents: childAgents,
        recursionLevel: level,
        children: [],
      };

      child.children = buildChildren(child, level + 1);
      return child;
    });
  }

  return rootUnits.map((unit) => ({
    ...unit,
    children: buildChildren(unit, 2),
  }));
}

function flattenUnits(units) {
  return units.flatMap((unit) => [unit, ...flattenUnits(unit.children || [])]);
}

function buildConnections(units, recursion, autonomy) {
  const allUnits = flattenUnits(units);
  const connections = [];

  function connect(from, to, mode, reason, strength) {
    if (!from || !to || from.id === to.id) return;
    const key = `${from.id}|${to.id}|${mode}|${reason}`;
    if (connections.some((connection) => connection.key === key)) return;
    connections.push({
      key,
      from: from.id,
      to: to.id,
      fromName: from.name,
      toName: to.name,
      fromSystem: from.system,
      toSystem: to.system,
      mode,
      reason,
      strength,
    });
  }

  function walk(nodes, parent = null) {
    nodes.forEach((node, index) => {
      if (parent) {
        connect(parent, node, "systemic", "recursive delegation", "high");
        connect(node, parent, "causal", "upstream reporting", "high");
      }

      if (index > 0) {
        const previous = nodes[index - 1];
        connect(previous, node, "causal", "peer coordination", "medium");
        connect(node, previous, "causal", "peer feedback", "medium");
      }

      if (node.children?.length) walk(node.children, node);
    });
  }

  walk(units);

  const bySystem = (system) => allUnits.filter((unit) => unit.system === system);
  const operations = bySystem("S1");
  const coordination = bySystem("S2");
  const control = bySystem("S3");
  const audit = bySystem("S3*");
  const intelligence = bySystem("S4");
  const policy = bySystem("S5");

  operations.forEach((unit) => {
    coordination.forEach((coordinationUnit) => connect(unit, coordinationUnit, "systemic", "oscillation damping", "high"));
    control.forEach((controlUnit) => connect(unit, controlUnit, "causal", "performance telemetry", "medium"));
  });

  control.forEach((controlUnit) => {
    intelligence.forEach((intelligenceUnit) => connect(controlUnit, intelligenceUnit, "systemic", "strategic sensing feed", "medium"));
    if (autonomy.mode === "Constrained") {
      policy.forEach((policyUnit) => connect(controlUnit, policyUnit, "causal", "approval escalation", "high"));
    }
  });

  audit.forEach((auditUnit) => {
    control.forEach((controlUnit) => connect(auditUnit, controlUnit, "causal", "independent audit findings", "medium"));
    policy.forEach((policyUnit) => connect(auditUnit, policyUnit, "systemic", "compliance assurance", "medium"));
  });

  intelligence.forEach((intelligenceUnit) => {
    policy.forEach((policyUnit) => connect(intelligenceUnit, policyUnit, "causal", "environmental adaptation brief", "high"));
  });

  if (recursion.enabled) {
    units.forEach((rootUnit) => {
      units
        .filter((candidate) => candidate.id !== rootUnit.id)
        .forEach((candidate) => connect(rootUnit, candidate, "systemic", "recursive peer alignment", "low"));
    });
  }

  return connections.map(({ key, ...connection }) => connection);
}

function renderRecursiveTree(units) {
  return units
    .map(
      (unit) => `
        <li>
          <div class="tree-node">
            <span class="badge ${unit.tone}">${unit.system}</span>
            <div>
              <p class="row-title">${unit.name}</p>
              <p class="row-subtitle">Level ${unit.recursionLevel} · ${unit.allocatedAgents} agents</p>
            </div>
          </div>
          ${unit.children && unit.children.length ? `<ul class="tree-branch">${renderRecursiveTree(unit.children)}</ul>` : ""}
        </li>
      `
    )
    .join("");
}

function generateSchemaFromPrompt(rawPrompt) {
  const prompt = rawPrompt.trim().toLowerCase();
  const domain = parseDomain(prompt);
  const agentCount = findAgentCount(prompt);
  const budget = parseBudget(prompt);
  const autonomy = parseAutonomy(prompt);
  const approvals = parseApprovals(prompt);
  const escalationChain = parseEscalations(prompt);
  const recursion = detectRecursion(prompt, agentCount);
  const units = buildUnits(prompt, domain, agentCount, recursion);
  const flattenedUnits = flattenUnits(units);
  const connections = buildConnections(units, recursion, autonomy);
  const systems = [...new Set(flattenedUnits.map((unit) => unit.system))];
  const warnings = [];

  if (!/\b\d{1,3}\b/.test(prompt)) warnings.push("No explicit agent count detected, defaulted to 8 agents.");
  if (!/(budget|spend|cost|lean|enterprise|premium|guarded)/.test(prompt)) warnings.push("No explicit budget posture found, defaulted to balanced routing.");
  if (!/(approval|autonomy|autonomous|strict|human)/.test(prompt)) warnings.push("Autonomy mode inferred from general language; review authority boundaries before execution.");
  if (!recursion.enabled) warnings.push("Recursion not explicitly requested; generated a single-level organization.");

  return {
    name: domain.defaultName,
    domain: domain.label,
    mission: rawPrompt.trim(),
    agentCount,
    systems,
    budget,
    autonomy,
    approvals,
    escalationChain,
    recursion,
    connections,
    connectionCount: connections.length,
    units,
    unitCount: flattenedUnits.length,
    generatedAt: new Date().toISOString(),
    warnings,
  };
}

function attachScreenInteractions() {
  if (currentScreen !== "overview") return;

  const promptInput = document.querySelector("#designPromptInput");
  const generateButton = document.querySelector("#generateSchemaButton");
  const hintButtons = document.querySelectorAll(".schema-hint");

  if (promptInput) {
    promptInput.addEventListener("input", (event) => {
      designState.prompt = event.target.value;
    });
  }

  if (generateButton) {
    generateButton.addEventListener("click", () => {
      designState.prompt = promptInput.value;
      designState.schema = generateSchemaFromPrompt(designState.prompt);
      renderPage();
    });
  }

  hintButtons.forEach((button) => {
    button.addEventListener("click", () => {
      designState.prompt = button.dataset.prompt || designState.prompt;
      designState.schema = generateSchemaFromPrompt(designState.prompt);
      renderPage();
    });
  });
}

function buildSearchIndex() {
  return [
    { screen: "overview", type: "Node", title: "Alpha-Core Protocol", copy: "Processing recursive data streams for regional nodes." },
    { screen: "operations", type: "Unit", title: "Resource Extraction", copy: "Operational unit 442-B is showing pressure and rising latent demand." },
    { screen: "coordination", type: "Audit", title: "Autonomy Threshold Warning", copy: "System 1 Node A reports 12% drift from operational norms." },
    { screen: "policy", type: "Directive", title: "Viability Mandate", copy: "Prioritize systemic health over localized optimization." },
    { screen: "intelligence", type: "Signal", title: "Narrative Drift", copy: "External sentiment diverging from internal optimization assumptions." },
  ];
}

const searchIndex = buildSearchIndex();

function renderSearchResults(query) {
  const trimmed = query.trim().toLowerCase();

  if (!trimmed) {
    searchResults.classList.add("hidden");
    searchResults.innerHTML = "";
    return;
  }

  const matches = searchIndex.filter((item) =>
    [item.title, item.copy, item.type].some((field) => field.toLowerCase().includes(trimmed))
  );

  searchResults.classList.remove("hidden");
  searchResults.innerHTML = `
    <h3>Search Results</h3>
    <div class="search-result-list">
      ${
        matches.length
          ? matches
              .map(
                (match) => `
                  <article class="search-result">
                    <p class="search-result-type">${match.type} · ${screens[match.screen].navLabel}</p>
                    <p class="search-result-title">${match.title}</p>
                    <p class="search-result-copy">${match.copy}</p>
                  </article>
                `
              )
              .join("")
          : `<article class="search-result"><p class="search-result-title">No results for "${query}"</p><p class="search-result-copy">Try searching for viability, logistics, autonomy, policy, or nodes.</p></article>`
      }
    </div>
  `;
}

function openHealthModal() {
  const diagnosticRows = [
    { title: "System 1 · Operations", copy: "12 of 14 active nodes healthy. One logistics channel requires adaptation." },
    { title: "System 2 · Coordination", copy: "Oscillation damping stable at 0.84 with no unresolved collisions." },
    { title: "System 3 · Control", copy: "Resource allocation balanced. Audit closure remains above intervention threshold." },
    { title: "System 4 · Intelligence", copy: "Environmental scan nominal. Weak signals identified but non-critical." },
    { title: "System 5 · Policy", copy: "Identity coherence preserved. Strategic directives remain aligned across recursive layers." },
  ];

  healthModalContent.innerHTML = diagnosticRows
    .map(
      (row) => `
        <article class="diagnostic-card">
          <h3>${row.title}</h3>
          <p>${row.copy}</p>
        </article>
      `
    )
    .join("");

  healthModal.classList.remove("hidden");
}

function closeHealthModal() {
  healthModal.classList.add("hidden");
}

document.addEventListener("click", (event) => {
  const navButton = event.target.closest("[data-screen]");
  if (navButton) {
    currentScreen = navButton.dataset.screen;
    renderPage();
    if (window.innerWidth <= 920) {
      sidebar.classList.remove("open");
    }
  }

  if (event.target.matches("[data-close-modal='true']")) {
    closeHealthModal();
  }
});

globalSearch.addEventListener("input", (event) => {
  renderSearchResults(event.target.value);
});

healthCheckButton.addEventListener("click", openHealthModal);
closeModalButton.addEventListener("click", closeHealthModal);

mobileNavToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeHealthModal();
    sidebar.classList.remove("open");
  }
});

designState.schema = generateSchemaFromPrompt(designState.prompt);
renderPage();
