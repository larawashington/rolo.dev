# Tech + Process — Wireframe

> Planning doc for the `/tech+process` page. Distilled from `Desktop-Pet--faqs/plans/rolo-system-architecture.md` and `Desktop-Pet/README.public.draft.md`. Mirrors the structure of `WIREFRAME.md` and `ABOUT_THE_FOUNDER_WIREFRAME.md`.

---

## 0. Premise — what this page is for

The homepage answers *what does Rolo do?*. This page answers *how does he actually work?* — for the curious developer, the careful downloader who wants to know what's running on their machine, and the reader who came for the personality and stayed for the engineering.

**Job of the page:**
1. **Explain the brain.** Three pillars: voice (the fine-tune), memory + planning (Dyna-Q), and senses (tools + perception). Each one gets a section.
2. **Earn trust through specificity.** Naming the real algorithms (Dyna-Q, BM25 + embeddings, LoRA fine-tuning, Reciprocal Rank Fusion) signals that the system is built thoughtfully, not vibes-coded.
3. **Stay readable.** Technical terms are fine — but every one of them lands inside a plain-English sentence that a non-technical reader can follow.

**Voice rules:**
- Use the real names. *Dyna-Q*, *LoRA*, *BM25* — but always define them in the same breath.
- Lead with the *why*. Every decision had a constraint behind it; the constraint is more interesting than the decision.
- No code, no file paths, no module names. Concepts, not implementation.
- Short sentences. Whitespace. Each idea gets room to land.

---

## 1. Recommended page outline (top to bottom)

1. **Hero / lede** — Frame the page: Rolo's brain, three pillars, runs on your machine.
2. **The tech stack** — A scannable readout of what's actually under the hood.
3. **Two loops, one creature** — Dyna-Q as Rolo's spine. The real-time loop and the dreaming loop.
4. **Voice — the fine-tune** — Why Gemma 3 4B, why LoRA, how the dataset was built.
5. **Senses — the tool layer + perception** — How Rolo decides what to look up before he speaks.
6. **Memory — the vault** — Markdown wiki, hybrid search, atomic + reversible writes.
7. **Privacy & what touches the internet** — Trust-builder. Defaults are fully local.
8. **Close-out CTA** — Read the code, read the deep dives.

Order matters: the stack readout grounds the reader, then we move outward from spine (Dyna-Q) to voice → senses → memory → privacy. Each section earns the next.

---

## 2. Section-by-section wireframe

### Section 1 — Hero / Lede
**Purpose:** Set the frame. One paragraph that tells the reader what they're about to read and why it's worth their time.

**Copy / content (draft):**
- **Eyebrow (small caps):** TECH + PROCESS
- **Headline:** How Rolo thinks.
- **Subhead:** A walkthrough of the architecture, the algorithms, and the decisions behind them.
- **Lede paragraph (2–3 sentences):**
  *Rolo is two loops in conversation. One perceives, feels, and speaks. The other dreams — compressing the day's experiences into long-term memory while you're idle. Everything runs locally on your machine; your data never leaves the room.*

**CTA(s):** none in hero — this page is a read, not a funnel.

**Visual / media notes:**
- Optional: the architecture diagram from `rolo-system-architecture.md §2`, redrawn in pixel-art style. (Hero-sized, but secondary to the headline.)
- Alternative: the `rolo-how-it-works.png` already used on the homepage, scaled up.

**Anything else:**
- Use `pixel-h--xl` to match other page heroes.
- Same dashed ground line as homepage hero — visual rhyme.

---

### Section 2 — The tech stack
**Purpose:** Quick-scan readout. Lets a technical reader confirm the stack in 5 seconds; gives a non-technical reader a glimpse of the moving parts.

**Copy / content (draft):**
Headline: **What's under the hood**

Two-column readout (Tamagotchi "status panel" treatment — `WindowFrame` component, on-brand with the founder page):

- 🧠 **Language model:** Gemma 3 4B Instruct + Rolo LoRA (fine-tuned)
- ⚙️ **Runtime:** Ollama (local), with optional Anthropic / OpenAI / Gemini cloud brains
- 🖥 **App shell:** Tauri 2 (Rust) + React 19 + TypeScript
- 📚 **Memory:** markdown vault + BM25 lexical index + nomic-embed vector index
- 👁 **Perception:** macOS native (CoreGraphics, file watchers)
- 🎨 **Sprites:** hand-drawn 64×64 pixel art
- 🔒 **Privacy:** local-first by default; no telemetry, no cloud sync

**Visual / media notes:**
- Wrap in `WindowFrame` to read as a desktop-app readout.
- Use small pixel-art icons where helpful, plain text otherwise.

**Anything else:**
- This is the only "feature list" on the page. Keep it tight.

---

### Section 3 — Two loops, one creature (Dyna-Q)
**Purpose:** Explain the spine of Rolo's mind in non-technical terms — and earn the credibility of naming the algorithm.

**Copy / content (draft):**
Headline: **Two loops, one creature**
Eyebrow: **THE DYNA-Q SPINE**

Opening paragraph:
*Rolo's mind is built on a classic reinforcement learning idea called* **Dyna-Q** *— an agent that learns both from doing things and from "thinking about" what it's already done. In Rolo, that splits into two loops in conversation with each other.*

Two-column comparison (or stacked at mobile):

**The real-time loop**
*Perceives, feels, speaks, and remembers.*
While you're using your computer, Rolo is reading the room. He tracks his own mood (hunger, energy, social battery, happiness), notices what you're doing (new files, app switches, idle time), logs every meaningful interaction to a journal, and decides — turn by turn — what to say.

**The dreaming loop**
*Compresses raw experience into long-term memory.*
When you're idle and the laptop isn't dying, Rolo dreams. He reads back the day's journal, asks his own language model to propose updates to his memory wiki (new facts about you, refined personality traits, compressed episodes), and writes them down. The next time you ask "remember when…?" — that's where the answer comes from.

**Why this matters (pull-quote treatment):**
> "The real-time loop writes raw events. The dreaming loop reads them, compresses them, and writes them back. That feedback cycle is what makes Rolo feel like he's becoming someone over time — rather than amnesic between sessions."

**Visual / media notes:**
- Inline diagram: a simplified two-loop schematic. Boxes for *real-time* and *dreaming*, arrows showing the experience log feeding into one and the vault feeding back out.
- Dashed rule above and below the pull-quote.

**Anything else:**
- Don't define every Dyna-Q term. Reader doesn't need *environment / policy / world-model* — they need *real-time loop / dreaming loop / memory / mood*.

---

### Section 4 — Voice (the fine-tune)
**Purpose:** Explain how Rolo got his voice without dragging the reader through hyperparameters.

**Copy / content (draft):**
Headline: **Voice — teaching a small model to sound like Rolo**
Eyebrow: **THE SUPERVISED FINE-TUNE**

Opening paragraph:
*The vault tells Rolo* what *to talk about. The fine-tune teaches him* how *to talk. We started with Google's Gemma 3 4B — a small open-source language model — and trained an adapter on top of it called a* **LoRA** *(low-rank adaptation). When the adapter is loaded, Rolo's voice comes out of the same model that would otherwise sound like a generic assistant.*

**The pipeline (5 steps, each ~1 sentence):**

1. **Character Bible.** A canonical document — voice rules, reaction palette, refusal stance, ~20 hand-written exemplars — that anchors every downstream prompt.
2. **Gold Seed (~200 examples).** Lara hand-reviews scenarios across greetings, dismissal, sass, food, jailbreaks, mood-conditioned replies. Each one chosen, not defaulted.
3. **Distillation (~3–5k examples).** Claude Opus, prompted with the Character Bible and the gold examples, generates a much larger synthetic dataset — with diversity guards on sentence openers, length, and tone.
4. **Filter & format.** A second judging pass drops anything off-character or off-length. The survivors get formatted into Gemma 3's chat template.
5. **Train on a laptop.** LoRA training runs on an M3 MacBook Air via MLX in about two hours. The result is a ~3 GB quantized model ready to drop into Ollama.

**A pull-out:**
> "Voice is in the weights; context is in the prompt. The fine-tune doesn't memorise facts — the vault does that. The fine-tune only teaches cadence, attitude, and how Rolo reacts."

**Why no DPO?** (small callout, 2 sentences)
*The original plan included a second alignment stage (DPO — direct preference optimisation). It got cut. SFT alone, with a high-diversity dataset and a strong character bible, hit the bar — DPO doubled the pipeline for a gain we couldn't measure reliably.*

**Visual / media notes:**
- Optional: a horizontal 5-step process diagram, pixel-art arrows between stages.
- Or: a "before vs after" speech-bubble comparison (base Gemma response vs Rolo-fine-tuned response to the same prompt).

**Anything else:**
- Resist the urge to drop in YAML hyperparameter blocks. They belong in the architecture doc, not the marketing page.

---

### Section 5 — Senses (tool calls + perception)
**Purpose:** Explain how Rolo decides what to look up before he speaks — and how he notices things without being asked.

**Copy / content (draft):**
Headline: **Senses — choosing what to look up**
Eyebrow: **THE TOOL LAYER**

Opening paragraph:
*A small local model has a small context budget. Stuffing every prompt with Rolo's full identity, mood, state, and recent memories works — but it's wasteful. So instead, Rolo gets a* **tool layer** *that lets him fetch only what each turn actually needs.*

**The constraint (one paragraph):**
*Gemma 3 has no native tool-calling. The workaround: grammar-constrained JSON envelopes for the model's "which tool?" decision, one tool per turn, and a rule-based pre-router that handles the common cases without ever waking the model up.*

**The four tools (compact list):**
- 🔍 **search_vault** — Hybrid lexical + semantic search across Rolo's memory wiki. Returns the top three relevant chunks, fused via Reciprocal Rank Fusion (a parameter-free way to combine two rankings).
- 🌡 **get_mood_state** — Rolo's current hunger / energy / social battery / happiness.
- 🪟 **get_pet_state** — Is Rolo idle, sleeping, hovered? When did you last interact?
- ⛅ **get_weather** — A live weather lookup so Rolo knows roughly what your day looks like.

**A pull-out:**
> "Tools return natural language, not JSON. Showing a small model JSON in its own context teaches it to mimic JSON in conversation — we never do that."

**Perception (sub-section, ~3 sentences):**
*Alongside the tool layer, three background watchers keep an eye on the desktop without being asked: new items in the Trash, new downloads, and the app you've switched to. Each one's status is reported as a coloured health light in Rolo's Command Center — Green, Amber, Red. That's how Rolo can occasionally drop a "I see you've been in Figma a while" without you saying anything.*

**Visual / media notes:**
- A small "tool card" grid (4 cards), each showing the tool name, a one-line description, and an example return string in quotes.
- A separate "perception" callout with the three watchers as a row of status lights.

**Anything else:**
- This is where the page rewards a careful reader — the *constraint → workaround → result* arc is the most interesting engineering story on the site.

---

### Section 6 — Memory (the vault)
**Purpose:** Explain *where* Rolo's memory lives, and why it's a folder of markdown files instead of a database.

**Copy / content (draft):**
Headline: **Memory — a wiki Rolo writes himself**
Eyebrow: **THE VAULT**

Opening paragraph:
*Rolo's long-term memory lives as a folder of markdown files on your machine — a wiki he writes himself while he dreams. Markdown is deliberate: patches are human-readable, diff-able, and reversible. If Rolo gets a fact wrong, you can open a single file and fix it. The indexes pick up the change the next time he searches.*

**Three principles (compact list):**
- **Atomic writes.** No partial files survive a crash — every change is written to a temporary file, flushed, and renamed in one step.
- **Audited.** Every memory update is logged in a SHA-chained dream journal. Nothing happens to your data invisibly.
- **Reversible.** Rolo's Command Center has a "Dream Log" tab. See what he learned. Revert what you disagree with. A revert isn't a delete — it's a signal that goes back into the next dream cycle.

**A pull-out:**
> "Markdown vault, not a database. Patches are human-readable, diff-able, reversible — Rolo's memory belongs to you."

**Visual / media notes:**
- A stylised "folder tree" mockup showing the vault's actual structure (identity / personality / user / relationships / episodes / topics).
- Optional: a screenshot of a real markdown patch in the Dream Log.

**Anything else:**
- This is the section that reassures privacy-conscious readers. Don't bury the *"you can hand-edit it"* line.

---

### Section 7 — Privacy & what touches the internet
**Purpose:** A clean, direct statement of what does and doesn't leave the machine. Builds the trust the rest of the page has been earning.

**Copy / content (draft):**
Headline: **What touches the internet**
Eyebrow: **PRIVACY BY DEFAULT**

Opening paragraph:
*By default, Rolo runs entirely on your machine. The model, the vault, the dreams, the experience log — all local.*

Two-column "✓ local / ✗ networked" list:

**On your machine (default):**
- ✓ The language model and its weights
- ✓ Your conversations
- ✓ Rolo's memory and dreams
- ✓ All inference, including dreaming

**Touches the internet (opt-in or one-time):**
- 🌐 First-run model download (~3 GB, via Ollama)
- 🌐 Weather tool (optional — disable in Command Center)
- 🌐 Cloud brain (Anthropic / OpenAI / Gemini) — only if you swap brains yourself

**Anything else:**
- Use the same `.checklist` component as the homepage manifesto. Visual rhyme.
- Keep it short. The strength is the brevity.

---

### Section 8 — Close-out
**Purpose:** Send the curious reader somewhere deeper. Send the convinced reader to the repo.

**Copy / content (draft):**
Headline: **Read the rest**

Short paragraph:
*This page is the tour. The full architecture, the fine-tune pipeline, the PRDs that drove each subsystem — all of it lives in the open-source repo. Rolo has no closed-source pieces and no hidden behaviour.*

**CTAs:**
- Primary: **EXPLORE THE FULL GITHUB REPO →** (placeholder link)
- Ghost: **MEET THE FOUNDER →** → `/about-the-founder`
- Ghost: **READ THE FAQs →** → `/faqs`

**Visual / media notes:**
- Centred, ceremonial composition — match the homepage finale.
- Optional: small pixel Rolo sprite, sleeping or waving.

**Anything else:**
- This is the only section with a hard CTA. Don't dilute by adding repo links earlier in the page.

---

## 3. Visual system notes

- **Section rhythm:** Alternate `--bg` and `--paper` backgrounds the way the homepage does. Hero on `--bg`, stack readout on `--paper`, Dyna-Q on `--bg`, fine-tune on `--paper`, and so on.
- **Headings:** Hero gets `pixel-h--xl`. Every section heading gets `pixel-h--lg`. Subheadings inside sections get `pixel-h--md`.
- **Pull-quotes:** Project display font, generously leaded, with `--pixel-dash` rules above and below. Reuse the founder-page treatment — do not introduce a new component.
- **Reuse components:** `WindowFrame` for the tech-stack readout. `.checklist` + pixel check/cross marks for the privacy section. Existing `--pixel-dash` rules between subsections.
- **Diagrams:** Pixel-art style only — no SVG arrows, no Mermaid. Hand-feel diagrams (2px ink, dashed lines for "flow") read on-brand. If a diagram needs to be polished, ship it later.
- **Max content width:** Cap prose at ~62rem (match the homepage and founder page). Wider columns kill readability.
- **No code blocks.** Anywhere. This page is the marketing layer for the architecture doc — code lives in the repo, not the tour.

---

## 4. Stuff considered and cut (and why)

- **A "how Dyna-Q works in academic terms" sidebar.** Tempting, but it serves the engineer who can already read the paper. Link Sutton & Barto in the close-out and move on.
- **A full hyperparameter dump for the fine-tune.** Belongs in the architecture doc. Putting it on this page would tank the readability for 95% of visitors.
- **A "swap your brain" how-to.** Belongs in docs or a future `/command-center` page. Mentioning the option here is enough.
- **A live demo embed.** Cool, but the homepage carries the visual demos. This page is for *understanding*, not *experiencing*.
- **Per-PRD section.** The architecture doc lists nine PRDs; this page is not the index for them. Anyone who wants that depth is one click away in the repo.

---

## 5. Open questions before drafting final copy

1. Diagrams — bespoke pixel-art illustrations, or a single hero diagram and text-only sections everywhere else?
2. The pull-quotes — pull verbatim from the architecture doc, or rewrite each one in marketing-page voice?
3. The tech-stack readout — keep it short (the version above) or expand to include the perception watchers, the dreaming compiler, etc.?
4. Privacy section — do we want the cloud-brain caveat to be a full sentence, a sub-list, or a single tooltip?
5. Close-out — link to the architecture doc itself, or only to the repo root?
