---
title: "Design Concepts with Google Stitch"
description: "Product managers create professional design concepts using CodyMaster + Google Stitch MCP — no Figma needed, no design skills required."
keywords: ["product manager", "design concept", "google stitch", "ui preview", "mockup"]
robots: "index, follow"
---

# Design Concepts with Google Stitch

> **See it before you build it.** Generate professional UI concepts in minutes using natural language — no Figma, no design skills.

## Who This Is For

- Product managers who need to visualize features before dev work
- Founders validating ideas with stakeholders
- Anyone who wants design mockups without hiring a designer

**Prerequisites:** CodyMaster with Google Stitch MCP enabled (built into Antigravity/Gemini)

## What You'll Create

- ✅ Professional UI design concepts from text descriptions
- ✅ Multiple screen designs (dashboard, forms, landing pages)
- ✅ Design system with consistent colors, fonts, and spacing
- ✅ Variants for A/B comparison

---

## The Workflow

### Step 1: Describe Your Vision

```
@[/cm-ui-preview] Create a design concept for an invoicing dashboard.
- Style: Clean, modern, professional with soft blues
- Screens needed: Invoice list, Create invoice form, Revenue chart
- Target: Desktop-first, freelancers audience
- Reference: Stripe Dashboard aesthetic
```

### Step 2: Stitch Generates Screens

The agent uses Google Stitch MCP to:

1. **Create a project** — Container for all design screens
2. **Generate screens** — From your text description
3. **Apply design system** — Consistent colors, fonts, shapes

```
🎨 Stitch Project Created: "InvoiceFlow Dashboard"

Generating screens...
✅ Screen 1: Invoice List — table with filters, status badges, actions
✅ Screen 2: Create Invoice — multi-step form with preview
✅ Screen 3: Revenue Chart — monthly bar chart with trend line

🔗 View in Stitch: [project link]
```

### Step 3: Review & Iterate

Open the Stitch project to see your designs. Then iterate:

```
@[/cm-ui-preview] Edit the invoice list screen:
- Make the status badges more colorful (green=paid, yellow=pending, red=overdue)
- Add a search bar at the top
- Show client avatar next to invoice name
```

### Step 4: Generate Variants

Want to compare approaches? Generate variants:

```
@[/cm-ui-preview] Generate 2 variants of the dashboard:
Variant A: Dense data layout (more info, less whitespace)
Variant B: Card-based layout (visual, more whitespace)
```

### Step 5: Apply a Design System

Ensure consistency across all screens:

```
@[/cm-ui-preview] Apply a design system to all screens:
- Primary: #3B82F6 (blue)
- Font: Inter
- Shape: Rounded (12px)
- Mode: Light
```

### Step 6: Export & Hand Off

Approved designs become the spec for developers:

```
@[/cm-planning] Plan the implementation based on the approved 
InvoiceFlow Stitch designs
```

---

## Stitch vs Figma for PMs

| | Stitch + CodyMaster | Figma |
|---|---|---|
| **Input** | Text description | Manual drag & drop |
| **Speed** | Seconds per screen | Hours per screen |
| **Skill needed** | None (conversational) | Design proficiency |
| **Iteration** | "Make it more blue" | Move elements manually |
| **Cost** | Free (included in Gemini) | $15/month/editor |
| **Output** | Screens + design system | Static designs |
| **To code** | Agent implements directly | Developer interprets |

## Prompt Templates

### Dashboard
```
Create a [TYPE] dashboard for [PRODUCT].
Key metrics: [METRIC 1], [METRIC 2], [METRIC 3].
Style: [AESTHETIC]. Target: [DEVICE].
```

### Landing Page
```
Design a landing page for [PRODUCT/SERVICE].
Hero: [HEADLINE IDEA]. Sections: [LIST].
CTA: [ACTION]. Style: [REFERENCE SITE].
```

### Mobile App
```
Design a mobile app for [PURPOSE].
Screens: [SCREEN LIST].
Style: [iOS/Material/Custom]. Navigation: [Tab/Drawer/Stack].
```

### Form
```
Design a multi-step form for [PURPOSE].
Fields: [FIELD LIST].
Steps: [STEP BREAKDOWN].
Validation: [REQUIREMENTS].
```

---

## Tips

| Tip | Why |
|-----|-----|
| **Reference existing apps** | "Like Stripe Dashboard" is more effective than describing from scratch |
| **Specify device type** | Desktop/mobile/tablet changes the entire layout |
| **Iterate on one screen at a time** | Focus = better results |
| **Apply design system early** | Ensures consistency as you add screens |
| **Use variants for stakeholder review** | Show 2-3 options → let stakeholders choose |
