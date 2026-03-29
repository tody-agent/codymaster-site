---
title: "Start Using AI on an Existing Project"
description: "Onboard CodyMaster to any codebase in 10 minutes — skeleton index, working memory, AGENTS.md, and intelligent code navigation."
keywords: ["ai onboarding", "existing project", "codebase intelligence", "productivity"]
robots: "index, follow"
---

# Start Using AI on an Existing Project

> **Your project exists. Your code works. Now make AI understand it in 10 minutes — not 10 hours.**

## Who This Is For

- Developers with a running project who want AI assistance
- Teams adopting AI coding tools on legacy codebases
- Solo developers looking to 10x their velocity on existing work

**Prerequisites:** Node.js 22+, Git initialized, any CodyMaster-supported AI agent

## What You'll Build

- ✅ Structural map your AI agent reads in one shot
- ✅ Working memory that persists across sessions
- ✅ AGENTS.md manifest — single source of truth for AI behavior
- ✅ AI agent that navigates your code like a senior dev

---

## The 10-Minute Setup

### Minute 1-2: Install CodyMaster

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/tody-agent/codymaster/main/install.sh) --all
codymaster  # Interactive setup — select your AI agent
```

### Minute 3-4: Generate the Skeleton Index

```bash
# From your project root
bash scripts/index-codebase.sh
```

**What this creates:**

```
.cm/
└── skeleton.md    # ~5K tokens — every function, class, route
```

**Example output (skeleton.md):**
```markdown
## src/api/
- `export async function getUser(id: string): Promise<User>`
- `export async function createOrder(data: OrderInput): APIResponse`
- `export class AuthService { login, logout, refresh }`

## src/components/
- `export function Dashboard(): JSX.Element`
- `export function UserTable({ users, onSort }): JSX.Element`
```

Your AI agent reads this ONCE and knows your entire architecture.

### Minute 5-6: Initialize Working Memory

```
@[/cm-start] Initialize working memory for this project
```

**Creates:**
```
.cm/
├── skeleton.md         # Code structure (Layer 0)
├── CONTINUITY.md       # Working memory
├── config.yaml         # RARV settings
└── memory/
    ├── learnings.json  # Error patterns
    └── decisions.json  # Architecture decisions
```

### Minute 7-8: Create AGENTS.md

```
@[/cm-project-bootstrap] Generate AGENTS.md for this existing project
```

AGENTS.md is the **universal manifest** that tells any AI agent:
- Project overview and tech stack
- Coding conventions and patterns
- Safety rules (never modify, always confirm)
- File structure and key entry points

### Minute 9-10: First AI-Assisted Task

```
@[/cm-start] Fix the user authentication timeout bug reported in issue #123
```

The agent now:
1. Reads AGENTS.md → understands project rules
2. Reads skeleton.md → knows where auth code lives
3. Reads CONTINUITY.md → checks for related past learnings
4. Investigates with precision → fixes with TDD

---

## What Changes in Your Daily Workflow

### Before CodyMaster

```
You: "Fix the login bug"
AI:  "Can you show me the project structure?"
You:  *shares 20 files*
AI:  "What framework are you using?"
You:  *explains tech stack*
AI:  "Where is the auth code?"
You:  *points to specific files*
...30 minutes of context-setting later...
AI:  "Here's a fix" (untested, may break other things)
```

### After CodyMaster

```
You: "@[/cm-start] Fix the login bug"
AI:  *reads skeleton.md + CONTINUITY.md in 2 seconds*
AI:  "I see AuthService.login() in src/api/auth.ts. 
      Last session we noted timeout issues with JWT refresh.
      Let me write a test first..."
AI:  *writes test → implements fix → runs quality gate*
...5 minutes later...
AI:  "Fixed and verified. 3 tests added. Zero regressions."
```

---

## Continuous Improvement

### Session End Protocol

Every session, CONTINUITY.md auto-updates with:
- Current task state
- Files modified
- Learnings captured (errors + their prevention)

### Adding Intelligence Layers

As you use CodyMaster more, add deeper intelligence:

| Project Size | Add This | Benefit |
|:-------------|:---------|:--------|
| Any | `skeleton.md` (auto) | Instant structure understanding |
| 50+ files | CodeGraph | Caller/callee tracing, impact analysis |
| 200+ files | `cm-deep-search` + qmd | BM25 semantic search across all files |
| 500+ files | Full Layer 3 | Task-specific context packets |

---

## Skills Involved

| Phase | Skill | Effort |
|-------|-------|--------|
| Index | `cm-codeintell` | Auto (3-4s) |
| Memory | `cm-continuity` | Auto |
| Manifest | `cm-project-bootstrap` | 2 min |
| Work | `cm-start` → chain | Depends on task |

## Tips

- **Run skeleton index after major changes** — it takes <4s, so run it freely
- **Review CONTINUITY.md when switching tasks** — it's your team's knowledge base
- **Don't skip AGENTS.md** — without it, every AI session starts cold
- **Commit `.cm/` to git** — lets your whole team share working memory
