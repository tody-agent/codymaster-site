---
title: "Vibe Code a Project from Scratch"
description: "Go from zero to deployed production app in one session — full skill chain from bootstrap to deploy."
keywords: ["vibe coding", "new project", "from scratch", "full stack", "deploy"]
robots: "index, follow"
---

# Vibe Code a Project from Scratch

> **From zero to live URL in one session.** Bootstrap, design, code, test, deploy — all through conversation.

## Who This Is For

- Founders building their first MVP
- Developers starting a new project and wanting maximum velocity
- Anyone who wants a production-ready app without touching boilerplate

**Prerequisites:** CodyMaster installed, one AI agent configured

## What You'll Build

- ✅ Full project scaffold (design system, CI, i18n, SEO)
- ✅ Production-quality code with test coverage
- ✅ 8-gate deploy pipeline to staging → production
- ✅ Working memory — AI remembers everything across sessions

---

## The Full Workflow

### Phase 1: Bootstrap (5 minutes)

```
@[/cm-project-bootstrap] Create a SaaS dashboard for "InvoiceFlow"
— invoicing for freelancers. Stack: Astro + Tailwind + Supabase.
Target: desktop-first, with mobile responsive.
```

**What happens:**
1. Agent asks identity questions (GitHub org, Cloudflare account)
2. Creates project scaffold:
   ```
   invoiceflow/
   ├── AGENTS.md              # AI manifest
   ├── .cm/                   # Working memory
   ├── src/
   │   ├── components/        # Design system tokens
   │   ├── layouts/
   │   └── pages/
   ├── test/                  # Test infrastructure
   ├── scripts/               # Deploy gates
   └── package.json
   ```
3. Auto-generates platform configs (CLAUDE.md, .cursor/rules/, etc.)
4. Initializes design system tokens, i18n files, SEO base

### Phase 2: Design (10 minutes)

```
@[/cm-brainstorm-idea] Design the dashboard UX for InvoiceFlow.
Key features: invoice list, create invoice form, revenue chart, client management.
```

Agent runs the Double Diamond process → produces qualified recommendation.

**Then generate visual preview:**

```
@[/cm-ui-preview] Create design concepts for the recommended InvoiceFlow dashboard
```

Review the Stitch/Pencil preview → approve or iterate.

### Phase 3: Plan (5 minutes)

```
@[/cm-planning] Plan the InvoiceFlow dashboard based on approved design
```

Agent creates `implementation_plan.md`:
- Task decomposition
- Dependency order
- Test strategy per task
- Deploy milestones

**⚠️ READ THE PLAN.** This is your biggest leverage point. 2 minutes of review saves hours of rework.

### Phase 4: Build (30-60 minutes)

```
@[/cm-execution] Execute the approved plan
```

The RARV cycle runs autonomously:

```
Task 1/8: Setup Supabase schema + types
  🧪 TDD: test → implement → verify
  ✅ 4 tests passing

Task 2/8: Invoice list component
  🧪 TDD: test → implement → verify
  ✅ 6 tests passing

Task 3/8: Create invoice form
  🧪 TDD: test → implement → verify
  ✅ 8 tests passing
  
...continues through all tasks...
```

**Your role during build:**
- Review when the agent asks for approval
- Provide feedback: "Make the chart blue, not green"
- Don't read the code — watch the test results

### Phase 5: Verify (5 minutes)

```
@[/cm-quality-gate] Full 6-gate check
```

All gates must pass before deploy.

### Phase 6: Deploy (2 minutes)

```
@[/cm-safe-deploy] Deploy InvoiceFlow to staging
```

8-gate pipeline → live staging URL.

```
@[/cm-safe-deploy] Promote staging to production
```

🎉 **Your app is live.**

---

## After Launch: Iterate

```
# Next day — add new feature
@[/cm-start] Add PDF export for invoices

# Agent reads CONTINUITY.md → picks up context instantly
# → Plans → TDD → Build → Verify → Deploy
```

Working memory means every session builds on the last.

---

## Skill Chain (Automated)

For experienced users, one prompt does everything:

```
@[/cm-skill-chain] Build and deploy InvoiceFlow — 
invoicing SaaS for freelancers with dashboard, invoice CRUD, 
revenue charts, and client management
```

This triggers the full chain:
```
cm-project-bootstrap → cm-brainstorm-idea → cm-planning 
→ cm-execution (with cm-tdd) → cm-quality-gate → cm-safe-deploy
```

---

## Tips

| Tip | Why |
|-----|-----|
| **Be specific about your idea** | "Invoicing for freelancers" > "a SaaS app" |
| **Choose a simple MVP scope** | 3-5 features max for first version |
| **Review the plan before approving** | 2 min review = 2 hours saved |
| **Deploy to staging first** | Always verify before production |
| **Iterate in conversation** | Add features one at a time after MVP is live |
