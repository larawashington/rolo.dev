
## Rolo's System Architecture. 

Every feature works dynamically and interactively to allow Rolo to perceive his environment in real-time and have memory and learn through the dreaming loop. 

/Users/larawashington/Documents/GitHub/Desktop-Pet--faqs/landing-page/architecture-at-a-glance.png 

// each section below should be an expandable section. when all hidden, only the titles show. each title is it's own box and compact. no numbers needed. clicking each expands and stays expanded unless user clickers header again- have a + and - icon on the right side. //
### Reinforcement Learning 

Rolo's system design was inspired by [Sutton-Barto's Dyna-Q](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf) architecture to allow Rolo to learn and constantly update his *world model* (represented by his *memory vault*). 

/Users/larawashington/Documents/GitHub/Desktop-Pet--faqs/landing-page/architecture-map.png

The real-time loop writes raw events. The dreaming loop reads them, compresses them into memories, and writes them back into the memory vault. The next real-time turn retrieves the compressed memory via the tool layer. This feedback cycle is how Rolo is able to learn and evolve as he gets to know you. 
### VOICE: Supervised fine-tune 

Rolo's environment and memory vault tells him **what** to talk about. The fine-tune teaches him **how** to talk. The two merge during inference where Rolo's voice is carried by trained weights and everything else is the context. 

Rolo's voice was trained on Gemma 3 4B using **LoRA** _(low-rank adaptation)_. This replaces a system prompt at inference as his character and personality is now in the model weights. 

/Users/larawashington/Documents/GitHub/Desktop-Pet--faqs/landing-page/sft-pipeline.png
### SENSE: Tools + Perception
#### Tools 
Using a small local model means a small context budget. The system prompt must be able to access everything within Rolo's environment (mood, state, perception) and memory vault without burning tokens. To solve this, I designed a **tool layer** to allow Rolo to fetch only what each turn actually needs. 

The challenge: 
Gemma 3 4B has no native tool-calling and Ollama's `tools` parameter doesn't serve the model. 
The workaround: 
Grammar-constrained JSON envelopes via Ollama's `format` parameter, **single-tool-per-turn**, and a **rule-based pre-router** that handles common inputs without calling the full model. 

/Users/larawashington/Documents/GitHub/Desktop-Pet--faqs/landing-page/v1-tools.png
*Tools return natural language, not JSON, as a small model tends to mimic the input it receives in its output.* 
#### Perception 
To compliment the tool layer, three background threads watch the desktop for: 
- **Trash** — notices new entries in `~/.Trash`,
- **Downloads** — notices new files in `~/Downloads`,
- **Foreground** — notices when you switch apps.
Each event feeds the next idle-speech prompt so Rolo can comment on your real-time activity. 
### MEMORY: Vault + Search

Rolo's long-term memory is designed as a markdown wiki in natural language so everything is human-editable. If Rolo gets something confused, you can edit a single `.md` file and the indexes pick it up on next rebuild.

/Users/larawashington/Documents/GitHub/Desktop-Pet--faqs/landing-page/vault-structure.png

#### Search 
When the tool layer calls `search_vault`, it runs a `HybridSearcher` that fuses two retrievers:

- **BM25** — keyword search loaded on startup, instant lexical match.
- **Embeddings** — semantic search via Ollama's `nomic-embed-text` loaded from disk and rebuilt during the dreaming loop when stale. 

The two returned rankings are merged via **Reciprocal Rank Fusion** and the top 3 fused chunks become the tool result. 