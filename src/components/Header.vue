<template>
  <header class="site-header">
    <div class="header-container">
      <h1 class="title">ミネシステム</h1>

      <button class="menu-toggle" @click="toggleMenu">
        ☰
      </button>

      <nav :class="['nav', { open: isOpen }]">
        <router-link to="/" class="nav-link">ホーム</router-link>
        <router-link to="/web" class="nav-link">ウェブ</router-link>
        <router-link to="/modeling" class="nav-link">モデリング</router-link>
        <router-link to="/ai" class="nav-link">ＡＩ</router-link>
        <router-link to="/code" class="nav-link">コード</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
nav {
  justify-content: space-around;
}
@media (max-width: 640px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
