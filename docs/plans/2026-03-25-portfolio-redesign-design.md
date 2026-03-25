# Portfolio Redesign Design

## Context

The portfolio already has solid content and a clear slide-by-slide narrative, but the presentation feels closer to a formatted document than a memorable engineering portfolio. The current beige and olive palette is warm, yet it underplays the professionalism and trust required for a backend-focused, finance-adjacent portfolio.

## Goal

Keep the current slide-based storytelling and project content intact while upgrading the visual system to feel more credible, structured, and high-signal. The finished page should read like a hybrid of a financial product brief and an engineering portfolio.

## Chosen Direction

- Direction: hybrid slide-based portfolio
- Tone: financial / professional
- Visual language: deep navy, warm ivory, restrained metallic accent
- Interaction model: sectioned slides with softer scrolling, not hard presentation snapping

## Design Principles

1. Make the first screen do more work.
   The introduction should immediately communicate role, strengths, and evidence through a stronger headline and compact summary metrics.

2. Increase hierarchy without changing the story.
   Existing sections and content remain, but they should be reorganized into clearer panels so that readers can scan introduction, responsibility, architecture decisions, and outcomes quickly.

3. Make backend work feel premium, not plain.
   Use a tighter type system, stronger framing, richer surfaces, and more deliberate contrast so the page feels intentional rather than template-like.

4. Reduce visual monotony.
   Repeated flat boxes should become differentiated cards and panels with clearer purpose, spacing, and emphasis.

5. Preserve maintainability.
   Keep the implementation in a single static HTML file with CSS and minimal JS changes, since the site is deployed as a simple portfolio page.

## Layout Decisions

### Intro Slide

- Retain a full-slide opening section.
- Add a compact eyebrow and stronger hero heading.
- Introduce metric cards for core strengths such as architecture focus, deployment experience, and finance-domain work.
- Reframe the skills area into denser but cleaner grouped panels.

### Project Slides

- Keep left/right storytelling structure.
- Make the information side feel like a structured briefing panel.
- Improve the gallery container so screenshots feel more integrated into the layout.
- Upgrade badges, project header, and supporting metadata to feel more premium.

### Troubleshooting Slides

- Keep the current problem-solving content.
- Reframe sections as a clearer “problem / decision / implementation / result” flow.
- Make code blocks and result areas feel more deliberate and easier to parse.

### Other Projects

- Keep the grid layout.
- Turn each item into a more consistent project card with stronger title, metadata, and supporting content blocks.

## Visual System

- Background: deep navy gradient with subtle framing texture
- Surface: warm ivory panels with layered border and shadow treatment
- Accent: muted gold / bronze for emphasis
- Headings: high-contrast display style
- Body: readable Korean-first sans serif
- Code and counters: monospace retained for technical credibility

## Responsive Strategy

- Maintain slide sections on desktop.
- Relax strict snap behavior and reduce viewport pressure on smaller screens.
- Collapse dense grids into a single column without losing hierarchy.
- Keep typography assertive but avoid oversized hero text on mobile.

## Validation Criteria

- The role and engineering strengths are understandable within five seconds on the first slide.
- Each project slide makes it easy to identify what was built, why technical choices were made, and what outcomes were achieved.
- The page feels more like a credible backend engineer portfolio than a generic personal webpage.
- The design remains readable and coherent on mobile widths.
