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
  import { ref } from 'vue';
  import { posts, savePostsToLocalStorage } from '@/composables/usePosts';
  import Header from '@/components/Header.vue';
  
  export default {
    name: 'CreatePost',
  
    components: {
      Header,
    },
  
    setup() {
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
  
      const getBubbleStyle = () => {
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
      };
  
      return {
        title,
        text,
        images,
        showMessage,
        message,
        submitPost,
        onFileChange,
        removeImage,
        getBubbleStyle,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Основные стили */
  .main-container {
    background-color: rgb(20, 20, 20);
    color: white;
    margin: 0;
    padding: 0;
    position: relative;
    overflow: hidden; /* Прячем лишние элементы за пределы страницы */
  }
  
  /* Фон пузырьков */
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
  
  /* Контент формы */
  .form-container {
    z-index: 1;
    position: relative;
  }
  </style>
  