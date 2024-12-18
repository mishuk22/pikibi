<template>
  <router-link :to="{ name: 'PostDetails', params: { id: id } }" class="post-link">
    <div class="post-card">
      <div class="post-header">
        <h3>{{ title }}</h3>
        <p class="post-author">Автор: {{ author }}</p>
        <p class="post-date">{{ date }}</p>
      </div>
      <div class="post-body">
        <p class="post-text">{{ truncatedText }}</p>
        <div class="post-images" v-if="images.length > 0">
          <template v-if="images.length === 1">
            <img :src="images[0]" class="image" :alt="'Изображение 1'" />
          </template>
          <template v-else>
            <div class="image-stack">
              <img :src="images[0]" class="top-image" :alt="'Изображение 1'" />
              <img :src="images[1]" class="bottom-image" :alt="'Изображение 2'" />
            </div>
          </template>
        </div>
      </div>
      <div class="post-footer">
        <div class="post-likes">❤️ {{ likes }}</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    id: Number,
    author: String,
    date: String,
    title: String,
    text: String,
    images: {
      type: Array,
      required: true,
    },
    likes: Number,
  },

  computed: {
    truncatedText() {
      return this.text.length > 50 ? this.text.slice(0, 80) + "..." : this.text;
    },
  },
};
</script>
  
  <style scoped>
  .post-card {
  position: relative;
  opacity: 1;
  margin-top: 15px;
  margin-bottom: 10px;

  max-width: 600px;
  background-color: rgb(33, 33, 33);
  color: white;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 10px;
  overflow: hidden;
  padding: 16px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
}

/* Эффект увеличения и затемнения при наведении */
.post-card:hover {
  transform: scale(1.05); /* Увеличение */
  background-color: rgba(20, 20, 20, 0.9); /* Затемнение */
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4); /* Увеличение тени */
}

  .post-link {
  display: block; /* Гарантирует, что ссылка занимает всю область */
  text-decoration: none;
  color: inherit;
}
  
  .post-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  
  .post-author {
    font-weight: bold;
    font-size: 16px;
  }
  
  .post-date {
    font-size: 14px;
    color: gray;
  }
  
  .post-title {
    font-size: 20px;
    font-weight: bold;
    margin: 8px 0;
  }
  
  .post-text {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }
  
  .post-images img {
  width: 100px;
  height: 100px;
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
  
  .post-footer {
    display: flex;
    justify-content: flex-end;
  }
  
  .post-likes {
    color: rgb(220, 50, 50);
    font-size: 14px;
  }
  </style>

  