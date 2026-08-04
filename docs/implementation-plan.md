# Homepage implementation plan

## Objective

Implement the approved Sonado Studio homepage one section at a time, using Relume components as structural references, Figma as the visual source of truth, and the existing repository design system as the implementation foundation.

Each section is a focused, reviewable increment. Do not begin the next section until the current section has been reviewed and approved.

## Sources of truth

Use these sources in priority order:

1. The approved Figma section for visual design, content hierarchy, spacing, typography, colour, and desktop composition.
2. The existing repository for technical architecture, design tokens, Tailwind configuration, aliases, primitives, component conventions, and established behaviour.
3. The corresponding Relume component for semantic structure, responsive composition, and interaction ideas.
4. `docs/design-component-map.md` for the mapping between homepage sections, Relume components, and Figma frames.

Figma reference:

- File: `Sonado Studio`
- Homepage frame: `Desktop Final`
- Node: `10776:59094`
- URL: <https://www.figma.com/design/QtR1x3TfhNzmLejw3fZJGt/Sonado-Studio?node-id=10776-59094&m=dev>

Only visible, approved Figma layers should be treated as final. Hidden alternatives and draft layers are references, not implementation requirements.

## Relume integration policy

Relume is a component source, not the owner of this repository's design system.

Use the Relume MCP to retrieve the individual component named in `docs/design-component-map.md`. Extract only what is useful for the current section, such as:

- Semantic structure
- Component boundaries
- Responsive layout strategy
- Interaction and state patterns
- Accessibility considerations

Adapt the result to this repository instead of installing or copying Relume's complete project foundation.

Do not overwrite, replace, or broadly regenerate any of the following:

- Tailwind setup or presets
- Vite or framework configuration
- The `@/*` TypeScript/Vite alias
- `src/styles.css` or its theme variables
- Existing font declarations
- `components.json`
- Existing components in `src/components/ui/`
- Existing global components or form primitives
- Package dependencies or lockfile

If a retrieved Relume component expects its own design system, Tailwind preset, aliases, icons, utilities, or primitives:

1. Stop before changing shared foundations.
2. Identify the exact conflict and the files or APIs affected.
3. Explain whether the Relume requirement is structural, visual, or behavioural.
4. Propose a scoped adaptation using the current repository first.
5. If adaptation is insufficient, propose a migration plan with impact, risks, and rollback approach.
6. Wait for approval before changing shared configuration or replacing an existing primitive.

Prefer mapping Relume concepts onto existing tools:

- Relume colours and spacing → semantic tokens in `src/styles.css`
- Relume utility classes → existing Tailwind 4 utilities
- Relume buttons and controls → local Base UI/shadcn-style primitives
- Relume icons → Lucide React or approved local SVG assets
- Relume modal/drawer patterns → the existing Sheet and contact modal
- Relume helpers → existing `cn` and local utilities

Do not add a second primitive or dependency when an existing one can be adapted cleanly.

## Section-by-section workflow

Repeat this complete workflow for each section in the implementation order below.

### 1. Define the section scope

- Read the section's row in `docs/design-component-map.md`.
- Inspect the current repository component, its callers, related content, assets, and shared primitives.
- Check the worktree and preserve unrelated changes.
- State which files are expected to change and what is explicitly out of scope.
- Record unresolved content, asset, or interaction questions before implementation.

### 2. Retrieve the Relume component

- Use the Relume MCP to retrieve only the mapped component for the current section.
- Do not run a global Relume setup or installation workflow.
- Identify useful structure, responsive behaviour, accessibility patterns, and interactions.
- Identify any imports, aliases, presets, tokens, icons, or primitives that conflict with this repository.
- Do not copy generated code wholesale when it introduces Relume-specific infrastructure.

### 3. Inspect the approved Figma section

- Open the mapped Figma frame and inspect its visible layers.
- Capture the desktop layout, typography, colour, spacing, image treatment, component states, and content.
- Inspect mobile/tablet variants when available.
- Where responsive behaviour is not represented, document the proposed interpretation before relying on it.
- Export approved assets locally; never commit temporary Figma localhost URLs.

### 4. Compare and propose the adaptation

Before editing, compare all three inputs:

| Concern | Existing repository | Relume component | Approved Figma |
| --- | --- | --- | --- |
| Structure | Current component and route composition | Suggested semantic/component structure | Required visible hierarchy |
| Styling | Existing tokens and Tailwind utilities | Default Relume styling | Visual source of truth |
| Responsive behaviour | Existing breakpoint conventions | Suggested mobile/tablet behaviour | Approved variants or documented interpretation |
| Primitives | Local UI and global components | Relume dependencies/primitives | Required states and appearance |
| Content/assets | Current copy and local assets | Placeholder content/assets | Approved content and media |

Then define a focused implementation approach:

- What to retain from the repository
- What structural ideas to borrow from Relume
- What must change to match Figma
- Which reusable component or data boundaries are justified
- How desktop, mobile, accessibility, and reduced motion will work
- Any design-system conflict requiring approval

### 5. Implement the section

- Change only the current section and the smallest necessary shared surface.
- Use semantic HTML and preserve a logical heading hierarchy.
- Adapt styling to existing semantic tokens rather than hard-coded Relume values.
- Reuse existing primitives before creating new ones.
- Keep repeated content in typed data structures where that supports future CMS integration.
- Use approved local assets with correct dimensions and alt treatment.
- Preserve existing functionality unless the approved scope explicitly changes it.
- Avoid opportunistic cleanup outside the section.

### 6. Validate locally

Run the relevant automated checks after the section is meaningful:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm test
pnpm build
```

Also review the section locally at representative widths:

- Mobile: approximately 375px
- Tablet: approximately 768px
- Laptop: approximately 1024–1280px
- Approved desktop comparison: 1440px

Check at minimum:

- Figma fidelity at the approved desktop width
- Content order and wrapping
- Overflow and image crops
- Keyboard operation and visible focus
- Correct control names, roles, and states
- Colour contrast
- Touch-target sizes
- Reduced-motion behaviour where motion exists
- Font and image loading
- Layout shift and obvious performance regressions
- Adjacent-section boundaries when the section is rendered in the page

If a check is skipped, document which check and why.

### 7. Present for approval

Provide a concise review handoff containing:

- What changed
- Files changed
- Relume concepts retained and discarded
- How the section was adapted to existing tokens and primitives
- Desktop and mobile review results
- Automated validation results
- Any remaining design or content differences

Pause for user approval. Do not start the next section while feedback on the current section is outstanding.

### 8. Commit the approved section

After approval:

- Apply requested corrections and repeat validation if needed.
- Recheck the diff for unrelated files, generated noise, secrets, and accidental configuration changes.
- Create one focused commit for the approved section using an explicit, descriptive message.
- Do not include unrelated pre-existing worktree changes.
- Record any intentionally deferred follow-up.

Only after the approved section is committed should work begin on the next section.

## Implementation order

Follow the sequence in `docs/design-component-map.md`:

1. Navbar — Relume `Navbar 11` — Figma `Desktop Final / Navbar 11`
2. Hero — Relume `Header 40` — Figma `Desktop Final / Header 40`
3. Intro — Relume `Layout 46` — Figma `Desktop Final / Layout 46`
4. Selected work — Relume `Layout 204` — Figma `Desktop Final / Layout 204`
5. Testimonial — Relume `Testimonial 4` — Figma `Desktop Final / Testimonial 4`
6. Services — Relume `Layout 486` — Figma `Desktop Final / Layout 486`
7. Studio experience — Relume `Layout 292` — Figma `Desktop Final / Layout 292`
8. About me — Relume `Layout 194` — Figma `Desktop Final / Layout 194`
9. About the studio — Relume `CTA 45` — Figma `Desktop Final / CTA 45`
10. FAQs — Relume `FAQ 6` — Figma `Desktop Final / FAQ 6`
11. CTA — Relume `CTA 45` — Figma `Desktop Final / CTA 45`
12. Footer — Relume `Footer 4` — Figma `Desktop Final / Footer 4`

Treat repeated Relume sources, such as `CTA 45`, as separate section adaptations because their Figma content, layout role, and behaviour may differ.

## Shared-foundation changes

A section may reveal a genuinely reusable need, but shared changes should remain intentional.

Safe, scoped examples:

- Adding a missing semantic colour or spacing token that is repeated in approved Figma sections
- Extending an existing primitive with a backwards-compatible variant
- Adding a reusable section container after confirming repeated use
- Adding an approved local icon or image asset

Changes requiring explanation and approval first:

- Installing a Relume Tailwind preset or plugin
- Replacing Tailwind or global theme configuration
- Changing aliases or import conventions
- Replacing Base UI/shadcn-style primitives
- Broadly rewriting `src/styles.css`
- Changing global typography
- Adding a new icon library or overlapping UI library
- Changing deployment configuration
- Introducing a CMS or changing the content architecture beyond what the current section needs

When a shared change is approved, implement it in the first section that needs it, document its consumers, and verify that existing sections still work.

## Definition of done for each section

A section is complete when:

- The mapped Relume component was retrieved and evaluated.
- The approved Figma section was inspected.
- The implementation uses existing repository conventions and design tokens.
- Desktop and mobile behaviour were reviewed locally.
- Semantic HTML, keyboard behaviour, focus states, contrast, and reduced motion were considered as applicable.
- Relevant lint, type-check, tests, and build checks pass.
- No unapproved Tailwind, alias, global-style, primitive, dependency, or configuration replacement occurred.
- The user approved the section.
- The section was committed as a focused change.
- Deferred issues are documented before moving on.

## Final integration pass

After all sections are individually approved and committed:

- Review the complete page at all representative widths.
- Check global heading hierarchy, section ordering, anchor navigation, and focus flow.
- Normalize section boundaries and spacing without undoing approved section designs.
- Verify navbar, contact modal, CTA, footer, and back-to-top interactions together.
- Audit full-page accessibility and reduced motion.
- Review performance, image loading, font loading, layout shift, and bundle impact.
- Run the full automated validation suite.
- Present final integration differences for approval and create a separate focused integration commit.
