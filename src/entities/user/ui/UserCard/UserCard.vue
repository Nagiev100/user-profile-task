<script setup lang="ts">
import UserInfo from '../UserInfo/UserInfo/UserInfo.vue'
import type { UserTypes } from '../../types/userTypes'

defineProps<{ user: UserTypes }>()
</script>

<template>
  <div class="user-card">
    <div class="background"></div>
    <div class="user-card__content">
      <UserInfo :user="user" />
    </div>
  </div>
</template>

<style scoped>
.user-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 37.5rem;
  width: 100%;
  border-radius: 3.2rem;
  overflow: hidden;
  margin-bottom: 2.8rem;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 14rem;
  height: 100%;
  opacity: 60%;
  background: linear-gradient(135deg, #FF1569, #C03AFF);
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  z-index: 0;
}

.user-card__content {
  position: relative;
  z-index: 1;
  padding-top: 6rem;
  width: 100%;
}
</style>
