<script setup lang="ts">

import {PackagesTypes} from "@/entities/packages/types/packagesTypes";
import PackageItem from "../PackageItem/PackageItem/PackageItem.vue";
import PackageItemWithIcon from "../PackageItem/PackageItemWithIcon/PackageItemWithIcon.vue"
import StarIcon from "../../../../shared/icons/svg/star.svg"
import MdiStormIcon from "../../../../shared/icons/svg/mdiStormIcon.svg"

defineProps<{ packages: PackagesTypes[] }>()

const colors = [
  '--subscription-orange-gradient',
  '--subscription-gold-gradient',
  '--subscription-premium-gradient'
]
</script>

<template>
  <section class="packages-list">
    <PackageItem
        v-for="(pkg, index) in packages"
        :key="pkg.id || `${index}-${pkg.packageName}`"
        :package="{
        packageName: pkg.packageName,
        description: pkg.description,
        borderColor: colors[index],
        textColor: colors[index],
      }"
    />

    <div class="packages-with-icon">
      <PackageItemWithIcon
          :package="{
          title: 'Нужны суперлайки?',
          color: '--color-text-blue',
          icon: StarIcon,
        }"
      />
      <PackageItemWithIcon
          :package="{
          title: 'Нужны Супербумы?',
          color: '--color-text-purple',
          icon: MdiStormIcon,
        }"
      />
    </div>
  </section>
</template>

<style scoped>
.packages-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 37.5rem;
  width: 100%;
  margin-bottom: 0.5rem;
}

.packages-with-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
</style>
