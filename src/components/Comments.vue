<template>
    <div class="comments-container">
      <h3>Комментарии</h3>
      <div v-if="comments.length" class="comments-list">
        <div v-for="(comment, index) in comments" :key="index" class="comment">
          <div class="comment-header">
            <span class="comment-author">{{ comment.author }}</span>
            <span class="comment-date">{{ formatDate(comment.date) }}</span>
          </div>
          <p class="comment-text">{{ comment.text }}</p>
        </div>
      </div>
      <div v-else class="no-comments">Пока нет комментариев. Будьте первым!</div>
  
      <form @submit.prevent="addComment" class="add-comment-form">
        <textarea
          v-model="newComment.text"
          placeholder="Напишите комментарий..."
          required
          class="comment-input"
        ></textarea>
        <button type="submit" class="submit-button">Отправить</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    name: "Comments",
    props: {
      initialComments: {
        type: Array,
        default: () => [],
      },
    },
    setup(props) {
      const comments = ref([...props.initialComments]);
      const newComment = ref({ author: "", text: "", date: null });
  
      const addComment = () => {
        if (!newComment.value.text.trim()) {
          return; // Не добавляем пустой комментарий
        }
        comments.value.push({
          author: 'admin',
          text: newComment.value.text,
          date: new Date(),
        });
        newComment.value = { author: "", text: "", date: null }; // Очистка полей после добавления
      };
  
      const formatDate = (date) => {
        return new Date(date).toLocaleString("ru-RU", {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
      };
  
      return {
        comments,
        newComment,
        addComment,
        formatDate,
      };
    },
  };
  </script>
  
  <style scoped>
  .comments-container {
    margin-top: 10px;
    background-color: #272727;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
  }
  
  h3 {
    margin: 0 0 15px;
  }
  
  .comments-list {
    margin-bottom: 20px;
  }
  
  .comment {
    margin-bottom: 15px;
    padding: 10px;
    background-color: #363636;
    border: 1px solid #ddd;
    border-radius: 5px;
    color: white;
  }
  
  .comment-header {
    display: flex;
    justify-content: space-between;
    font-size: 0.9em;
    color: #d1d1d1;
    margin-bottom: 5px;
  }
  
  .comment-author {
    font-weight: bold;
  }
  
  .comment-text {
    margin: 0;
    color: #ffffff;
  }
  
  .no-comments {
    font-size: 0.9em;
    color: #ffffff;
    text-align: center;
  }
  
  .add-comment-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .comment-input
    {
    color: white;
    background-color: #363636;
    width: 100%;
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ddd;
    border-radius: 5px;
    }
  
  .submit-button {
    padding: 10px 20px;
    background-color: #3d3d3d;
    color: white;
    border: solid white 1px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .submit-button:hover {
    background-color: #2e2e2e;
  }
  </style>
  