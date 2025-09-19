<script setup lang="ts">
import {PackageItemWithIconTypes} from "@/entities/packages/ui/PackageItem/types/PackageItem";
import ContainerIcons from "../../../../user/ui/ContainerIcons/ContainerIcons.vue"
defineProps<{ package: PackageItemWithIconTypes }>()
</script>

<template>
  <button class="package-item">
    <div class="iconContainer">
      <ContainerIcons>
        <component :is="package.icon" class="icon" />
      </ContainerIcons>
    </div>
    <p class="title">{{ package.title }}</p>
  </button>
</template>

<style scoped>
.package-item {
  position: relative; /* Добавляем позиционирование */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Чтобы текст шел от левого края */
  justify-content: center;
  gap: 0.2rem;
  width: 15.4rem;
  border-radius: 3rem;
  border: 4px solid green;
  background-color: red;
  overflow: hidden;
  padding: 2rem 0.7rem 2rem 2rem;
  text-align: left;
}

.iconContainer {
  position: absolute;
  top: 0rem;
  right: 0rem;
  width: 2rem;
  height: 2rem;
}

</style>
