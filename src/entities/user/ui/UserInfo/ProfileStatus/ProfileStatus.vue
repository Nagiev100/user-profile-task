<script setup lang="ts">
</script>

<template>
  <section class="profile-status">
    <slot/>
  </section>
</template>

<style scoped>
.profile-status {
  width: 13.3rem;
  padding: 0.6rem 0.8rem;
  border-radius: 1.4rem;
  background: var(--profile-completion-gradient);
  text-align: center;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2rem;
  letter-spacing: 0;
  color: var(--color-bg);
  margin-bottom: 1.2rem;
}
</style>
