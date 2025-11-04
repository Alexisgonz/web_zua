import type { Campaign } from './schema';
export default <Campaign>{
  slug: 'jan-nuevo-mes-2026',
  name: 'Nuevo Mes',
  start: '2026-01-07',
  end:   '2026-01-31',
  theme: {
    gradientFrom: 'from-pink-100',
    gradientVia:  'via-purple-50',
    gradientTo:   'to-rose-100',
    emoji:'✨',
    floating:'confetti'
  },
  hero: {
    id:'hero',
    title:'Comienza radiante',
    subtitle:'Rutina simple, piel feliz',
    description:'Lanzamos aromas frescos para estrenar año.',
    feature:{ icon:'🌿', title:'Natural 100%', description:'Cacao amazónico y aceites esenciales.' },
    images:[
      { src:'/img/jan/01.webp', alt:'Serum', title:'Serum Vital', description:'Brillo y suavidad.' },
      { src:'/img/jan/02.webp', alt:'Bálsamo', title:'Bálsamo', description:'Labios felices.' },
      { src:'/img/jan/03.webp', alt:'Cacao', title:'Origen', description:'Co-origen colombiano.' },
    ],
    slider:{ intervalMs:5000, aspect:'4/3' },
    ctas:[
      { text:'Comprar ahora', href:'/tienda?nuevo=2026', variant:'primary' },
      { text:'Saber más', href:'/chocizone', variant:'secondary' },
    ]
  }
};