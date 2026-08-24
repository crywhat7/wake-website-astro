import type { APIRoute } from 'astro';
import { SITE } from '../data/constants';

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? `${SITE.url}/`).replace(/\/?$/, '/');
  const url = (p: string) => new URL(p, base).href;

  const body = `User-agent: *
Allow: /

# Rastreadores de vista previa de enlaces.
# Si alguno de estos queda bloqueado, WhatsApp / Facebook / X comparten el
# enlace SIN imagen ni título. Nunca los cierres.
User-agent: facebookexternalhit
Allow: /

User-agent: facebookcatalog
Allow: /

User-agent: WhatsApp
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: TelegramBot
Allow: /

User-agent: Slackbot-LinkExpanding
Allow: /

User-agent: Slackbot
Allow: /

User-agent: Discordbot
Allow: /

User-agent: Pinterestbot
Allow: /

User-agent: redditbot
Allow: /

User-agent: Applebot
Allow: /

# Asistentes de IA: contexto del sitio en llms.txt
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: ${url('sitemap.xml')}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
