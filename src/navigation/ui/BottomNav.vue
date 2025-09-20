<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ButtonTabs } from '@/navigation/model/bottomTabs'
import ContainerIcons from "../../shared/ui/ContainerIcons/ContainerIcons.vue"

const route = useRoute()
const router = useRouter()

const navigateTo = (link: string) => {
  router.push(link)
}

const isActive = (link: string) => route.path === link
</script>

<template>
  <nav class="bottom-navigation">
    <button
        v-for="tab in ButtonTabs"
        :key="tab.id"
        class="tab-button"
        :class="{ active: isActive(tab.navigateLink) }"
        @click="navigateTo(tab.navigateLink)"
    >
      <ContainerIcons v-if="tab.type" color="--subscription-pink-gradient">
        <div v-html="tab.icon" />
      </ContainerIcons>
      <div v-else v-html="tab.icon" />
    </button>
  </nav>
</template>

<style scoped>
.bottom-navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  max-width: 37.5rem;
  width: 100%;
}

.tab-button {
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  transition: transform 0.2s;
}
</style>
