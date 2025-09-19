<script setup lang="ts">
import UserInfo from '../UserInfo/UserInfo.vue'
import type { UserTypes } from '../../types/userTypes'

defineProps<{
  user: UserTypes
}>()
</script>

<template>
  <div class="user-card">
    <div class="user-card__header">
      <UserInfo :user="user" />
    </div>
  </div>
</template>

<style scoped>
.user-card {
  display: flex;
  flex-direction: column;
  max-width: 37.5rem;
  width: 100%;
  border-radius: 3.2rem;
  overflow: hidden;
}

.user-card__header {
  background-image: var(--subscription-pink-gradient);
  background-blend-mode: screen;
  background-size: 100% 80%;
  background-repeat: no-repeat;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 60%;
}
</style>
