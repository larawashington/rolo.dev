/**
 * Central registry of outbound + internal links.
 * Anything tagged `// PLACEHOLDER:` is a stand-in awaiting a real URL.
 * Update one entry here and every CTA across the site follows.
 */
export const LINKS = {
  downloadMac: 'https://github.com/larawashington/Project-Rolo/releases/latest',
  repo: 'https://github.com/larawashington/Project-Rolo',
  systemDesign: '/system-design',
  faq: '/faq',
  contact: '/contact',
  github: 'https://github.com/larawashington',
  linkedin: 'https://www.linkedin.com/in/lara-washington/',
  email: 'mailto:hello.project.rolo@gmail.com',
} as const;

export type LinkKey = keyof typeof LINKS;
