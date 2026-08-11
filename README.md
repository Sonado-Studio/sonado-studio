# Sonado Studio Website

The website for Sonado Studio, a founder-led creative and technology studio creating distinctive brands, marketing websites, and selected digital products.

The project is built to be responsive, accessible, performance-conscious, and maintainable as its content and portfolio grow.

## Tech stack

- [React 19](https://react.dev/) and TypeScript
- [TanStack Start](https://tanstack.com/start) and [TanStack Router](https://tanstack.com/router) for server rendering and file-based routing
- [Vite](https://vite.dev/) for local development and production builds
- [Tailwind CSS v4](https://tailwindcss.com/) for design tokens and styling
- [shadcn/ui](https://ui.shadcn.com/) patterns with [Base UI](https://base-ui.com/) primitives
- [Motion](https://motion.dev/) for animations and scroll interactions
- [TanStack Form](https://tanstack.com/form) and [Zod](https://zod.dev/) for contact-form state and validation
- [Netlify](https://www.netlify.com/) for hosting, SSR functions, and form submissions
- [tanstack-router-ga4](https://github.com/bhouston/tanstack-router-ga4) for Google Analytics configuration, events, and SPA page tracking
- [CookieYes](https://www.cookieyes.com/) for the consent banner and Google Consent Mode updates
- [Biome](https://biomejs.dev/) for linting and formatting
- [Vitest](https://vitest.dev/) for tests

## Getting started

Install the project dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Development commands

```bash
# Start the local development server
pnpm dev

# Create a production build
pnpm build

# Preview the production build locally
pnpm preview

# Run the linter
pnpm lint

# Check linting and formatting
pnpm check

# Apply safe lint and formatting fixes
pnpm fix

# Format the codebase
pnpm format

# Run the test suite
pnpm test
```

Run `pnpm lint`, `pnpm exec tsc --noEmit`, and `pnpm build` after meaningful changes. Run the relevant tests when modifying tested behavior.

## Project structure

```text
public/                       Static public assets and Netlify form detection markup
src/assets/                   Fonts, logos, and page imagery
src/components/               Page sections and reusable components
src/components/global/        Site-wide navigation, footer, and contact form
src/components/ui/            Shared UI primitives
src/data/                     Shared configuration and content data
src/hooks/                    Reusable React hooks
src/lib/                      Schemas, types, and utilities
src/routes/                   TanStack Router route files and root document
src/styles.css                Global tokens, typography, and shared styles
docs/                         Design mapping, content, and implementation references
```

The Figma design is the visual source of truth. Existing tokens, aliases, global styles, and primitives should be preserved unless a migration has been discussed first.

## Contact form

The contact form uses TanStack Form with Zod validation and submits URL-encoded form data to Netlify Forms. Netlify detects the form from the static markup in `public/netlify-form.html`.

When changing form fields, update all three layers together:

1. The Zod schema and form component.
2. The URL-encoded Netlify submission payload.
3. The static Netlify form-detection markup.

Do not commit secrets or add private credentials to client-side form code.

## Analytics and consent

The site uses Google Analytics 4 through `tanstack-router-ga4` and CookieYes with Advanced Google Consent Mode.

The integration is intentionally split by responsibility:

- The root document establishes denied consent defaults before any Google or CookieYes scripts execute.
- The Google Analytics loader is placed after the default consent command and before CookieYes.
- CookieYes owns the consent banner, stored preferences, and all subsequent Consent Mode updates.
- `tanstack-router-ga4` owns GA configuration, custom events, and automatic page-view tracking during SPA navigation.

With Advanced Consent Mode, Google tags may load before a visitor makes a choice, but optional storage remains denied by default. Google may receive cookieless pings while consent is denied. Analytics cookies and consent-dependent storage should only be enabled after CookieYes sends a granted consent update.

In the CookieYes dashboard, both **Support GCM** and **Allow Google tags to fire before consent** must remain enabled. CookieYes should remain the single source of truth for consent changes; do not add a second React consent listener unless the integration is deliberately redesigned.

When changing analytics or consent behavior, preserve this script order:

1. Default Consent Mode command.
2. Google Analytics loader.
3. CookieYes script.

Validate changes with a fresh browser session by testing accept, reject, granular preferences, and consent withdrawal. Confirm the resulting consent state and cookies using Google Tag Assistant, CookieYes’s Consent Mode checker, and browser developer tools.

## Deployment

The production site is deployed to Netlify from the GitHub main branch. The Vite build generates the TanStack Start SSR function used by Netlify.

Do not modify Netlify or deployment configuration without documenting why the change is required. Never commit secrets, private API keys, or environment-specific credentials.

## Working conventions

- Plan and inspect existing patterns before editing.
- Work in focused, reviewable increments.
- Preserve semantic HTML, keyboard behavior, and reduced-motion support.
- Check both mobile and desktop layouts after visual changes.
- Prefer reusable components and existing design tokens.
- Avoid unnecessary dependencies.
- Preserve existing functionality unless a change is explicitly requested.
