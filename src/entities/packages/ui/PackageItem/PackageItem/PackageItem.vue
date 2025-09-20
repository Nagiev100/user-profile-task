<script setup lang="ts">
import { PackageItemTypes } from "@/entities/packages/ui/PackageItem/types/PackageItem"

defineProps<{ package: PackageItemTypes }>()
</script>

<template>
  <div
      class="gradient-border"
      :style="{ background: `var(${package.borderColor})` }"
  >
    <div class="package-item-inner">
      <p
          class="title gradient-text"
          :style="{ backgroundImage: `var(${package.textColor})` }"
      >
        {{ package.packageName }}
      </p>
      <p class="description">{{ package.description }}</p>
    </div>
  </div>
</template>

<style scoped>

.gradient-border {
  position: relative;
  padding: 0.4rem;
  border-radius: 3rem;
  max-width: 32.7rem;
}

.gradient-border::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: inherit;
  background: inherit;
  filter: blur(10px);
  opacity: 0.6;
}

.package-item-inner {
  max-height: 11.1rem;
  max-width: 32.7rem;
  border-radius: 3rem;
  background-color: var(--color-bg);
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.title.gradient-text {
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 3.5rem;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

.description {
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 2.4rem;
  color: var(--color-text-primary);
}
</style>
