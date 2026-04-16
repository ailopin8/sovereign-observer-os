# Sovereign Observer OS

A multi-screen command-center prototype for model-driven organizational monitoring, recursion, and viability design.

## Overview

This repository contains a static prototype inspired by the Viable System Model and the "Sovereign Observer" design direction. It includes:

- A shared navigation shell across Overview, Operations, Coordination, Control, Intelligence, and Policy views
- A natural-language organization schema generator
- Recursive unit generation with nested organizational structure
- Causal and systemic links between recursive units and governance layers
- A search surface and recursive health check modal

## Files

- `index.html` - app shell and root document
- `styles.css` - design system and layout styling
- `app.js` - screen rendering, schema generation, recursion, and interaction logic

## Local preview

Because this is a static site, you can open `index.html` directly in a browser, or serve it locally:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## GitHub Pages

This repo includes a GitHub Actions workflow that deploys the site to GitHub Pages whenever changes are pushed to `main`.

If Pages is not already active on the repository:

1. Open the repository on GitHub
2. Go to `Settings` -> `Pages`
3. Confirm the source is `GitHub Actions`

After the workflow runs successfully, the site should be available at:

```text
https://ailopin8.github.io/sovereign-observer-os/
```

## Prototype capabilities

### Design studio

The Overview screen includes a natural-language design studio that parses prompts into a structured organizational schema:

- domain detection
- agent count inference
- budget posture inference
- autonomy mode inference
- approval requirements
- escalation chains
- recursive structure generation
- causal and systemic connection graph generation

### Recursive organizations

Recursive generation supports:

- nested units
- parent-child delegation
- upstream reporting
- peer coordination
- systemic coupling across control, intelligence, audit, and policy layers

## Deployment notes

This prototype is intentionally framework-free and dependency-light. GitHub Pages deployment simply publishes the repository root as a static site artifact.
