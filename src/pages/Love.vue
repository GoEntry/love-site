<script setup>
import SecretButton from "../components/SecretButton.vue"
</script>

<template>
  <div class="page">
    <h1>Я тебя люблю ❤️</h1>
    <p>Спасибо, что ты есть в моей жизни</p>
    <p>Ты — самое лучшее, что со мной случилось</p>
    <h2>Навсегда вместе 💖</h2>
    <SecretButton/>
  </div>
</template>

<style>
.page {
  margin-top: 80px;
  font-size: 24px;
}

@media (max-width: 768px) {
  .page {
    margin-top: 0px;
    font-size: 12px;
  }
}
</style>
