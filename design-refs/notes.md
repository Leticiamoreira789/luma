# Design notes: Buzzvel FE Test 2026 ("luma." landing page)

> Source: Figma CSS export (desktop frame) + section PNGs in `design-refs/desktop/`.
> Values are exact from Figma unless marked *(estimate)*.
> Ignore hidden layers found in the export (Roboto "Caption" / "Main Headline" with `display:none` in the People section).

---

## Frames

- **Desktop frame:** 1280px wide (not 1440)
- **Content width:** 1120px (side padding 80px). Use `max-w-[1120px] mx-auto px-5 lg:px-20` or similar.
  - Note: FeaturedCourse and Testimonial inner rows measure 1136px in Figma (538 + 60 + 538). Treat this as a design inconsistency and use the same 1120px container.
- **Section vertical padding:** 100px top/bottom on every section. Footer: 80px top / 40px bottom.
- **Header height:** 70px.
- **Mobile frame:** 402px (see the Mobile section)

## Fonts (Google Fonts → `next/font/google`)

- **Headings:** `Plus Jakarta Sans`, weights 600, 700, 800
- **Body/UI:** `Inter`, weights 400, 600, 700

| Token (Figma style) | Family | Weight | Size / Line-height | Letter-spacing | Used in |
|---|---|---|---|---|---|
| `h1` (Desktop/H1) | Plus Jakarta Sans | 800 | 64 / 70 | -1.6px (-0.025em) | Hero title, Stats numbers (24K+, 120+, 92%) |
| `h2` (Desktop/H2) | Plus Jakarta Sans | 800 | 56 / 64 | -1.4px (-0.025em) | Final CTA title |
| `h3` (Desktop/H3) | Plus Jakarta Sans | 800 | 48 / 56 | -1.2px (-0.025em) | Section titles (Categories, Featured, How it works, People, Contact) |
| `quote` (Desktop/quotes) | Plus Jakarta Sans | 600 | 30 / 44 | -0.75px (-0.025em) | Testimonial quote |
| `h5` (Desktop/H5) | Plus Jakarta Sans | 700 | 20 / 32 | 0 | Card titles, step titles, "Contact us" |
| `subtitle-1` | Inter | 400 | 18 / 28 | 0 | Section intro paragraphs |
| `subtitle-2` | Inter | 400 (700 for name) | 16 / 28 | 0 | Featured description, step text, testimonial name |
| `body-1` | Inter | 400 / 700 | 14 / 24 | 0 | Nav, buttons (700), card text, labels (700), inputs, footer links |
| `overline` | Inter | 600 | 12 / 16 | 1.44px (0.12em), UPPERCASE | Eyebrows, number tags, footer column titles, "STEP 01" |
| `caption` | Inter | 400 | 13 / 20 | 0 | Footer copyright |

> Several headings end with a period ("forward.", "knowing.", "understand.", "learning."). It is the same color as the heading text, so it is not a separate accent.

## Colors (hex)

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#3157F6` | Primary buttons, eyebrows, links, stats, FeaturedCourse bg, icons |
| `primary-soft` | `#E2E8FF` | Number tags, icon boxes, avatar fallback, decorative circles |
| `ink` | `#171B2C` | Headings, strong text, footer bg, logo |
| `text` | `#656770` | Body/subtitle text, nav links, Log in |
| `text-muted` | `#6D7384` | Card descriptions, stat labels, placeholders, step labels |
| `border` | `#DBDFEB` | Card/input/button borders, header bottom border, dividers |
| `cream` | `#F9F8F3` | Page bg, header, hero, How it works, People, contact items, input bg |
| `white` | `#FFFFFF` | Categories, Testimonial, Contact bg, cards |
| `yellow` | `#FFEE7E` | "View course" button, Featured tag, stars, final CTA avatar border |
| `butter` | `#FFF1C2` | Final CTA bg, step 3 icon box |
| `peach` | `#FFCB9F` | Hero accent bar, step 2 icon, final CTA decorations |
| `coral` | `#FF704D` | Step 2 icon dot |
| `mustard` | `#E9D659` | Step 3 icon dot |
| `footer-text` | `#9E9FAA` | Footer tagline + links |
| `footer-strong` | `#E7E7EC` | Footer column titles, copyright, "Browse all courses" link |
| `footer-divider` | `#656770` | Footer bottom border |

## Radius / Shadows

- **Radius:** buttons & inputs 8px · category cards, featured image, form card 16px · hero image 24px · floating badges & contact items 12px · small tags 6px · avatars/circles full
- **Shadow floating badges (hero):** `0 4px 24px rgba(0,0,0,0.10)`
- **Shadow form card:** `0 12px 32px rgba(23,27,44,0.04)`
- **Shadow collage photos (People):** `0 3px 5px -1px rgba(0,0,0,0.10), 0 0 3px rgba(0,0,0,0.07)`, radius 4px

## Buttons (reusable `Button` variants)

| Variant | Bg | Border | Text | Padding | Height |
|---|---|---|---|---|---|
| `primary` | `#3157F6` | none | white, 14/24 700 | 14px 28px (header: 10px 20px) | 54 (header 44, CTA/form 52) |
| `secondary` | `#FFFFFF` | 1px `#DBDFEB` | ink, 14/24 700 | 14px 28px | 54 |
| `accent` | `#FFEE7E` | none | ink, 14/24 700 | 14px 28px | 52 |
| `link` (with arrow) | none | none | 14/24 700 + 20px arrow icon, gap 8px | 14px 16px or 0 | — |
| `ghost` (Log in) | none | none | `#656770`, 14/24 400 | 10px 16px | 44 |

---

## Sections (order, desktop)

### 1. Header: bg `cream`, h 70px, border-bottom 1px `border`
- Left: logo **"luma."** (vector, 54×17, `ink`), so **export as SVG** (and the white version for the footer).
- Center: nav **centered on the page** (absolute center of the 1120 container): Courses · For Teams · Community · About. Gap 32px, `body-1` 400, `text` color.
- Right (gap 8px): "Log in" (ghost) + "Start learning" (primary, h44, padding 10px 20px).

### 2. Hero: bg `cream`, padding 100/80, height 720
- Row: left column flex-1 (560px), gap 60px, right visual 500×520.
- Left stack: eyebrow "LEARN AT YOUR OWN PACE" → H1 (pt 16px, 3 lines in 560px) → `subtitle-1` paragraph (pt 24px, max-w 480px) → buttons row (pt 32px, gap 12px): "Explore courses" (primary) + "See how it works" (secondary) → trust row (pt 32px, gap 12px).
- Trust row: 3 overlapping avatars 32px (border 2px `cream`, overlap: each takes 24px, so `-ml-2`) + "**Trusted by 24,000+** learners" (bold part `ink` 700; "learners" `text` 400).
- Right visual (relative, 500×520):
  - Peach bar `#FFCB9F` 89×468, radius 16, at left 450 / top 24. It sits **behind** the photo and sticks out 39px to the right.
  - Lavender circle `#E2E8FF` 106px at left -45 / top 403, behind the photo, bottom-left.
  - Photo 500×520 radius 24. Alt: *"Person focused on learning at their laptop"*.
  - Badge top-left (left -22, top 16): white, radius 12, shadow, padding 12px 16px, gap 12. Chip "120+" (bg `primary-soft`, radius 8, h32, px 4, `primary` 700) + "expert-led courses" (`ink` 400).
  - Badge bottom-right (left 348, top 436, so it overflows the photo to the right): white, radius 12, shadow, padding 12px 16px, gap 8. 5 stars 14px `#FFEE7E` (gap 2) + "4.9 avg rating".

### 3. Categories: bg `white`, padding 100/80
- Header block max-w 560: eyebrow "FIND YOUR NEXT SKILL" → H3 "Learn something worth knowing." (pt 16) → `subtitle-1` (pt 16).
- Gap 40px, then a 4-column grid with gap 20px.
- Card (a link): padding 28px, border 1px `border`, radius 16, bg white, min-h 260, flex-col `justify-between`.
  - Number tag "01" (bg `primary-soft`, radius 6, padding 4px 8px, `overline` `primary`) → title H5 (≈20px below tag) → description `body-1` `text-muted` (pt 12) → "Explore →" (`body-1` 700 `ink` + 20px arrow, gap 8, pt 24, pinned to bottom).
- Data: 01 Product Design / 02 Technology / 03 Business / 04 Creative (texts in PNG).

### 4. Featured Course: bg `primary`, padding 100/80
- Row, gap 60, items center: image column (538×408) + text column (flex-1).
- Image: radius 16. Alt: *"Product design course: student working on interface designs"*. Tag "FEATURED COURSE" at top-left offset -12/-12: bg `yellow`, radius 6, padding 6px 12px, `overline` `ink`.
- Text (all white): eyebrow "MOST POPULAR THIS MONTH" → H3 (pt 16) → `subtitle-2` description (pt 20) → "with Maya Chen · Senior Product Designer" `subtitle-2` (pt 24) → chips row (pt 24, gap 12): "8 lessons", "2h 40min", "Intermediate" (border 1px `border`, radius 8, padding 6px 14px, `body-1` white) → buttons (pt 32, gap 12): "View course" (accent) + "Browse all courses →" (link, `#E7E7EC`, white arrow).

### 5. How it works: bg `cream`, padding 100/80
- Centered header: eyebrow "HOW LUMA WORKS" + H3 "Less browsing. More learning." (pt 16, centered).
- 80px gap, then a 3-column row with gap 80 and padding 28px 0.
- **Connector line** behind the icons: 1px `border`, at the vertical center of the icons (top ≈ 28px from the icon top, so it runs through the middle of the 56px icons) from the first to the third icon. Hide on mobile.
- Step: icon 56px → "STEP 0X" (`overline`, `text-muted`, pt 24) → H5 title (pt 8) → `subtitle-2` `text` (pt 12, max-w 320).
- Icons (pure CSS, no assets):
  1. Circle 56 `primary-soft` + square 24 `primary` radius 6 at (8,8)
  2. Square 56 `peach` radius 8 **rotated 12°** + circle 28 `coral` at (24,24)
  3. Square 56 `butter` radius 12 + circle 20 `mustard` at (8,28)
- ⚠️ All three labels say **"STEP 01"** in Figma. This is likely a design typo, so use 01/02/03 and **mention it in the README**.

### 6. Testimonial + Stats: bg `white`, padding 100/80
- Row `justify-between`, gap 60, items center.
- Left (max-w 600): quote mark glyph (24×22, `primary`; export SVG or use a styled “"” character) → quote (`quote` style, `ink`, pt 16) → author row (pt 32, gap 16): avatar 48px round (`alt=""`, the name is already in the figcaption) + name `subtitle-2` 700 `ink` / role `body-1` `text` "Product Manager".
- Right column (≈401 wide): **border-left 1px `border`**, padding-left 48, gap 20. Three stats: number in `h1` style `primary` (24K+, 120+, 92%) + label `body-1` `text-muted` (pt 4).
- Use a `<blockquote>` + `<figcaption>`, and a `<dl>` for the stats.

### 7. People ("Meet international students & teachers"): bg `cream` (confirmed in `desktop-full.png` / `mobile-full.png`; the section PNG is transparent), padding 100/80
- Row, gap 60, items center; two columns flex-1 (530 each).
- Left (gap 32): eyebrow "THE PEOPLE" → H3 (gap 8) → `subtitle-1` paragraph (lorem ipsum in design, so keep it as is) → "Explore teachers and students" (secondary button, w 268).
- Right: **photo collage** over a 500px circle `primary-soft` (centered). There are **4 columns** with gap 16 and **10 photos**. Each column is a vertical stack with a 12.84px gap, the columns are centered vertically, and they have staggered top offsets:
  - col1 (pt 64, align end): 103×154, 138×207
  - col2 (pt 26): 103×170, 103×173, 103×128
  - col3 (pt 0): 103×137, 103×138, 103×154
  - col4 (centered): 128×205, 103×132
  - *(widths ≈102.72 / 138.03 / 128.4; exact per PNG)*
  - Photos radius 4 + collage shadow, `object-cover`. Alts: describe each person/scene briefly.
- **Assets: exported as 4 column images** (`public/images/people/people-col-1.png` … `people-col-4.png`). Each one already contains its photos, gaps, radius, and shadows. The circle behind them is CSS.
  - Build the collage as: circle (CSS) + a flex row of 4 `next/image` with the staggered offsets above (`items-center`, col1 `pt-16` + `self-end` content, col2 `pt-[26px]`).
  - On mobile, reuse the same 4 images, scaled down (widths 94/72/72/88 → keep aspect ratio). The mobile gap between photos is slightly smaller (8 vs 12.84px), and the difference is negligible at that size.
  - Alt text: one short description per column (e.g. "Students studying at home and in class"), or treat the collage as decorative with one descriptive `aria-label` on the group.

### 8. Contact: bg `white`, padding 100/80
- Row `justify-between`, items center: info column 480 + form card 540.
- Info (gap 40): eyebrow "CONTACT" → H3 "Get in touch" → `subtitle-1` (header gap 16). Then contact cards (gap 16):
  - Card: bg `cream`, radius 12, padding 20, gap 16. Icon box 40px `primary-soft` radius 8 with a 24px stroke icon (`primary`, 1.5px). Title `body-1` `ink`; detail `body-1`.
  - "Email" + `contact@luma.com` (`primary`, make it a `mailto:` link) · icon: chat bubble with dots
  - "Response Time" + "Up to 24 hours on business days" (`text-muted`) · icon: clock
- Form card: bg white, border 1px `border`, radius 16, shadow form, padding 40, gap 24.
  - Header (gap 8): "Contact us" H5 + "Fill out the fields and we will get in touch." `body-1` `text`.
  - Fields (gap 20), each label (`body-1` 700 `ink`) + control (gap 8):
    - Full name: input h48, padding 12px 16px, bg `cream`, border 1px `border`, radius 8, placeholder "Your name" `text-muted`
    - Email: same, placeholder "youremail@example.com"
    - Your question: textarea h120, padding 14px 16px, placeholder "Tell us how we can help..."
  - Submit "Send message": primary, full width, h52.
  - **Interaction:** client-side validation + mock submit + success/error message (`aria-live`).

### 9. Final CTA: bg `butter #FFF1C2`, padding 100px 0, centered, `overflow-hidden`
- Content max-w 720 (px 32), centered:
  - 4 overlapping avatars 40px (border 2px `yellow`, each takes 32px)
  - H2 "What will you learn next?" (pt 32, centered)
  - `subtitle-1` "Start with one course. Build from there." (pt 16)
  - Buttons (pt 40, gap 12): "Explore all courses" (primary) + "Join Luma" (secondary)
- **Decorations** (absolute, `aria-hidden`, all `peach #FFCB9F`; positions relative to the 1280 frame, so convert to %):
  - Outline circle 108px (2px) at (22, 16)
  - Filled circle 120px at (56, 373), partially cut off at the bottom
  - Filled circle 40px at (1064, 468), cut off at the bottom
  - Filled rounded square 115px r8 rotated 12° at (1144, -24), top-right
  - Filled rounded square 56px r8 rotated 12° at (-33, 230), left edge
  - Outline circles 32px (2px) at (1208, 429) and (877, 43)
  - Outline rounded square 56px (1px) r8 rotated 12° at (317, 42)
  - Line icons (export as SVG): "B"-shaped badge 83px rotated 15° at (272, 360); cube 80px at (1120, 220); chat bubble 32px at (141, 214); lightbulb/drop 61px at (1016, 82); ticket/"door" 48px at (963, 381)
  - Hide the smaller ones on mobile (decide in the mobile notes).

### 10. Footer: bg `ink`, padding 80 80 40
- Top row: brand column (416 wide) + 3 link columns (208 each), gap 32.
  - Brand: logo "luma." white (SVG) + tagline "Practical learning for curious people." (`body-1`, `footer-text`, pt 12, max-w 240)
  - Column title `overline` `footer-strong`; list pt 16, gap 12; links `body-1` `footer-text`
  - EXPLORE: Courses, Categories, Instructors, For Teams
  - COMPANY: About, Careers, Journal
  - SUPPORT: Help Center, Contact, Terms, Privacy
- Bottom (mt 64): border-top 1px `#656770`, pt 24, "© 2026 Luma Learning" `caption` `footer-strong`.

---

## Assets (final names)

All files are in `public/`. "Where used" refers to the sections above.

| File | Where used |
|---|---|
| `icons/logo-luma.svg` | Header logo (54×17, `ink`) |
| `icons/logo-luma-white.svg` | Footer logo (54×17, white) |
| `icons/arrow-right.svg` | Arrow on `link` buttons and "Explore →". The code uses an inline `currentColor` version (`ArrowRightIcon`) because this file has `#171B2C` hardcoded |
| `icons/star.svg` | Hero rating badge (5 stars, 14px, yellow) |
| `icons/quote-mark.svg` | Testimonial quote glyph (24×22, `primary`) |
| `icons/contact-email.svg` | Contact card "Email" (40px box + chat icon) |
| `icons/contact-response-time.svg` | Contact card "Response Time" (40px box + clock) |
| `icons/deco-badge-b.svg` | Final CTA, "B" badge (83px, rotated 15°) |
| `icons/deco-cube.svg` | Final CTA, cube |
| `icons/deco-chat.svg` | Final CTA, chat bubble |
| `icons/deco-bulb.svg` | Final CTA, lightbulb |
| `icons/deco-ticket.svg` | Final CTA, ticket |
| `icons/deco-circle.svg` | Final CTA, 32px outline circle (used twice) |
| `icons/deco-square.svg` | Final CTA, outline rounded square (56px, rotated 12°) |
| `images/hero-learner.png` | Hero photo (1252×1048) |
| `images/featured-course.png` | Featured Course photo (1100×840) |
| `images/testimonial-alex-morgan.png` | Testimonial avatar (96×96) |
| `images/cta-avatar-01.png` … `04.png` | Final CTA, 4 overlapping avatars (80×80, yellow border baked in) |
| `images/people/people-col-1.png` … `4.png` | People collage, 4 columns (transparent PNG, shadows baked in) |

### Pending / generated assets
- **Clean `hero-learner.png` and `featured-course.png` (photo only):** to be re-exported. The current files have UI baked in (hero: badges, peach bar, lavender circle; featured: "FEATURED COURSE" tag), so they are placeholders until then.
- **Hero trust-row avatars `images/hero-avatar-01.png` … `03.png`:** to be exported with the cream border baked in (intentional, like the CTA avatars with the yellow border). Do not add borders in CSS to any avatar.
- **Hamburger icon (mobile):** inline SVG in the Header component (3 lines, 1.5px stroke).
- **OG image and favicon:** generated in code (`src/app/opengraph-image.tsx`, `src/app/icon.tsx`). The OG title font is `src/fonts/PlusJakartaSans-ExtraBold.ttf`.

## Mobile

> Source: Figma CSS export (mobile frame) + section PNGs in `design-refs/mobile/`.

### Frame & spacing
- **Mobile frame:** 402px wide. Content width is 362px with **side padding 20px**.
- **Section vertical padding:** **60px** top/bottom (desktop is 100). Footer: 60px top / 20px bottom.
- Everything stacks in **one column**. Buttons in hero, featured, and final CTA become **full width** (stacked, gap 12).
- Same colors, radius, and shadows as desktop unless noted below.

### Mobile type scale (only what changes)

| Token | Desktop | **Mobile** |
|---|---|---|
| `h1` | 64/70, -1.6px | **40/44, -1px** (also the stats numbers) |
| `h2` | 56/64, -1.4px | **36/40, -0.9px** (final CTA) |
| `h3` | 48/56, -1.2px | **32/36, -0.8px** (section titles) |
| `quote` | 30/44 600, -0.75px | **20/32 600, no letter-spacing** |
| `h5` | 20/32 | **20/28** (form title "Contact us" stays 20/32) |
| `subtitle-1` | 18/28 | **16/26** |
| `subtitle-2` | 16/28 | **14/24** |
| `body-1`, `overline`, `caption` | — | unchanged (14/24, 12/16, 13/20) |

So each token is the same element in both layouts, and only the size changes at the breakpoint. Implement with responsive classes (`text-[32px] leading-[36px] lg:text-[48px] lg:leading-[56px]`) or, better, with CSS variables per breakpoint for each token.

### Sections (mobile)

**1. Header:** h 68px + 1px border-bottom, padding 0 20px, `justify-between`. Logo on the left and a **hamburger button** on the right (36×36, padding 6, 24px icon with 3 lines, stroke 1.5px `ink`). The nav, Log in, and Start learning are **hidden**, so they must live inside the mobile menu (see Interactions).

**2. Hero:** **visual first, text below**, gap 40.
- Visual box 362×380 (relative):
  - Photo 346×380, **radius 16** (desktop 24), horizontally centered (8px inset each side)
  - Peach bar 271.5×342 radius 16 at left 100.5 / top 24, so it sticks out ~10px on the right
  - Lavender circle 64px at left -10 / top 304
  - Badge "120+" at left 0 / top 6; rating badge at left 164 / top 296 (overflows right by ~11px). Same badge styles as desktop.
  - The section needs `overflow-x: clip` so the bits that stick out never cause horizontal scroll.
- Text: eyebrow → H1 40/44 (pt 16) → subtitle 16/26 (pt 24) → buttons **stacked full width** (pt 32, gap 12; primary h52, secondary h54) → trust row **centered** (pt 32).

**3. Categories:** header (eyebrow, H3 32/36, subtitle 16/26). **48px** gap (desktop 40), then cards stacked with **gap 16**. Card padding **24** (desktop 28), min-h 200; same inner structure.

**4. Featured Course:** image **full width 362×280** radius 16 with the "FEATURED COURSE" tag (same offset -12/-12). The text block starts **~38px below the image**. Then: eyebrow → H3 32/36 (pt 16) → description 14/24 (pt 20) → instructor 14/24 (pt 24) → chips row (pt 24, gap 12; chip text `#E7E7EC`) → **"View course" full width h52** → **"Browse all courses →" centered below** (gap 12, h50).

**5. How it works:** centered eyebrow + H3 32/36 (centered, 2 lines). 40px gap, then steps **stacked vertically**, left-aligned:
- Each step: icon 56 → "STEP 0X" (pt 24) → H5 20/28 (pt 8) → text 14/24 (pt 12).
- Steps are spaced ~48px apart. A **vertical connector line** (1px × ~50px, `border`) sits at x = 28px (the center of the icon) and runs from below each step's text down to the next icon. There is no horizontal line on mobile.
- Labels are correctly numbered **STEP 01 / 02 / 03** on mobile. This confirms the desktop "STEP 01 ×3" is a typo.
- ⚠️ Step 2 icon background on mobile is `rgba(255,112,77,0.15)` (light coral), while desktop uses `#FFCB9F` (peach). Follow each breakpoint as designed.

**6. Testimonial + Stats:** column, **gap 60** between quote block and stats.
- Quote 20/32 600, name 16/26 700, role 14/24. Avatar 48px. Same paddings (quote pt 16, author pt 32).
- Stats: **one row of 3 equal columns** (flex-1 each, ~121px), **no left border**. Number 40/44 `primary`, label 14/24 `text-muted` (pt 4; labels wrap to 2 lines).

**7. People:** padding 60 20, gap 32 between the text block and the collage.
- Text block gap 24: (eyebrow + H3 32/36, gap 8) → paragraph 16/26 → button "Explore teachers and students" (secondary, **268px wide, not full width**).
- ⚠️ The paragraph color on mobile is `#171B2C` (ink), while desktop uses `#656770`. Follow each breakpoint as designed.
- Collage 362×310, `justify-between`, gap 16, over a **330px** circle `primary-soft` centered. Same **4 columns / 10 photos** in the same order as desktop, smaller, with an **8px** gap:
  - col1 (w 94, pt 48, align end): 72×96, 94×129
  - col2 (w 72): 72×106, 72×107.5, 72×80
  - col3 (w 72): 72×85.5, 72×86, 72×96
  - col4 (w 88, centered): 88×127.5, 72×82.5
  - Photo radius **5**, shadow `0 4px 6px -1px rgba(0,0,0,0.1), 0 0 4px rgba(0,0,0,0.07)`. These are already baked into the 4 column images, so just scale them.

**8. Contact:** padding 60 20, column, **gap 40** (info, then form).
- Info gap 32; header gap 16 (eyebrow, H3 32/36, description **14/24** `text`).
- Contact items: padding **16** (desktop 20), gap 16, text gap 2.
- Form card full width: padding **24px 20px**, gap 24, same border/shadow/radius. Inputs h48, **textarea h100** (desktop 120), submit full width h52.
- ⚠️ The mobile design shows label **"E-mail"** and placeholder **"seuemail@exemplo.com"** (Portuguese). Treat this as a design slip and use the desktop English copy ("Email", "youremail@example.com").

**9. Final CTA:** padding 60 0, inner px 20, centered.
- Avatars (same 40px). H2 **36/40** centered (pt 32, 2 lines) → subtitle 16/26 (pt 16) → buttons **stacked full width** (pt 40, gap 12, h52).
- **No decorative shapes on mobile.** The mobile frame has none, so hide all decorations below the desktop breakpoint (`hidden lg:block`).

**10. Footer:** padding 60 20 20.
- Brand (logo + tagline 14/24, pt 12). **40px** gap, then a row with **EXPLORE | COMPANY** side by side (2 equal columns, gap 40). **SUPPORT** goes below, full width (40px gap).
- Bottom: pt 48, border-top `#656770`, pt 24, copyright **centered**, color **`#FFFFFF`** (desktop `#E7E7EC` and left-aligned).

### Content differences between mobile and desktop
- How it works, step 2 text: mobile says "…created by professionals who **actually** use these skills." and desktop says "…who use these skills." Use one text for both (suggestion: the desktop copy) and mention it in the README.
- Ignore the hidden Roboto layers here too, as on desktop.

### Tablet (not in Figma, my decision)
- Breakpoints: **mobile < 768px** (mobile layout) · **tablet 768–1023px** · **desktop ≥ 1024px** (desktop layout, fluid up to the 1120 container).
- Tablet suggestions: mobile header with the hamburger menu, 32–40px side padding, section padding 80px, desktop type scale stepped down (use the mobile tokens), categories in a **2×2 grid**, how-it-works steps stacked or in 3 columns without the line, stats in a row, hero and featured stacked like mobile but with the image capped at ~560px and centered, contact info and form stacked, footer brand + 3 columns in one row.

## Interactions

From the design (the mobile header has a component named **"Button - Toggle menu"**):
- **Mobile menu (required):** the hamburger toggles a panel below the header with the nav links (Courses, For Teams, Community, About) + "Log in" + "Start learning" (full width). The panel itself is **not designed**, so use the same styles (cream bg, `body-1` links, primary button) and document it in the README. Accessibility: `aria-expanded`, `aria-controls`, the icon changes to ✕, close on Esc / link click / resize to desktop, focus management, and lock body scroll while open.
- **Contact form:** labels, required fields, email validation, mock submit with loading → success state, and errors announced with `aria-live`.
- **Nav and CTA links:** anchor-scroll to sections (`#categories`, `#how-it-works`, `#contact`…). Smooth scroll only when `prefers-reduced-motion: no-preference`.
- **Hover/focus states** (not in the design; keep them subtle and document them): buttons darken slightly, category cards get a border `primary` + small lift, links underline or turn `primary`. Every hover has a matching `focus-visible` ring.
- Check the Prototype (▶) for anything else. If it shows nothing more, these defaults cover "the interactions shown in the design".

## Open questions / decisions for the README
- Repeated "STEP 01" labels on desktop → used 01/02/03 (the mobile design confirms this).
- Content containers of 1136px in two desktop sections → normalized to 1120px.
- People section copy is lorem ipsum in the design → kept as is.
- Mobile menu panel is not designed → built it from the existing tokens.
- Mobile contact form had Portuguese copy ("E-mail", "seuemail@exemplo.com") → used the English desktop copy.
- Step 2 text differs between mobile and desktop → unified.
- Small per-breakpoint color differences (step 2 icon bg, People paragraph color, copyright color) → followed each breakpoint as designed.
- Tablet layout is not in Figma → my own decision (breakpoints above).
- Link destinations: anchors only where the link name matches a section (`Courses`, `Categories` and the "Explore…" CTAs → `#categories`; "See how it works" → `#how-it-works`; `Contact` → `#contact`; "Start learning" → `#featured-course`). Everything else (View course, For Teams, Community, About, Instructors, Log in, Careers, Journal, Help Center, Terms, Privacy) is `href="#"` because those pages or sections do not exist in the design.
- People collage exported as 4 column images; mobile collage ~34px taller than Figma due to image aspect ratio. On desktop the section is ~10px taller than Figma because of the shadow baked into the PNGs (accepted).
