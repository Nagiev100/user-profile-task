<script setup lang="ts">
import type { UserTypes } from '../../../types/userTypes'
import ProfileStatus from '../ProfileStatus/ProfileStatus.vue'
import ContainerIcons from '../../ContainerIcons/ContainerIcons.vue'
import IconSettings from '../../../../../shared/icons/svg/settingsIcon.svg'
import MarkerIcon from '../../../../../shared/icons/svg/markerIcon.svg'
import CheckIcon from '../../../../../shared/icons/svg/сheckIcon.svg'

defineProps<{ user: UserTypes }>()
</script>

<template>
  <div class="containerUserInfo">
    <div class="avatar-wrapper">
      <section class="avatar-row">
        <ContainerIcons><MarkerIcon/></ContainerIcons>
        <img :src="user.avatar" alt="User avatar" class="avatar" />
        <ContainerIcons><IconSettings/></ContainerIcons>
      </section>
      <ProfileStatus class="status-overlay">
        80% заполнено
      </ProfileStatus>
    </div>
    <section class="user-info-row">
      <h2 class="name">{{ `${user.name}, ${user.age}` }}</h2>
      <CheckIcon/>
    </section>
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
  margin-bottom: 2.3rem;
}

.avatar-row {
  display: flex;
  align-items: center;
  gap: 3.8rem;
}

.avatar {
  width: 12.2rem;
  height: 12.2rem;
  border-radius: 50%;
  object-fit: cover;
}

.status-overlay {
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  z-index: 2;
}

.user-info-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.name {
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.2rem;
  color: var(--color-text-primary);
}
</style>
