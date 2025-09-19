<script setup lang="ts">

</script>

<template>
  <div class="icon-container">
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
