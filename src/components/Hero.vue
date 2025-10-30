<template>
  <section id="inicio" class="bg-gradient-to-br from-forest to-forest-light flex flex-col justify-center relative overflow-hidden min-h-screen scroll-mt-24 md:scroll-mt-32">
    <!-- Decorative circles -->
    <div class="absolute top-[-50%] right-[-10%] w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] bg-white/5 rounded-full"></div>
    <div class="absolute bottom-[-30%] left-[-5%] w-[300px] md:w-[450px] lg:w-[600px] h-[300px] md:h-[450px] lg:h-[600px] bg-black/10 rounded-full"></div>
    
    <!-- Content Container -->
    <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-28 md:pt-36 lg:pt-44 pb-8 md:pb-10 w-full relative z-10">
      <!-- Text Content -->
      <div class="text-center text-white mb-6 md:mb-8 max-w-4xl mx-auto">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 md:mb-4">
          Del Bosque a tu Bienestar
        </h1>
        <p class="text-base md:text-lg lg:text-xl mb-3 md:mb-4 text-white/90 font-light">
          Transformadores de Cacao con Propósito
        </p>
        <p class="text-sm md:text-base lg:text-base mb-4 md:mb-6 text-white/85 leading-relaxed max-w-3xl mx-auto px-4 md:px-0">
          Somos una empresa innovadora que transforma el cacao del bosque colombiano en productos extraordinarios para la alimentación y el cuidado de la piel. Con trazabilidad de origen, calidad certificable y un compromiso inquebrantable con la sostenibilidad.
        </p>
      </div>

      <!-- Slider Section -->
      <div class="relative w-full max-w-7xl mx-auto">
        <!-- Slider Container -->
        <div class="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl border-2 md:border-4 border-white/20">
          <div 
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div 
              v-for="(slide, index) in slides" 
              :key="index"
              class="min-w-full h-[300px] sm:h-[400px] md:h-[480px] lg:h-[500px] xl:h-[600px] relative"
            >
              <img 
                :src="slide.image" 
                :alt="slide.alt"
                class="w-full h-full object-cover"
              />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6 lg:p-8">
                <h3 class="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">{{ slide.title }}</h3>
                <p class="text-white/90 text-sm md:text-base">{{ slide.description }}</p>
              </div>
            </div>
          </div>

          <!-- Navigation Arrows -->
          <button 
            @click="prevSlide"
            class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-forest p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Slide anterior"
          >
            <svg class="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            @click="nextSlide"
            class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-forest p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Siguiente slide"
          >
            <svg class="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Dots Navigation -->
        <div class="flex justify-center gap-2 md:gap-3 mt-4 md:mt-6">
          <button
            v-for="(slide, index) in slides"
            :key="index"
            @click="goToSlide(index)"
            :class="[
              'transition-all duration-300',
              currentSlide === index 
                ? 'w-8 md:w-12 bg-white' 
                : 'w-2 md:w-3 bg-white/50 hover:bg-white/75'
            ]"
            class="h-2 md:h-3 rounded-full"
            :aria-label="`Ir a slide ${index + 1}`"
          ></button>
        </div>

        <!-- Trust Badges -->
        <div class="mt-8 md:mt-12 flex flex-wrap justify-center items-center gap-3 md:gap-6 lg:gap-8">
          <div class="bg-white/15 backdrop-blur-sm rounded-lg md:rounded-xl px-3 md:px-6 py-2 md:py-3 border border-white/20">
            <p class="text-white font-bold text-xs md:text-sm">🌿 100% Natural</p>
          </div>
          <div class="bg-white/15 backdrop-blur-sm rounded-lg md:rounded-xl px-3 md:px-6 py-2 md:py-3 border border-white/20">
            <p class="text-white font-bold text-xs md:text-sm">✓ Trazabilidad Total</p>
          </div>
          <div class="bg-white/15 backdrop-blur-sm rounded-lg md:rounded-xl px-3 md:px-6 py-2 md:py-3 border border-white/20">
            <p class="text-white font-bold text-xs md:text-sm">🇨🇴 Origen Colombiano</p>
          </div>
          <div class="bg-white/15 backdrop-blur-sm rounded-lg md:rounded-xl px-3 md:px-6 py-2 md:py-3 border border-white/20">
            <p class="text-white font-bold text-xs md:text-sm">♻️ Sostenible</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentSlide = ref(0);
let autoplayInterval = null;

const slides = [
  {
    image: '/slider_home/image_3 (1).png',
    alt: 'Productos de cacao SUA - Transformación artesanal',
    title: 'Transformación Artesanal',
    description: 'Calidad certificable en cada paso del proceso'
  },
  {
    image: '/slider_home/image_3 (2).png',
    alt: 'Aceites naturales y productos cosmecéuticos',
    title: 'Aceites Naturales',
    description: 'Productos cosmecéuticos del bosque colombiano'
  },
  {
    image: '/slider_home/image_3 (3).png',
    alt: 'Granos de cacao premium del bosque colombiano',
    title: 'Cacao Premium',
    description: 'Del bosque colombiano a tu bienestar'
  }
];

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

// Autoplay
const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide();
  }, 5000); // Cambia cada 5 segundos
};

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<style scoped>
/* Smooth transitions for slider */
.transition-transform {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>