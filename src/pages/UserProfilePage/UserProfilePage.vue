<script setup lang="ts">
import UserCard from '../../entities/user/ui/UserCard/UserCard.vue'
import {useUserStore} from "@/entities/user/model/useUserStore";
import { onMounted } from 'vue'

const userStore = useUserStore()

onMounted(() => {
  userStore.initializeUser()
})
</script>

<template>
  <section class="user-profile-page">
    <UserCard v-if="userStore.user" :user="userStore.user"/>
  </section>
</template>

<style scoped>
.user-profile-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
