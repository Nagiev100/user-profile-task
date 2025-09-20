<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ButtonTabs } from '@/navigation/model/bottomTabs'

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
      <component :is="tab.icon" class="tab-icon" />
    </button>
  </nav>
</template>

<style scoped>
.bottom-navigation {
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.8rem;
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

.tab-icon {
  fill: #aaa;
}

.tab-button.active .tab-icon {
  fill: #C03AFF;
}
</style>
