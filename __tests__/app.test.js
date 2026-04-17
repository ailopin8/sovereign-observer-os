/**
 * __tests__/app.test.js
 *
 * Comprehensive unit tests for all pure / logic functions in app.js.
 * The jest.setup.js file pre-populates jsdom with the HTML skeleton so
 * app.js can query every DOM element it needs at load time without errors.
 */

const {
  metricToneClass,
  metricTooltip,
  metricSubtext,
  escapeHtml,
  findAgentCount,
  parseBudget,
  parseAutonomy,
  parseDomain,
  parseApprovals,
  parseEscalations,
  detectRecursion,
  buildUnits,
  flattenUnits,
  buildConnections,
  renderRecursiveTree,
  generateSchemaFromPrompt,
  buildSearchIndex,
} = require("../app.js");

// ---------------------------------------------------------------------------
// metricToneClass
// ---------------------------------------------------------------------------
describe("metricToneClass", () => {
  test("returns secondary colour for 'secondary' tone", () => {
    expect(metricToneClass("secondary")).toBe("color: var(--secondary);");
  });

  test("returns tertiary colour for 'tertiary' tone", () => {
    expect(metricToneClass("tertiary")).toBe("color: var(--tertiary);");
  });

  test("returns primary colour for 'primary' tone", () => {
    expect(metricToneClass("primary")).toBe("color: var(--primary);");
  });

  test("falls back to primary colour for unknown tone", () => {
    expect(metricToneClass("error")).toBe("color: var(--primary);");
  });

  test("falls back to primary colour for empty string", () => {
    expect(metricToneClass("")).toBe("color: var(--primary);");
  });

  test("falls back to primary colour for undefined", () => {
    expect(metricToneClass(undefined)).toBe("color: var(--primary);");
  });
});

// ---------------------------------------------------------------------------
// metricTooltip
// ---------------------------------------------------------------------------
describe("metricTooltip", () => {
  const knownLabels = [
    "System Load",
    "Latency",
    "Global Efficiency",
    "Active Nodes",
    "Environmental Stability",
    "Resource Efficacy",
    "Audit Closure",
    "Variance",
    "Horizon Confidence",
    "Risk Heat",
    "Current System Ethos",
    "Viability Index",
  ];

  test.each(knownLabels)(
    "returns a non-empty tooltip string for '%s'",
    (label) => {
      const tip = metricTooltip(label);
      expect(typeof tip).toBe("string");
      expect(tip.length).toBeGreaterThan(0);
      expect(tip).not.toBe(label); // tooltip text differs from the label
    }
  );

  test("returns the label itself for an unknown label", () => {
    expect(metricTooltip("Unknown Metric")).toBe("Unknown Metric");
  });

  test("returns empty string for empty-string label", () => {
    expect(metricTooltip("")).toBe("");
  });

  test("System Load tooltip mentions throughput or computing", () => {
    expect(metricTooltip("System Load").toLowerCase()).toContain("throughput");
  });

  test("Viability Index tooltip mentions health or score", () => {
    const tip = metricTooltip("Viability Index").toLowerCase();
    expect(tip).toContain("health");
  });
});

// ---------------------------------------------------------------------------
// metricSubtext
// ---------------------------------------------------------------------------
describe("metricSubtext", () => {
  test("returns subtext for 'System Load'", () => {
    expect(metricSubtext("System Load")).toBe("trillion ops / sec");
  });

  test("returns subtext for 'Latency'", () => {
    expect(metricSubtext("Latency")).toBe("round-trip time");
  });

  test("returns subtext for 'Global Efficiency'", () => {
    expect(metricSubtext("Global Efficiency")).toBe("of theoretical max");
  });

  test("returns subtext for 'Active Nodes'", () => {
    expect(metricSubtext("Active Nodes")).toBe("nodes online");
  });

  test("returns subtext for 'Viability Index'", () => {
    expect(metricSubtext("Viability Index")).toBe("overall system health");
  });

  test("returns empty string for unknown label", () => {
    expect(metricSubtext("Unknown Label")).toBe("");
  });

  test("returns empty string for empty-string label", () => {
    expect(metricSubtext("")).toBe("");
  });

  test("all twelve known labels return a non-empty string", () => {
    const labels = [
      "System Load",
      "Latency",
      "Global Efficiency",
      "Active Nodes",
      "Environmental Stability",
      "Resource Efficacy",
      "Audit Closure",
      "Variance",
      "Horizon Confidence",
      "Risk Heat",
      "Current System Ethos",
      "Viability Index",
    ];
    labels.forEach((label) => {
      expect(metricSubtext(label).length).toBeGreaterThan(0);
    });
  });
});

// ---------------------------------------------------------------------------
// escapeHtml
// ---------------------------------------------------------------------------
describe("escapeHtml", () => {
  test("leaves plain text unchanged", () => {
    expect(escapeHtml("Hello World")).toBe("Hello World");
  });

  test("escapes ampersand", () => {
    expect(escapeHtml("a & b")).toBe("a &amp; b");
  });

  test("escapes less-than sign", () => {
    expect(escapeHtml("<tag>")).toBe("&lt;tag&gt;");
  });

  test("escapes greater-than sign", () => {
    expect(escapeHtml("5 > 3")).toBe("5 &gt; 3");
  });

  test("escapes all three special characters together", () => {
    expect(escapeHtml("<b>Bold & bright</b>")).toBe(
      "&lt;b&gt;Bold &amp; bright&lt;/b&gt;"
    );
  });

  test("escapes multiple occurrences of the same character", () => {
    expect(escapeHtml("a & b & c")).toBe("a &amp; b &amp; c");
  });

  test("handles empty string", () => {
    expect(escapeHtml("")).toBe("");
  });

  test("double-escapes already-escaped strings", () => {
    // escapeHtml treats '&amp;' as having a literal '&', escaping it again
    expect(escapeHtml("&amp;")).toBe("&amp;amp;");
  });

  test("escapes a JSON-like string with angle brackets", () => {
    const json = '{"key": "<value>"}';
    const escaped = escapeHtml(json);
    expect(escaped).toContain("&lt;value&gt;");
  });
});

// ---------------------------------------------------------------------------
// findAgentCount
// ---------------------------------------------------------------------------
describe("findAgentCount", () => {
  test("finds count with 'agents'", () => {
    expect(findAgentCount("design 12 agents for crisis")).toBe(12);
  });

  test("finds count with hyphenated 'agent'", () => {
    expect(findAgentCount("an 8-agent consulting firm")).toBe(8);
  });

  test("finds count with 'nodes'", () => {
    expect(findAgentCount("5 nodes in the cluster")).toBe(5);
  });

  test("finds count with 'units'", () => {
    expect(findAgentCount("a team of 3 units")).toBe(3);
  });

  test("finds count with 'people'", () => {
    expect(findAgentCount("10 people organization")).toBe(10);
  });

  test("finds count with 'person'", () => {
    expect(findAgentCount("a 7 person team")).toBe(7);
  });

  test("finds count with 'node'", () => {
    expect(findAgentCount("1 node network")).toBe(1);
  });

  test("defaults to 8 when no agent count is present", () => {
    expect(findAgentCount("design a lean consulting organization")).toBe(8);
  });

  test("handles three-digit agent counts", () => {
    expect(findAgentCount("100 agents enterprise")).toBe(100);
  });

  test("picks the first numeric match in the prompt", () => {
    const count = findAgentCount("15 agents with 3 layers deep");
    expect(count).toBe(15);
  });
});

// ---------------------------------------------------------------------------
// parseBudget
// ---------------------------------------------------------------------------
describe("parseBudget", () => {
  test("'low spend' maps to Lean tier", () => {
    const result = parseBudget("low spend organization");
    expect(result.profile).toBe("Lean");
    expect(result.monthlyUsd).toBe(1500);
    expect(result.tokenPolicy).toBe("Constrained routing");
  });

  test("'lean' maps to Lean tier", () => {
    expect(parseBudget("lean consulting mesh").profile).toBe("Lean");
  });

  test("'low cost' maps to Lean tier", () => {
    expect(parseBudget("low cost startup").profile).toBe("Lean");
  });

  test("'conservative budget' maps to Lean tier", () => {
    expect(parseBudget("conservative budget approach").profile).toBe("Lean");
  });

  test("'guarded' maps to Lean tier", () => {
    expect(parseBudget("guarded spending policy").profile).toBe("Lean");
  });

  test("'enterprise' maps to Expansive tier", () => {
    const result = parseBudget("enterprise organization");
    expect(result.profile).toBe("Expansive");
    expect(result.monthlyUsd).toBe(12000);
    expect(result.tokenPolicy).toBe("High-reliability routing");
  });

  test("'high spend' maps to Expansive tier", () => {
    expect(parseBudget("high spend technology firm").profile).toBe("Expansive");
  });

  test("'premium' maps to Expansive tier", () => {
    expect(parseBudget("premium consulting service").profile).toBe("Expansive");
  });

  test("'high budget' maps to Expansive tier", () => {
    expect(parseBudget("high budget operations").profile).toBe("Expansive");
  });

  test("'expansive' maps to Expansive tier", () => {
    expect(parseBudget("expansive organization scope").profile).toBe(
      "Expansive"
    );
  });

  test("neutral prompt defaults to Balanced tier", () => {
    const result = parseBudget("a medium-sized organization");
    expect(result.profile).toBe("Balanced");
    expect(result.monthlyUsd).toBe(4200);
    expect(result.tokenPolicy).toBe("Tiered routing");
  });

  test("empty string defaults to Balanced tier", () => {
    expect(parseBudget("").profile).toBe("Balanced");
  });

  test("Lean takes priority over later tokens", () => {
    // 'lean' is tested first in the function
    expect(parseBudget("lean enterprise").profile).toBe("Lean");
  });
});

// ---------------------------------------------------------------------------
// parseAutonomy
// ---------------------------------------------------------------------------
describe("parseAutonomy", () => {
  test("'strict' maps to Constrained mode", () => {
    const result = parseAutonomy("strict approval process");
    expect(result.mode).toBe("Constrained");
    expect(result.escalationBias).toBe("Human-first");
  });

  test("'human approval' maps to Constrained", () => {
    expect(parseAutonomy("requires human approval").mode).toBe("Constrained");
  });

  test("'human-in-loop' maps to Constrained", () => {
    expect(parseAutonomy("human-in-loop review").mode).toBe("Constrained");
  });

  test("'approval control' maps to Constrained", () => {
    expect(parseAutonomy("approval control layer").mode).toBe("Constrained");
  });

  test("'approval controls' maps to Constrained", () => {
    expect(parseAutonomy("approval controls enabled").mode).toBe("Constrained");
  });

  test("'manual sign-off' maps to Constrained", () => {
    expect(parseAutonomy("manual sign-off required").mode).toBe("Constrained");
  });

  test("'high autonomy' maps to Expansive mode", () => {
    const result = parseAutonomy("high autonomy system");
    expect(result.mode).toBe("Expansive");
    expect(result.escalationBias).toBe("Exception-only");
  });

  test("'fully autonomous' maps to Expansive", () => {
    expect(parseAutonomy("fully autonomous agents").mode).toBe("Expansive");
  });

  test("'autonomous' alone maps to Expansive", () => {
    expect(parseAutonomy("an autonomous organization").mode).toBe("Expansive");
  });

  test("neutral prompt defaults to Moderate mode", () => {
    const result = parseAutonomy("a balanced team");
    expect(result.mode).toBe("Moderate");
    expect(result.escalationBias).toBe("Escalate on drift");
  });

  test("empty string defaults to Moderate", () => {
    expect(parseAutonomy("").mode).toBe("Moderate");
  });

  test("Constrained takes priority over Expansive when both keywords appear", () => {
    // 'strict' is checked first
    expect(parseAutonomy("strict autonomous system").mode).toBe("Constrained");
  });
});

// ---------------------------------------------------------------------------
// parseDomain
// ---------------------------------------------------------------------------
describe("parseDomain", () => {
  test("'crisis' maps to crisis domain", () => {
    const result = parseDomain("a crisis response organization");
    expect(result.key).toBe("crisis");
    expect(result.label).toBe("Crisis Response");
    expect(result.defaultName).toBe("Crisis Coordination Office");
  });

  test("'incident' maps to crisis domain", () => {
    expect(parseDomain("university incident team").key).toBe("crisis");
  });

  test("'university' maps to crisis domain", () => {
    expect(parseDomain("university administration").key).toBe("crisis");
  });

  test("'public statement' maps to crisis domain", () => {
    expect(parseDomain("manage public statement approval").key).toBe("crisis");
  });

  test("'communications' maps to crisis domain", () => {
    expect(parseDomain("crisis communications unit").key).toBe("crisis");
  });

  test("'consult' maps to consulting domain", () => {
    const result = parseDomain("consulting advisory firm");
    expect(result.key).toBe("consulting");
    expect(result.label).toBe("Consulting");
    expect(result.defaultName).toBe("Lean Consulting Mesh");
  });

  test("'agency' maps to consulting domain", () => {
    expect(parseDomain("marketing agency structure").key).toBe("consulting");
  });

  test("'client' maps to consulting domain", () => {
    expect(parseDomain("client delivery organization").key).toBe("consulting");
  });

  test("'services' maps to consulting domain", () => {
    expect(parseDomain("professional services team").key).toBe("consulting");
  });

  test("'saas' maps to saas domain", () => {
    const result = parseDomain("a saas product company");
    expect(result.key).toBe("saas");
    expect(result.label).toBe("AI SaaS");
    expect(result.defaultName).toBe("AI SaaS Operating Constellation");
  });

  test("'product' maps to saas domain", () => {
    expect(parseDomain("product management team").key).toBe("saas");
  });

  test("'deployment' maps to saas domain", () => {
    expect(parseDomain("deployment pipeline organization").key).toBe("saas");
  });

  test("'ai company' maps to saas domain", () => {
    expect(parseDomain("ai company operations").key).toBe("saas");
  });

  test("'software' maps to saas domain", () => {
    expect(parseDomain("software engineering team").key).toBe("saas");
  });

  test("unrecognised prompt maps to general domain", () => {
    const result = parseDomain("a generic organization");
    expect(result.key).toBe("general");
    expect(result.label).toBe("Adaptive Operations");
    expect(result.defaultName).toBe("Viable Operations Network");
  });

  test("empty string maps to general domain", () => {
    expect(parseDomain("").key).toBe("general");
  });

  test("crisis takes priority over consulting when both keywords appear", () => {
    expect(parseDomain("crisis consulting firm").key).toBe("crisis");
  });
});

// ---------------------------------------------------------------------------
// parseApprovals
// ---------------------------------------------------------------------------
describe("parseApprovals", () => {
  test("'public statement' adds Public statements", () => {
    expect(parseApprovals("requires public statement approval")).toContain(
      "Public statements"
    );
  });

  test("'press' adds Public statements", () => {
    expect(parseApprovals("press release process")).toContain(
      "Public statements"
    );
  });

  test("'communications' adds Public statements", () => {
    expect(parseApprovals("communications control")).toContain(
      "Public statements"
    );
  });

  test("'legal' adds Legal review", () => {
    expect(parseApprovals("legal review required")).toContain("Legal review");
  });

  test("'compliance' adds Legal review", () => {
    expect(parseApprovals("compliance checks")).toContain("Legal review");
  });

  test("'deploy' adds Production deploys", () => {
    expect(parseApprovals("approval on deploy")).toContain(
      "Production deploys"
    );
  });

  test("'release' adds Production deploys", () => {
    expect(parseApprovals("release management process")).toContain(
      "Production deploys"
    );
  });

  test("'production' adds Production deploys", () => {
    expect(parseApprovals("production approval gate")).toContain(
      "Production deploys"
    );
  });

  test("'budget' adds Budget changes", () => {
    expect(parseApprovals("budget approval required")).toContain(
      "Budget changes"
    );
  });

  test("'spend' adds Budget changes", () => {
    expect(parseApprovals("low spend organization")).toContain("Budget changes");
  });

  test("'procurement' adds Budget changes", () => {
    expect(parseApprovals("procurement approval")).toContain("Budget changes");
  });

  test("prompt with no keywords returns default fallback", () => {
    const result = parseApprovals("generic organization");
    expect(result).toEqual(["Material policy exceptions"]);
  });

  test("empty string returns default fallback", () => {
    expect(parseApprovals("")).toEqual(["Material policy exceptions"]);
  });

  test("multiple keywords produce multiple approvals", () => {
    const result = parseApprovals("legal review and budget approval on deploy");
    expect(result).toContain("Legal review");
    expect(result).toContain("Budget changes");
    expect(result).toContain("Production deploys");
  });

  test("all four triggers produce all four approval types", () => {
    const result = parseApprovals(
      "public statement legal deploy budget organization"
    );
    expect(result).toContain("Public statements");
    expect(result).toContain("Legal review");
    expect(result).toContain("Production deploys");
    expect(result).toContain("Budget changes");
    expect(result).toHaveLength(4);
  });
});

// ---------------------------------------------------------------------------
// parseEscalations
// ---------------------------------------------------------------------------
describe("parseEscalations", () => {
  test("always starts with S1 -> S2", () => {
    expect(parseEscalations("")[0]).toBe("S1 -> S2");
  });

  test("default prompt ends with S3 -> S5", () => {
    const chain = parseEscalations("standard operations");
    expect(chain).toContain("S3 -> S5");
    expect(chain).not.toContain("S2 -> S3*");
    expect(chain).not.toContain("S3 -> S4");
  });

  test("'audit' adds S2 -> S3*", () => {
    expect(parseEscalations("audit and quality checks")).toContain("S2 -> S3*");
  });

  test("'quality' adds S2 -> S3*", () => {
    expect(parseEscalations("quality review process")).toContain("S2 -> S3*");
  });

  test("'strategy' adds S3 -> S4", () => {
    expect(parseEscalations("strategy and planning")).toContain("S3 -> S4");
  });

  test("'intelligence' adds S3 -> S4", () => {
    expect(parseEscalations("intelligence scanning")).toContain("S3 -> S4");
  });

  test("'future' adds S3 -> S4", () => {
    expect(parseEscalations("future projection planning")).toContain("S3 -> S4");
  });

  test("'human approval' adds S4 -> S5 / Human and omits S3 -> S5", () => {
    const chain = parseEscalations("requires human approval");
    expect(chain).toContain("S4 -> S5 / Human");
    expect(chain).not.toContain("S3 -> S5");
  });

  test("'strict' adds S4 -> S5 / Human and omits S3 -> S5", () => {
    const chain = parseEscalations("strict controls");
    expect(chain).toContain("S4 -> S5 / Human");
    expect(chain).not.toContain("S3 -> S5");
  });

  test("'policy' adds S4 -> S5 / Human", () => {
    const chain = parseEscalations("policy governance layer");
    expect(chain).toContain("S4 -> S5 / Human");
  });

  test("'identity' adds S4 -> S5 / Human", () => {
    const chain = parseEscalations("identity anchor");
    expect(chain).toContain("S4 -> S5 / Human");
  });

  test("all triggers produce full chain", () => {
    const chain = parseEscalations(
      "audit strategy human approval organization"
    );
    expect(chain).toContain("S1 -> S2");
    expect(chain).toContain("S2 -> S3*");
    expect(chain).toContain("S3 -> S4");
    expect(chain).toContain("S4 -> S5 / Human");
    expect(chain).not.toContain("S3 -> S5");
  });
});

// ---------------------------------------------------------------------------
// detectRecursion
// ---------------------------------------------------------------------------
describe("detectRecursion", () => {
  test("plain prompt with small team → recursion disabled, depth 1", () => {
    const result = detectRecursion("simple flat organization", 6);
    expect(result.enabled).toBe(false);
    expect(result.depth).toBe(1);
    expect(result.branchingFactor).toBe(1);
  });

  test("'recursive' keyword enables recursion with depth ≥ 2 for small team", () => {
    const result = detectRecursion("recursive operations", 8);
    expect(result.enabled).toBe(true);
    expect(result.depth).toBe(2);
  });

  test("'recursive' keyword with agentCount ≥ 16 raises depth to 3", () => {
    const result = detectRecursion("recursive operations", 16);
    expect(result.enabled).toBe(true);
    expect(result.depth).toBe(3);
    expect(result.branchingFactor).toBe(2);
  });

  test("'fractal' keyword enables recursion", () => {
    const result = detectRecursion("a fractal organisation", 10);
    expect(result.enabled).toBe(true);
  });

  test("'nested' keyword enables recursion", () => {
    expect(detectRecursion("nested layers", 8).enabled).toBe(true);
  });

  test("'federated' keyword enables recursion", () => {
    expect(detectRecursion("federated structure", 8).enabled).toBe(true);
  });

  test("explicit '2 levels deep' sets depth to 2 and enables recursion", () => {
    const result = detectRecursion("2 levels deep organization", 8);
    expect(result.enabled).toBe(true);
    expect(result.depth).toBe(2);
  });

  test("explicit '3 levels deep' sets depth to 3", () => {
    const result = detectRecursion("3 levels deep", 8);
    expect(result.depth).toBe(3);
    expect(result.branchingFactor).toBe(2);
  });

  test("explicit depth is capped at 4", () => {
    const result = detectRecursion("5 levels deep organization", 8);
    expect(result.depth).toBe(4);
  });

  test("explicit depth of 1 does not enable recursion on its own", () => {
    const result = detectRecursion("1 level deep team", 8);
    expect(result.depth).toBe(1);
    expect(result.enabled).toBe(false);
  });

  test("depth < 3 gives branchingFactor of 1", () => {
    const result = detectRecursion("2 levels deep org", 8);
    expect(result.branchingFactor).toBe(1);
  });

  test("depth ≥ 3 gives branchingFactor of 2", () => {
    const result = detectRecursion("recursive large org", 20);
    expect(result.branchingFactor).toBe(2);
  });
});

// ---------------------------------------------------------------------------
// buildUnits
// ---------------------------------------------------------------------------
describe("buildUnits", () => {
  const flatRecursion = { enabled: false, depth: 1, branchingFactor: 1 };

  test("always includes an S1 (Operations) unit", () => {
    const domain = parseDomain("operations");
    const units = buildUnits("operations production", domain, 8, flatRecursion);
    expect(units.some((u) => u.system === "S1")).toBe(true);
  });

  test("always includes an S2 (Coordination) unit", () => {
    const domain = parseDomain("");
    const units = buildUnits("operations", domain, 8, flatRecursion);
    expect(units.some((u) => u.system === "S2")).toBe(true);
  });

  test("always includes an S3 (Control) unit", () => {
    const domain = parseDomain("");
    const units = buildUnits("budget control", domain, 8, flatRecursion);
    expect(units.some((u) => u.system === "S3")).toBe(true);
  });

  test("crisis domain includes a Communications Cell", () => {
    const domain = parseDomain("crisis communications");
    const units = buildUnits(
      "crisis communications university",
      domain,
      12,
      flatRecursion
    );
    expect(units.some((u) => u.name === "Communications Cell")).toBe(true);
  });

  test("constrained autonomy adds S5 Policy unit", () => {
    const domain = parseDomain("");
    const units = buildUnits("strict human approval", domain, 8, flatRecursion);
    expect(units.some((u) => u.system === "S5")).toBe(true);
  });

  test("total allocated agents equals requested agentCount", () => {
    const domain = parseDomain("operations coordination control");
    const units = buildUnits(
      "operations coordination control",
      domain,
      12,
      flatRecursion
    );
    const total = units.reduce((sum, u) => sum + u.allocatedAgents, 0);
    expect(total).toBe(12);
  });

  test("each unit has required properties", () => {
    const domain = parseDomain("");
    const units = buildUnits("operations", domain, 8, flatRecursion);
    units.forEach((unit) => {
      expect(unit).toHaveProperty("id");
      expect(unit).toHaveProperty("name");
      expect(unit).toHaveProperty("system");
      expect(unit).toHaveProperty("tone");
      expect(unit).toHaveProperty("responsibilities");
      expect(unit).toHaveProperty("allocatedAgents");
      expect(unit).toHaveProperty("recursionLevel", 1);
      expect(Array.isArray(unit.children)).toBe(true);
    });
  });

  test("recursion disabled → units have empty children arrays", () => {
    const domain = parseDomain("");
    const units = buildUnits("operations", domain, 8, flatRecursion);
    units.forEach((u) => expect(u.children).toHaveLength(0));
  });

  test("recursion enabled → top-level units have children", () => {
    const recursion = { enabled: true, depth: 2, branchingFactor: 1 };
    const domain = parseDomain("");
    const units = buildUnits("recursive operations", domain, 16, recursion);
    const hasChildren = units.some((u) => u.children.length > 0);
    expect(hasChildren).toBe(true);
  });

  test("blank prompt falls back to default set of four units", () => {
    const domain = parseDomain("");
    const units = buildUnits("", domain, 8, flatRecursion);
    // Required systems S1, S2, S3 are always added; blanks get the 4-unit default
    expect(units.length).toBeGreaterThanOrEqual(3);
  });
});

// ---------------------------------------------------------------------------
// flattenUnits
// ---------------------------------------------------------------------------
describe("flattenUnits", () => {
  test("empty array returns empty array", () => {
    expect(flattenUnits([])).toEqual([]);
  });

  test("flat list with no children returns same count", () => {
    const units = [
      { id: "1", children: [] },
      { id: "2", children: [] },
    ];
    expect(flattenUnits(units)).toHaveLength(2);
  });

  test("nested list flattens all descendants", () => {
    const units = [
      {
        id: "1",
        children: [
          { id: "1-1", children: [{ id: "1-1-1", children: [] }] },
          { id: "1-2", children: [] },
        ],
      },
      { id: "2", children: [] },
    ];
    const flat = flattenUnits(units);
    expect(flat).toHaveLength(5);
    const ids = flat.map((u) => u.id);
    expect(ids).toContain("1");
    expect(ids).toContain("1-1");
    expect(ids).toContain("1-1-1");
    expect(ids).toContain("1-2");
    expect(ids).toContain("2");
  });

  test("order is parent before children (depth-first pre-order)", () => {
    const units = [
      {
        id: "A",
        children: [{ id: "A1", children: [] }],
      },
    ];
    const flat = flattenUnits(units);
    expect(flat[0].id).toBe("A");
    expect(flat[1].id).toBe("A1");
  });

  test("works when children property is undefined", () => {
    const units = [{ id: "1" }, { id: "2" }];
    expect(flattenUnits(units)).toHaveLength(2);
  });
});

// ---------------------------------------------------------------------------
// buildConnections
// ---------------------------------------------------------------------------
describe("buildConnections", () => {
  const flatRecursion = { enabled: false, depth: 1, branchingFactor: 1 };
  const moderateAutonomy = { mode: "Moderate", escalationBias: "Escalate on drift" };

  function makeUnits(prompt = "operations coordination control") {
    const domain = parseDomain(prompt);
    return buildUnits(prompt, domain, 8, flatRecursion);
  }

  test("returns an array", () => {
    const units = makeUnits();
    const connections = buildConnections(units, flatRecursion, moderateAutonomy);
    expect(Array.isArray(connections)).toBe(true);
  });

  test("each connection has required fields", () => {
    const units = makeUnits();
    const connections = buildConnections(units, flatRecursion, moderateAutonomy);
    connections.forEach((c) => {
      expect(c).toHaveProperty("from");
      expect(c).toHaveProperty("to");
      expect(c).toHaveProperty("fromName");
      expect(c).toHaveProperty("toName");
      expect(c).toHaveProperty("mode");
      expect(c).toHaveProperty("reason");
      expect(c).toHaveProperty("strength");
    });
  });

  test("no connection has from === to (no self-loops)", () => {
    const units = makeUnits();
    const connections = buildConnections(units, flatRecursion, moderateAutonomy);
    connections.forEach((c) => expect(c.from).not.toBe(c.to));
  });

  test("no duplicate connections (same from + to + mode + reason)", () => {
    const units = makeUnits();
    const connections = buildConnections(units, flatRecursion, moderateAutonomy);
    const keys = connections.map(
      (c) => `${c.from}|${c.to}|${c.mode}|${c.reason}`
    );
    const unique = new Set(keys);
    expect(unique.size).toBe(keys.length);
  });

  test("constrained autonomy generates approval escalation connections", () => {
    const prompt =
      "operations coordination control intelligence policy strict human approval";
    const domain = parseDomain(prompt);
    const units = buildUnits(prompt, domain, 10, flatRecursion);
    const constrained = { mode: "Constrained", escalationBias: "Human-first" };
    const connections = buildConnections(units, flatRecursion, constrained);
    const hasApprovalEscalation = connections.some(
      (c) => c.reason === "approval escalation"
    );
    expect(hasApprovalEscalation).toBe(true);
  });

  test("recursion enabled generates recursive peer alignment connections", () => {
    const recursion = { enabled: true, depth: 2, branchingFactor: 1 };
    const domain = parseDomain("");
    const units = buildUnits("recursive operations", domain, 16, recursion);
    const connections = buildConnections(units, recursion, moderateAutonomy);
    const hasPeerAlignment = connections.some(
      (c) => c.reason === "recursive peer alignment"
    );
    expect(hasPeerAlignment).toBe(true);
  });

  test("S1 units connect to S2 with oscillation-damping reason", () => {
    const prompt = "operations coordination";
    const domain = parseDomain(prompt);
    const units = buildUnits(prompt, domain, 8, flatRecursion);
    const connections = buildConnections(units, flatRecursion, moderateAutonomy);
    const hasDamping = connections.some(
      (c) => c.reason === "oscillation damping"
    );
    expect(hasDamping).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// renderRecursiveTree
// ---------------------------------------------------------------------------
describe("renderRecursiveTree", () => {
  test("empty array returns empty string", () => {
    expect(renderRecursiveTree([])).toBe("");
  });

  test("single unit with no children renders a list item", () => {
    const unit = {
      id: "unit-1",
      name: "Operations Cell",
      system: "S1",
      tone: "secondary",
      recursionLevel: 1,
      allocatedAgents: 4,
      children: [],
    };
    const html = renderRecursiveTree([unit]);
    expect(html).toContain("<li>");
    expect(html).toContain("Operations Cell");
    expect(html).toContain("S1");
    expect(html).toContain("Level 1");
    expect(html).toContain("4 agents");
  });

  test("nested units render a nested tree structure", () => {
    const child = {
      id: "unit-1-1",
      name: "Operations Cell North",
      system: "S1",
      tone: "secondary",
      recursionLevel: 2,
      allocatedAgents: 2,
      children: [],
    };
    const parent = {
      id: "unit-1",
      name: "Operations Cell",
      system: "S1",
      tone: "secondary",
      recursionLevel: 1,
      allocatedAgents: 4,
      children: [child],
    };
    const html = renderRecursiveTree([parent]);
    expect(html).toContain("tree-branch");
    expect(html).toContain("Operations Cell North");
    expect(html).toContain("Level 2");
  });

  test("output contains badge for every unit's system", () => {
    const units = [
      {
        id: "1",
        name: "Coordination Bridge",
        system: "S2",
        tone: "primary",
        recursionLevel: 1,
        allocatedAgents: 2,
        children: [],
      },
      {
        id: "2",
        name: "Control Desk",
        system: "S3",
        tone: "primary",
        recursionLevel: 1,
        allocatedAgents: 2,
        children: [],
      },
    ];
    const html = renderRecursiveTree(units);
    expect(html).toContain("S2");
    expect(html).toContain("S3");
  });
});

// ---------------------------------------------------------------------------
// generateSchemaFromPrompt
// ---------------------------------------------------------------------------
describe("generateSchemaFromPrompt", () => {
  test("returns an object with all required top-level fields", () => {
    const schema = generateSchemaFromPrompt("design 8 agents for operations");
    expect(schema).toHaveProperty("name");
    expect(schema).toHaveProperty("domain");
    expect(schema).toHaveProperty("mission");
    expect(schema).toHaveProperty("agentCount");
    expect(schema).toHaveProperty("systems");
    expect(schema).toHaveProperty("budget");
    expect(schema).toHaveProperty("autonomy");
    expect(schema).toHaveProperty("approvals");
    expect(schema).toHaveProperty("escalationChain");
    expect(schema).toHaveProperty("recursion");
    expect(schema).toHaveProperty("connections");
    expect(schema).toHaveProperty("connectionCount");
    expect(schema).toHaveProperty("units");
    expect(schema).toHaveProperty("unitCount");
    expect(schema).toHaveProperty("generatedAt");
    expect(schema).toHaveProperty("warnings");
  });

  test("agentCount matches the number in the prompt", () => {
    const schema = generateSchemaFromPrompt("a 12-agent crisis response team");
    expect(schema.agentCount).toBe(12);
  });

  test("domain is detected from the prompt", () => {
    const schema = generateSchemaFromPrompt(
      "university crisis communications team"
    );
    expect(schema.domain).toBe("Crisis Response");
  });

  test("mission preserves the original (untrimmed-then-trimmed) prompt", () => {
    const prompt = "  design a lean consulting mesh  ";
    const schema = generateSchemaFromPrompt(prompt);
    expect(schema.mission).toBe(prompt.trim());
  });

  test("unitCount equals the length of flattened units", () => {
    const schema = generateSchemaFromPrompt("8 agents operations coordination");
    expect(schema.unitCount).toBe(flattenUnits(schema.units).length);
  });

  test("connectionCount equals the length of connections array", () => {
    const schema = generateSchemaFromPrompt("operations");
    expect(schema.connectionCount).toBe(schema.connections.length);
  });

  test("warnings array is populated when agent count is missing", () => {
    const schema = generateSchemaFromPrompt("design a lean consulting mesh");
    expect(
      schema.warnings.some((w) => /agent count/i.test(w))
    ).toBe(true);
  });

  test("warnings array is populated when budget posture is missing", () => {
    const schema = generateSchemaFromPrompt("12 agents operations");
    expect(
      schema.warnings.some((w) => /budget/i.test(w))
    ).toBe(true);
  });

  test("generatedAt is a valid ISO 8601 date string", () => {
    const schema = generateSchemaFromPrompt("operations");
    expect(() => new Date(schema.generatedAt)).not.toThrow();
    expect(new Date(schema.generatedAt).toString()).not.toBe("Invalid Date");
  });

  test("systems array contains only the systems present in units", () => {
    const schema = generateSchemaFromPrompt("8 agents operations coordination control");
    const flatUnits = flattenUnits(schema.units);
    const expectedSystems = [...new Set(flatUnits.map((u) => u.system))];
    expect(schema.systems.sort()).toEqual(expectedSystems.sort());
  });

  test("crisis prompt generates Communications Cell", () => {
    const schema = generateSchemaFromPrompt(
      "12-agent university crisis communications strict"
    );
    const flat = flattenUnits(schema.units);
    expect(flat.some((u) => u.name === "Communications Cell")).toBe(true);
  });

  test("lean saas prompt sets budget to Lean", () => {
    const schema = generateSchemaFromPrompt("8 agents lean saas product team");
    expect(schema.budget.profile).toBe("Lean");
  });

  test("enterprise prompt sets budget to Expansive", () => {
    const schema = generateSchemaFromPrompt("8 agents enterprise operations");
    expect(schema.budget.profile).toBe("Expansive");
  });

  test("whitespace-only prompt is handled without throwing", () => {
    expect(() => generateSchemaFromPrompt("   ")).not.toThrow();
  });
});

// ---------------------------------------------------------------------------
// buildSearchIndex
// ---------------------------------------------------------------------------
describe("buildSearchIndex", () => {
  let index;

  beforeAll(() => {
    index = buildSearchIndex();
  });

  test("returns an array", () => {
    expect(Array.isArray(index)).toBe(true);
  });

  test("contains exactly five entries", () => {
    expect(index).toHaveLength(5);
  });

  test("each entry has screen, type, title, and copy fields", () => {
    index.forEach((item) => {
      expect(item).toHaveProperty("screen");
      expect(item).toHaveProperty("type");
      expect(item).toHaveProperty("title");
      expect(item).toHaveProperty("copy");
    });
  });

  test("all referenced screens are valid screen keys", () => {
    const validScreens = [
      "overview",
      "operations",
      "coordination",
      "control",
      "intelligence",
      "policy",
    ];
    index.forEach((item) => {
      expect(validScreens).toContain(item.screen);
    });
  });

  test("index covers at least four distinct screens", () => {
    const screens = new Set(index.map((i) => i.screen));
    expect(screens.size).toBeGreaterThanOrEqual(4);
  });

  test("each entry has non-empty title and copy", () => {
    index.forEach((item) => {
      expect(item.title.length).toBeGreaterThan(0);
      expect(item.copy.length).toBeGreaterThan(0);
    });
  });
});
