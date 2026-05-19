/**
 * Central registry of outbound + internal links.
 * Anything tagged `// PLACEHOLDER:` is a stand-in awaiting a real URL.
 * Update one entry here and every CTA across the site follows.
 */
export const LINKS = {
  downloadMac: 'https://FPOdownloadrolo.com',   // PLACEHOLDER: real .dmg / installer URL
  repo: 'https://FPOdownloadrolo.com',          // PLACEHOLDER: public github repo URL
  techProcess: '/tech+process',
  faq: '/faq',
  contact: '/contact',
  github: 'https://github.com/larawashington',
  linkedin: 'https://www.linkedin.com/in/lara-washington/',
  email: 'mailto:tbc@example.com',              // PLACEHOLDER: real contact email
} as const;

export type LinkKey = keyof typeof LINKS;
