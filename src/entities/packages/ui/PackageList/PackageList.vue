<script setup lang="ts">

import {PackagesTypes} from "@/entities/packages/types/packagesTypes";

defineProps<{ packages: PackagesTypes[] }>()
</script>

<template>
  <section class="packages-list">
    <PackageItem
        v-for="(pkg, index) in packages"
        :key="pkg.id || index"
        :package="pkg"
        :customClass="pkg.className"
    />
  </section>
</template>

<style scoped>

</style>
