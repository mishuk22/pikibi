<template>
  <MobileHeader logoSrc="/path-to-your-logo.png" />
  <div class="main-container">
      <!-- Анимация пузырьков -->
      <div v-show="bubblesEnabled" class="background-container">
      <div class="bubbles" :style="getBubbleStyle()" ref="bubbleContainer">
      </div>
      </div>

    <!-- Основное содержимое -->
    <Header></Header>
    <div class="posts-container">
      <!-- Карточки постов -->
      <PostCard
        v-for="post in reversedPosts"
        :key="post.id"
        :id="post.id"
        :author="post.author"
        :date="post.date"
        :title="post.title"
        :text="post.text"
        :images="post.images"
        :likes="post.likes"
      />
    </div>
  </div>
</template>

<script>
import { useSettingsStore } from "@/stores/useSettingsStore";
import { storeToRefs } from "pinia";
import '@/assets/styles/animation-bubbles.css';
import MobileHeader from "@/components/MobileHeader.vue";
import Header from "@/components/Header.vue";
import { posts } from "@/composables/usePosts";
import PostCard from "@/components/PostCard.vue";
import { computed } from "vue";

export default {
  name: "PostsPage",
  components: {
    MobileHeader,
    Header,
    PostCard,
  },
  setup() {
    const reversedPosts = computed(() => posts.value.slice().reverse());
    const settingsStore = useSettingsStore();
    const { bubblesEnabled } = storeToRefs(settingsStore);

    return { bubblesEnabled, reversedPosts };
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
/* Общий контейнер */
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

/* Стили для карточек */
.posts-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1; /* Основное содержимое поверх пузырьков */
}

@media (max-width: 768px) {
    .main-container {
      margin-top: 70px;
    }
  }
</style>
