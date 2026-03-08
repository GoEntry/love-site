<template>
  <div class="hearts">
    <span v-for="i in 30" :key="i">❤️</span>
  </div>
</template>

<style>
.hearts span {
  position: fixed;
  bottom: -20px;
  font-size: 24px;
  animation: fall linear infinite;
  opacity: 0.8;
}

.hearts span:nth-child(3n) {
  left: 10%;
  animation-duration: 6s;
}

.hearts span:nth-child(3n + 1) {
  left: 50%;
  animation-duration: 8s;
}

.hearts span:nth-child(3n + 2) {
  left: 80%;
  animation-duration: 7s;
}

@keyframes fall {
  0% {
    transform: translateY(0) rotate(0deg);
  }

  100% {
    transform: translateY(-120vh) rotate(360deg);
  }
}
</style>
