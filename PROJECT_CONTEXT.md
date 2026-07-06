# Portfolio Website — Project Context
> Read this file at the start of any session to restore full context.
> Last updated: July 5, 2026

---

## Who This Is For
**Neeraj Karumanchi**
- Engineering Program Manager Intern @ Apple (May 2026–Present), Cupertino, CA
- Former Technical Product Manager @ OLA Electric (3 yrs), Bengaluru, India
- Master of Engineering Management @ Purdue University (GPA 3.86, May 2027)
- B.E. Electronics & Instrumentation @ BITS Pilani, India (May 2022)
- LinkedIn: linkedin.com/in/neeraj-karumanchi/
- Email: neeraj.karumanchi25@gmail.com
- Phone: +1 (765) 409-0871
- GitHub: neeraj12-byte

---

## Purpose
A **personal brand portfolio website** — not just a resume in HTML. It tells the full story: work, journey, travels, personality, hobbies. Primary goal: personal branding. Secondary: job applications (seeking **Fall 2026 EPM/PM internship**).

---

## Current Build Status: LIVE (dev server works, production build clean)
All 12 sections built and rendering. Run `npm run dev` to preview locally.
Deploy: `npm run deploy` → pushes to gh-pages branch → live at `neeraj12-byte.github.io/Portfolio-Website/`

---

## Tech Stack
- **React + Vite** (type: module, vite.config.js has base: '/Portfolio-Website/')
- **Tailwind CSS v4** (`@tailwindcss/vite` plugin)
- **Framer Motion** (scroll-triggered fade-ins, SectionHeading underline animation)
- **Embla Carousel** (testimonials)
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
- AI skills (Claude Code, Agentic AI, MCP Servers) get **terracotta tint** pill to stand out
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

## File Structure (current state)
```
Portfolio-Website/
├── Photos/                         ← all photos (originals + web-optimized *_web.jpg)
├── public/
│   ├── favicon.svg                 ← NK monogram
│   └── Neeraj Karumanchi.pdf       ← resume (copied here so Vite bundles it)
├── src/
│   ├── components/
│   │   ├── FadeIn.jsx              ← shared scroll animation wrapper
│   │   ├── SectionHeading.jsx      ← label + serif title + animated terracotta underline
│   │   ├── Navbar.jsx              ← sticky, frosted on scroll, mobile hamburger (44px tap target)
│   │   ├── Hero.jsx                ← availability pill, name, tagline, photo, logo strip
│   │   ├── Highlights.jsx          ← 6 stat cards with color top bar + SectionHeading
│   │   ├── About.jsx               ← narrative + 6 Lucide-icon hobby tiles
│   │   ├── Experience.jsx          ← timeline (desktop) + flat stack (mobile), 4 primary + 4 secondary
│   │   ├── Projects.jsx            ← 4 cards with gradient cover + Lucide icons
│   │   ├── Education.jsx           ← 2 cards with school color badges
│   │   ├── Skills.jsx              ← pill tags, AI skills tinted terracotta
│   │   ├── Certifications.jsx      ← 4 Anthropic cert cards with descriptions + intro line
│   │   ├── Life.jsx                ← 3-row photo grid (2-col mobile, 3-col desktop)
│   │   ├── Testimonials.jsx        ← Embla carousel, 4 quotes, big decorative "
│   │   ├── Contact.jsx             ← dark section, availability text, 3 CTAs
│   │   └── Footer.jsx              ← NK, links, copyright
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
- **Green availability pill**: "Seeking Fall 2026 Internship" (pulsing dot)
- Name: Neeraj Karumanchi (serif, responsive)
- Subtitle: "EPM Intern · Apple · Cupertino, CA"
- Tagline: "I run programs that ship. From India's fastest-growing EV startup to Apple's Pricing Platform — turning complex, multi-team work into outcomes that actually land."
- CTAs: "See my work →" (dark pill) + "My journey" (ghost pill)
- Photo: circular, `object-[center_5%]`, 52/64/80 responsive sizes
- Logo strip: "Worked at" Apple · OLA Electric | "Studied at" Purdue · BITS Pilani

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
- AI skills (Claude Code, Agentic AI, MCP Servers) styled with terracotta tint

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
- Heading: "Testimonials" (large serif h2, NOT using SectionHeading component — manually built so subtitle spacing can be controlled)
  - Animated bronze underline (Framer Motion, same as SectionHeading)
  - Subtitle: "From the people I've worked with — at OLA Electric, Purdue, and BITS Pilani."
- Embla carousel: 1 slide visible, full-width (`min-w-full`). Loop enabled.
- Card structure: `"` mark (text-5xl, ~10% opacity) sits INSIDE the left-bordered div as first child, then quote text below it — gives the blockquote feel from reference image
- Left border: `border-l-2 border-[#A07640]/40 pl-6` (bronze, on the quote block including the `"`)
- Author row: 48px dark circle with white initials (no photos available) + name + title. `in →` LinkedIn pill on right (only renders if `t.linkedin` is non-empty string)
- Navigation: pill-shaped active dot + circle inactive dots (bottom-left) + ← → arrows (bottom-right)
- DO NOT wrap the Embla ref div in FadeIn — it breaks carousel measurement
- Reference image: `/Users/neerajkarumanchi/.claude/image-cache/c9c5d33b-1bf9-4d25-8378-5354976a0189/31.png`
- linkedin field in testimonials.js: currently empty strings. Fill in each person's LinkedIn profile URL to show `in →` button

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
1. **OG image** — `index.html` references `/Portfolio-Website/og-image.jpg` which doesn't exist. Create a 1200×630px JPG in Figma/Canva (golden cream bg `#F8F4E8`, serif name left, profile photo right, bronze accent `#A07640`) and place in `/public/og-image.jpg`. Without it, LinkedIn/WhatsApp share previews will be broken.

2. **Company logos** — Experience cards and hero logo strip use text only. Real SVG logos would elevate credibility:
   - Apple: simpleicons.org or inline SVG
   - OLA Electric: Wikimedia Commons SVG
   - Purdue: official marcom.purdue.edu "P" wordmark
   - BITS Pilani: Wikimedia Commons SVG
   Save to `/src/assets/logos/`, display at 20–24px height, `filter: brightness(0)` for monochrome

3. **Deploy to GitHub Pages** — `npm run deploy` not yet run. Site is only running locally.
   Command: `export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:$PATH" && npm run deploy`

4. **Testimonials LinkedIn URLs** — All `linkedin:` fields in `src/data/testimonials.js` are empty strings. Fill in each recommender's LinkedIn profile URL so the `in →` pill button appears.

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

npm run dev        # local dev server at localhost:5173/Portfolio-Website/
npm run build      # production build to dist/
npm run deploy     # build + push to gh-pages branch → live at neeraj12-byte.github.io/Portfolio-Website/
```

---

## Session History Summary
- **Session 1**: Planning, content gathering (resume, LinkedIn, photos), design decisions
- **Session 2 (June 30 – July 1)**: Full build — all 12 components + data files. Two rounds of audit (manual + 4 parallel subagents). Fixed: icons, mobile grid, responsive text, timeline, content rewrites, availability pill, project covers, cert descriptions, contact copy, life captions, footer, skill tints.
- **Session 3 (July 5)**: Three changes:
  1. Color palette switched from Terracotta & Ivory → Bronze & Cream (`#F8F4E8` + `#A07640`) — user felt original was too similar to abishekgirish.com
  2. Profile photo crop fixed — `scale(1.85) transformOrigin: center 71%` — shows head+chest like LinkedIn headshot
  3. Testimonials section redesigned to match reference image (single full-width card, "Testimonials" serif heading with bronze underline + subtitle, `"` + left border on quote, dots + arrows nav)
