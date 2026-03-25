# Portfolio Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Upgrade the static portfolio page into a stronger finance-oriented, premium slide/web hybrid without changing the core content or gallery behavior.

**Architecture:** Work entirely inside the existing static `index.html` file. Refactor the CSS variable system and section-specific layout styles first, then add a small amount of structural markup for hero metrics and section framing where it materially improves hierarchy, while preserving the current slide order and JavaScript navigation logic.

**Tech Stack:** Static HTML, embedded CSS, embedded vanilla JavaScript, Google Fonts, devicon CDN

---

### Task 1: Document The Approved Direction

**Files:**
- Create: `docs/plans/2026-03-25-portfolio-redesign-design.md`
- Create: `docs/plans/2026-03-25-portfolio-redesign.md`

**Step 1: Save the approved design summary**

Write the approved hybrid-slide, finance-focused design rationale into the design document.

**Step 2: Save the execution plan**

Write this implementation plan so the next engineer can continue without additional context.

**Step 3: Verify the files exist**

Run: `ls docs/plans`
Expected: both `2026-03-25-portfolio-redesign-design.md` and `2026-03-25-portfolio-redesign.md` appear

**Step 4: Commit the planning docs**

```bash
git add docs/plans/2026-03-25-portfolio-redesign-design.md docs/plans/2026-03-25-portfolio-redesign.md
git commit -m "docs: add portfolio redesign design and plan"
```

### Task 2: Rebuild The Global Visual System

**Files:**
- Modify: `index.html`

**Step 1: Replace the top-level design tokens**

Update `:root`, `body`, `.slide`, `.slide-inner`, `.slide-header`, navigation dot, tag, badge, card, and text color rules so the page uses a deep navy / ivory / bronze system with stronger shadows, borders, and gradients.

**Step 2: Reduce hard presentation feel**

Adjust scroll snapping, slide padding, background treatment, and card sizing so sections still feel distinct but the overall page scrolls more like a modern site.

**Step 3: Verify the page still loads**

Run: `python3 -m http.server 8123`
Open: `http://127.0.0.1:8123/index.html`
Expected: page renders without missing structure or broken CSS parsing

### Task 3: Upgrade The Intro Slide Hierarchy

**Files:**
- Modify: `index.html`

**Step 1: Add a compact hero meta row**

Introduce a small eyebrow / summary row that frames the role and specialty before the main title.

**Step 2: Add high-signal metric cards**

Create a concise row or grid of metrics summarizing strengths such as architecture focus, deployment ownership, and finance/AI project experience.

**Step 3: Tighten the skills presentation**

Refine the grouped skill area so it looks like a designed capability matrix rather than a plain list.

**Step 4: Verify hierarchy**

Expected: the intro slide communicates role, strengths, and evidence at a glance before the user reads the full paragraph text

### Task 4: Refine Project And Troubleshooting Surfaces

**Files:**
- Modify: `index.html`

**Step 1: Restyle project headers and panels**

Improve the project header, badge system, metadata text, list blocks, and gallery framing to feel more premium and consistent.

**Step 2: Reframe troubleshooting sections**

Upgrade troubleshooting blocks with stronger separation, better code/result styling, and clearer information flow.

**Step 3: Harmonize other project cards**

Apply the updated surface language to the final grid so the closing section feels consistent with the earlier featured work.

**Step 4: Verify galleries still work**

Expected: clicking previous/next still changes images and updates counters in each gallery

### Task 5: Finish Responsive Polish And Validation

**Files:**
- Modify: `index.html`

**Step 1: Update responsive rules**

Ensure dense grids collapse cleanly, mobile spacing is reduced intentionally, and project/gallery layouts still feel designed on narrow screens.

**Step 2: Run a final manual review**

Check desktop and narrow widths for:
- clipping
- unreadable text
- broken gallery controls
- awkward spacing in troubleshooting sections

**Step 3: Commit the redesign**

```bash
git add index.html
git commit -m "feat: redesign portfolio presentation"
```
