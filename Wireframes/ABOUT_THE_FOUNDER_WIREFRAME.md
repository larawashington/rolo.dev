# About the Founder — Research, Outline & Wireframe

> A planning doc for the `/about-the-founder` page. Mirrors the structure of `WIREFRAME.md`. Read top-to-bottom: research → recommended outline → section-by-section wireframe → visual notes → cuts.

---

## 0. Research — what actually belongs on a founder page

A founder page for an indie / open-source project does three jobs:

1. **Earns trust without a CV.** Visitors landing here are deciding: *is this person legit enough that I want their software on my machine?* They don't need a résumé; they need a few credible signals (background, prior work, where they show up online) delivered casually.
2. **Tells the "why."** The single most repeated insight across great indie founder pages (Pieter Levels, Tracy Young, Gumroad's Sahil, the Tamagotchi origin write-ups Lara already cited as references) is that the **origin story** is what converts cynics into supporters. Why does Rolo exist? What were you doing the day the idea landed? The more specific, the better — vague mission statements read as marketing.
3. **Doubles down on brand.** This page is *the* moment to show that the whimsy is real, not a coat of paint. The voice should sound like Lara, not like a company. Visitors who like Rolo's vibe will trust the project more if the founder page sounds like the same person who wrote the homepage's "Rolo is NOT an AI assistant" line.

### What to include (recommended, in priority order)

- [x] **Identity + role** — Name, what you do, one-line positioning. ("I'm Lara — designer / engineer / cat-tamer / the human behind Rolo.")
- [x] **The origin story** — Where the idea came from. Be specific: a moment, a frustration, a sketch, an afternoon. Reject the LinkedIn-essay register.
- [x] **The "why this exists" manifesto** — 3–5 beliefs that shape Rolo. (Anti-AI-tool. Pro-companionship. Local-first / privacy. Open source. Joy as a real metric.) These mirror the homepage's checklist and reinforce it.
- [x] **Background, but tight** — Where you've worked / studied / built before, in 2–3 sentences max. One pull-out artefact (a past project, a school, an interesting credential) does more work than a list.
- [x] **What you're working on now** — Current focus + a tiny hint at what's next for Rolo. Shows momentum, invites people to follow along.
- [x] **A human moment** — Photo (or, on-brand: a pixel-art self-portrait), a quirk, a favourite snack, the song you were listening to while making Rolo. The Tamagotchi reference site lives or dies by this kind of detail.
- [x] **How to reach you** — GitHub, LinkedIn, email, anywhere else you live online. One paragraph + a button. Make it warm: *"Say hi — I read everything."*

### What to *leave off*

- ❌ A traditional bio / CV / "years of experience" stat line. Reads corporate; clashes with the rest of the site.
- ❌ Press logos / "as seen in." Not the vibe.
- ❌ A long mission statement separate from the manifesto bullets — redundant.
- ❌ A team page. There is no team. Calling yourself a "team of one" is a tired joke; just be a person.
- ❌ Pricing, roadmap, or product info that belongs elsewhere on the site.

### Tone targets (3 adjectives + a do-not)

- **Warm.** First-person, contractions, real sentences.
- **Specific.** Concrete nouns over abstractions. "A rainy Tuesday in Hackney" beats "during the pandemic."
- **Playful but grounded.** It's still a real founder page; the whimsy lives in the details, not the structure.
- **Do not:** sound like a press release, an investor deck, or a Twitter bio.

---

## 1. Recommended page outline (top to bottom)

1. **Hero / lede** — Name, what you do, one-line positioning. Pixel-art self-portrait or polaroid photo.
2. **Why Rolo exists** — The origin story. Long-form, two or three paragraphs.
3. **What I believe** — Manifesto checklist (4–5 bullets), in the same printer's-bullet style as the homepage `.checklist`.
4. **A little about me** — Tight background paragraph + a "stats panel" Tamagotchi-style readout (playful, on-brand).
5. **What I'm working on now** — Current focus, a hint at what's next.
6. **Say hi** — Socials, email, repo, and a soft CTA. Closes the page warm. 
7. *(Optional)* — A signed-off "— Lara" with a tiny pixel sprite, like the end of a letter.

This sequence walks a visitor from *who is this person* → *why did they make this* → *what do they believe* → *who are they as a human* → *what's next* → *how do I reach them*. Each section earns the next.

---

## 2. Section-by-section wireframe

> Same conventions as `WIREFRAME.md`. Fill in any blanks; everything else is a concrete recommendation.

### Section 1 — Hero / Lede
**Purpose:** Introduce Lara. Make it instantly feel like a real person, not a company.

**Copy / content (draft — edit freely):**
- **Eyebrow (small caps):** ABOUT THE FOUNDER
- **Headline:** Hi, I'm Lara.
- **Subhead:** Designer, engineer, and the human behind Rolo.
- **Lede paragraph (1–2 sentences):**
  *I make small, warm software. Rolo is the one currently living on my screen — and, hopefully soon, on yours.*

**CTA(s) — label + destination:**
- (none in hero — the page is the CTA; the close-out section carries the real ask)

**Visual / media notes:**
- Primary: **pixel-art self-portrait** in Rolo's style. (Strongest brand fit. Sidesteps needing a polished headshot.)
- Alternative: a real polaroid-style photo, slightly rotated, with a hand-lettered caption underneath ("Hackney, 2026" or wherever / whenever).
- Sit it on the right of the headline at desktop, stacked above at mobile — mirrors the homepage hero composition.
- Add the same pixel-dash ground line under the portrait that the homepage hero uses. Visual rhyme = brand.

**Anything else:**
- Headline should use `pixel-h--xl` like other page heroes.
- No CTA buttons in the hero — keeps the page reading like a letter, not a landing page.

---

### Section 2 — Why Rolo exists
**Purpose:** The origin story. The single most important section on this page. This is what people screenshot and share.

**Copy / content (prompts to draft against — answer 2–3 of these, not all):**
- What were you doing the day you first sketched Rolo? Where were you sitting?
- What were you using / building / suffering through that made you want a *companion* instead of another tool?
- Was there a specific AI product, demo, or trend that made you say "no, the opposite of that"?
- Did Rolo start as something else — a side project, a school assignment, a different character?
- What's the smallest, weirdest, most specific thing about why this exists? (E.g. *"I missed my Tamagotchi"* is gold. *"I wanted to humanise technology"* is not.)

**Format:**
- 2–3 short paragraphs. Body copy size, not lede size.
- One pull-quote breakout in the middle, set in pixel-display type — the section's emotional anchor. (E.g. *"I didn't want an assistant. I wanted a friend on my screen."*)
- Dashed rule above and below the pull-quote, matching the `--pixel-dash` recipe already used across the site.

**Visual / media notes:**
- Optional: an inline early sketch / screenshot / "first version of Rolo" image. Pixel-rough, intentional. Shows the work.

**Anything else:**
- This section is allowed to be the longest on the page. Don't compress it for the sake of consistency.

---

### Section 3 — What I believe
**Purpose:** Manifesto. Reinforces the homepage's "what Rolo is / isn't" without repeating it word-for-word.

**Copy / content (draft — edit freely):**
Headline: **What I believe**

Checklist (use the same pixel-check / pixel-cross marks as the homepage `.checklist` — visual rhyme):
- ✓ Software should keep you company, not measure you.
- ✓ Local-first and open source aren't features — they're table stakes for anything that lives on your machine.
- ✓ Small, joyful tools beat big, ambitious platforms.
- ✓ The best interfaces have a heartbeat. Personality is engineering.
- ✗ "AI assistant" is a poverty of imagination. Computers can be characters, not just butlers.

**CTA(s):** none — the section is the message.

**Visual / media notes:**
- Reuse the homepage `.check` component verbatim. Don't reinvent.
- 4–5 items max. Any more and they lose weight.

**Anything else:**
- Keep each line short — under 15 words ideally. They should read like commandments, not paragraphs.

---

### Section 4 — A little about me
**Purpose:** Credibility + humanity, fast.

**Copy / content (draft scaffold — fill in):**

Left column — **prose, ~3 sentences:**
*Before Rolo I was [role / where]. I studied [subject] at [school], and I've spent the last [N] years building [type of thing] — most recently [most notable past project, if any]. The throughline of everything I make: [one-line philosophy — e.g. "small things that feel alive."]*

Right column — **"Founder Status" panel** (Tamagotchi-style readout, on-brand pun on Rolo's own status pillars):
- 🍵 **Fuel:** [favourite drink — e.g. matcha lattes]
- 🐈 **Companions:** [pets / housemates / "one extremely loud cat"]
- 🎧 **Now playing:** [whatever song / album]
- 📍 **Location:** [city]
- 🛠 **Currently building:** Rolo
- 💤 **Last dream:** [a real or invented dream, kept short and weird]

**Visual / media notes:**
- The "Founder Status" panel should sit in a `WindowFrame` component (already in the codebase, used on the homepage carousel) — gives it that desktop-app feel and ties back to Rolo's UI vocabulary.
- Two-column at desktop, stack at mobile.

**Anything else:**
- The status panel is the secret weapon of this page. It does *more work for the brand* than a paragraph of bio ever could.

---

### Section 5 — What I'm working on now
**Purpose:** Show momentum. Invite people to follow along.

**Copy / content (draft):**
Headline: **What I'm working on now**

Short paragraph (2–3 sentences):
*Right now I'm [current focus — e.g. teaching Rolo to dream more vividly, improving his memory recall, porting him to Windows]. Next up: [one concrete next thing]. After that, who knows — Rolo will probably have opinions.*

**CTA(s):**
- Soft link: *"Follow along on GitHub →"* → repo
- Soft link: *"Read the tech deep-dive →"* → `/tech+process`

**Visual / media notes:**
- Could include a small `Rolo_idle.gif` or `rolo_sleep.gif` in the margin — quiet visual texture, not a hero moment.

**Anything else:**
- Keep this section *short*. It's a breath between the manifesto and the close.

---

### Section 6 — Say hi
**Purpose:** Soft, warm CTA. Closes the page like the end of a letter.

**Copy / content (draft):**
Headline: **Say hi**

Paragraph:
*I read everything. If Rolo made you smile, if something on this site broke, if you just want to send me a picture of your cat — my inbox is open.*

**Buttons / links:**
- Primary: **EMAIL ME** → `mailto:[email]`
- Ghost: **GITHUB →** → existing GitHub link
- Ghost: **LINKEDIN →** → existing LinkedIn link

**Visual / media notes:**
- Centered, ceremonial — same composition as the homepage finale section.
- Optional: a tiny pixel sprite of Rolo waving, sat just under the headline.
- Optional sign-off below the buttons: `— Lara`, in a hand-lettered or display font.

**Anything else:**
- This is the *only* section with hard CTA buttons. Don't dilute by adding CTAs earlier.

---

## 3. Visual system notes

This page should feel like a *letter* more than a *landing page*. Practical implications:

- **Heading sizes:** Hero gets `pixel-h--xl`. Every other section gets `pixel-h--lg` or `pixel-h--md`. No competing H1s.
- **Section rhythm:** Alternate `--bg` and `--paper` backgrounds the way the homepage does (`hero` on `--bg`, `--what` on `--paper`, etc.) so the page breathes without needing chunky dividers.
- **Reuse, don't reinvent:** `WindowFrame` for the status panel, `.checklist` + pixel check/cross marks for the manifesto, the existing `--pixel-dash` ground line under the portrait. Every reused component reinforces brand.
- **Pull-quote treatment:** Use the project's display font, generously leaded, with `--pixel-dash` rules above and below. Don't introduce a new quote component.
- **Photos / portraits:** If using a real photo, render it slightly desaturated and within a 2px ink border (polaroid feel) — never edge-to-edge.
- **Max content width:** Match the homepage `.what__head` / `.checklist` widths so prose sections don't run as wide column lines. ~62rem cap.

---

## 4. Stuff considered and cut (and why)

- **A timeline of "the making of Rolo."** Tempting, but reads as a portfolio piece, not a founder page. The origin section already handles the story. Save the timeline for a future blog post.
- **Press / appearances logos.** None apply, and adding them would feel desperate. Leave the white space.
- **"Hire me / available for work" line.** Wrong page for it. If relevant, it lives on a separate `/work` or `/cv` page, or in the LinkedIn link — not here.
- **A long "values" section separate from the manifesto.** Same content twice. The manifesto bullets *are* the values.
- **Newsletter signup.** Worth it eventually; not for v1. Adds form complexity for a page whose whole point is intimacy. The email CTA already invites direct contact.

---

## 5. Open questions for Lara to answer before drafting copy

1. Origin story — what's the *specific* moment Rolo started? (The more specific, the better the section.)
2. One past project / role you want to namecheck, if any? (Optional, but adds credibility cheaply.)
3. Pixel-art self-portrait, real photo, or both?
4. Are you comfortable putting an email address on the page, or would you prefer a contact form (already exists at `/contact`)?
5. Any belief / line you'd want in the manifesto that isn't in the draft above?
6. The "Founder Status" panel — opt in or cut? (Recommended: opt in. It's the most on-brand element on the page.)
