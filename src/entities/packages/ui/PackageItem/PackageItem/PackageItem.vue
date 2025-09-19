<script setup lang="ts">
import {PackageItemTypes} from "@/entities/packages/ui/PackageItem/types/PackageItem";

defineProps<{ package: PackageItemTypes }>()
</script>

<template>
  <button class="package-item">
    <p class="title">{{ package.packageName }}</p>
    <p class="description">{{ package.description }}</p>
  </button>
</template>

<style scoped>
.package-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  width: 32.7rem;
  border-radius: 3rem;
  border: 4px solid green;
  background-color: red;
  text-align: center;
  overflow: hidden;
}

.title {
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 3.5rem;
  letter-spacing:0;
}

.description {
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 2.4rem;
  letter-spacing: 0;
  text-align: center;
  color: var(--color-text-primary);
}
</style>
