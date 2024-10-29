<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="250" />
  </header>

  <RouterView />
</template>

<style scoped>
  .logo {
    margin: 2rem auto;
    display: block;
  }
</style>
