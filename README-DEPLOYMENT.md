# SUA Frontend - Website

Website frontend para SUA, construido con Astro, Vue y Tailwind CSS.

## 🚀 Estructura del Proyecto

```text
/
├── public/                 # Assets estáticos
│   ├── img/               # Imágenes
│   └── slider_home/       # Imágenes del slider
├── src/
│   ├── assets/            # Assets del proyecto
│   ├── components/        # Componentes Vue y Astro
│   │   ├── Hero.vue      # Componente principal del hero
│   │   ├── home/         # Componentes específicos del home
│   │   └── common/       # Componentes comunes
│   ├── content/          # Contenido del CMS
│   │   └── campaigns/    # Configuración de campañas
│   ├── layouts/          # Layouts de página
│   ├── lib/              # Utilidades y funciones
│   ├── pages/            # Páginas del sitio
│   └── styles/           # Estilos globales
└── package.json
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Instala las dependencias                        |
| `pnpm dev`                | Inicia servidor de desarrollo en `localhost:4321` |
| `pnpm build`              | Construye el sitio para producción en `./dist/` |
| `pnpm preview`            | Vista previa del build localmente                |

## 🌐 Deployment en Vercel

El proyecto está configurado para desplegarse automáticamente en Vercel:

### Configuración Local
1. Clona el repositorio
2. Instala dependencias: `pnpm install`
3. Ejecuta en desarrollo: `pnpm dev`

### Configuración de Vercel
El proyecto incluye:
- `vercel.json` con configuración optimizada
- Build automático cuando se hace push a la rama `dev`
- Framework detectado automáticamente como Astro

### Variables de Entorno
No se requieren variables de entorno especiales para el deployment básico.

## 🎨 Tecnologías

- **Astro 5** - Framework principal
- **Vue 3** - Componentes interactivos  
- **Tailwind CSS** - Styling
- **PNPM** - Package manager

## 📝 Notas de Desarrollo

- Las campañas se configuran en `src/content/campaigns/`
- El hero principal está en `src/components/Hero.vue`
- Los estilos globales en `src/styles/global.css`
- Configuración de Tailwind en `tailwind.config.mjs`