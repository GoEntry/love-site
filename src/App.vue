<script setup>
import Hearts from "./components/Hearts.vue";
import MusicPlayer from "./components/MusicPlayer.vue";
import LoveExplosion from "./components/LoveExplosion.vue";
</script>

<template>
  <div class="app">
    <LoveExplosion>
      <Hearts />
      <nav>
        <router-link to="/">Начало</router-link>
        <router-link to="/story">История</router-link>
        <router-link to="/memories">Фото</router-link>
        <router-link to="/together">Мы вместе</router-link>
        <router-link to="/love">Любовь</router-link>
        <router-link to="/letter">Письмо</router-link>
      </nav>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <MusicPlayer />
    </LoveExplosion>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: Arial;
}

.page {
  max-width: 900px;
  margin: auto;
  padding: 40px 20px;
}

.app {
  min-height: 100vh;
  background: linear-gradient(135deg, #ff7eb3, #ff758c);
  color: white;
  text-align: center;
  padding-bottom: 80px;
}

nav {
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 20px;
  flex-wrap: wrap;
}

nav a {
  padding: 12px 22px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  backdrop-filter: blur(10px);
  transition: 0.3s;
}

nav a:hover {
  background: white;
  color: #ff4b8b;
  transform: scale(1.05);
}

.router-link-active {
  background: white;
  color: #ff4b8b;
}

/* анимация страниц */

.page-enter-active,
.page-leave-active {
  transition: all 0.6s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
