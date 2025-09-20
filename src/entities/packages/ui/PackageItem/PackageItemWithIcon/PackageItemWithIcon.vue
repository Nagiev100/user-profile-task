<script setup lang="ts">
import {PackageItemWithIconTypes} from "@/entities/packages/ui/PackageItem/types/PackageItem";
import ContainerIcons from "../../../../user/ui/ContainerIcons/ContainerIcons.vue"

defineProps<{ package: PackageItemWithIconTypes }>()
</script>

<template>
  <button class="package-item"
          :style="{
    borderColor: `var(${package.color})`,
    boxShadow: `0 2px 10px var(${package.color})`
  }"
  >
    <div class="iconContainer">
      <ContainerIcons >
        <component :is="package.icon" class="icon" />
      </ContainerIcons>
    </div>
    <p class="title" :style="{color:`var(${package.color})`}">
      {{ package.title }}
    </p>
  </button>
</template>

<style scoped>
.package-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;
  width: 15.4rem;
  border-radius: 3rem;
  border: 4px solid green;
  background-color: var(--color-bg);
  padding: 1rem 5rem 1rem 1rem;
  text-align: left;
}

.title {
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 24px;
  letter-spacing: 0;
}

.iconContainer {
  position: absolute;
  z-index: 1;
  top: -1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
}
</style>
