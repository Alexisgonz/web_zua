import type { Campaign } from './schema';
export default <Campaign>{
  slug: 'dec-navidad-2025',
  name: 'Navidad',
  start: '2025-11-03',
  end:   '2026-01-06',
  theme: {
    gradientFrom: 'from-emerald-700',
    gradientVia:  'via-rose-500',
    gradientTo:   'to-red-500',
    emoji:'❄️',
    floating:'snow'
  },
  hero: {
    id:'hero',
    title:'Glow Up de Navidad ❄️',
    subtitle:'Regala cacao, regala naturaleza',
    description:'Packs navideños eco-friendly y trazables para cuidar tu piel con los mejores productos naturales.',
    feature:{ icon:'🎁', title:'Packs de regalo', description:'Ediciones limitadas con descuento especial.' },
    images:[
      { src:'/img/xmas/MET02082.webp', alt:'Pack Navidad SUA', title:'Bundle Navidad', description:'Lo mejor para tu piel en esta temporada.' },
      { src:'/img/xmas/MET02537.webp', alt:'Productos SUA', title:'Cacao Premium', description:'Productos premium con cacao colombiano.' },
      { src:'/img/xmas/DSC_3929-Enhanced-NR.webp', alt:'Cacao Natural', title:'Del Origen', description:'Cacao natural directo del bosque.' },
    ],
    slider:{ intervalMs:4500, aspect:'16/10' },
    ctas:[
      { text:'Ver Packs', href:'/tienda?pack=navidad', variant:'primary' },
      { text:'Conoce más', href:'/sobre-nosotros', variant:'secondary' },
    ]
  }
};
