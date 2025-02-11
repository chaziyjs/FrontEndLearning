<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar app color="primary">
      <div style="display: flex; align-items: center; padding: 0 16px; white-space: 16px;">
        <img class="logo" src="../src/assets/logo.svg" alt="Vue logo" width="50" height="50" />
        <span>Vue 学习笔记</span>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
header {
  top: 0%;
  width: full;
  display: flex;
  flex-direction: column;
  place-items: left;
}

.logo {
  margin: 0 2rem 0 0;
}
</style>
