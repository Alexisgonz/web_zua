import type { Campaign } from './schema';
export default <Campaign>{
  slug:'default',
  name:'Genérico',
  start:'2000-01-01',
  end:'2099-12-31',
  theme:{
    gradientFrom:'from-pink-100',
    gradientVia:'via-purple-50',
    gradientTo:'to-rose-100',
    emoji:'✨',
    floating:'none'
  },
  hero:{
    id:'hero',
    title:'Glow Up Natural',
    subtitle:'Cacao amazónico para tu rutina',
    description:'Productos naturales para piel y bienestar.',
    feature:{ icon:'🌸', title:'Skincare Natural', description:'Ingredientes 100% puros.' },
    images:[
      { src:'/img/default/01.webp', alt:'Cacao', title:'Cacao Glow', description:'Piel radiante.' },
      { src:'/img/default/02.webp', alt:'Self care', title:'Self Care Vibes', description:'Aceites para tu rutina.' },
      { src:'/img/default/03.webp', alt:'Granos', title:'Pure & Clean', description:'Calidad premium.' },
    ],
    slider:{ intervalMs:5000, aspect:'4/3' },
    ctas:[
      { text:'Shop Now', href:'/tienda', variant:'primary' },
      { text:'Conoce más', href:'/fihizu', variant:'secondary' },
    ]
  }
};