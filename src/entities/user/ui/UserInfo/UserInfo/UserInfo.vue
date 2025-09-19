<script setup lang="ts">
import type { UserTypes } from '../../../types/userTypes'
import ProfileStatus from '../ProfileStatus/ProfileStatus.vue'
import ContainerIcons from '../../ContainerIcons/ContainerIcons.vue'
import SettingsIcon from './../../../../../shared/icons/svg'

defineProps<{ user: UserTypes }>()
</script>

<template>
  <div class="containerUserInfo">
    <div class="avatar-wrapper">
      <img :src="user.avatar" alt="User avatar" class="avatar" />
      <ProfileStatus class="status-overlay">
        80% заполнено
      </ProfileStatus>
    </div>
    <h2 class="name">{{ `${user.name}, ${user.age}` }}</h2>
  </div>
</template>

<style scoped>

.containerUserInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-wrapper {
  position: relative;
  display: inline-block;
}

.avatar {
  width: 12.2rem;
  height: 12.2rem;
  border-radius: 50%;
  object-fit: cover;
}

.status-overlay {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  z-index: 2;
}

.name {
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.2rem;
  color: var(--color-text-primary);
  margin-top: 1.2rem;
}
</style>
