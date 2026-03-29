---
title: "Write Agent-Driven Spec Docs"
description: "Transform product requirements into structured specification documents that AI agents can execute directly — from PRD to implementation plan."
keywords: ["product manager", "spec doc", "PRD", "agent-driven", "requirements"]
robots: "index, follow"
---

# Write Agent-Driven Spec Docs

> **Your spec doc IS the execution plan.** Write it once — AI agents execute it autonomously.

## Who This Is For

- Product managers who want AI agents to implement their specs
- Founders writing requirements for technical features
- Anyone bridging the gap between business needs and code

**Prerequisites:** CodyMaster installed, any AI agent configured. No coding knowledge required.

## What You'll Create

- ✅ Qualified problem statement with user personas
- ✅ Structured spec doc optimized for AI execution
- ✅ Implementation plan that agents follow step-by-step
- ✅ Complete documentation package

---

## The Workflow

### Step 1: Strategic Analysis

Start with a high-level description of what you want:

```
@[/cm-brainstorm-idea] We need to add a subscription billing system 
to our SaaS platform. Users should be able to choose plans, 
upgrade/downgrade, and manage payment methods.
```

**What the agent does:**

1. **Discovers** — Scans the existing codebase to understand what's already built
2. **Defines** — Uses 9 Windows Analysis to qualify the real problem
3. **Develops** — Generates 2-3 solution approaches
4. **Evaluates** — Scores each option across Tech/Product/Design/Business

**You receive:** A recommendation with clear trade-offs.

### Step 2: Write the Spec (Guided)

After choosing an approach, the agent helps you write a structured spec:

```
@[/cm-planning] Write a detailed spec for Option A (Stripe integration).
I need this as a complete agent-driven document.
```

**The spec format your agent produces:**

```markdown
# Feature Spec: Subscription Billing

## 1. Problem Statement
For freelancers who need predictable SaaS tools,
the current platform lacks billing management,
which forces them to use external payment tools.

## 2. User Stories
- As a user, I can view available plans and compare features
- As a user, I can subscribe to a plan with my credit card
- As a user, I can upgrade/downgrade my plan at any time
- As an admin, I can manage plan configurations

## 3. Acceptance Criteria
| Story | Given | When | Then |
|-------|-------|------|------|
| View plans | User is on pricing page | Page loads | Shows 3 plan cards |
| Subscribe | User clicks "Subscribe" | Payment succeeds | Account upgraded |
| Downgrade | User clicks "Change plan" | Selects lower plan | Prorated billing |

## 4. Technical Requirements
- Payment: Stripe Checkout + Webhooks
- Database: plans, subscriptions, invoices tables
- API: /api/billing/* endpoints
- Security: PCI compliance via Stripe (no card data stored)

## 5. Out of Scope
- Custom enterprise billing
- Cryptocurrency payments
- Annual billing (Phase 2)

## 6. Agent Execution Plan
[Auto-generated implementation plan that agents follow]
```

### Step 3: Review & Refine

The agent asks you to review the spec before generating code:

```
⚠️ REVIEW REQUIRED

Please check:
1. User stories — are these the right scenarios?
2. Acceptance criteria — are the conditions correct?
3. Technical decisions — Stripe vs alternatives?
4. Out of scope — anything missing or wrong?
```

**Your feedback examples:**
- "Add annual billing option — it's not Phase 2, we need it now"
- "Change Stripe to Lemon Squeezy — better for solo founders"
- "Add a user story for invoice history"

### Step 4: Generate Documentation

```
@[/cm-dockit] Generate complete documentation for the billing feature spec
```

**Output:**
- API reference (endpoints, request/response schemas)
- User guide (how to manage subscriptions)
- Architecture decision record (why Stripe, why this schema)
- Test plan (what to verify)

### Step 5: Hand Off to Development

The spec is now ready for any developer (human or AI) to execute:

```
@[/cm-execution] Execute the billing feature spec
```

The agent reads the spec → creates tasks → executes with TDD → deploys.

---

## The Spec-as-Code Philosophy

Traditional specs die in Confluence. CodyMaster specs are **living documents**:

| Traditional | Agent-Driven |
|------------|-------------|
| Written in Notion/Confluence | Written in Markdown next to code |
| Read by humans only | Read and executed by AI agents |
| Become outdated in days | Updated as code evolves |
| Disconnected from implementation | IS the implementation plan |
| Requires dev to interpret | Machine-readable acceptance criteria |

---

## Prompt Templates for PMs

### Feature Spec
```
@[/cm-brainstorm-idea] I need to add [FEATURE] to [PRODUCT].
Target users: [WHO]. Business goal: [WHAT].
Constraints: [TIMELINE/BUDGET/TECH].
```

### Bug Investigation
```
@[/cm-debugging] Users report [SYMPTOM].
Expected: [DESIRED BEHAVIOR].
Impact: [NUMBER OF USERS / REVENUE IMPACT].
```

### Competitive Analysis
```
@[/cm-brainstorm-idea] Analyze how [COMPETITOR] does [FEATURE].
What can we learn? How should we differentiate?
```

### Documentation
```
@[/cm-dockit] Generate [TYPE] documentation for [FEATURE/SYSTEM].
Audience: [USERS/DEVELOPERS/STAKEHOLDERS].
Format: [MARKDOWN/VITEPRESS].
```

---

## Tips for PMs

| Tip | Why |
|-----|-----|
| **Be specific about users** | "Freelancers with <5 clients" > "users" |
| **Define "done" clearly** | Acceptance criteria = test cases |
| **Mark what's out of scope** | Prevents scope creep during AI execution |
| **Review the plan, not the code** | Your value is in WHAT to build, not HOW |
| **Iterate the spec, not the code** | Change the spec → agent re-implements |
