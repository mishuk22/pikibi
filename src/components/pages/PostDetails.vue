<template>
  <MobileHeader logoSrc="/path-to-your-logo.png" />
  <div class="main-container">
    <!-- Анимация пузырьков -->
    <div v-show="bubblesEnabled" class="background-container">
      <div class="bubbles" :style="getBubbleStyle()" ref="bubbleContainer">
      </div>
    </div>

    <Header></Header>
    <MobileHeader logoSrc="/path-to-your-logo.png" />

    <div class="post-details">
      <h1>{{ post.title }}</h1>
      <p><strong>Автор:</strong> {{ post.author }}</p>
      <p><strong>Дата:</strong> {{ post.date }}</p>
      <div class="post-text">{{ post.text }}</div>
      <div class="post-images" v-if="post.images.length > 0">
          <template v-if="post.images.length === 1">
            <img :src="post.images[0]" class="image" :class="{ fixed: isHoweredImage }" :alt="'Изображение 1'" @click="openModal(0)"
            @mouseenter="isHoweredImage = true" @mouseleave="isHoweredImage = false"/>
          </template>
          <template v-else>
            <div class="image-stack">
              <img :src="post.images[0]" class="top-image" :class="{ fixed: isHoweredImage }" :alt="'Изображение 1'" @click="openModal(0)"
              @mouseenter="isHoweredImage = true" @mouseleave="isHoweredImage = false"/>
              <img :src="post.images[1]" class="bottom-image" :class="{ fixed: isHoweredImage }" :alt="'Изображение 2'" @click="openModal(1)"
              @mouseenter="isHoweredImage = true" @mouseleave="isHoweredImage = false"/>
            </div>
          </template>
        </div>
      <div class="post-likes">Лайков: {{ post.likes }}</div>
      <Comments :initialComments="comments" />
    </div>
    <!-- Модальное окно для просмотра изображений -->
    <div v-if="showModal" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <img :src="post.images[currentImageIndex]" alt="Изображение" class="modal-image" />
      </div>
        <button class="prev-btn" @click="prevImage">←</button>
        <button class="next-btn" @click="nextImage">→</button>
    </div>
  </div>
</template>

<script>
import Comments from "@/components/Comments.vue";
import { useSettingsStore } from "@/stores/useSettingsStore";
import { storeToRefs } from "pinia";
import { posts } from "@/composables/usePosts"; // Массив постов
import MobileHeader from "@/components/MobileHeader.vue";
import Header from "@/components/Header.vue";
import '@/assets/styles/animation-bubbles.css';

export default {
  name: "PostDetails",
  components: {
    MobileHeader,
    Header,
    Comments,
  },
  setup() {
    const settingsStore = useSettingsStore();
    const { bubblesEnabled } = storeToRefs(settingsStore);
    return { bubblesEnabled };
  },  
  props: ["id"], // Получаем параметр id из маршрута
  data() {
    return {
      comments: [
        { author: "Иван", text: "Отличный пост!", date: new Date() },
        { author: "Мария", text: "Спасибо за информацию!", date: new Date() },
      ],
      showModal: false, // Для отображения модального окна
      currentImageIndex: 0,  // Индекс активного изображения
      isHoweredImage: false
    };
  },
  computed: {
    // Ищем пост по id
    post() {
      return posts.value.find((post) => post.id === parseInt(this.id));
    },
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
  height: 100%;
  background-color: rgb(20, 20, 20);
  color: white;
  overflow: hidden;
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
  width: 200px;
  height: 200px;
}

.image {
  border: 2px solid #949494;
}

.image.fixed {
  filter:brightness(70%);
  width: 210px;
  height: 210px;
  transition: width 0.2s ease, height 0.2s ease, filter 0.2s ease;
}

.image-stack .top-image {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  transform: translate(10px, -10px);
  border: 2px solid #949494;
}

.image-stack .top-image.fixed,
.image-stack .bottom-image.fixed {
  filter:brightness(70%);
  width: 210px;
  height: 210px;
  transition: width 0.2s ease, height 0.2s ease, filter 0.2s ease;
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

  .image-folder:hover {
    filter:brightness(70%);
    width: 110px;
    height: 110px;
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
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  display: flex;
  position: relative;
  max-width: 70%;
  max-height: 70%;
  margin-bottom: 50px;
}

.modal-image {
  display: flex;
  width: 100%;
  height: 550px;
  object-fit: contain;
  border-radius: 8px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 30px;
  color: white;
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

@media (max-width: 768px) {
    .main-container {
      margin-top: 70px;
    }
  }
</style>
