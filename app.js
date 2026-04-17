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


const designState = {
  prompt:
    "Design a 12-agent crisis response organization for a university incident with strong coordination, legal review, communications control, and human approval on public statements.",
  schema: null,
};

const appState = {
  apiKey: "",
  hasSeenWelcome: localStorage.getItem("sov_welcomed") === "true",
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
const settingsModal = document.querySelector("#settingsModal");
const settingsModalContent = document.querySelector("#settingsModalContent");
const closeSettingsButton = document.querySelector("#closeSettingsButton");
const notificationsPanel = document.querySelector("#notificationsPanel");
const notificationsPanelContent = document.querySelector("#notificationsPanelContent");
const notificationsBackdrop = document.querySelector("#notificationsBackdrop");
const infoModal = document.querySelector("#infoModal");
const infoModalEyebrow = document.querySelector("#infoModalEyebrow");
const infoModalTitle = document.querySelector("#infoModalTitle");
const infoModalContent = document.querySelector("#infoModalContent");
const closeInfoButton = document.querySelector("#closeInfoButton");
const welcomeModal = document.querySelector("#welcomeModal");
const welcomeModalContent = document.querySelector("#welcomeModalContent");

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

function metricTooltip(label) {
  const tips = {
    "System Load": "Trillion floating-point operations per second — a measure of total computing throughput across all active nodes.",
    "Latency": "Round-trip response time in milliseconds. Under 20ms is considered nominal for real-time operations.",
    "Global Efficiency": "Percentage of theoretical maximum output currently being produced by active operational units.",
    "Active Nodes": "Number of currently online and responsive nodes out of the total provisioned capacity.",
    "Environmental Stability": "How predictable and calm the external operating environment appears based on signal scanning.",
    "Resource Efficacy": "Efficiency of resource allocation — how much value is delivered per unit of resource consumed.",
    "Audit Closure": "Percentage of flagged audit items that have been reviewed and formally closed.",
    "Variance": "Deviation from planned operational norms. Lower is better; high variance may trigger System 3 intervention.",
    "Horizon Confidence": "Statistical confidence in the system's forward-looking environmental projections.",
    "Risk Heat": "Qualitative summary of near-term existential and operational risk across monitored signals.",
    "Current System Ethos": "The active operational philosophy guiding decision-making across all recursive layers.",
    "Viability Index": "Composite health score (0–100%) measuring whether the overall system can survive and adapt long-term.",
  };
  return tips[label] || label;
}

function metricSubtext(label, value) {
  const texts = {
    "System Load": "trillion ops / sec",
    "Latency": "round-trip time",
    "Global Efficiency": "of theoretical max",
    "Active Nodes": "nodes online",
    "Environmental Stability": "scan confidence",
    "Resource Efficacy": "value per unit cost",
    "Audit Closure": "items resolved",
    "Variance": "drift from norm",
    "Horizon Confidence": "forecast accuracy",
    "Risk Heat": "current threat level",
    "Current System Ethos": "governing philosophy",
    "Viability Index": "overall system health",
  };
  return texts[label] || "";
}

function renderHeader() {
  const screen = screens[currentScreen];
  headerEyebrow.textContent = screen.headerEyebrow;
  pageTitle.textContent = screen.title;
  pageDescription.textContent = screen.description;
  headerMetrics.innerHTML = screen.metrics
    .map(
      (metric) => `
        <article class="header-metric" title="${metricTooltip(metric.label)}">
          <p class="metric-label">${metric.label}</p>
          <p class="metric-number" style="${metricToneClass(metric.tone)}">${metric.value}</p>
          <p class="metric-subtext">${metricSubtext(metric.label, metric.value)}</p>
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
        <p class="subtle-text">Conflict resolution frequency: 0.02Hz <span class="measure-note">(approx. once every 50 seconds)</span></p>
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
            <button id="generateSchemaButton" class="cta-button">${appState.apiKey ? "Generate with AI" : "Generate (rule-based)"}</button>
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
        <div>System Time · ${formatSystemTime()}</div>
        <div style="color: var(--secondary);">Node Status · Synchronized</div>
        <div>Policy Authenticator · Sig 0xBF22...DE81</div>
      </section>
    </div>
  `;
}

function renderScreenContent() {
  switch (currentScreen) {
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

function formatSystemTime() {
  return new Date().toISOString().replace("T", " ").slice(0, 19);
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

function buildRuleBasedSchema(rawPrompt) {
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

async function generateSchemaFromPrompt(rawPrompt) {
  if (!appState.apiKey) {
    return buildRuleBasedSchema(rawPrompt);
  }

  const systemPrompt = `You are an organisational schema generator based on Stafford Beer's Viable System Model (VSM).
Given a natural-language mission prompt, return ONLY a JSON object with this exact shape (no markdown fences):
{
  "name": "string — organisation name",
  "domain": "string — domain label (e.g. Crisis Response, AI SaaS, Consulting)",
  "mission": "string — the original prompt",
  "agentCount": number,
  "systems": ["S1","S2","S3","S4","S5"],
  "budget": { "profile": "Lean|Balanced|Expansive", "monthlyUsd": number, "tokenPolicy": "string" },
  "autonomy": { "mode": "Constrained|Moderate|Expansive", "escalationBias": "string" },
  "approvals": ["string"],
  "escalationChain": ["string"],
  "recursion": { "enabled": boolean, "depth": number, "branchingFactor": number },
  "connections": [{ "from": "id", "to": "id", "fromName": "string", "toName": "string", "fromSystem": "string", "toSystem": "string", "mode": "causal|systemic", "reason": "string", "strength": "low|medium|high" }],
  "connectionCount": number,
  "units": [{ "id": "unit-1", "name": "string", "system": "S1|S2|S3|S3*|S4|S5", "tone": "primary|secondary|tertiary", "responsibilities": ["string"], "allocatedAgents": number, "recursionLevel": 1, "children": [] }],
  "unitCount": number,
  "generatedAt": "ISO8601 timestamp",
  "warnings": ["string"]
}
Respond with only valid JSON. No explanation, no markdown.`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${appState.apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: rawPrompt.trim() },
        ],
        temperature: 0.4,
        max_tokens: 2048,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error ${response.status}`);
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content?.trim();
    if (!text) throw new Error("Empty response from OpenAI");

    const schema = JSON.parse(text);

    if (!schema.name || !Array.isArray(schema.units) || !Array.isArray(schema.connections)) {
      throw new Error("Invalid schema shape returned by AI");
    }

    schema.generatedAt = new Date().toISOString();
    schema.mission = rawPrompt.trim();
    return schema;
  } catch (err) {
    console.warn("AI generation failed, falling back to rule-based engine:", err.message);
    const fallback = buildRuleBasedSchema(rawPrompt);
    fallback.warnings = [`AI generation failed (${err.message}). Showing rule-based result.`, ...fallback.warnings];
    return fallback;
  }
}

function attachScreenInteractions() {
  if (currentScreen === "overview") {
    const promptInput = document.querySelector("#designPromptInput");
    const generateButton = document.querySelector("#generateSchemaButton");
    const hintButtons = document.querySelectorAll(".schema-hint");

    if (promptInput) {
      promptInput.addEventListener("input", (event) => {
        designState.prompt = event.target.value;
      });
    }

    async function runGenerator(prompt) {
      if (generateButton) {
        generateButton.disabled = true;
        generateButton.textContent = "Generating…";
      }
      try {
        designState.schema = await generateSchemaFromPrompt(prompt);
      } finally {
        renderPage();
      }
    }

    if (generateButton) {
      generateButton.addEventListener("click", () => {
        designState.prompt = promptInput.value;
        runGenerator(designState.prompt);
      });
    }

    hintButtons.forEach((button) => {
      button.addEventListener("click", () => {
        designState.prompt = button.dataset.prompt || designState.prompt;
        runGenerator(designState.prompt);
      });
    });
  }
}

function buildSearchIndex() {
  return [
    { screen: "overview", type: "Node", title: "Alpha-Core Protocol", copy: "Processing recursive data streams for regional nodes." },
    { screen: "policy", type: "Directive", title: "Viability Mandate", copy: "Prioritize systemic health over localized optimization." },
    { screen: "policy", type: "Directive", title: "Identity Persistence", copy: "Maintaining core architectural integrity across all recursive layers." },
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
                  <article class="search-result search-result-link" data-screen="${match.screen}" role="button" tabindex="0" title="Go to ${screens[match.screen].navLabel}">
                    <div class="search-result-header">
                      <p class="search-result-type">${match.type} · ${screens[match.screen].navLabel}</p>
                      <span class="search-result-go">Go →</span>
                    </div>
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
    { title: "System 2 · Coordination", copy: "Oscillation damping stable at 0.84 (1.0 = critically damped; lower values indicate mild oscillation). No unresolved collisions." },
    { title: "System 3 · Control", copy: "Resource allocation balanced. Audit closure remains above intervention threshold (97.1%)." },
    { title: "System 4 · Intelligence", copy: "Environmental scan nominal. Weak signals identified but non-critical. Horizon confidence: 81.6%." },
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

function openSettingsModal() {
  settingsModalContent.innerHTML = `
    <article class="diagnostic-card">
      <h3>AI API Key</h3>
      <p style="margin-bottom: 0.75rem;">Paste your OpenAI API key here to enable AI-enhanced schema generation. Without a key the built-in rule-based generator is used — it works fully offline. Your key is held <strong>in-memory only</strong> for this browser session and is never sent anywhere except directly to the OpenAI API. It is cleared when you close this tab.</p>
      <div class="api-key-field">
        <input id="apiKeyInput" type="password" class="prompt-input" style="min-height:unset; padding: 0.75rem 1rem;" placeholder="sk-…" value="${escapeHtml(appState.apiKey)}" autocomplete="off" />
        <button id="toggleApiKeyVisibility" class="ghost-button" style="white-space:nowrap;">Show</button>
      </div>
      <div class="split-actions" style="margin-top: 0.75rem;">
        <button id="saveApiKeyButton" class="cta-button">Save Key</button>
        <button id="clearApiKeyButton" class="ghost-button">Clear Key</button>
      </div>
      <p id="apiKeyStatus" class="measure-note" style="margin-top:0.5rem;">${appState.apiKey ? "✓ Key active for this session" : "No key entered — built-in generator will be used"}</p>
    </article>
    <article class="diagnostic-card">
      <h3>About This App</h3>
      <p>Sovereign Observer OS is a Viable System Model (VSM) dashboard. It models organisations as five recursive systems — Operations (S1), Coordination (S2), Control (S3), Intelligence (S4), and Policy (S5) — and uses the schema generator to design viable agent-based organisations from natural-language prompts.</p>
    </article>
  `;
  settingsModal.classList.remove("hidden");
  wireSettingsModal();
}

function wireSettingsModal() {
  const apiKeyInput = settingsModal.querySelector("#apiKeyInput");
  const saveButton = settingsModal.querySelector("#saveApiKeyButton");
  const clearButton = settingsModal.querySelector("#clearApiKeyButton");
  const toggleButton = settingsModal.querySelector("#toggleApiKeyVisibility");
  const statusLabel = settingsModal.querySelector("#apiKeyStatus");

  toggleButton?.addEventListener("click", () => {
    const isHidden = apiKeyInput.type === "password";
    apiKeyInput.type = isHidden ? "text" : "password";
    toggleButton.textContent = isHidden ? "Hide" : "Show";
  });

  saveButton?.addEventListener("click", () => {
    appState.apiKey = apiKeyInput.value.trim();
    statusLabel.textContent = appState.apiKey ? "✓ Key active for this session" : "No key entered";
    renderPage();
  });

  clearButton?.addEventListener("click", () => {
    appState.apiKey = "";
    apiKeyInput.value = "";
    statusLabel.textContent = "Key cleared for this session";
    renderPage();
  });
}

function closeSettingsModal() {
  settingsModal.classList.add("hidden");
}

function openNotificationsPanel() {
  const recentEvents = [
    { tone: "tertiary", title: "Autonomy Threshold Warning", copy: "System 1 Node A reports 12% drift from norms.", time: "13:45" },
    { tone: "secondary", title: "Policy Compliance Check", copy: "System 1 Node B aligned with Recursive Level 0 directives.", time: "14:22" },
    { tone: "primary", title: "Anti-Oscillation Cycle", copy: "System 2 protocol injected to resolve resource conflict.", time: "11:03" },
    { tone: "secondary", title: "Viability Index Updated", copy: "Overall health score rose to 94.2% (+1.4% vs. last cycle).", time: "09:00" },
  ];

  notificationsPanelContent.innerHTML = `
    <div class="notifications-header">
      <strong>Notifications</strong>
      <span class="page-eyebrow" style="color: var(--text-muted);">${recentEvents.length} recent</span>
    </div>
    <div class="stack" style="padding: 0.75rem;">
      ${recentEvents.map((event) => `
        <article class="diagnostic-card" style="margin:0;">
          <div class="info-row">
            <p class="row-title" style="margin:0;">${event.title}</p>
            <span class="badge ${event.tone}" style="white-space:nowrap;">${event.time}</span>
          </div>
          <p style="margin: 0.35rem 0 0; color: var(--text-soft); font-size: 0.82rem;">${event.copy}</p>
        </article>
      `).join("")}
    </div>
  `;
  notificationsPanel.classList.remove("hidden");
  notificationsBackdrop.classList.remove("hidden");
}

function closeNotificationsPanel() {
  notificationsPanel.classList.add("hidden");
  notificationsBackdrop.classList.add("hidden");
}

function openInfoModal(eyebrow, title, contentHtml) {
  infoModalEyebrow.textContent = eyebrow;
  infoModalTitle.textContent = title;
  infoModalContent.innerHTML = contentHtml;
  infoModal.classList.remove("hidden");
}

function closeInfoModal() {
  infoModal.classList.add("hidden");
}

function openDocumentationModal() {
  openInfoModal("Reference", "Documentation", `
    <article class="diagnostic-card">
      <h3>What is Sovereign Observer OS?</h3>
      <p>A dashboard based on Stafford Beer's <strong>Viable System Model (VSM)</strong> — a framework for diagnosing and designing organisations that can survive and adapt. The five systems are:</p>
      <ul style="margin: 0.5rem 0 0 1.2rem; color: var(--text-soft); line-height: 1.8;">
        <li><strong>S1 — Operations:</strong> The units that do the actual work.</li>
        <li><strong>S2 — Coordination:</strong> Prevents units from clashing; dampens oscillation.</li>
        <li><strong>S3 — Control:</strong> Allocates resources, sets performance standards, audits.</li>
        <li><strong>S4 — Intelligence:</strong> Scans the external environment; provides forward projections.</li>
        <li><strong>S5 — Policy:</strong> Defines identity and purpose; holds the final authority.</li>
      </ul>
    </article>
    <article class="diagnostic-card">
      <h3>How to Use</h3>
      <ul style="margin: 0.5rem 0 0 1.2rem; color: var(--text-soft); line-height: 1.8;">
        <li>Use the <strong>sidebar</strong> or <strong>top navigation</strong> to switch between <strong>Overview</strong> and <strong>Policy</strong>.</li>
        <li>On the <strong>Overview</strong> screen, type a mission prompt and click <strong>Generate (rule-based)</strong> or <strong>Generate with AI</strong> to design a new agent organisation.</li>
        <li>Click a preset button (AI SaaS, Crisis comms, Consulting mesh) to load an example prompt.</li>
        <li>Open <strong>Settings</strong> (⚙ icon) to enter your OpenAI API key — once set, the generator calls the OpenAI API directly.</li>
        <li>Use <strong>System Health Check</strong> in the sidebar to view a full diagnostic report.</li>
        <li>Use the <strong>Global Search</strong> bar to find specific nodes or directives.</li>
      </ul>
    </article>
    <article class="diagnostic-card">
      <h3>Measurements Glossary</h3>
      <ul style="margin: 0.5rem 0 0 1.2rem; color: var(--text-soft); line-height: 1.8;">
        <li><strong>TFLOPS</strong> — Trillion floating-point operations per second (raw compute throughput).</li>
        <li><strong>OPS/S</strong> — Operations per second (task throughput of a processing unit).</li>
        <li><strong>Hz</strong> — Hertz (cycles per second; used here for conflict resolution frequency).</li>
        <li><strong>Damping Ratio</strong> — 1.0 = critically damped (no oscillation); &lt; 1 = mild oscillation; &gt; 1 = overdamped (slow return to equilibrium).</li>
        <li><strong>Viability Index</strong> — 0–100% composite health score across all five systems.</li>
        <li><strong>Latent Demand</strong> — Unmet workload queued and waiting. High values (&gt; 5%) flag bottlenecks.</li>
        <li><strong>Horizon Confidence</strong> — Statistical confidence in the system's environmental projections.</li>
      </ul>
    </article>
  `);
}

function openSupportModal() {
  openInfoModal("Help", "Support", `
    <article class="diagnostic-card">
      <h3>Need help?</h3>
      <p>Sovereign Observer OS is an open-source project. To report bugs, request features, or ask questions, please open an issue on the <strong>GitHub repository</strong> for this project.</p>
    </article>
    <article class="diagnostic-card">
      <h3>Quick Tips</h3>
      <ul style="margin: 0.5rem 0 0 1.2rem; color: var(--text-soft); line-height: 1.8;">
        <li>Press <strong>Esc</strong> to close any open panel or modal.</li>
        <li>The generator always works without an API key — a built-in rule-based engine is available offline.</li>
        <li>Add your OpenAI key via the <strong>⚙ Settings</strong> icon to switch to AI-powered generation.</li>
        <li>Hover over any metric card in the header to see a tooltip explaining what it measures.</li>
      </ul>
    </article>
  `);
}

function renderWelcomeScreen() {
  welcomeModalContent.innerHTML = `
    <div class="welcome-header">
      <p class="page-eyebrow" style="color: var(--tertiary);">Getting Started</p>
      <h1 class="page-title" style="font-size: clamp(1.8rem, 4vw, 3rem); margin-bottom: 0.5rem;">Welcome to Sovereign Observer OS</h1>
      <p class="page-description">A real-time dashboard and organisation design tool built on Stafford Beer's Viable System Model (VSM).</p>
    </div>

    <div class="welcome-grid">
      <article class="diagnostic-card">
        <h3>🗺️ Navigate the Dashboard</h3>
        <p>Use the <strong>sidebar</strong> on the left or the <strong>top navigation</strong> to switch between screens:</p>
        <ul style="margin: 0.5rem 0 0 1.2rem; color: var(--text-soft); line-height: 1.8;">
          <li><strong>Overview</strong> — high-level health snapshot + schema generator</li>
          <li><strong>Policy</strong> — constitutional directives and viability index</li>
        </ul>
      </article>

      <article class="diagnostic-card">
        <h3>🤖 Generate an Organisation Schema</h3>
        <p>Go to <strong>Overview</strong>, type a mission description in the prompt box, and click <strong>Generate (rule-based)</strong>. The tool will design a viable agent organisation based on your description — no API key required. Add an OpenAI key below to switch to AI-powered generation. Use the preset buttons for instant examples.</p>
      </article>

      <article class="diagnostic-card">
        <h3>🔑 API Key <span class="badge tertiary" style="vertical-align:middle;">Optional</span></h3>
        <p>To enable AI-enhanced schema generation, paste your OpenAI API key below. Your key is held <strong>in-memory only</strong> for this session — it is never stored on disk or sent anywhere except directly to the OpenAI API. You can also set it later via the <strong>⚙ Settings</strong> icon.</p>
        <div class="api-key-field" style="margin-top: 0.75rem;">
          <input id="welcomeApiKeyInput" type="password" class="prompt-input" style="min-height:unset; padding: 0.75rem 1rem;" placeholder="sk-… (optional)" value="${escapeHtml(appState.apiKey)}" autocomplete="off" />
          <button id="welcomeToggleKey" class="ghost-button" style="white-space:nowrap;">Show</button>
        </div>
        <div class="split-actions" style="margin-top: 0.5rem;">
          <button id="welcomeSaveKey" class="soft-button">Use This Key</button>
          <button id="welcomeClearKey" class="ghost-button">Clear</button>
        </div>
        <p id="welcomeKeyStatus" class="measure-note" style="margin-top:0.4rem;">${appState.apiKey ? "✓ Key active for this session" : "No key entered — built-in generator will be used"}</p>
      </article>

      <article class="diagnostic-card">
        <h3>📊 Understanding Measurements</h3>
        <ul style="margin: 0.25rem 0 0 1.2rem; color: var(--text-soft); line-height: 1.8; font-size: 0.9rem;">
          <li><strong>TFLOPS</strong> — trillion floating-point ops/sec (raw compute power)</li>
          <li><strong>OPS/S</strong> — tasks completed per second</li>
          <li><strong>Hz</strong> — events per second (here: conflict resolution rate)</li>
          <li><strong>Damping Ratio</strong> — 1.0 = ideal (no oscillation); &lt;1 = mild oscillation; &gt;1 = overdamped</li>
          <li><strong>Viability Index</strong> — 0–100% overall organisational health</li>
          <li><strong>Latent Demand</strong> — queued unmet workload; &gt;5% = bottleneck</li>
        </ul>
      </article>
    </div>

    <div style="display:flex; justify-content:center; padding: 1.5rem 0 0.5rem;">
      <button id="welcomeGetStarted" class="cta-button" style="padding: 1rem 2.5rem; font-size: 0.9rem;">Get Started →</button>
    </div>
  `;

  welcomeModal.classList.remove("hidden");
  wireWelcomeModal();
}

function wireWelcomeModal() {
  const keyInput = welcomeModal.querySelector("#welcomeApiKeyInput");
  const toggleBtn = welcomeModal.querySelector("#welcomeToggleKey");
  const saveBtn = welcomeModal.querySelector("#welcomeSaveKey");
  const clearBtn = welcomeModal.querySelector("#welcomeClearKey");
  const statusLabel = welcomeModal.querySelector("#welcomeKeyStatus");
  const getStartedBtn = welcomeModal.querySelector("#welcomeGetStarted");

  toggleBtn?.addEventListener("click", () => {
    const isHidden = keyInput.type === "password";
    keyInput.type = isHidden ? "text" : "password";
    toggleBtn.textContent = isHidden ? "Hide" : "Show";
  });

  saveBtn?.addEventListener("click", () => {
    appState.apiKey = keyInput.value.trim();
    statusLabel.textContent = appState.apiKey ? "✓ Key active for this session" : "No key entered";
  });

  clearBtn?.addEventListener("click", () => {
    appState.apiKey = "";
    keyInput.value = "";
    statusLabel.textContent = "Key cleared — built-in generator will be used";
  });

  getStartedBtn?.addEventListener("click", () => {
    welcomeModal.classList.add("hidden");
    localStorage.setItem("sov_welcomed", "true");
    appState.hasSeenWelcome = true;
  });
}

document.addEventListener("click", (event) => {
  const navButton = event.target.closest("[data-screen]");
  if (navButton) {
    currentScreen = navButton.dataset.screen;
    globalSearch.value = "";
    renderSearchResults("");
    renderPage();
    if (window.innerWidth <= 920) {
      sidebar.classList.remove("open");
    }
    return;
  }

  if (event.target.matches("[data-close-modal='true']")) {
    closeHealthModal();
    return;
  }

  if (event.target.matches("[data-close-settings='true']")) {
    closeSettingsModal();
    return;
  }

  if (event.target.matches("[data-close-info='true']")) {
    closeInfoModal();
    return;
  }
});

globalSearch.addEventListener("input", (event) => {
  renderSearchResults(event.target.value);
});

healthCheckButton.addEventListener("click", openHealthModal);
closeModalButton.addEventListener("click", closeHealthModal);

closeSettingsButton.addEventListener("click", closeSettingsModal);

closeInfoButton.addEventListener("click", closeInfoModal);

notificationsBackdrop.addEventListener("click", closeNotificationsPanel);

document.querySelector("[aria-label='Notifications']")?.addEventListener("click", openNotificationsPanel);
document.querySelector("[aria-label='Settings']")?.addEventListener("click", openSettingsModal);

document.querySelector("#docsButton").addEventListener("click", openDocumentationModal);
document.querySelector("#supportButton").addEventListener("click", openSupportModal);

mobileNavToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeHealthModal();
    closeSettingsModal();
    closeInfoModal();
    closeNotificationsPanel();
    sidebar.classList.remove("open");
  }

  if (event.key === "Enter" && event.target.matches(".search-result-link[data-screen]")) {
    event.preventDefault();
    currentScreen = event.target.dataset.screen;
    globalSearch.value = "";
    renderSearchResults("");
    renderPage();
  }
});

designState.schema = buildRuleBasedSchema(designState.prompt);
renderPage();

if (!appState.hasSeenWelcome) {
  renderWelcomeScreen();
}
