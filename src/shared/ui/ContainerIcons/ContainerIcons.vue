<script setup lang="ts">
import { computed } from "vue"

// Пропс color может быть переменной с градиентом (--...), hex-цветом, или linear-gradient(...)
const props = defineProps<{
  color?: string
}>()

// Вычисляем стили фона
const backgroundStyle = computed(() => {
  if (!props.color) {
    return { backgroundColor: 'var(--color-bg)' }
  }

  // Если передан CSS-переменная (например, --gradient-name), используем её как background-image
  if (props.color.startsWith('--')) {
    return {
      backgroundImage: `var(${props.color})`
    }
  }

  // Если это явно linear-gradient, тоже как background-image
  if (props.color.startsWith('linear-gradient')) {
    return {
      backgroundImage: props.color
    }
  }

  // Во всех остальных случаях (например, #fff, red) — как обычный цвет
  return {
    backgroundColor: props.color
  }
})
</script>

<template>
  <div class="icon-container" :style="backgroundStyle">
    <slot />
  </div>
</template>

<style scoped>
.icon-container {
  width: 4.8rem; /* 48px */
  height: 4.8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: var(--color-bg); /* fallback */
  background-size: cover; /* на случай если градиент */
}
</style>
