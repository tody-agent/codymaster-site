---
title: "Changelog"
description: "Release history for the Cody Master Skills Kit"
keywords: ["changelog", "releases", "cody master"]
robots: "index, follow"
---

# Changelog

All notable changes to this project will be documented in this file.

Categories: 🚀 **Improvements** | 🐛 **Bug Fixes** | 🔒 **Security**

## [5.0.0] - 2026-04-02 (CodyMaster Founders Edition)

### 🚀 Kỷ Nguyên Mới: The "Neural Spine" Upgrade

CodyMaster chính thức bước qua thời kỳ "Content Factory" để lột xác thành một **AI-Native Engineering Workspace** đúng nghĩa. Khắc phục triệt để căn bệnh "AI học vẹt, mất trí nhớ, ảo giác code" với lõi kiến trúc mới tích hợp từ sức mạnh của **OpenSpace** và **OpenViking**!

---

### ⚙️ Kiến Trúc Mới & Luồng Thực Thi (Execution Flow)

**1. Tích hợp OpenViking (Bộ Não Vector & AST Semantics):**
Hệ thống RAG (Retrieval Augmented Generation) lạc hậu đã bị thay thế hoàn toàn:
- **Cấu trúc L0/L1/L2:** OpenViking đọc và lập bản đồ AST (Abstract Syntax Tree) của toàn bộ hệ thống dự án. Khi AI cần ngữ cảnh cho một module, nó chỉ quét đúng phần ngọn (Interface Signature - L1) thay vì copy-paste mù quáng hàng nghìn dòng code chi tiết (L2).
- **Kết quả:** Trí nhớ mạch lạc xuyên suốt toàn dự án. Hoàn toàn xóa xổ các lỗi "hallucination", quên mất import hay sai param khi gọi chéo file. Tốn ít chi phí token hơn 10 lần.

**2. Tích hợp OpenSpace (Lồng Cách Ly & Khả Năng Tự Sửa Lỗi):**
Bạn không còn cần phải tự copy/paste lỗi đưa về môi trường để AI biết đang hỏng gì!
- **Autonomous Terminal:** Agent được tự động cấp quyền môi trường sandbox để tự run test (`npm run test:gate`, `ts-node`, `git log`) một cách cô lập.
- **Vòng lặp Self-Healing Loop:** Nếu code do AI viết vướng lỗi Syntax hoặc Unit Test trượt, *OpenSpace* hứng toàn bộ luồng báo lỗi (Stderr) và ném trực tiếp lại mặt AI. AI sẽ tự chẩn đoán và viết lại mã vá lỗi trước khi gửi kết quả hoàn chỉnh tới mắt bạn.

#### 📊 Biểu đồ Luồng Thực Thi Hoàn Chỉnh

```mermaid
graph TD
    User([User Prompt: "Refactor Authentication"]) ==> Router
    
    subgraph "Phase 1: Knowledge Gathering"
        Router[Task Router] --> OViking{OpenViking Engine}
        OViking --> L0[L0: Skeleton Directory Map]
        OViking --> L1[L1: Symbol Headers]
        OViking --> L2[L2: Semantic Vectors]
        L0 --> Compiler[Context Builder]
        L1 --> Compiler
        L2 --> Compiler
    end

    Compiler ==> SubAgent
    
    subgraph "Phase 2: Execution (OpenSpace)"
        SubAgent[AI Sub-Agent] --> Coding[Writes Code / Logic]
        Coding --> Sandbox[OpenSpace Container]
        Sandbox --> Bash[Excecutes Terminal/Tests]
        Bash -- "Fails ❌" --> Feedback[Stderr Log Reader]
        Feedback --> SubAgent
    end
    
    Bash -- "Passes ✅" --> Review[Frontend Integrity Gate]
    Review --> Ship((Complete: Ready to Deploy))
    
    style User fill:#3b82f6,stroke:#fff,stroke-width:2px,color:#fff
    style Ship fill:#10b981,stroke:#fff,stroke-width:2px,color:#fff
    style OViking fill:#8b5cf6,stroke:#fff,stroke-width:2px,color:#fff
    style Sandbox fill:#f59e0b,stroke:#fff,stroke-width:2px,color:#111
```

> **Ghi chú trải nghiệm:** Với thiết kế Neural Spine này, thay vì hoạt động như công cụ sinh chữ (Typer), CodyMaster v5 vận hành giống một Kỹ Sư Máy (Senior Engineer) thực thụ từ bước đọc hiểu context, tự build, tự test cho tới lúc sẵn sàng ship lên môi trường Deploy.


## [4.4.5] - 2026-03-30

### 🔒 Security

- **Security Checkpoints Upgraded** — Deployed unified security updates across `cm-security-gate`, `cm-quality-gate`, `cm-safe-deploy`, and `cm-test-gate`.

## [4.4.4] - 2026-03-29

### 🐛 Bug Fixes

- **Version Bump** — Minor bug fixes and dependency updates.

## [4.4.3] - 2026-03-29

### 🚀 Improvements — The Self-Healing Update

- **68+ Skill Milestone** — CodyMaster arsenal grows from 60+ to 68+ battle-tested skills with 8 new capabilities.
- **🧬 Self-Healing AI Pipeline** — Skills now monitor, score, and auto-repair themselves:
  - `cm-skill-health` — Real-time quality monitoring with SQLite-backed metrics dashboard (invocations, success rate, token usage, health scores).
  - `cm-skill-evolution` — 3-mode evolution engine (FIX/DERIVED/CAPTURED) with version DAG and lineage tracking. Auto-patches degraded skills.
  - `cm-skill-search` — BM25 + health-score ranking for intelligent skill discovery.
  - `cm-skill-share` — Export/import skills across teams and machines with version integrity.
- **🏢 cm-frappe-agent** — Full-stack Frappe/ERPNext development agent with 7-layer architecture: doctypes, workflows, REST APIs, permissions, fixtures, performance optimization, and production deploys.
- **🚀 Growth Hacking Engine** — `cm-growth-hacking` generates complete conversion systems (Bottom Sheet + Calendar CTA + Tracking) with industry auto-detection.
- **cm-auto-publisher** — Publishing automation bridge: AI agents → Content Factory Router → any Astro site.
- **cm-clean-code** — TRIZ-powered code hygiene gate: dead code detection, duplicate elimination, naming analysis.
- **cm-reactor** — Strategic codebase re-direction when requirements change or tech debt blocks progress.
- **Documentation Overhaul** — README (all 6 languages), CHANGELOG, and new Self-Healing AI deep-dive doc updated.

## [4.4.2] - 2026-03-29

### 🚀 Improvements

- **cm-brainstorm-idea Phase 4.5 (UI Preview)** — Now integrates with `cm-ui-preview` to automatically generate visual mockups (via Google Stitch or Pencil MCP) *after* recommending an approach but *before* detailed planning begins. Provides instant visual validation of ideas.
- **OpenSpec Protocol Upgrade** — Enhanced integration with Fission-AI OpenSpec format (`openspec/changes/[initiative]/proposal.md`) for seamless context handoffs to downstream skills (`cm-planning` & `cm-execution`).
- **Skill Evolution Engine** — Successfully executed automated self-healing mechanisms (Mode: FIX) for `cm-tdd` and `cm-debugging` after health monitor alerts.

## [4.3.0] - 2026-03-27

### 🚀 Improvements
- **Unified 5-Tier Memory Architecture** — Upgraded CodyMaster's internal memory pipeline from 3-tier to a complete 5-tier system (including Tier 4: Document Memory and Tier 5: Structural Code Memory).
- **cm-notebooklm** — New "Knowledge Kitchen" workflow enabling seamless 2-way sync with Google NotebookLM for project-specific cloud AI memory.
- **cm-content-factory** — Unified Content Hub implementation integrating NotebookLM with the Content Factory for automated marketing asset generation.
- **cm-brainstorm-idea** — Strategic analysis gate for evaluating complex initiatives using Design Thinking + 9 Windows (TRIZ).
- **Multi-lingual 3D Brain Visualization** — New interactive 3D brain landing page (`brain-3d.html`) implemented with full i18n support.
- **Credits extraction** — Extracted standalone credits landing page for a cleaner UI interface.
- 35-skill arsenal achieved with enhanced token optimization and UX heuristics.


## [4.2.0] - 2026-03-24

### 🔒 Security
- **DOM XSS Remediation** — Sanitized all `innerHTML` injections across 6 JS files (`kit.js`, `skills-page.js`, `demo-page.js`, `docs-page.js`, `story-page.js`, `index.html`) with `escapeHtml()` + `escapeAttr()`
- **sanitize.js** — New shared utility providing `escapeHtml()`, `escapeHtmlWithBreaks()`, `escapeAttr()` loaded in 23 HTML pages
- **safe_path.py** — New Python utility for path traversal prevention with `safe_resolve()`, `safe_join()`, `safe_open()`
- **Snyk Code SAST** — 0 medium+ findings after full remediation scan
- **Security rules in skill kit** — 5 skills updated with security learnings:
  - `cm-execution`: Frontend DOM + Python + Node security rules
  - `cm-quality-gate`: Layer 8 XSS scan + Gate 6 Snyk Code integration
  - `cm-planning`: Security checklist in scope definition
  - `cm-tdd`: Security TDD examples (XSS, path traversal tests)
  - `cm-code-review`: Part D Security Review Checklist

### 🚀 Improvements
- **CLI Terminal UI Redesign** — New premium terminal interface with onboarding, theme system, and hamster mascot
- **Security Assessment** — Full audit of Agent Trust Hub API (`ai.gendigital.com`)

### 🐛 Bug Fixes
- Fixed unescaped i18n data in persona cards, skill cards, JTBD canvas, FAQ, and IDE instructions
- Fixed `docs-page.js` ~40 unescaped values across 5 render functions

---


### 🚀 Improvements
- Documentation Changelog Integration — automated changelog generation added to VitePress docs
- Setup NPM Publishing — configured package for npmjs.com publishing
- CLI Interface Redesign — premium mobile-optimized ASCII art banner
- Parallel Coding Page — added visual comparison and full i18n support
- Open Source Docs — added section acknowledging referenced GitHub repositories

### 🐛 Bug Fixes
- Security Vulnerability Remediation — resolved Snyk Code findings including DOM XSS and Path Traversal
- Fixed 401 Unauthorized authentication error for `/cm:cm-start` command

---


## [4.1.0] - 2026-03-23

### 🚀 Improvements
- Token Optimization Phase 1 — `GEMINI.md` reduced from 32 `@` imports to 3 essential skills, saving 92% tokens per turn (~100K → ~8K)
- Token Optimization Phase 2 — Top 5 largest skills slimmed by 72-84% (105K bytes saved total):
  - `cm-project-bootstrap` 40K → 6.6K, `cm-ux-master` 27K → 5.6K, `cm-safe-deploy` 23K → 4.1K, `cro-methodology` 22K → 4.9K, `cm-ads-tracker` 19K → 5.3K
- Progressive Disclosure Templates — 10 template files extracted to `templates/` directories for on-demand loading via `view_file`, eliminating accuracy trade-offs from slimming
- Vibe Coding landing page (`vibe-coding.html`) — guide for non-developers
- Parallel Coding landing page (`parallel-coding.html`) — side-by-side comparison with/without CodyMaster

---

## [4.0.0] - 2026-03-23

### 🚀 Improvements
- Project Level System (L0-L3) — auto-detects complexity and scales workflow depth
- Shared Helpers Pattern — `skills/_shared/helpers.md` with 6 reusable sections (~750-1000 tokens saved per skill)
- Role Labels — 6 key skills now carry explicit roles (Lead Developer, Strategic Analyst, Product Manager, QA Lead, Test Engineer, Release Engineer)
- Gate Scoring — `cm-quality-gate` now outputs numeric scores per gate (≥80 PASS, 60-79 WARN, <60 FAIL)
- Requirement Tracing — FR/NFR IDs in `cm-planning` for L2+ projects
- Outputs Convention — standardized `.cm/outputs/` directory structure
- Skill Gap Detector — auto-detects missing skills during planning and execution
- Release Pipeline — automatic version bumping and changelog generation in `cm-safe-deploy`

### 🐛 Bug Fixes
- Remove `skill-creator-ultra` from skill index, CLI, FAQ, and i18n files (replaced by on-demand `cm-skill-mastery` guidance)

---

## [3.4.0] - 2026-03-23

### 🚀 Improvements
- Multi-country upgrade for VN, TH, PH
- Smart Import Engine with configurable scoring rules
- Design system extraction with Harvester v5
- 34-skill CodyMaster kit with auto-chaining
- Safe Deploy Pipeline v2 with 9-gate sequential pipeline
- DocKit changelog support for closed-loop releases
- i18n framework with 4-language support (vi, en, th, ph)

### 🐛 Bug Fixes
- Fix FAQ card spacing on mobile layout
- Fix i18n key parity for Thai language files
- Fix employee period score calculation edge cases
