<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="250" />
  </header>

  <RouterView />

  <footer>
    <p>
      Made with ❤️ by <a href="https://www.instagram.com/ink.c.tatts/" target="_blank">@ink.c.tatts</a>
    </p>
  </footer>
</template>

<style scoped>
  .logo {
    margin: 2rem auto;
    display: block;
    height: 168px;
  }
  footer {
    margin-top: 2rem;
    text-align: center;
  }
    a {
      color: rgb(32, 86, 216);
    }
</style>
