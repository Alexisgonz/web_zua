export interface CampaignSlide {
  src: string; alt: string; title: string; description: string;
}
export interface CampaignCTA { text: string; href: string; variant: 'primary'|'secondary' }

export interface Campaign {
  slug: string;
  name: string;
  start: string;
  end: string;
  theme: {
    gradientFrom: string;
    gradientVia: string;
    gradientTo: string;
    emoji?: string;
    floating?: 'snow'|'bats'|'confetti'|'none';
  };
  hero: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    feature: { icon: string; title: string; description: string; };
    images: CampaignSlide[];
    slider: { intervalMs: number; aspect: string; };
    ctas: CampaignCTA[];
  };
  banners?: { desktop: string; mobile?: string; href?: string }[];
}