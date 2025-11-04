import type { Campaign } from '../content/campaigns/schema';
import defaultC from '../content/campaigns/default';
import oct from '../content/campaigns/oct-halloween';
import dec from '../content/campaigns/dec-navidad';
import jan from '../content/campaigns/jan-nuevo-mes';

const all: Campaign[] = [oct, dec, jan];

function inRange(now: Date, c: Campaign) {
  const s = new Date(c.start + 'T00:00:00');
  const e = new Date(c.end   + 'T23:59:59');
  return now >= s && now <= e;
}

/** Permite preview forzando ?campaign=slug */
export function resolveCampaign(url: URL, now = new Date()): Campaign {
  const fromParam = url.searchParams.get('campaign');
  if (fromParam) return all.find(c => c.slug === fromParam) ?? defaultC;
  return all.find(c => inRange(now, c)) ?? defaultC;
}

/** Mapea Campaign -> HeroData (tu interface existente) */
export function toHeroData(c: Campaign) {
  return c.hero; // ya tiene misma forma que tu HeroData
}

/** Clases de gradiente según campaña */
export function heroGradient(c: Campaign) {
  const t = c.theme;
  return `bg-gradient-to-br ${t.gradientFrom} ${t.gradientVia} ${t.gradientTo}`;
}