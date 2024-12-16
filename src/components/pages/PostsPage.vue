<template>
  <div class="main-container">
    <!-- Фон с пузырьками -->
    <div class="background-container">
      <div class="bubbles">
        <div v-for="n in 50" :key="n" class="bubble" :style="getBubbleStyle()"></div>
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
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { posts } from "@/composables/usePosts";
import PostCard from "@/components/PostCard.vue";
import { computed } from "vue";

export default {
  name: "PostsPage",
  components: {
    Header,
    Footer,
    PostCard,
  },
  setup() {
    const reversedPosts = computed(() => posts.value.slice().reverse());

    // Генерация стилей пузырьков
    const getBubbleStyle = () => {
      const size = Math.random() * (100 - 30) + 30; // Размер от 30 до 100px
      const top = Math.random() * 100; // Позиция сверху
      const left = Math.random() * 100; // Позиция слева
      const animationDelay = Math.random() * 5; // Задержка анимации
      const duration = Math.random() * (10 - 5) + 5; // Продолжительность анимации (5-10 сек)

      return {
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
        animationDelay: `${animationDelay}s`,
        animationDuration: `${duration}s`,
      };
    };

    return { reversedPosts, getBubbleStyle };
  },
};
</script>

<style scoped>
/* Общий контейнер */
.main-container {
  width: 100%;
  height: 100%;
  background-color: rgb(20, 20, 20);
  color: white;
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden; /* Прячем лишние элементы за пределы страницы */
}

/* Фон пузырьков */
.background-container {
  position: fixed; /* Фиксированное положение, чтобы фон не двигался */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Фон позади всего контента */
  pointer-events: none; /* Фон не мешает взаимодействию */
}

.bubbles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.bubble {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5); /* Свечение вокруг пузырьков */
  animation: float 8s infinite; /* Анимация всплытия */
}

/* Анимация всплытия пузырьков */
@keyframes float {
  0% {
    transform: translateY(100%) scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-50%) scale(1.2);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%) scale(0.8);
    opacity: 0;
  }
}

/* Стили для карточек */
.posts-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1; /* Основное содержимое поверх пузырьков */
}

/* Изоляция прозрачности карточек */
.posts-container, 
.posts-container > * {
  opacity: 1 !important; /* Принудительная отмена прозрачности */
  position: relative; /* Отделяем слои пузырьков */
  z-index: 2; /* Гарантируем, что карточки над пузырьками */
}

/* Задаём фон для контента */
.main-container > *:not(.background-container) {
  z-index: 1; /* Контент над фоном */
}
</style>
