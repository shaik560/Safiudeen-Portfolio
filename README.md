# Shaik Safiudeen — Portfolio

React 19 + Vite.

```bash
npm install
npm run dev
```

## Assets to add (`src/assets/`)

These were inlined as base64 in the bundled HTML, so export them from the original build/Figma:

| File | Used in |
| --- | --- |
| `hero-background.webp` | Hero |
| `hero-glow.svg` | Hero |
| `about-blob.svg` | About |
| `portrait.webp` | About |
| `tools/figma.svg`, `framer.png`, `wixstudio.png`, `wordpress.png`, `lovable.png`, `miro.png` | Skillset |

## Structure

```
src/
  data/portfolio.js      all copy: nav, tools, projects, experience, contact
  hooks/useScrollState.js scroll progress, active section, header state
  components/            one file per section + small UI primitives
  styles/index.css       tokens, shared components, sections, responsive
```
