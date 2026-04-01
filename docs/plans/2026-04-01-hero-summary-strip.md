# Hero Summary Strip Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a horizontally arranged summary strip to the hero section that shows project count, awards, education, and work style without breaking the current layout.

**Architecture:** Add a dedicated mount point under the hero body, generate the summary markup from `timeline.js`, and style it as a responsive four-panel strip that borrows the boxed-label visual language from the reference image. Derive only the project count from timeline data so the metric stays aligned with future content edits while keeping the copy for awards, education, and work style intentionally curated.

**Tech Stack:** HTML, CSS, vanilla JavaScript

---

### Task 1: Add a hero summary mount point

**Files:**
- Modify: `/home/cbkjh0225/PF/pf_githubio/index.html`

**Step 1: Add the summary container**

Insert a new empty section after the existing hero body:

```html
<section class="hero__summary" id="hero-summary" aria-label="경험 요약"></section>
```

**Step 2: Verify the markup placement**

Run:

```bash
sed -n '20,90p' /home/cbkjh0225/PF/pf_githubio/index.html
```

Expected: The new `hero__summary` section appears inside `.hero`, below `.hero__body`.

### Task 2: Compute and render summary content

**Files:**
- Modify: `/home/cbkjh0225/PF/pf_githubio/scripts/timeline.js`

**Step 1: Define summary data helpers**

Add a filter that counts only project entries and the practical build entry:

```js
const heroProjectEntries = orderedStations.filter((station) => {
  if (station.id === "bluerobot") {
    return true;
  }
  return ["project", "branch"].includes(station.type) && station.id !== "operations-mentoring";
});
```

**Step 2: Add a renderer for the hero summary**

Create a function that mounts the summary HTML into `#hero-summary`, including:
- total count from `heroProjectEntries.length`
- a breakdown line `6 Projects + 1 Practical Build`
- static lists for awards and education
- a three-step work style flow

**Step 3: Call the renderer during init**

Run the renderer in `init()` before layout-fitting functions so the first paint includes the summary strip.

**Step 4: Run syntax verification**

Run:

```bash
node --check /home/cbkjh0225/PF/pf_githubio/scripts/timeline.js
```

Expected: No syntax errors.

### Task 3: Style the summary strip

**Files:**
- Modify: `/home/cbkjh0225/PF/pf_githubio/styles/timeline.css`

**Step 1: Add hero summary layout styles**

Add styles for:
- `.hero__summary`
- `.hero-summary__grid`
- `.hero-summary__panel`
- `.hero-summary__label`

The grid should use four columns on large screens and collapse to two/one columns with media queries.

**Step 2: Add typography and list styles**

Define styles for the metric number, description lines, bulletless item lists, and supporting text so they visually match the current hero tone.

**Step 3: Add work-style flow styles**

Add styles for:
- `.hero-summary__flow`
- `.hero-summary__flow-card`
- `.hero-summary__flow-arrow`

These should reproduce the reference image’s directional feel without overpowering the page.

**Step 4: Verify responsive CSS placement**

Run:

```bash
sed -n '1,260p' /home/cbkjh0225/PF/pf_githubio/styles/timeline.css
```

Expected: New hero-summary styles appear near the existing hero block styles.

### Task 4: Verify the integrated result

**Files:**
- Modify: `/home/cbkjh0225/PF/pf_githubio/index.html`
- Modify: `/home/cbkjh0225/PF/pf_githubio/scripts/timeline.js`
- Modify: `/home/cbkjh0225/PF/pf_githubio/styles/timeline.css`

**Step 1: Re-run JavaScript syntax check**

Run:

```bash
node --check /home/cbkjh0225/PF/pf_githubio/scripts/timeline.js
```

Expected: PASS with no output.

**Step 2: Review changed files**

Run:

```bash
git -C /home/cbkjh0225/PF/pf_githubio diff -- index.html scripts/timeline.js styles/timeline.css docs/plans/2026-04-01-hero-summary-design.md docs/plans/2026-04-01-hero-summary-strip.md
```

Expected: Diff shows only the new summary section, styles, and planning docs.

**Step 3: Commit planning docs separately**

Run:

```bash
git -C /home/cbkjh0225/PF/pf_githubio add docs/plans/2026-04-01-hero-summary-design.md docs/plans/2026-04-01-hero-summary-strip.md
git -C /home/cbkjh0225/PF/pf_githubio commit -m "docs: add hero summary strip design and plan"
```

Expected: Only the two planning docs are committed, leaving ongoing UI work unstaged if needed.
