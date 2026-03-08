<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";

const open = ref(false);

function toggle() {
  open.value = !open.value;
}

function close() {
  open.value = false;
}

function handleEsc(e) {
  if (e.key === "Escape") {
    close();
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleEsc);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleEsc);
});

watch(open, (value) => {
  document.body.style.overflow = value ? "hidden" : "";
});
</script>

<template>
  <div>
    <button class="secret-btn" @click="toggle">
      Нажми если любишь меня ❤️
    </button>
    <transition name="modal">
      <div v-if="open" class="modal" @click.self="close">
        <div class="modal-content">
          <h2>❤️</h2>
          <p>Спасибо, что ты терпишь меня в моей жизни</p>
          <p>Я безумно благодарен тебе за всё то, что ты делала и делаешь для меня</p>
          <p>Я тебя очень сильно люблю ❤️</p>
          <p>Но ты всё равно балда хехехе :Р</p>
          <button class="close-btn" @click="close">Закрыть</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
/* кнопка */
.secret-btn {
  margin-top: 40px;
  padding: 15px 30px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  background: white;
  color: #ff4b8b;
  cursor: pointer;
  transition: 0.3s;
}

.secret-btn:hover {
  transform: scale(1.05);
}

/* overlay */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

/* окно */
.modal-content {
  background: white;
  color: #ff4b8b;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  max-width: 420px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
  transition: transform 0.35s ease;
}

/* кнопка закрыть */
.close-btn {
  margin-top: 20px;
  padding: 12px 28px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  background: linear-gradient(135deg, #ff7eb3, #ff4b8b);
  color: white;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.close-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
}

/* анимации*/
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.35s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-content {
  transform: scale(0.8);
}

.modal-leave-to .modal-content {
  transform: scale(0.8);
}
</style>