<template>
  <div class="main-container">
    <!-- Анимация пузырьков -->
    <div class="background-container">
      <div class="bubbles">
        <div v-for="n in 30" :key="n" class="bubble" :style="getBubbleStyle()"></div>
      </div>
    </div>

    <Header></Header>

    <div class="post-details">
      <h1>{{ post.title }}</h1>
      <p><strong>Автор:</strong> {{ post.author }}</p>
      <p><strong>Дата:</strong> {{ post.date }}</p>
      <div class="post-text">{{ post.text }}</div>
      <div class="post-images" v-if="post.images.length > 0">
          <template v-if="post.images.length === 1">
            <img :src="post.images[0]" class="image" :alt="'Изображение 1'" @click="openModal(0)"/>
          </template>
          <template v-else>
            <div class="image-stack">
              <img :src="post.images[0]" class="top-image" :alt="'Изображение 1'" @click="openModal(0)"/>
              <img :src="post.images[1]" class="bottom-image" :alt="'Изображение 2'" @click="openModal(1)"/>
            </div>
          </template>
        </div>
      <div class="post-likes">Лайков: {{ post.likes }}</div>
    </div>
    <!-- Модальное окно для просмотра изображений -->
    <div v-if="showModal" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-btn" @click="closeModal">×</button>
        <img :src="post.images[currentImageIndex]" alt="Изображение" class="modal-image" />
        <button class="prev-btn" @click="prevImage">←</button>
        <button class="next-btn" @click="nextImage">→</button>
      </div>
    </div>
  </div>
</template>

<script>
import { posts } from "@/composables/usePosts"; // Ваш массив постов
import Header from "@/components/Header.vue";

export default {
  name: "PostDetails",
  components: {
    Header,
  },
  props: ["id"], // Получаем параметр id из маршрута
  data() {
    return {
      showModal: false, // Для отображения модального окна
      activeImage: 0, // Индекс активного изображения
    };
  },
  computed: {
    // Ищем пост по id
    post() {
      return posts.value.find((post) => post.id === parseInt(this.id));
    },
  },
  methods: {
    // Открытие модального окна
    openModal(index) {
      this.activeImage = index;
      this.showModal = true;
    },
    // Закрытие модального окна
    closeModal() {
      this.showModal = false;
    },
    // Переход к следующему изображению
    nextImage() {
      if (this.currentImageIndex < this.post.images.length - 1) {
        this.currentImageIndex++;
      } else {
        this.currentImageIndex = 0; // Зацикливаем на первом изображении
      }
    },
    // Переход к предыдущему изображению
    prevImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      } else {
        this.currentImageIndex = this.post.images.length - 1; // Зацикливаем на последнем изображении
      }
    },
    // Генерация случайных стилей для пузырьков
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
  },
};
</script>

<style scoped>
/* Основные стили */
.main-container {
  justify-items: center;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: rgb(20, 20, 20);
  color: white;
  overflow: hidden;
}

/* Анимация пузырьков */
.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
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
  animation: float 8s infinite;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

/* Анимация пузырьков */
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

/* Стили для контента */
.post-details {
  height: auto;
  position: relative;
  max-width: 800px;
  padding: 16px;
  padding-bottom: 30px;
  margin: 30px auto;
  background-color: rgb(33, 33, 33);
  color: white;
  border-radius: 10px;
  z-index: 1; /* Поверх пузырьков */
}

.post-images {
  margin-top: 30px;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.post-images img {
  margin-top: 30px;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.image-stack {
  position: relative;
  width: 100px;
  height: 100px;
}

.image {
  border: 2px solid #949494;
}

.image-stack .top-image {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  transform: translate(10px, -10px);
  border: 2px solid #949494;
}

.image-stack .bottom-image {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  border: 2px solid #949494;
}
  
  .image-folder {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: 14px;
    border-radius: 8px;
  }

  .post-likes {
    position: relative;
    margin-top: 70px;
  }

  .modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  width: 90%;
  max-width: 600px;
  padding: 16px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
}

.modal-content img {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: red;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
}

.prev-btn,
.next-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 30px;
  color: white;
  cursor: pointer;
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}
</style>
