import type { Campaign } from './schema';
export default <Campaign>{
  slug: 'oct-halloween-2025',
  name: 'Halloween',
  start: '2025-10-01',
  end:   '2025-11-01',
  theme: {
    gradientFrom: 'from-purple-900',
    gradientVia:  'via-fuchsia-800',
    gradientTo:   'to-orange-600',
    emoji: '🦇',
    floating: 'bats'
  },
  hero: {
    id: 'hero',
    title: 'Magia de Cacao para Halloween',
    subtitle: 'Luces bajas, piel radiante ✨',
    description: 'Edición especial con notas de cacao amazónico y especias.',
    feature: { icon:'🎃', title:'Skin Glow Night', description:'Resalta en tus noches con brillo natural.' },
    images: [
      { src:'/img/halloween/01.webp', alt:'Aceite', title:'Noches de Cacao', description:'Hidratación profunda.' },
      { src:'/img/halloween/02.webp', alt:'Velas',  title:'Calidez',        description:'Aromas de vainilla y cacao.' },
      { src:'/img/halloween/03.webp', alt:'Granos', title:'Origen',         description:'Cacao amazónico 100% trazable.' },
    ],
    slider: { intervalMs: 5000, aspect: '4/3' },
    ctas: [
      { text:'Comprar edición Halloween', href:'/tienda?tag=halloween', variant:'primary' },
      { text:'Conoce la historia', href:'/chocizone', variant:'secondary' },
    ]
  },
  banners: [{ desktop:'/img/halloween/banner-xl.webp', href:'/tienda?tag=halloween' }]
};