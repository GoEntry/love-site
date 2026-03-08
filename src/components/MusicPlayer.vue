<script setup>
import { ref, onMounted } from "vue";

const audio = ref(null);
const playing = ref(true);

function toggleMusic() {
  if (playing.value) {
    audio.value.pause();
  } else {
    audio.value.play();
  }

  playing.value = !playing.value;
}

onMounted(() => {
  audio.value.play().catch(() => {
    playing.value = false;
  });
});
</script>

<template>
  <div class="music-btn" @click="toggleMusic">
    {{ playing ? "🔊" : "🔇" }}
  </div>

  <audio ref="audio" loop>
    <source src="/music.mp3" type="audio/mpeg" />
  </audio>
</template>

<style>
.music-btn {
  position: fixed;
  right: 20px;
  bottom: 30px;
  width: 60px;
  height: 60px;
  background: white;
  color: #ff4b8b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  z-index: 10;
}

.music-btn:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .music-btn {
    width: 50px;
    height: 50px;
    font-size: 20px;
    right: 15px;
    bottom: 20px;
  }
}
</style>
