<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  color?: string
}>()

const backgroundColor = computed(() => {
  // Если значение начинается с `--`, предполагаем, что это CSS-переменная
  if (props.color?.startsWith('--')) {
    return `var(${props.color})`
  }

  return props.color || 'var(--color-bg)'
})
</script>

<template>
  <div class="icon-container" :style="{ backgroundColor }">
    <slot />
  </div>
</template>

<style scoped>
.icon-container {
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-bg);
  cursor: pointer;
}
</style>
