<script setup>
import { ref, onMounted } from "vue";

const startDate = new Date("2023-04-13"); // ← поменяй на вашу дату

const time = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

function updateTime() {
  const now = new Date();
  const diff = now - startDate;

  time.value.days = Math.floor(diff / (1000 * 60 * 60 * 24));
  time.value.hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  time.value.minutes = Math.floor((diff / (1000 * 60)) % 60);
  time.value.seconds = Math.floor((diff / 1000) % 60);
}

onMounted(() => {
  updateTime();

  setInterval(updateTime, 1000);
});
</script>

<template>
  <div class="page center">
    <h1>Мы вместе уже ❤️</h1>
    <div class="timer">
      <div class="item">
        <span>{{ time.days }}</span>
        <p>дней</p>
      </div>
      <div class="item">
        <span>{{ time.hours }}</span>
        <p>часов</p>
      </div>
      <div class="item">
        <span>{{ time.minutes }}</span>
        <p>минут</p>
      </div>
      <div class="item">
        <span>{{ time.seconds }}</span>
        <p>секунд</p>
      </div>
    </div>
  </div>
</template>

<style>
.timer {
  display: flex;
  gap: 25px;
  margin-top: 40px;
  justify-content: center;
  flex-wrap: wrap;
}

.item {
  background: rgba(255, 255, 255, 0.25);
  padding: 20px 25px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.item span {
  font-size: 36px;
  font-weight: bold;
}
</style>
