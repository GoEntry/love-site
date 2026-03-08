<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  text: String,
});

const display = ref("");

onMounted(() => {
  let i = 0;

  const interval = setInterval(() => {
    display.value += props.text[i];
    i++;
    if (i >= props.text.length) {
      clearInterval(interval);
    }
  }, 60);
});
</script>

<template>
  <h2>{{ display }}</h2>
</template>
