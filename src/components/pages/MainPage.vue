<template>
  <div class="main-container">
    <!-- Анимация пузырьков -->
    <div v-show="bubblesEnabled" class="background-container">
      <div class="bubbles" :style="getBubbleStyle()" ref="bubbleContainer">
      </div>
    </div>
    <Header></Header>
    <!-- Представление сайта -->
    <div class="section-block">
      <Intro />
    </div>

    <!-- Актуальные обсуждения -->
    <div class="section-block">
      <TrendingTopics />
    </div>

    <!-- Лидеры недели -->
    <div class="section-block">
      <Leaders />
    </div>

    <!-- Опрос -->
    <div class="section-block">
      <Poll />
    </div>
  </div>
</template>

<script>
import { useSettingsStore } from "@/stores/useSettingsStore";
import { storeToRefs } from "pinia";
import '@/assets/styles/animation-bubbles.css';
import Header from "@/components/Header.vue";
import Intro from '@/components/Intro.vue';
import TrendingTopics from '@/components/TrendingTopics.vue';
import Leaders from '@/components/Leaders.vue';
import Poll from '@/components/Poll.vue';

export default {
  name: 'MainPage',
  components: {
    Header,
    Intro,
    TrendingTopics,
    Leaders,
    Poll
  },
  setup() {
    const settingsStore = useSettingsStore();
    const { bubblesEnabled } = storeToRefs(settingsStore);

    return { bubblesEnabled };
  },
  mounted() {
    this.createBubbles();
  },
  methods: {
    createBubbles() {
      const container = this.$refs.bubbleContainer;
      for (let i = 0; i < 30; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        const size = Math.random() * (100 - 30) + 30;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * (10 - 5) + 5;

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.top = `${top}%`;
        bubble.style.left = `${left}%`;
        bubble.style.animationDuration = `${duration}s`;
        bubble.style.animationDelay = `${delay}s`;
        container.appendChild(bubble);
      }
      },
      getBubbleStyle() {
      const size = Math.random() * (100 - 30) + 30;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const animationDelay = Math.random() * 5;
      const duration = Math.random() * (10 - 5) + 5;

      return {
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
        animationDelay: `${animationDelay}s`,
        animationDuration: `${duration}s`,
      };
    },
    }
};
</script>

<style scoped>
/* Общие стили */
.main-container {
  justify-items: center;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: rgb(20, 20, 20);
  color: white;
  overflow: hidden;
}

/* Стили для каждого блока */
.section-block {
  position: relative;
  margin-top: 20px;
  margin-bottom: 10px;
  background-color: rgb(33, 33, 33);
  border-radius: 8px;
  border: solid white 1px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.2s ease-in-out;
}

.section-block:hover {
  transform: translateY(-5px); /* Эффект поднятия блока при наведении */
}
</style>
