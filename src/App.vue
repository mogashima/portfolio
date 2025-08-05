<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
</script>