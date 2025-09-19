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
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 6rem;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #ddd;
  z-index: 1000;
}

.tab-button {
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  transition: transform 0.2s;
}

.tab-icon {
  width: 2.4rem;
  height: 2.4rem;
  fill: #aaa;
}

.tab-button.active .tab-icon {
  fill: #C03AFF; /* Активный цвет */
}
</style>
