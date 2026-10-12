# Jetti Leela Mani Charan — portfolio

Personal site built with React 19, TypeScript and Vite. Cream / dark-brown
palette with clay, olive, indigo and amber accents, light + dark themes, and a
live embedded preview of the Sri Sai Shopping deployment.

```bash
npm install
npm run dev      # http://localhost:49352
npm run build    # type-check + production bundle into dist/
npm run preview  # serve the built output
npm run lint
```

## Where things live

| What                                  | File                                     |
| ------------------------------------- | ---------------------------------------- |
| **All text content** (the only file you normally edit) | `src/data/profile.ts`   |
| Colours, fonts, spacing tokens        | `src/index.css`                          |
| Section layout + styling              | `src/App.css`                            |
| Sections as components                | `src/components/`                        |
| Live demo window                      | `src/components/LiveDemo.tsx`            |
| Image-slot resolver                   | `src/lib/images.ts`                      |
| SEO, Open Graph, fonts, JSON-LD       | `index.html`                             |

Sections render in this order: Hero → About → Experience → Projects (with the
live demo) → Skills → Education & Leadership → Gallery → Contact.

## Posting your images

Every picture spot on the site is a **named slot**. Save a file into
`src/assets/gallery/` using the slot name and it appears on the next reload —
no imports, no code changes.

While running `npm run dev`, an unfilled slot renders a dashed frame naming the
file it wants. Those placeholders are stripped from the production build, so a
slot you never fill is simply absent on the deployed site.

| File name                | Appears                            | Status |
| ------------------------ | ---------------------------------- | ------ |
| `portrait.jpg`           | Hero frame, nav avatar, footer     | filled |
| `about.jpg`              | About side window                  | filled |
| `sss-collections.jpg`    | Sri Sai Shopping — Collections     | filled |
| `sss-checkout.jpg`       | Sri Sai Shopping — Checkout        | filled |
| `aura-club.jpg`          | Leadership card + Gallery          | filled |
| `university-website.jpg` | University project cover           | empty  |
| `cropeasy.jpg`           | Cropeasy cover                     | empty  |
| `desk-setup.jpg`         | Gallery                            | empty  |
| `talk.jpg`               | Gallery                            | empty  |
| `team.jpg`               | Gallery                            | empty  |
| `certificate.jpg`        | Gallery                            | empty  |

Accepted extensions: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`, `.svg`.

`scripts/import-images.ps1` is the helper that imported the current set: it
crops browser chrome off screenshots, scales to a sane width and re-encodes as
quality-82 JPEG. Add `Convert-Slot` calls at the bottom to bring in more.
Company logos go in `src/assets/logos/` as `cornerstone.png` and
`archover.png` (square, transparent) — they replace the monogram tiles on the
experience cards. To add, rename or re-caption gallery slots, edit the `gallery`
array in `src/data/profile.ts`.

Filled gallery and project images open in a lightbox on click.

## Worth adding to `public/`

- `public/og-image.png` (1200 × 630) — the social share card referenced by the
  Open Graph tags in `index.html`.

The resume needs no file: every "Resume" button opens `/resume.html`, a
print-styled page generated from `src/data/profile.ts`, with a Save as PDF
button that calls the browser print dialog.

## The live demo window

`src/components/LiveDemo.tsx` renders `https://srisaishopping.vercel.app/`
inside a faux browser window with desktop/mobile toggles, a reload button and an
open-in-new-tab link. Details worth knowing:

- The `<iframe>` only mounts once the window scrolls near the viewport, so the
  demo never costs anything on first paint.
- A cross-origin frame cannot report a framing refusal, so if `load` has not
  fired after 9 seconds the component shows a fallback card with a direct link.
  If you ever add `X-Frame-Options: DENY` or a restrictive CSP to the shop, that
  fallback is what visitors will see.
- Any other project gets the same treatment automatically — just add a
  `demoUrl` and `featured: true` to its entry in `projects`.

## Deploying to Vercel

The repo is a stock Vite app, so Vercel needs no extra configuration:

1. Push this folder to GitHub.
2. In Vercel, **Add New → Project** and import the repo.
3. Confirm the detected settings — Framework **Vite**, build `npm run build`,
   output `dist` — and deploy.

Or from the CLI:

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production
```

After the first deploy, update the two `og:url` / `canonical` URLs in
`index.html` to your real domain so link previews resolve correctly.

## Accessibility notes

Semantic landmarks, a skip link, visible focus rings, `aria-current` on the
active nav item, labelled icon-only buttons, keyboard-dismissable lightbox and
menu, and full `prefers-reduced-motion` support (animations and smooth scrolling
collapse). Colour pairs were chosen for contrast in both themes. Full WCAG
validation still needs manual testing with a screen reader — automated checks
and careful markup only get you part of the way.
