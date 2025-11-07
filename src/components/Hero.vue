<template>
  <div class="h-screen flex items-center relative overflow-hidden">
    <!-- Elementos decorativos estilo Mumu - Por encima del slider -->
    <div class="absolute top-10 right-10 w-72 h-72 bg-pink-bg/30 rounded-full blur-2xl animate-pulse z-40"></div>
    <div class="absolute bottom-20 left-10 w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl animate-bounce-slow z-40"></div>
    <div class="absolute top-1/3 left-1/3 w-48 h-48 bg-green-300/20 rounded-full blur-2xl z-40"></div>
    <div class="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-300/25 rounded-full blur-2xl z-40"></div>
    
    <!-- Animaciones navideñas flotantes estilo Mumu - Encima de todo -->
    <div class="absolute inset-0 pointer-events-none z-50">
      <!-- Contenedor para copos dinámicos -->
      <div class="snow-container absolute inset-0"></div>
      
      <!-- Copos de nieve estáticos -->
      <div class="snowflake absolute text-white/70 text-2xl animate-snowfall-1" style="left: 10%; animation-delay: 0s;">❄️</div>
      <div class="snowflake absolute text-white/70 text-xl animate-snowfall-2" style="left: 20%; animation-delay: 1s;">❅</div>
      <div class="snowflake absolute text-white/70 text-3xl animate-snowfall-3" style="left: 30%; animation-delay: 2s;">❄️</div>
      <div class="snowflake absolute text-white/70 text-lg animate-snowfall-1" style="left: 40%; animation-delay: 3s;">❅</div>
      <div class="snowflake absolute text-white/70 text-2xl animate-snowfall-2" style="left: 50%; animation-delay: 0.5s;">❄️</div>
      <div class="snowflake absolute text-white/70 text-xl animate-snowfall-3" style="left: 60%; animation-delay: 1.5s;">❅</div>
      <div class="snowflake absolute text-white/70 text-2xl animate-snowfall-1" style="left: 70%; animation-delay: 2.5s;">❄️</div>
      <div class="snowflake absolute text-white/70 text-lg animate-snowfall-2" style="left: 80%; animation-delay: 3.5s;">❅</div>
      <div class="snowflake absolute text-white/70 text-xl animate-snowfall-3" style="left: 90%; animation-delay: 0.8s;">❄️</div>
      
      <!-- Estrellas navideñas -->
      <div class="star absolute text-yellow-300/80 text-xl animate-twinkle-1" style="left: 15%; top: 20%; animation-delay: 0s;">✨</div>
      <div class="star absolute text-yellow-300/80 text-lg animate-twinkle-2" style="left: 85%; top: 15%; animation-delay: 1s;">⭐</div>
      <div class="star absolute text-yellow-300/80 text-2xl animate-twinkle-3" style="left: 25%; top: 80%; animation-delay: 2s;">✨</div>
      <div class="star absolute text-yellow-300/80 text-lg animate-twinkle-1" style="left: 75%; top: 70%; animation-delay: 1.5s;">⭐</div>
      
      <!-- Elementos navideños flotantes -->
      <div class="float-element absolute text-2xl animate-float-slow" style="left: 5%; top: 30%; animation-delay: 0s;">🎁</div>
      <div class="float-element absolute text-xl animate-float-medium" style="left: 95%; top: 60%; animation-delay: 2s;">🎄</div>
      <div class="float-element absolute text-lg animate-float-fast" style="left: 45%; top: 10%; animation-delay: 1s;">🔔</div>
      
      <!-- Más copos de nieve adicionales para efecto más denso -->
      <div class="snowflake absolute text-white/60 text-sm animate-snowfall-2" style="left: 5%; animation-delay: 4s;">❅</div>
      <div class="snowflake absolute text-white/60 text-lg animate-snowfall-1" style="left: 15%; animation-delay: 2.5s;">❄️</div>
      <div class="snowflake absolute text-white/60 text-md animate-snowfall-3" style="left: 25%; animation-delay: 1.8s;">❅</div>
      <div class="snowflake absolute text-white/60 text-xl animate-snowfall-2" style="left: 35%; animation-delay: 3.2s;">❄️</div>
      <div class="snowflake absolute text-white/60 text-sm animate-snowfall-1" style="left: 45%; animation-delay: 0.3s;">❅</div>
      <div class="snowflake absolute text-white/60 text-lg animate-snowfall-3" style="left: 55%; animation-delay: 4.5s;">❄️</div>
      <div class="snowflake absolute text-white/60 text-md animate-snowfall-2" style="left: 65%; animation-delay: 2.8s;">❅</div>
      <div class="snowflake absolute text-white/60 text-xl animate-snowfall-1" style="left: 75%; animation-delay: 1.2s;">❄️</div>
      <div class="snowflake absolute text-white/60 text-sm animate-snowfall-3" style="left: 85%; animation-delay: 3.8s;">❅</div>
      <div class="snowflake absolute text-white/60 text-lg animate-snowfall-2" style="left: 95%; animation-delay: 0.7s;">❄️</div>
      
      <!-- Estrellas adicionales -->
      <div class="star absolute text-yellow-200/70 text-sm animate-twinkle-2" style="left: 10%; top: 40%; animation-delay: 1.2s;">✨</div>
      <div class="star absolute text-yellow-200/70 text-lg animate-twinkle-1" style="left: 90%; top: 35%; animation-delay: 2.5s;">⭐</div>
      <div class="star absolute text-yellow-200/70 text-md animate-twinkle-3" style="left: 35%; top: 25%; animation-delay: 0.8s;">✨</div>
      <div class="star absolute text-yellow-200/70 text-sm animate-twinkle-2" style="left: 65%; top: 85%; animation-delay: 3.1s;">⭐</div>
    </div>
    
    <!-- Container principal estilo Mumu full-width -->
    <div class="relative w-full h-screen flex items-center">
      <!-- Slider de fondo que abarca toda la pantalla -->
      <div class="absolute inset-0 w-full h-screen">
        <!-- Slider Container full-width -->
        <div class="relative w-full h-screen" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
          <!-- Slider wrapper -->
          <div class="slider-container relative overflow-hidden w-full h-screen">
            <div 
              class="flex transition-transform duration-700 ease-out h-screen"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <div 
                v-for="(slide, index) in heroData.images" 
                :key="index"
                class="min-w-full h-screen relative group product-card"
              >
                <img 
                  :src="slide.src" 
                  :alt="slide.alt"
                  class="w-full h-screen object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <!-- Overlay con gradiente suave -->
                <div class="absolute inset-0 bg-gradient-to-t from-pink-soft/80 via-pink-bg/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
            </div>

            <!-- Navigation arrows estilo Mumu -->
            <button 
              @click="prevSlide"
              class="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 bg-pink-soft hover:bg-pink-soft-dark text-white p-4 lg:p-5 rounded-full shadow-xl transition-all hover:scale-110 z-[60] group"
              aria-label="Slide anterior"
            >
              <svg class="w-6 h-6 lg:w-7 lg:h-7 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              @click="nextSlide"
              class="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 bg-pink-soft hover:bg-pink-soft-dark text-white p-4 lg:p-5 rounded-full shadow-xl transition-all hover:scale-110 z-[60] group"
              aria-label="Siguiente slide"
            >
              <svg class="w-6 h-6 lg:w-7 lg:h-7 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Contenido superpuesto sobre el slider -->
      <div class="relative z-50 w-full">
        <!-- Overlay sutil para mejorar contraste -->
        <div class="absolute inset-0 content-overlay"></div>
        
        <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 pt-8 md:pt-12 relative z-10">
          <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            <!-- Contenido de texto superpuesto -->
            <div class="text-center lg:text-left text-white text-overlay">
              
              <p class="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl mb-4 font-semibold drop-shadow-lg text-white/95">
                {{ heroData.subtitle }}
              </p>
              
              <p class="text-base sm:text-lg lg:text-base xl:text-lg mb-6 text-white/90 leading-relaxed max-w-lg mx-auto lg:mx-0 drop-shadow-md">
                {{ heroData.description }}
              </p>
            </div>
            <div class="hidden lg:flex justify-end">
              <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-6 text-center shadow-2xl border-2 border-white/50 max-w-sm transform hover:scale-105 transition-transform duration-300">
                <h3 class="text-2xl font-black text-pink-soft mb-3">
                  {{ heroData.images[currentSlide]?.title }}
                </h3>
                <p class="text-base text-gray-700 font-medium mb-4">
                  {{ heroData.images[currentSlide]?.description }}
                </p>
                <!-- Badge de oferta -->
                <div class="mt-4">
                  <span class="inline-block bg-gradient-to-r from-pink-soft to-pink-bg text-white px-6 py-2 rounded-full text-sm font-bold">
                    ¡Oferta Especial! 🎁
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dots navigation en la parte inferior -->
      <div class="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-[60]">
        <div class="flex justify-center gap-3 lg:gap-4">
          <button
            v-for="(slide, index) in heroData.images"
            :key="index"
            @click="goToSlide(index)"
            :class="[
              'slider-dot transition-all duration-300 h-4 lg:h-5 rounded-full border-2',
              currentSlide === index 
                ? 'w-10 lg:w-12 active shadow-lg' 
                : 'w-4 lg:w-5 bg-white/60 border-white/60 hover:bg-pink-bg hover:border-pink-bg'
            ]"
            :aria-label="`Ir a slide ${index + 1}`"
          ></button>
        </div>
      </div>
    </div>
  </div>
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
const isHovered = ref(false);
let autoplayInterval = null;

const nextSlide = () => {
  console.log('nextSlide clicked', currentSlide.value);
  currentSlide.value = (currentSlide.value + 1) % heroData.value.images.length;
  console.log('new currentSlide', currentSlide.value);
};

const prevSlide = () => {
  console.log('prevSlide clicked', currentSlide.value);
  currentSlide.value = currentSlide.value === 0 
    ? heroData.value.images.length - 1 
    : currentSlide.value - 1;
  console.log('new currentSlide', currentSlide.value);
};

const goToSlide = (index) => {
  currentSlide.value = index;
  stopAutoplay();
  startAutoplay();
};

// Autoplay con pausa en hover
const startAutoplay = () => {
  if (!isHovered.value) {
    autoplayInterval = setInterval(() => {
      if (!isHovered.value) {
        nextSlide();
      }
    }, heroData.value.slider?.intervalMs || 4500);
  }
};

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
};

const handleMouseEnter = () => {
  isHovered.value = true;
  stopAutoplay();
};

const handleMouseLeave = () => {
  isHovered.value = false;
  startAutoplay();
};

// Crear más copos de nieve dinámicamente
const createDynamicSnowflakes = () => {
  const container = document.querySelector('.snow-container');
  if (container) {
    for (let i = 0; i < 30; i++) {
      const snowflake = document.createElement('div');
      snowflake.textContent = Math.random() > 0.5 ? '❄️' : '❅';
      snowflake.className = `absolute text-white/60 pointer-events-none animate-snowfall-${Math.floor(Math.random() * 3) + 1} z-50`;
      snowflake.style.left = Math.random() * 100 + '%';
      snowflake.style.fontSize = (Math.random() * 12 + 10) + 'px';
      snowflake.style.animationDelay = Math.random() * 8 + 's';
      snowflake.style.animationDuration = (Math.random() * 6 + 6) + 's';
      snowflake.style.opacity = Math.random() * 0.4 + 0.3;
      container.appendChild(snowflake);
    }
  }
};

onMounted(() => {
  startAutoplay();
  // Crear copos de nieve adicionales después de un segundo
  setTimeout(createDynamicSnowflakes, 1000);
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<style scoped>
/* Animaciones estilo Mumu */
@keyframes bounce-slow {
  0%, 100% { 
    transform: translateY(0px);
  }
  50% { 
    transform: translateY(-20px);
  }
}

@keyframes bounce-subtle {
  0%, 100% { 
    transform: translateY(0px);
  }
  50% { 
    transform: translateY(-5px);
  }
}

@keyframes float {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg);
  }
  25% { 
    transform: translateY(-10px) rotate(1deg);
  }
  50% { 
    transform: translateY(-15px) rotate(0deg);
  }
  75% { 
    transform: translateY(-5px) rotate(-1deg);
  }
}

/* Animaciones navideñas estilo Mumu */
@keyframes snowfall-1 {
  0% {
    transform: translateY(-100vh) translateX(0px) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) translateX(-50px) rotate(360deg);
    opacity: 0;
  }
}

@keyframes snowfall-2 {
  0% {
    transform: translateY(-100vh) translateX(0px) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) translateX(100px) rotate(-360deg);
    opacity: 0;
  }
}

@keyframes snowfall-3 {
  0% {
    transform: translateY(-100vh) translateX(0px) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) translateX(-100px) rotate(180deg);
    opacity: 0;
  }
}

@keyframes twinkle-1 {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

@keyframes twinkle-2 {
  0%, 100% {
    opacity: 0.3;
    transform: scale(0.8) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.3) rotate(180deg);
  }
}

@keyframes twinkle-3 {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1.1);
  }
  25% {
    opacity: 0.2;
    transform: scale(0.9);
  }
  75% {
    opacity: 1;
    transform: scale(1.4);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-15px) rotate(5deg);
  }
  66% {
    transform: translateY(-5px) rotate(-3deg);
  }
}

@keyframes float-medium {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
  }
}

@keyframes float-fast {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(-5deg);
  }
  50% {
    transform: translateY(-25px) rotate(8deg);
  }
  75% {
    transform: translateY(-8px) rotate(-3deg);
  }
}

/* Aplicar animaciones */
.animate-bounce-slow {
  animation: bounce-slow 4s ease-in-out infinite;
}

.animate-bounce-subtle {
  animation: bounce-subtle 2s ease-in-out infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-snowfall-1 {
  animation: snowfall-1 8s linear infinite;
}

.animate-snowfall-2 {
  animation: snowfall-2 10s linear infinite;
}

.animate-snowfall-3 {
  animation: snowfall-3 12s linear infinite;
}

.animate-twinkle-1 {
  animation: twinkle-1 2s ease-in-out infinite;
}

.animate-twinkle-2 {
  animation: twinkle-2 3s ease-in-out infinite;
}

.animate-twinkle-3 {
  animation: twinkle-3 2.5s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 4s ease-in-out infinite;
}

.animate-float-fast {
  animation: float-fast 3s ease-in-out infinite;
}

/* Efectos de hover suaves */
.transition-transform {
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Gradientes de texto personalizados */
.bg-gradient-to-r {
  background: linear-gradient(to right, var(--tw-gradient-stops));
}

/* Efectos de glassmorphism */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

.backdrop-blur-xl {
  backdrop-filter: blur(24px);
}

/* Sombras personalizadas */
.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Hover effects para productos */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:animate-bounce {
  animation: bounce-subtle 1s ease-in-out infinite;
}

/* Responsive text gradients */
@media (max-width: 768px) {
  .bg-gradient-to-r {
    background: white;
    -webkit-background-clip: text;
    background-clip: text;
  }
  
  /* Menos animaciones en mobile para performance */
  .snowflake, .star, .float-element {
    display: none;
  }
  
  /* Simplificar animaciones en mobile */
  .animate-bounce-subtle {
    animation: none;
  }
}

/* Efectos especiales para slider full-width */
.slider-container {
  background: none;
  backdrop-filter: none;
  transition: all 0.3s ease;
  border: none;
  border-radius: 0;
  box-shadow: none;
}

.slider-container:hover {
  background: none;
  transform: none;
}

/* Efectos hover para CTAs */
.cta-primary {
  background: linear-gradient(45deg, #f8a5c2, #e794b3);
  box-shadow: 0 4px 15px rgba(248, 165, 194, 0.4);
  position: relative;
  overflow: hidden;
}

.cta-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s;
}

.cta-primary:hover::before {
  left: 100%;
}

.cta-primary:hover {
  background: linear-gradient(45deg, #e794b3, #f0b8d0);
  box-shadow: 0 8px 25px rgba(248, 165, 194, 0.6);
  transform: translateY(-2px) scale(1.05);
}

/* Efectos especiales para badges */
.gradient-badge {
  background: linear-gradient(45deg, #f8a5c2, #f7c7db, #fbb6d3);
  background-size: 300% 300%;
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Efectos de partículas adicionales */
@keyframes sparkle {
  0%, 100% { opacity: 0; transform: scale(0); }
  50% { opacity: 1; transform: scale(1); }
}

.sparkle {
  animation: sparkle 2s ease-in-out infinite;
}

/* Mejorar efectos de hover en productos */
.product-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

/* Efectos en dots del slider */
.slider-dot {
  transition: all 0.3s ease;
  cursor: pointer;
}

.slider-dot:hover {
  transform: scale(1.3);
}

.slider-dot.active {
  background: linear-gradient(45deg, #f8a5c2, #f7c7db);
}

/* Mejoras para texto superpuesto */
.text-overlay {
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.drop-shadow-2xl {
  filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));
}

.drop-shadow-lg {
  filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));
}

/* Overlay adicional para mejorar contraste */
.content-overlay {
  background: linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.2) 100%);
}

/* Animación suave para cambio de slides */
@keyframes slideChange {
  0% { opacity: 0.8; }
  100% { opacity: 1; }
}

.slide-transition {
  animation: slideChange 0.7s ease-in-out;
}
</style>