<script setup lang="ts">
import {computed} from 'vue'

const props = defineProps<{
  color?: string
}>()

const styles = computed(() => {
  const color = props.color
  let result: Record<string, string> = {};

  switch (true) {
    case !color:
      result = {
        backgroundColor: 'var(--color-bg)',
        width: '4.2rem',
        height: '4.2rem'
      }
      break

    case color.startsWith('--'):
      result = {
        backgroundImage: `var(${color})`,
        width: '4.8rem',
        height: '4.8rem'
      }
      break

    case color.startsWith('linear-gradient'):
      result = {
        backgroundImage: color,
        width: '4.8rem',
        height: '4.8rem'
      }
      break

    default:
      result = {
        backgroundColor: color,
        width: '4.2rem',
        height: '4.2rem'
      }
  }

  return result
})
</script>

<template>
  <div class="icon-container" :style="styles">
    <slot/>
  </div>
</template>

<style scoped>
.icon-container {
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
