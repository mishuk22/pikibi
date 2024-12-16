import { ref } from 'vue';

// Загружаем посты из localStorage, если они есть, иначе инициализируем пустой массив
export const posts = ref(JSON.parse(localStorage.getItem('posts')) || []);

// Функция для сохранения постов в localStorage
export const savePostsToLocalStorage = () => {
  localStorage.setItem('posts', JSON.stringify(posts.value));
};

