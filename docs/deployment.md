---
title: "Deployment Guide"
description: "How to install, configure, build, and deploy Cody Master — locally and to production."
keywords: ["deployment", "installation", "configuration", "cody master"]
robots: "index, follow"
---

# Deployment Guide

> **Quick Reference**
> - **Node.js**: 18+ required
> - **Skills Install**: `bash <(curl ...) --all`
> - **CLI/Dashboard**: `bash <(curl -fsSL https://raw.githubusercontent.com/tody-agent/codymaster/main/install.sh) --all`
> - **Dashboard Port**: 48120 (default)
> - **Hosting**: Cloudflare Pages (landing page)

## Installation

### 1. Recommended: Zero-Touch Installer (Bash)

This is the primary way to get the 68+ AI skills into your agent's environment and natively configure the OS-level semantic memory daemon.

```bash
# Interactive setup (installs skills + CLI + OpenViking via pip3)
bash <(curl -fsSL https://raw.githubusercontent.com/tody-agent/codymaster/main/install.sh) --all

# Non-interactive zero-touch setup
bash <(curl -fsSL https://raw.githubusercontent.com/tody-agent/codymaster/main/install.sh) --auto
```

### 2. Dashboard & CLI (NPM)

Install the global CLI for localized task management, context bus, and Mission Control UI.

```bash
npm install -g codymaster
```
> **Note**: As of v4.7.0, the NPM `postinstall.js` hook securely manages `pip/pip3` commands in the background to set up your OpenViking engine automatically.

After installation, the following commands are available:
- `cm` — primary CLI command
- `codymaster` — full name

## Configuration

### Project Initialization

```bash
# Initialize a new Cody Master project Context Backbone
cm init

# This creates a .cm/ directory with:
# .cm/CONTINUITY.md        - Working memory
# .cm/config.yaml          - Backend configs (sqlite vs viking)
# .cm/context.db           - SQLite FTS5 database (if sqlite backend)
# .cm/token-budget.json    - Token limits per chunk
```

### Default Settings

| Setting | Default | Description |
|---------|---------|-------------|
| Dashboard Port | `48120` | HTTP server port |
| Data File | `~/.cody/cm-tasks.json` | Project & task storage |
| PID File | `~/.cody/cm-dashboard.pid` | Dashboard process tracker |
| Stuck Threshold | `30 minutes` | Time before task flagged as stuck |

### Environment Configuration

```bash
# Custom port
cm dashboard start --port 3001

# Custom project path
cm continuity init --path /my/project
```

## Running the Dashboard

```bash
# Start dashboard server
cm dashboard start

# Check status
cm dashboard status

# Open in browser
cm open

# Stop
cm dashboard stop
```

The dashboard will be available at `http://codymaster.localhost:48120`

## Building from Source

### Development

```bash
# Install dependencies
npm install

# Run TypeScript compilation
npm run build

# Run tests
npm run test:gate

# Start landing page dev server
npx serve public -l 3000
```

### Production Build

```bash
# Full build pipeline
npm run build

# Output goes to dist/
# Landing page assets are in public/
```

### Test Pipeline

```bash
# Run all tests
npm run test:gate

# Run specific test file
npx vitest run test/frontend-safety.test.ts
```

## Deployment to Cloudflare Pages

The landing page is deployed to Cloudflare Pages:

### wrangler.toml Configuration

```toml
name = "cody-master"
pages_build_output_dir = "./public"
```

### Deploy Process

```bash
# Deploy to production
npx wrangler pages deploy ./public --project-name=cody-master

# Deploy preview
npx wrangler pages deploy ./public --project-name=cody-master --branch=preview
```

### DNS Setup

| Record | Name | Value |
|--------|------|-------|
| CNAME | `cody.todyle.com` | Cloudflare Pages auto-configured |
| Custom | Your domain | Point to Cloudflare Pages |

## File Structure for Deployment

```
Production deployment:
├── public/                    # Cloudflare Pages
│   ├── index.html             # Landing page
│   ├── skills.html            # Skills catalog
│   ├── story.html             # Origin story
│   ├── demo.html              # Demo page
│   ├── start.html             # Getting started
│   ├── dashboard/             # Dashboard SPA
│   │   └── index.html
│   ├── css/                   # Stylesheets
│   ├── js/                    # Client-side JS
│   ├── i18n/                  # Translations
│   └── img/                   # Assets

npm Package:
├── dist/                      # Compiled TypeScript
│   ├── index.js               # CLI entry
│   ├── dashboard.js           # Dashboard server
│   └── ...
├── skills/                    # Skill definitions
└── package.json               # npm manifest
```

## Monitoring

### Dashboard Status

```bash
# Check if dashboard is running
cm dashboard status

# View activity history
cm history --limit 20

# Check for stuck tasks
cm task stuck
```

### Health Checks

The dashboard provides these endpoints for monitoring:

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/tasks/stuck` | GET | Returns tasks stuck > threshold |
| `/api/judge` | GET | Overall task health evaluation |
| `/api/activities` | GET | Recent activity log |
| `/api/deployments` | GET | Deployment history |

## Related

- [Architecture →](./architecture.md)
- [API Reference →](./api/)
- [Installation SOP →](./sop/installation.md)
