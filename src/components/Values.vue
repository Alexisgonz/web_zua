<template>
  <section 
    :id="sectionData.section?.id || 'nosotros'" 
    class="py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8" 
    :aria-labelledby="`${sectionData.section?.id || 'nosotros'}-title`"
  >
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-8 md:mb-12 lg:mb-16">
        <h2 
          :id="`${sectionData.section?.id || 'nosotros'}-title`" 
          class="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-forest mb-4 md:mb-6"
        >
          {{ sectionData.section?.title || 'Nuestro Toque Distintivo' }}
        </h2>
        <p 
          v-if="sectionData.section?.subtitle" 
          class="text-lg md:text-xl text-gray-600 mb-3 md:mb-4"
        >
          {{ sectionData.section.subtitle }}
        </p>
        <p 
          v-if="sectionData.section?.description" 
          class="text-base md:text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed px-4 md:px-0"
        >
          {{ sectionData.section.description }}
        </p>
      </div>
      
      <!-- Values Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12 lg:mb-16">
        <div 
          v-for="(value, index) in sectionData.values" 
          :key="value.id || index"
          class="bg-white p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-card hover:-translate-y-2 md:hover:-translate-y-3 hover:shadow-card-hover transition-all duration-300 border-2 border-transparent hover:border-forest animate-fade-up group"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <!-- Icon -->
          <div class="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-forest to-forest-light rounded-full flex items-center justify-center text-2xl md:text-4xl mb-4 md:mb-6 shadow-inset group-hover:scale-105 transition-transform duration-300">
            {{ value.icon }}
          </div>
          
          <!-- Content -->
          <h3 class="text-xl md:text-2xl font-bold text-forest mb-3 md:mb-4">{{ value.title }}</h3>
          <p class="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">{{ value.description }}</p>
          
          <!-- Features List (if available) -->
          <div v-if="value.features && value.features.length > 0" class="mb-4 md:mb-6">
            <h4 class="text-xs md:text-sm font-semibold text-forest mb-2 md:mb-3 uppercase tracking-wider">Características:</h4>
            <ul class="space-y-1 md:space-y-2">
              <li 
                v-for="feature in value.features" 
                :key="feature"
                class="text-xs md:text-sm text-gray-600 flex items-start"
              >
                <span class="text-forest mr-2 mt-1">•</span>
                {{ feature }}
              </li>
            </ul>
          </div>
          
          <!-- Metrics (if available) -->
          <div v-if="value.metrics" class="grid grid-cols-1 gap-1 md:gap-2 pt-3 md:pt-4 border-t border-gray-100">
            <div 
              v-for="(metricValue, metricKey) in value.metrics" 
              :key="metricKey"
              class="flex justify-between items-center"
            >
              <span class="text-xs text-gray-500 capitalize">{{ formatMetricKey(metricKey) }}:</span>
              <span class="text-xs font-semibold text-forest">{{ metricValue }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Props para recibir los datos desde el padre
const props = defineProps({
  data: {
    type: Object,
    default: () => null
  }
})

// Estado reactivo para los datos de la sección
const sectionData = ref({
  section: {},
  values: [],
  cta: null
})

// Función para formatear las claves de métricas
const formatMetricKey = (key) => {
  const keyMap = {
    communities: 'Comunidades',
    farmers: 'Productores',
    impact: 'Impacto',
    products: 'Productos',
    patents: 'Patentes',
    certifications: 'Certificaciones',
    traceability: 'Trazabilidad',
    quality: 'Calidad',
    safety: 'Seguridad',
    partners: 'Socios',
    projects: 'Proyectos',
    countries: 'Países'
  }
  return keyMap[key] || key
}

// Cargar contenido al montar el componente
onMounted(async () => {
  try {
    if (props.data) {
      // Si se pasan datos como props, usarlos
      sectionData.value = props.data
    } else {
      // Cargar desde el archivo JSON
      const { getValues } = await import('../lib/cms.ts')
      const data = await getValues()
      sectionData.value = data
    }
  } catch (error) {
    console.error('Error loading values data:', error)
    // Fallback data en caso de error
    sectionData.value = {
      section: {
        id: 'nosotros',
        title: 'Nuestro Toque Distintivo',
        subtitle: 'Lo que nos hace únicos',
        description: 'Cuatro pilares que definen nuestra propuesta de valor.'
      },
      values: [
        {
          id: 'beneficio-colectivo',
          icon: '🤝',
          title: 'Beneficio Colectivo',
          description: 'Trabajamos de la mano con comunidades locales para generar impacto positivo.'
        },
        {
          id: 'innovacion',
          icon: '💡',
          title: 'Innovación',
          description: 'Desarrollamos productos únicos aprovechando la riqueza del bosque.'
        },
        {
          id: 'seguridad',
          icon: '🛡️',
          title: 'Seguridad e Inocuidad',
          description: 'Operamos con los más altos estándares de calidad y seguridad alimentaria.'
        },
        {
          id: 'alianzas',
          icon: '🌍',
          title: 'Alianzas Estratégicas',
          description: 'Colaboramos con organizaciones líderes en innovación y sostenibilidad.'
        }
      ],
      cta: null
    }
  }
})
</script>