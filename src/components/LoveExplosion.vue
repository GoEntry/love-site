<script setup>
import { ref } from "vue";

const hearts = ref([]);

function explode(e) {
  for (let i = 0; i < 15; i++) {
    hearts.value.push({
      id: Date.now() + i,
      x: e.clientX,
      y: e.clientY,
      dx: (Math.random() - 0.5) * 300,
      dy: (Math.random() - 0.5) * 300,
    });
  }

  setTimeout(() => {
    hearts.value.splice(0, 15);
  }, 900);
}
</script>

<template>
  <div class="explosion-area" @click="explode">
    <span
      v-for="heart in hearts"
      :key="heart.id"
      class="heart"
      :style="{
        left: heart.x + 'px',
        top: heart.y + 'px',
        transform: `translate(${heart.dx}px, ${heart.dy}px)`,
      }"
    >
      ❤️
    </span>
    <slot />
  </div>
</template>

<style>
.explosion-area {
  position: relative;
  min-height: 100vh;
}

.heart {
  position: fixed;
  animation: pop 0.9s ease-out forwards;
  pointer-events: none;
  font-size: 26px;
}

@keyframes pop {
  0% {
    opacity: 1;
    transform: scale(0);
  }

  100% {
    opacity: 0;
    transform: scale(1.8);
  }
}
</style>
