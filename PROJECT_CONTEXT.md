# Portfolio Website — Project Context
> Read this file at the start of any session to restore full context.
> Last updated: July 14, 2026

---

## Who This Is For
**Neeraj Karumanchi**
- Engineering Program Manager Intern @ Apple (May 2026–Present), Cupertino, CA
- Former Technical Product Manager @ OLA Electric (3 yrs), Bengaluru, India
- Master of Engineering Management @ Purdue University (GPA 3.86, May 2027)
- B.E. Electronics & Instrumentation @ BITS Pilani, India (May 2022)
- LinkedIn: linkedin.com/in/neeraj-karumanchi/
- Email: neeraj.karumanchi12@gmail.com
- Phone: +1 (765) 409-0871
- GitHub: neeraj12-byte

---

## Purpose
A **personal brand portfolio website** — not just a resume in HTML. It tells the full story: work, journey, travels, personality, hobbies. Primary goal: personal branding. Secondary: job applications (seeking **Fall 2026 EPM/PM internship**).

---

## Current Build Status: LIVE AND DEPLOYED
All 12 sections built and rendering. Run `npm run dev` to preview locally.
**Live URL**: `https://neeraj12-byte.github.io` (no path suffix)
Deploy: `npm run deploy` → builds → pushes to `gh-pages` branch → live in ~1-2 min
**Important**: pushing to `main` alone does NOT update the live site — must run `npm run deploy` separately.

---

## Tech Stack
- **React + Vite** (type: module, vite.config.js has `base: '/'`)
- **Tailwind CSS v4** (`@tailwindcss/vite` plugin)
- **Framer Motion** (scroll-triggered fade-ins, SectionHeading underline animation)
- **useState + AnimatePresence** (testimonials carousel — Embla was removed)
- **Lucide React** (icons in About hobby tiles + Project card covers)
- **gh-pages** npm package for deployment
- Node v26.4.0, npm v11 (installed via Homebrew at `/opt/homebrew/bin/`)

---

## Design System
### Color Palette
- Background: Golden cream `#F8F4E8` (changed from ivory `#F7F4EF` on July 5 — warmer, more distinctive)
- Text primary: Deep charcoal `#1C1C1E`
- Text secondary: Warm gray `#6B6B6B`
- Accent: Warm bronze-amber `#A07640` — used SPARINGLY (section underlines, role text, key CTAs, AI skill pills — NOT bullets)
- Cards: Pure white `#FFFFFF`
- Anthropic badge: `#D4570C` (their actual brand orange — do NOT change)
- Purdue badge: `#CFB991` (Purdue gold — do NOT change)
- BITS badge: `#003366` (BITS navy — do NOT change)

### Why Bronze & Cream (not original Terracotta & Ivory)
User felt the original palette looked too similar to abishekgirish.com (the reference site). Switched to:
- `#F8F4E8` golden cream background (slightly warmer/yellower than old ivory)
- `#A07640` bronze-amber accent (shifts from orange-red terracotta to a richer gold-bronze tone)
This change was applied globally via sed across all component, data, css, and html files.

### Typography
- **Headings**: Cormorant Garamond (Google Fonts, serif)
- **Body**: Inter (Google Fonts)
- SectionHeading sizes: `text-3xl sm:text-4xl md:text-5xl` (responsive)
- Section heading has animated terracotta underline (Framer Motion, width 0→40px on scroll)

### Key Design Decisions
- Highlight cards have a **color top bar** (1px) + large bold stat number as title
- Project cards have **gradient cover** (h-36) + Lucide icon, unique color per project
- Certifications have **Anthropic orange badge** with italic "A"
- Education cards have **school color letter badges** (P in Purdue gold, B in BITS navy)
- AI skills (Claude Code, Agentic AI, MCP Servers) — bronze tint was removed; all skills now render with the same plain white pill style
- Testimonials have **large decorative quote mark** at text-7xl, opacity 15%
- Contact section is **dark charcoal** with Resume as plain underline text (not a button)
- Bullet points use `text-[#1C1C1E]/25` (NOT terracotta) to reduce accent overuse

---

## Profile Photo
- **File**: `Photos/Professional_photo_web.jpg` (900×1600px portrait, compressed from PNG)
- **Display**: Circular crop on hero section
- **CSS**: `object-cover object-top` with `style={{ transform: 'scale(1.85)', transformOrigin: 'center 71%' }}`
  - The photo has ~20% gray background at the top before the head starts
  - `scale(1.85)` with `origin 71%` anchors the zoom near the chest level, pulling the face into view
  - Result: head top at ~8% of circle, chin at ~61%, mid-chest visible at bottom — LinkedIn headshot style
- Size: `w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80`
- **Do NOT increase scale beyond 2.0** — previous attempt at scale(3.2) showed only gray background

---

## Photos (`Photos/` folder)
All HEIC files already converted to JPEG. Web-optimized versions (177–436KB) created with `sips`.

### Hero
| File | Use |
|------|-----|
| `Professional_photo_web.jpg` | Hero circular photo (compressed from PNG) |

### Testimonials
| File | Person | Notes |
|------|--------|-------|
| `arnav-raj.png` | Arnav Raj | 770×680px, circular photo on black bg, imgStyle: null |
| `vishesh-bhatt.png` | Vishesh Bhatt | 1076×994px, circular photo on black bg, imgStyle: null |
| `gandhee-krishna.png` | Gandhee Krishna | 1072×1026px, circular photo on black bg, imgStyle: null |
| `khushi-bansal.png` | Khushi Bansal | Circular photo outdoors, imgStyle confirmed perfect |

**Known issue**: Arnav/Vishesh/Gandhee PNGs have a black circular border baked into the image. `object-cover` shows this border unevenly on the avatar. The clean fix is to replace them with versions that have a transparent or white background.

### Life Section — 8 Photos (web-optimized versions used in code)
| File | Location | Caption in code |
|------|----------|-----------------|
| `apple_campus_web.jpg` | Apple Campus Infinite Loop | *Infinite Loop, Cupertino · Still can't believe this is my commute.* |
| `brooklyn_web.jpg` | Brooklyn Bridge at night, NYC | *Brooklyn Bridge at midnight · New York doesn't wait for daylight.* |
| `tahoe_web.jpg` | Lake Tahoe, CA | *Lake Tahoe, California · Worth the drive every time.* |
| `chicago_web.jpg` | Chicago St. Patrick's Day | *Chicago · Yes, they actually dye the river green.* |
| `catalina_web.jpg` | Catalina Island, CA | *Santa Catalina Island · 22 miles off the coast and a world away.* |
| `kobe_web.jpg` | Kobe Bryant statue, LA | *Los Angeles · For Kobe. Mamba Mentality is real.* |
| `scuba_web.jpg` | Scuba diving | *30 feet under · Quietest place I've ever been.* |
| `family_web.jpg` | Family at Terrai restaurant | *Family · The people behind everything.* |

### Skipped
- `20251226_152316_Original.jpg` — Central Park (Brooklyn is stronger)
- `IMG_0762.HEIC` — Nature hike (Tahoe is stronger)
- `IMG_1382.HEIC` — CA beach house (redundant)
- `IMG_7219.jpeg` — OLA office (rotated, Apple Campus covers "at work")

---

## Logo Files (`src/assets/logos/`)
Real image logos used in Experience cards and Hero strip. All imported as ES module URLs via Vite.

| File | Company | bg color used | objectFit |
|------|---------|--------------|-----------|
| `apple-logo.jpg` | Apple | `#000000` (black) | cover |
| `ola-logo.png` | OLA Electric | `#FFFFFF` (white) | contain |
| `purdue-logo.png` | Purdue University | `#000000` (black) | contain |
| `bits-logo.webp` | BITS Pilani | `#FFFFFF` (white) | contain |
| `jsw-logo.png` | JSW Steel | `#FFFFFF` (white) | contain |

`CompanyLogo.jsx` (`src/assets/logos/`) — centralized component with size variants (sm=36px, md=44px, lg=52px) used in Experience cards.
`LogoChip` — inline component inside Hero.jsx for the hero logo strip only.

---

## File Structure (current state)
```
Portfolio-Website/
├── Photos/                         ← all photos (originals + web-optimized *_web.jpg + testimonial PNGs)
├── public/
│   ├── favicon.svg                 ← NK monogram
│   └── Neeraj Karumanchi.pdf       ← resume (copied here so Vite bundles it)
├── src/
│   ├── components/
│   │   ├── FadeIn.jsx              ← shared scroll animation wrapper
│   │   ├── SectionHeading.jsx      ← label + serif title + animated bronze underline
│   │   ├── Navbar.jsx              ← sticky, frosted on scroll, mobile hamburger (44px tap target)
│   │   ├── Hero.jsx                ← 2 availability pills, name, tagline, photo, LogoChip logo strip
│   │   ├── Highlights.jsx          ← 6 stat cards with color top bar + SectionHeading
│   │   ├── About.jsx               ← narrative + 6 Lucide-icon hobby tiles
│   │   ├── Experience.jsx          ← timeline (desktop) + flat stack (mobile), 4 primary + 4 secondary, CompanyLogo
│   │   ├── Projects.jsx            ← 4 cards with gradient cover + Lucide icons
│   │   ├── Education.jsx           ← 2 cards with school color badges
│   │   ├── Skills.jsx              ← pill tags, all uniform (no AI tint)
│   │   ├── Certifications.jsx      ← 4 Anthropic cert cards with descriptions + intro line
│   │   ├── Life.jsx                ← 3-row photo grid (2-col mobile, 3-col desktop)
│   │   ├── Testimonials.jsx        ← useState+AnimatePresence carousel, real photos, text-lg/xl quotes
│   │   ├── Contact.jsx             ← dark section, availability text, 3 CTAs
│   │   └── Footer.jsx              ← NK, links, copyright
│   ├── assets/
│   │   └── logos/                  ← CompanyLogo.jsx + apple/ola/purdue/bits/jsw logo images
│   ├── data/
│   │   ├── highlights.js           ← 6 stat cards
│   │   ├── experience.js           ← primaryExperience + secondaryExperience
│   │   ├── projects.js             ← 4 projects with color/icon fields
│   │   ├── skills.js               ← 3 skill groups
│   │   ├── certifications.js       ← 4 Anthropic certs with description field
│   │   ├── testimonials.js         ← 4 LinkedIn recommendations
│   │   └── life.js                 ← 8 photos with captions and tags
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                   ← Tailwind v4 import, font fallbacks, focus-visible
├── index.html                      ← Google Fonts, OG tags, theme-color
├── vite.config.js                  ← base: '/Portfolio-Website/', react + tailwind plugins
├── package.json                    ← type: module, scripts: dev/build/predeploy/deploy
└── .gitignore                      ← node_modules, dist, .DS_Store
```

---

## Site Sections (all built)

### 1. Navbar
- NK monogram (serif, hover→terracotta)
- Links: About · Experience · Projects · Life · Contact
- "Say hello →" → scrolls to #contact
- Mobile: 44px hamburger → animated X → drawer with all links
- Frosted bg on scroll

### 2. Hero
- **Two green availability pills** (both animate together):
  1. "Seeking Fall 2026 Internship Opportunities"
  2. "Seeking Full-time Job Opportunities"
- Name: Neeraj Karumanchi (serif, responsive)
- Subtitle: "EPM Intern · Apple · Cupertino, CA" — font `text-[17px]`
- Tagline: "I run programs that ship. From India's fastest-growing EV startup to Apple's Pricing Platform, turning complex, multi-team work into outcomes that actually land." (em dash removed)
- CTAs: "See my work →" (dark pill) + "My journey" (ghost pill)
- Photo: circular, `object-[center_5%]`, 52/64/80 responsive sizes
- **Logo strip with real image logos** — `LogoChip` component (inline in Hero.jsx):
  - "Worked at": Apple (black bg JPG) · OLA Electric (white bg PNG, `logoBg='#ffffff'` to prevent cream bleed-through)
  - "Studied at": Purdue University (black bg PNG, `logoBg='#000000'`) · BITS Pilani (white bg WEBP)
  - Logo icons: `h-[23px] md:h-[27px] w-[23px] md:w-[27px]`, `rounded-[5px]`, `ring-1 ring-[#1C1C1E]/10`
  - Company name text: `text-[23px] md:text-[27px]` (font-serif, semibold)
  - Label text ("Worked at" / "Studied at"): `text-[15px]`
  - Each logo uses `style={{ backgroundColor: logoBg }}` (inline style, NOT Tailwind class) to prevent page cream showing through transparent PNGs

### 3. Highlights
- SectionHeading: "By the numbers" / "Impact, at a glance."
- 6 cards, each with color top bar + type badge + year + large title + description
- Titles: $2.8M Saved · 1M+ Riders · 22K Chargers · 15+ Programs · MCP + Agents · Top New Hire

### 4. About
- Opens: BITS Pilani 2022, hardware degree + software mindset
- Journey: BITS → OLA (3 roles) → Purdue → Apple
- Poker line: "I run the same playbook I use at a poker table: read the table, manage risk, make decisions with incomplete information"
- Hobby tiles: 6 cards with Lucide icons (Plane, Trophy, Waves, Spade, Music, Dumbbell)

### 5. Experience
- **Primary (4 entries, timeline on desktop)**:
  1. Apple — EPM Intern (May 2026–Present, Services Engineering Rights & Pricing)
  2. OLA Electric — 3 subroles (ABS TPM / Charger Lead / Vehicle OS Dev)
  3. Purdue Data Mine — Project Manager
  4. Purdue Daniels — Student Consultant
- Bullet points: outcome-first, metrics-led
- **Secondary (4 condensed cards)**: NextLeap, Hourglass Research, JSW Steel, HWC
- Timeline dot: `absolute left-0 top-7` with connecting line, hidden on mobile

### 6. Projects
- 4 cards with gradient cover (h-36) + centered Lucide icon
- Colors: terracotta / blue / green / purple
- Icons: TrendingUp / Gauge / MapPin / Layers
- Titles: "$7M Cost Opportunity" / "OLA Adaptive Cruise Control" / "Hydrogen Infrastructure Platform" / "H.265 Foreground Segmentation"

### 7. Education
- Purdue: gold "P" badge, GPA 3.86, coursework chips
- BITS Pilani: navy "B" badge, "India's MIT equivalent" note, dance club activity

### 8. Skills
- 3 groups: Program Management / Product Management / Technical & AI
- `const aiHighlights = new Set()` — empty set, all pills render identically with plain white style
- Bronze tint on AI skills was removed per user request (looked visually inconsistent)

### 9. Certifications
- Intro line: "Anthropic certifications are among the first issued..."
- 4 cards: Anthropic orange badge, title, description field, date, credential ID
- Grid: sm:grid-cols-2 md:grid-cols-4

### 10. Life
- 3-row grid: (3-col) / (2-col) / (3-col) on desktop
- Mobile: 2-col (aspect-square) on all rows — no single-column stacking
- Photos have lazy loading, hover captions desktop, always-visible captions mobile
- Captions have personality (see data/life.js)

### 11. Testimonials
- Section bg: `#F8F4E8` (golden cream). Card bg: white, shadow-sm, NO border
- Container: `max-w-6xl` (widened from max-w-4xl for more horizontal breathing room)
- Uses `SectionHeading` component (label: "Testimonials", title: "What they say.")
- Subtitle: "From the people I've worked with, at OLA Electric, Purdue, and BITS Pilani."
- **Carousel**: Embla was removed entirely — replaced with `useState` + Framer Motion `AnimatePresence`
  - Reason: Embla had initialization/measurement issues that made the section invisible
  - `prev`/`next` functions cycle index with modulo, `AnimatePresence mode="wait"` handles fade transition
  - DO NOT bring Embla back
- Card structure: `"` mark (text-4xl, `#A07640` 50% opacity) + quote text below, inside left-bordered div
- Left border: `border-l-[3px] border-[#A07640] pl-6`
- Quote text: `text-lg sm:text-xl`, `leading-[1.85]`
- Author row: `w-11 h-11 rounded-full overflow-hidden` — real profile photos (see Photos/ below)
  - Photo rendered with `object-cover` + per-person `imgStyle` for crop positioning
  - Khushi: `{ objectPosition: 'center 24%', transform: 'scale(2.5)', transformOrigin: 'center 24%' }` — CONFIRMED PERFECT, do not change
  - Arnav, Vishesh, Gandhee: `imgStyle: null` (plain `object-cover object-top`) — KNOWN ISSUE: PNGs have a black circular border baked in that shows unevenly; clean fix requires source photos without the black border
- Navigation: pill active dot + circular inactive dots (bottom-left) + ← → circle buttons (bottom-right)
- `in →` LinkedIn pill only renders if `t.linkedin` is non-empty — all currently empty strings

### 12. Contact
- Heading: "Let's make something happen."
- Subtext: "Actively seeking a Fall 2026 EPM or PM internship. Always happy to talk AI, EV systems, poker strategy, or the fastest route between US states."
- Location line: "Based in Cupertino, CA · Open to remote & relocation"
- CTAs: LinkedIn (white pill) + Email address (ghost pill) + Download Resume (plain underline text)

---

## Responsive Behavior
- All sections have `scroll-mt-16` for fixed navbar offset
- `py-16 md:py-24` pattern on most sections (not full py-24 on mobile)
- Hamburger: 44×44px tap target, correct X transform at translate-y-[8px]
- Life grid: 2-col on mobile (not 1-col), aspect-square on mobile
- SectionHeading: text-3xl → text-4xl → text-5xl
- Contact heading: text-4xl → text-5xl → text-7xl
- Profile photo: 208/256/320px responsive circle
- All job card headers stack vertically on mobile (flex-col → sm:flex-row)
- Life photos: loading="lazy"

---

## What's Still Pending / Not Done Yet

### HIGH PRIORITY
1. **OG image** — `index.html` references `/og-image.jpg` which doesn't exist. Create a 1200×630px JPG in Figma/Canva (golden cream bg `#F8F4E8`, serif name left, profile photo right, bronze accent `#A07640`) and place in `/public/og-image.jpg`. Without it, LinkedIn/WhatsApp share previews will be broken.

2. **Testimonials LinkedIn URLs** — All `linkedin:` fields in `src/data/testimonials.js` are empty strings. Fill in each recommender's LinkedIn profile URL so the `in →` pill button appears.

3. **Testimonial avatar photos (Arnav, Vishesh, Gandhee)** — Current PNGs have a black circular border baked into the image file. With `object-cover`, this border shows unevenly as a dark ring. Fix: replace with versions that have a transparent or white background (no pre-baked circular border). Khushi is confirmed perfect — do not change her photo or `imgStyle`.

### MEDIUM PRIORITY
5. **Profile photo crop fine-tuning** — Current: `scale(1.85), transformOrigin: center 71%`. If head looks slightly off in browser, adjust: lower `%` → shows higher in photo, higher `%` → shows lower. Keep scale between 1.7–2.0.

6. **LinkedIn writing showcase** — Neeraj has 3,008 followers. A featured pull-quote from a top post in the About section would add credibility.

7. **"Currently working on" pulse** — Brief "Currently:" line in Hero or About makes the site feel alive.

8. **Purdue campus photo** — Nothing from Purdue years in Life section. Add if Neeraj has one.

9. **Background grain on Contact section** — CSS `feTurbulence` SVG noise at ~3% opacity would add depth.

### LOW PRIORITY
10. **Anthropic logo SVG** — Replace hand-typed "A" in cert badge with actual Anthropic logomark.

11. **NextLeap duplication** — Appears in both secondaryExperience AND projects.js. Differentiate or remove from one.

---

## Known Issues / Things to Check
- `Neeraj Karumanchi.pdf` is in both `/public/` (for build) and repo root (original). Keep both; the build uses `/public/`.
- Profile photo `object-[center_5%]` — may need tuning depending on exact photo composition. Check in preview.
- Tailwind v4 opacity shorthand `bg-[#B85C38]/8` — verify rendered output is 8% tint, not solid.

---

## Build & Deploy Commands
```bash
# PATH needed every session (node not in default shell PATH):
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:$PATH"

npm run dev        # local dev server at localhost:5173
npm run build      # production build to dist/
npm run deploy     # build + push to gh-pages branch → live at neeraj12-byte.github.io
```

## Git Remote
```
git remote: git@github.com:neeraj12-byte/neeraj12-byte.github.io.git
```
Repo was renamed from `Portfolio-Website` → `neeraj12-byte.github.io` on July 14 so the live URL has no path suffix. Do NOT change the GitHub username (`neeraj12-byte`) — user decided to keep it.

---

## Session History Summary
- **Session 1**: Planning, content gathering (resume, LinkedIn, photos), design decisions
- **Session 2 (June 30 – July 1)**: Full build — all 12 components + data files. Two rounds of audit (manual + 4 parallel subagents). Fixed: icons, mobile grid, responsive text, timeline, content rewrites, availability pill, project covers, cert descriptions, contact copy, life captions, footer, skill tints.
- **Session 3 (July 5)**: Three changes:
  1. Color palette switched from Terracotta & Ivory → Bronze & Cream (`#F8F4E8` + `#A07640`) — user felt original was too similar to abishekgirish.com
  2. Profile photo crop fixed — `scale(1.85) transformOrigin: center 71%` — shows head+chest like LinkedIn headshot
  3. Testimonials section redesigned to match reference image (single full-width card, "Testimonials" serif heading with bronze underline + subtitle, `"` + left border on quote, dots + arrows nav)
- **Session 4 (July 13)**: Polish pass — all changes committed and pushed to main (branch is ahead of deployment):
  1. Real image logos added for Apple, OLA Electric, Purdue, BITS Pilani across Experience cards and Hero strip
  2. Hero logo strip built with `LogoChip` inline component — real logos with proper backgrounds, ring borders, larger fonts
  3. Two availability pills added to Hero (Internship + Full-time)
  4. Em dashes removed site-wide, replaced with commas
  5. Email updated to neeraj.karumanchi12@gmail.com in Contact + Footer
  6. Testimonials: Embla carousel removed, replaced with `useState` + `AnimatePresence`; real profile photos added for all 4 people
  7. AI skills bronze tint removed (`aiHighlights = new Set()`) — all skill pills now uniform
  8. Testimonials container widened to `max-w-6xl`, quote font increased to `text-lg sm:text-xl`
  9. Arnav/Vishesh/Gandhee testimonial quotes expanded to ~3 lines for visual consistency
  10. Known open issue: Arnav/Vishesh/Gandhee avatar PNGs have baked-in black circular border — needs clean source images to fix properly
- **Session 5 (July 14)**: Deployment:
  1. Deployed site to GitHub Pages for the first time via `npm run deploy`
  2. Renamed repo from `Portfolio-Website` → `neeraj12-byte.github.io` so URL is clean: `https://neeraj12-byte.github.io`
  3. Updated `vite.config.js` base from `'/Portfolio-Website/'` → `'/'`
  4. Updated resume href in `Contact.jsx` from `'/Portfolio-Website/Neeraj%20Karumanchi.pdf'` → `'/Neeraj%20Karumanchi.pdf'`
  5. Updated git remote to `git@github.com:neeraj12-byte/neeraj12-byte.github.io.git`
  6. Decided NOT to change GitHub username to `neerajkarumanchi` — keeping `neeraj12-byte`
  7. Future option: add custom domain (e.g. `neerajkarumanchi.com`) pointing to GitHub Pages
