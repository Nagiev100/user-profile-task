<script setup lang="ts">
import type { UserTypes } from '../../types/userTypes'

defineProps<{
  user: UserTypes
}>()
</script>

<template>
  <div class="containerUserInfo">
    <img :src="user.avatar" alt="User avatar" class="avatar" />
    <h2 class="name">{{ user.name }}</h2>
    <p class="bio">{{ user.age }}</p>
  </div>
</template>

<style scoped>
.containerUserInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  width: 12.2rem;
  height: 12.2rem;
  border-radius: 50%;
  object-fit: cover;
}

.name {
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.2rem;
  color: var(--color-text-primary);
  margin-top: 1.2rem;
}

.bio {
  font-size: 1.6rem;
  margin: 0.4rem 0 0 0;
}
</style>
