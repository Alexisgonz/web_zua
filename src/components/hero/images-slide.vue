<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface Slide {
  src: string
  alt?: string
}

const props = defineProps<{
  slides: Slide[]
  intervalMs?: number
  aspect?: string 
  rounded?: string
}>()

const index = ref(0)
const hovering = ref(false)
const interval = ref<number | null>(null)

const next = () => { index.value = (index.value + 1) % props.slides.length }
const prev = () => { index.value = (index.value - 1 + props.slides.length) % props.slides.length }
const go   = (i: number) => { index.value = i }

const start = () => {
  if (interval.value != null || props.slides.length <= 1) return
  interval.value = window.setInterval(() => { if (!hovering.value) next() }, props.intervalMs ?? 3500)
}
const stop = () => {
  if (interval.value != null) { window.clearInterval(interval.value); interval.value = null }
}

let touchStartX = 0
const onTouchStart = (e: TouchEvent) => { touchStartX = e.touches[0].clientX }
const onTouchEnd = (e: TouchEvent) => {
  const dx = e.changedTouches[0].clientX - touchStartX
  if (Math.abs(dx) > 40) { dx < 0 ? next() : prev() }
}

onMounted(start)
onBeforeUnmount(stop)
</script>

<template>
  <div
    class="relative overflow-hidden group"
    :class="[aspect ?? 'aspect-[16/10]', rounded ?? 'rounded-3xl']"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
    @touchstart.passive="onTouchStart"
    @touchend.passive="onTouchEnd"
  >
    <!-- Slides -->
    <div class="absolute inset-0">
      <transition-group
        name="fade"
        tag="div"
        class="w-full h-full relative"
      >
        <img
          v-for="(s, i) in slides"
          v-show="i === index"
          :key="i"
          class="absolute inset-0 w-full h-full object-cover"
          :src="s.src"
          :alt="s.alt || `slide-${i+1}`"
          loading="eager"
          decoding="async"
        />
      </transition-group>
      <!-- Overlay suave para texto si en el futuro -->
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>

    <!-- Controles -->
    <button
      type="button"
      class="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 text-white h-10 w-10 rounded-full grid place-items-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition"
      aria-label="Anterior"
      @click="prev"
    >‹</button>
    <button
      type="button"
      class="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 text-white h-10 w-10 rounded-full grid place-items-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition"
      aria-label="Siguiente"
      @click="next"
    >›</button>

    <!-- Dots -->
    <div class="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
      <button
        v-for="(s, i) in slides"
        :key="i"
        class="h-2.5 w-2.5 rounded-full transition-all"
        :class="i === index ? 'bg-white shadow ring-2 ring-white/50 w-6' : 'bg-white/50 hover:bg-white/80'"
        @click="go(i)"
        :aria-label="`Ir a la imagen ${i+1}`"
      />
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .6s ease }
.fade-enter-from, .fade-leave-to { opacity: 0 }
</style>
