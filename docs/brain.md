# CodyMaster Brain: The Cognitive Architecture

Standard AI systems treat memory as an append-only log, inevitably leading to overloaded context, "goldfish memory", and recurring hallucinations. **CodyMaster Brain** addresses this by implementing a biomimetic memory architecture inspired by human cognitive processes. It doesn't just store information; it synthesizes, filters, and selectively forgets.

## The Five-Tier Memory System

CodyMaster implements a unified memory pipeline with five distinct tiers, each serving a specific cognitive function — from millisecond reflexes to permanent structural understanding.

### Tier 1: Sensory Memory
*Transient, single-command context — forgotten immediately.*

Temporary information within one command execution: "file X has 200 lines." Discarded instantly after use because it has no long-term value. Like hearing a phone number once — gone in seconds.

### Tier 2: Working Memory (`cm-continuity`)
*Active session state — persists 7 days.*

Just as humans can only hold about 7 items in short-term memory, CodyMaster maintains strict working memory limits. Managed by the **[`cm-continuity`](/skills/cm-continuity)** skill, this layer tracks the active task, recent context, mistakes made, and immediate goals via `CONTINUITY.md`.
* **When to use:** Automatically loaded at session start, saved at session end.

### Tier 3: Long-Term Memory (`learnings.json`)
*Experience-based learnings — TTL 30–180 days.*

When bugs are fixed or patterns discovered, key insights are synthesized into `learnings.json` with scope tags. Learnings follow the **Ebbinghaus Forgetting Curve**: used once → 30d TTL, reinforced 2× → 60d, reinforced 5×+ → 180d (near-permanent). Only learnings relevant to the current module are loaded per task via **scope filtering**.

### Tier 4: Semantic Memory (`cm-deep-search`)
*Deep document retrieval — permanent, local vector search.*

When context exceeds working memory capacity, **[`cm-deep-search`](/skills/cm-deep-search)** uses BM25/vector search (powered by `qmd`) to retrieve relevant knowledge from massive codebases and documentation without token limits. Like a photographic reading memory — finds patterns hidden in text.

### Tier 5: Structural Memory (`cm-codeintell`)
*Real-time code architecture understanding — AST/CodeGraph.*

**[`cm-codeintell`](/skills/cm-codeintell)** provides a 4-layer intelligence system that pre-indexes code structure for instant understanding:

| Layer | Name | Speed | Best For |
|-------|------|-------|----------|
| **0** | Skeleton Index | <4s | Any project — zero dependencies |
| **1** | Code Graph | ~30s | 50+ files — call chains, impact analysis |
| **2** | Architecture | ~10s | 20+ files — visual module map |
| **3** | Smart Context | ~5s | Task-focused context packets |

Achieves **95% token compression** by reading AST structure, not raw code. Like an innate sense of spatial awareness for your codebase.

---

## The Cloud Brain (`cm-notebooklm`)

Beyond the 5-tier local pipeline, CodyMaster implements a **Cloud Brain** powered by Google's NotebookLM for cross-machine persistence:

- **Master Brain (`codymaster`)**: A global knowledge base storing cross-project meta-learnings and architecture patterns.
- **Project Brains (`project_id`)**: Isolated NotebookLM instances for each project containing domain-specific PRDs, APIs, and business logic.
- **Wisdom Gatekeeper**: Uses the Rule of 3 (recurring ≥ 3 times) to filter noise. Only qualified "Graduated Wisdom" is pushed to the global Master Brain.
- **Audio Onboarding**: Converts complex project knowledge into Spotify-style podcasts for new developers.
- **Flashcard Learning**: Auto-generated flashcards from the codebase help engineers quickly learn the stack.

The **[`cm-notebooklm`](/skills/cm-notebooklm)** skill orchestrates this cloud sync via `brain-sync.sh`.

---

## Biomimetic Mechanisms

CodyMaster Brain implements dynamic mechanisms to manage the lifecycle of information.

### Smart Decay (The Forgetting Curve)
Standard AI systems hold onto outdated knowledge forever, leading to bugs when dependencies change. CodyMaster Brain implements a decay mechanism inspired by the *Ebbinghaus Forgetting Curve*. Outdated libraries, old refactored code patterns, and obsolete learnings literally "decay" and expire mathematically, keeping your active context clean and highly relevant.

### Self-Healing Feedback Loops
When a bug leads to an infinite loop or a hallucination, CodyMaster Brain recognizes the pattern and "heals" its memory. It records the failure path as a negative constraint, ensuring the exact same mistake is never repeated in future sessions.

### Scope Filtering
Instead of loading a massive `memory.txt` file on every request, the Brain only loads what is strictly relevant to the current `module` or `file`. If there are 50 recorded global learnings, the system uses semantic filtering to load only the 2 or 3 learnings applicable to the current task, saving thousands of tokens per request.

---

## Integrating Core Memory Skills

To fully utilize the CodyMaster Brain, these core skills should be wired into your standard workflow:

| Skill | Role in Memory Architecture | Usage |
|-------|-----------------------------|-------|
| 🧠 **[`cm-continuity`](/skills/cm-continuity)** | **Working Memory Engine** | Run at the start and end of complex sessions to maintain state across boundaries without bloating the prompt. |
| 🔍 **[`cm-deep-search`](/skills/cm-deep-search)** | **Semantic Retrieval** | When the context exceeds the working memory capacity, this skill intelligently fetches relevant knowledge using BM25 or vector search. |
| 🏗️ **[`cm-codeintell`](/skills/cm-codeintell)** | **Structural Intelligence** | Pre-indexes codebase architecture (AST, CodeGraph) so AI understands code structure with 95% token compression. |
| ☁️ **[`cm-notebooklm`](/skills/cm-notebooklm)** | **Cloud Brain Sync** | Synchronizes high-value project knowledge to Google NotebookLM for cross-machine persistence and audio/flashcard generation. |
| 🗄️ **[`cm-dockit`](/skills/cm-dockit)** | **Knowledge Organizer** | Analyzes codebases and generates structured, LLM-readable knowledge bases (`AGENTS.md`, SOPs) that the brain can rapidly query. |
| 👑 **[`cm-skill-mastery`](/skills/cm-skill-mastery)** | **Meta-Cognition** | Helps the AI "think about thinking," knowing which memory structures to access and how to sequence them effectively. |

By mirroring human memory systems — with 5 cognitive tiers, cloud synchronization, smart decay, and self-healing loops — CodyMaster Brain turns the AI from a stateless code generator into a contextual engineering partner that learns, remembers, and grows across sessions and machines.
