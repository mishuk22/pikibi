<template>
    <div class="main-container">
      <!-- Анимация пузырьков -->
    <div v-show="bubblesEnabled" class="background-container">
      <div class="bubbles" :style="getBubbleStyle()" ref="bubbleContainer">
      </div>
    </div>
  
      <!-- Основное содержимое -->
      <Header></Header>
      <div class="form-container">
        <input v-model="title" type="text" class="title-input" placeholder="Заголовок..." />
        <div v-if="showMessage" class="message">
          {{ message }}
        </div>
        <textarea v-model="text" class="text-input" placeholder="Текст поста..."></textarea>
        <label for="file-upload" class="custom-file-upload">
          Загрузить изображение
        </label>
        <input id="file-upload" type="file" @change="onFileChange" multiple />
        <div class="image-preview">
          <div v-for="(image, index) in images" :key="index" class="image-preview-container">
            <img :src="image" alt="Preview" />
            <button @click="removeImage(index)" class="delete-image-button">Удалить</button>
          </div>
        </div>
        <button @click="submitPost" class="add-button">Опубликовать пост</button>
        <div v-for="(post, index) in posts" :key="index">
          <h4>Пост {{ index + 1 }}</h4>
          <h1>{{ post.title }}</h1>
          <pre>{{ post.text }}</pre>
          <div v-if="post.images.length">
            <img v-for="(img, imgIndex) in post.images" :src="img" :key="imgIndex" width="100" />
          </div>
          <p>{{ post.time }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useSettingsStore } from "@/stores/useSettingsStore";
  import { storeToRefs } from "pinia";
  import '@/assets/styles/animation-bubbles.css';
  import { ref } from 'vue';
  import { posts, savePostsToLocalStorage } from '@/composables/usePosts';
  import Header from '@/components/Header.vue';
  
  export default {
    name: 'CreatePost',
  
    components: {
      Header,
    },
  
    setup() {
      const settingsStore = useSettingsStore();
      const { bubblesEnabled } = storeToRefs(settingsStore);
      const title = ref('');
      const text = ref('');
      const images = ref([]);
      const showMessage = ref(false);
      const message = ref('');
      const author = 'admin';
      const likes = ref(0);
  
      const submitPost = () => {
        const trimmedTitle = title.value.trim();
        if (!trimmedTitle) {
          showMessage.value = true;
          message.value = 'Заголовок не может быть пустым!';
          setTimeout(() => {
            showMessage.value = false;
          }, 3000);
          return;
        }
  
        const newPost = {
          id: Date.now(),
          author,
          title: title.value,
          text: text.value,
          images: images.value,
          date: new Date().toLocaleDateString(),
          likes: likes.value,
        };
  
        posts.value.push(newPost);
        savePostsToLocalStorage();
        resetForm();
      };
  
      const onFileChange = (event) => {
        const files = event.target.files;
        for (let i = 0; i < files.length; i++) {
          const reader = new FileReader();
          reader.onload = (e) => {
            images.value.push(e.target.result);
          };
          reader.readAsDataURL(files[i]);
        }
      };
  
      const removeImage = (index) => {
        images.value.splice(index, 1);
      };
  
      const resetForm = () => {
        title.value = '';
        text.value = '';
        images.value = [];
      };
  
      return {
        bubblesEnabled,
        title,
        text,
        images,
        showMessage,
        message,
        submitPost,
        onFileChange,
        removeImage,
      };
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
  /* Основные стили */
  .main-container {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: rgb(20, 20, 20);
  color: white;
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden; /* Прячем лишние элементы за пределы страницы */
  }
  
  /* Контент формы */
  .form-container {
    z-index: 1;
    position: relative;
  }
  </style>
  