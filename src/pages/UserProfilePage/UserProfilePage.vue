<script setup lang="ts">
import UserCard from '../../entities/user/ui/UserCard/UserCard.vue';
import PackageList from '../../entities/packages/ui/PackageList/PackageList.vue'
import {useUserStore} from "@/entities/user/model/useUserStore";
import {usePackagesStore} from "@/entities/packages/model/usePackagesStore"
import { onMounted } from 'vue'

const userStore = useUserStore()
const packagesStore = usePackagesStore()

onMounted(() => {
  userStore.initializeUser();
  packagesStore.initializePackages();
})
</script>

<template>
  <section class="user-profile-page">
    <UserCard v-if="userStore.user" :user="userStore.user"/>
    <PackageList v-if="packagesStore.packages" :packages="packagesStore.packages"/>
  </section>
</template>

<style scoped>
.user-profile-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
