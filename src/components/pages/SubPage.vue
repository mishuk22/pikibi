<template>
    <div class="main-container">
      <Header></Header>
      <MobileHeader logoSrc="/path-to-your-logo.png" />
      <div class="form-container">
        <input v-model="title" type="text" class="title-input" placeholder="Заголовок..."/>
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
            <img :src="image" alt="Preview"/>
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
  import { posts, savePostsToLocalStorage } from '@/composables/usePosts'; // Импортируем глобальный массив постов
  import Header from '@/components/Header.vue';
  import MobileHeader from "@/components/MobileHeader.vue";
  import '@/assets/styles/create-page-stylesheet.css';
  
  export default {
    name: 'CreatePost',
  
    components: {
      MobileHeader,
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
      const date = ref('');
  
      // Функция для добавления нового поста
      const submitPost = () => {
        const trimmedTitle = title.value.trim();
        if (!trimmedTitle) {
          showMessage.value = true;
          message.value = 'Заголовок не может быть пустым!';
          setTimeout(() => { showMessage.value = false; }, 3000);
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
  
        posts.value.push(newPost); // Добавляем пост в глобальный массив
  
        // Сохраняем посты в localStorage
        savePostsToLocalStorage();
  
        // Очищаем форму
        resetForm();
      };
  
      // Обработка загрузки изображений
      const onFileChange = (event) => {
        const files = event.target.files;
        for (let i = 0; i < files.length; i++) {
          const reader = new FileReader();
          reader.onload = (e) => {
            images.value.push(e.target.result); // Загружаем изображение в массив
          };
          reader.readAsDataURL(files[i]);
        }
      };
  
      // Удаление изображения из предварительного просмотра
      const removeImage = (index) => {
        images.value.splice(index, 1);
      };
  
      // Очистка формы после отправки
      const resetForm = () => {
        title.value = '';
        text.value = '';
        images.value = [];
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
      };
    },
  };
  </script>
  
  <style scoped>
  /* Ваши стили */
  </style>
  