<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar color="primary">
      <div class="app-bar">
        <img class="logo" src="../src/assets/logo.svg" alt="Vue logo" width="50" height="50" />
        <span>Vue 学习笔记</span>
      </div>
    </v-app-bar>
    <v-main>
      <RouterView />
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

.app-bar {
  display: flex;
  align-items: center;
  padding: 0 16px;
  white-space: 16px;
  background-color: #1976d2;
}

.logo {
  margin: 0 2rem 0 0;
}
</style>
