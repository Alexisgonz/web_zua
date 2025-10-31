<template>
  <section 
    :id="heroData.id" 
    class="min-h-screen bg-gradient-to-br from-rose-400 via-pink-300 to-emerald-400 flex flex-col justify-center relative overflow-hidden pt-24 md:pt-28"
  >
    <!-- Decorative elements más suaves y femeninos -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
    <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl"></div>
    
    <!-- Content Container -->
    <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 w-full relative z-10">
      <!-- Text Content - Más casual y cercano -->
      <div class="text-center text-white mb-12 md:mb-16 max-w-4xl mx-auto">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          {{ heroData.title }} ✨
        </h1>
        <p class="text-xl sm:text-2xl md:text-3xl mb-6 font-light drop-shadow-md">
          {{ heroData.subtitle }}
        </p>
        <p class="text-base sm:text-lg md:text-xl mb-10 text-white/95 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
          {{ heroData.description }}
        </p>
        
        <!-- CTAs más amigables -->
        <div class="flex gap-4 justify-center flex-wrap">
          <a 
            v-for="cta in heroData.ctas"
            :key="cta.text"
            :href="cta.href" 
            :class="[
              'px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300',
              cta.variant === 'primary' 
                ? 'bg-white text-rose-600 hover:bg-rose-50 hover:shadow-2xl hover:-translate-y-1' 
                : 'bg-white/20 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-rose-600 hover:shadow-2xl hover:-translate-y-1'
            ]"
          >
            {{ cta.text }}
          </a>
        </div>
      </div>

      <!-- Feature Card - Más linda y destacada -->
      <div class="max-w-2xl mx-auto mb-12">
        <div class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border-4 border-white/50 transform hover:scale-105 transition-transform duration-300">
          <div class="flex items-start gap-6">
            <div class="text-5xl md:text-6xl shrink-0">{{ heroData.feature.icon }}</div>
            <div>
              <h3 class="text-2xl md:text-3xl font-extrabold text-rose-600 mb-3">
                {{ heroData.feature.title }}
              </h3>
              <p class="text-base md:text-lg text-gray-700 leading-relaxed">
                {{ heroData.feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Slider Section - Más elegante -->
      <div class="relative w-full max-w-6xl mx-auto">
        <!-- Slider Container -->
        <div class="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white/30">
          <div 
            class="flex transition-transform duration-700 ease-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div 
              v-for="(slide, index) in heroData.images" 
              :key="index"
              class="min-w-full aspect-[4/3] relative"
            >
              <img 
                :src="slide.src" 
                :alt="slide.alt"
                class="w-full h-full object-cover"
              />
              <!-- Overlay con info del slide -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6 md:p-10">
                <div class="text-white">
                  <h3 class="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 drop-shadow-lg">
                    {{ slide.title }}
                  </h3>
                  <p class="text-base md:text-lg text-white/95 drop-shadow-md">
                    {{ slide.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Arrows - Más lindas -->
          <button 
            @click="prevSlide"
            class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-rose-600 p-4 rounded-full shadow-xl transition-all hover:scale-110 z-10 group"
            aria-label="Slide anterior"
          >
            <svg class="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            @click="nextSlide"
            class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-rose-600 p-4 rounded-full shadow-xl transition-all hover:scale-110 z-10 group"
            aria-label="Siguiente slide"
          >
            <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Dots Navigation - Más bonitos -->
        <div class="flex justify-center gap-3 mt-8">
          <button
            v-for="(slide, index) in heroData.images"
            :key="index"
            @click="goToSlide(index)"
            :class="[
              'transition-all duration-300 h-3 rounded-full',
              currentSlide === index 
                ? 'w-12 bg-white shadow-lg' 
                : 'w-3 bg-white/60 hover:bg-white/80 hover:scale-110'
            ]"
            :aria-label="`Ir a slide ${index + 1}`"
          ></button>
        </div>

        <!-- Trust Badges - Más atractivos -->
        <div class="mt-12 flex flex-wrap justify-center items-center gap-4">
          <div class="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border-2 border-white/50 hover:scale-105 transition-transform">
            <p class="text-rose-600 font-bold text-sm flex items-center gap-2">
              <span class="text-xl">🌿</span>
              100% Natural
            </p>
          </div>
          <div class="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border-2 border-white/50 hover:scale-105 transition-transform">
            <p class="text-emerald-600 font-bold text-sm flex items-center gap-2">
              <span class="text-xl">✓</span>
              Trazabilidad Total
            </p>
          </div>
          <div class="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border-2 border-white/50 hover:scale-105 transition-transform">
            <p class="text-amber-600 font-bold text-sm flex items-center gap-2">
              <span class="text-xl">🇨🇴</span>
              Origen Colombiano
            </p>
          </div>
          <div class="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border-2 border-white/50 hover:scale-105 transition-transform">
            <p class="text-purple-600 font-bold text-sm flex items-center gap-2">
              <span class="text-xl">♻️</span>
              Sostenible
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});

const heroData = ref(props.data);
const currentSlide = ref(0);
let autoplayInterval = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroData.value.images.length;
};

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 
    ? heroData.value.images.length - 1 
    : currentSlide.value - 1;
};

const goToSlide = (index) => {
  currentSlide.value = index;
  stopAutoplay();
  startAutoplay();
};

// Autoplay
const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide();
  }, heroData.value.slider?.intervalMs || 5000);
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
/* Animaciones suaves */
.transition-transform {
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Efectos de hover más suaves */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.hover\:scale-105:hover {
  animation: float 3s ease-in-out infinite;
}
</style>