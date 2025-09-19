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
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 3.8rem ;
  border-radius: 0.4rem;
  background-color: #f3f3f3;
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-align: center;
}

.title, .description {
  font-family: 'Futura PT', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2.2rem;
  line-height: 2.4rem;
  letter-spacing: 0;
  text-align: center;
  color: #000000;
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
