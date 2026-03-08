<script setup>
import { ref, onMounted } from "vue";

const text = `Привет, Жужа =) ❤️

Я сделал этот сайт специально для тебя.

Ты делаешь мою жизнь счастливее,
ярче и теплее каждый день.

Спасибо за твою улыбку,
за поддержку,
за моменты, которые мы проводим вместе.

Я очень ценю тебя.

И я просто хочу сказать —

Алинка, я тебя люблю ❤️
`;

const displayed = ref("");

onMounted(() => {
  let i = 0;
  const interval = setInterval(() => {
    displayed.value += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
    }
  }, 35);
});
</script>

<template>
  <div class="letter">
    <pre>{{ displayed }}</pre>
  </div>
</template>

<style>
.letter {
  background: rgba(255, 255, 255, 0.25);
  padding: 30px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  max-width: 600px;
  line-height: 1.6;
  font-size: 18px;
  text-align: left;
}

pre {
  white-space: pre-wrap;
}
</style>
