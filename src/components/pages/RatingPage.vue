<template>
    <div class="post-list">
      <PostCard
        v-for="post in posts"
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
  </template>
  
  <script>
  import { posts } from '@/composables/usePosts'; // Импортируем глобальный массив постов
  import PostCard from '@/components/PostCard.vue';
  
  export default {
    components: { PostCard },
    setup() {
      // Здесь просто используем глобальное состояние posts
      return { posts };
    },
  };
  </script>
  
  <style scoped>
  .post-list {
    display: flex;
    flex-direction: column; /* Карточки выстраиваются вертикально */
    gap: 16px;
    padding: 16px;
  }
  </style>