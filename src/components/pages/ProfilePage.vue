<template>
  <MobileHeader logoSrc="/path-to-your-logo.png" />
    <div class="main-container">
        <!-- Анимация пузырьков -->
    <div v-show="bubblesEnabled" class="background-container">
      <div class="bubbles" :style="getBubbleStyle()" ref="bubbleContainer">
      </div>
    </div>
        <Header></Header>
     <div class="profile-container">
      <!-- Левая часть: Фото и профиль -->
      <div class="profile-left">
        <div class="profile-photo">
          <img :src="user.photo" alt="Фото профиля" />
        </div>
        <div v-if="!isEditing" class="profile-info">
          <h2>{{ user.nickname }}</h2>
          <p>{{ user.description }}</p>
          <div class="profile-buttons">
            <button @click="startEditing">Редактировать</button>
            <label class="photo-upload">
              Загрузить фото
              <input type="file" @change="changePhoto" accept="image/*" />
            </label>
          </div>
        </div>
        <div v-else class="profile-edit">
          <input v-model="editNickname" placeholder="Никнейм" />
          <textarea v-model="editDescription" placeholder="Описание профиля"></textarea>
          <div class="profile-buttons">
            <button @click="saveChanges">Сохранить</button>
            <button @click="cancelEditing">Отмена</button>
          </div>
        </div>
      </div>
  
      <!-- Правая часть: Вкладки -->
      <div class="profile-right">
        <div class="tabs">
          <button @click="activeTab = 'myPosts'" :class="{ active: activeTab === 'myPosts' }">
            Моё
          </button>
          <button @click="activeTab = 'subscriptions'" :class="{ active: activeTab === 'subscriptions' }">
            Подписки
          </button>
          <button @click="activeTab = 'favorites'" :class="{ active: activeTab === 'favorites' }">
            Понравившееся
          </button>
        </div>
        <div class="tab-content">
          <div v-if="activeTab === 'myPosts'">Мои посты...</div>
          <div v-if="activeTab === 'subscriptions'">Список подписок...</div>
          <div v-if="activeTab === 'favorites'">Понравившиеся посты...</div>
        </div>
      </div>
     </div>
    </div>
  </template>
  
  <script>
    import { useSettingsStore } from "@/stores/useSettingsStore";
    import { storeToRefs } from "pinia";
    import '@/assets/styles/animation-bubbles.css';
    import MobileHeader from "@/components/MobileHeader.vue";
    import Header from "@/components/Header.vue";
    import { ref } from "vue";
  
  export default {
    name: "Profile",
    components: {
    MobileHeader,
    Header,
    },
    setup() {
      const user = ref({
        photo: "src/assets/testImageSad.jpg", // Заглушка фото
        nickname: "admin",
        description: "Описание профиля",
      });
  
      const isEditing = ref(false);
      const editNickname = ref(user.value.nickname);
      const editDescription = ref(user.value.description);
      const activeTab = ref("subscriptions");
  
      const startEditing = () => {
        isEditing.value = true;
        editNickname.value = user.value.nickname;
        editDescription.value = user.value.description;
      };
  
      const saveChanges = () => {
        user.value.nickname = editNickname.value;
        user.value.description = editDescription.value;
        isEditing.value = false;
      };
  
      const cancelEditing = () => {
        isEditing.value = false;
      };
  
      const changePhoto = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            user.value.photo = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      };

        const settingsStore = useSettingsStore();
        const { bubblesEnabled } = storeToRefs(settingsStore);
  
      return {
        bubblesEnabled,
        user,
        isEditing,
        editNickname,
        editDescription,
        startEditing,
        saveChanges,
        cancelEditing,
        changePhoto,
        activeTab,
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
  /* Основной контейнер */
    .main-container {
        position: relative;
        width: 100%;
        min-height: 100vh;
        height: 100%;
        background-color: rgb(20, 20, 20);
        color: white;
        overflow: hidden;
    }
  .profile-container {
    position: relative;
    margin: 50px 20px;
    display: flex;
    gap: 20px;
    padding: 20px;
    background-color: rgb(33, 33, 33);
    border: 1px solid #ddd;
    border-radius: 10px;
    flex-wrap: wrap; /* Позволяет блокам переноситься на новую строку при недостатке места */
    box-sizing: border-box; /* Учитываем padding и border при расчёте размеров */
  }
  
  /* Левая часть */
  .profile-left {
    flex: 1 1 300px; /* Гибкая ширина с минимальной шириной 300px */
    max-width: 400px; /* Ограничиваем максимальную ширину */
    text-align: center;
    background-color: rgb(37, 37, 37);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .profile-photo img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }
  
  .profile-info h2 {
    margin: 0;
    font-size: 1.8em;
  }
  
  .profile-info p {
    font-size: 1em;
    color: #a7a7a7;
  }
  
  /* Кнопки */
  .profile-buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 10px;
  }
  
  .profile-buttons button,
  .photo-upload {
    padding: 8px 12px;
    border: solid white 1px;
    border-radius: 5px;
    background-color: #333;
    color: white;
    font-size: 14px;
    cursor: pointer;
  }
  
  .profile-buttons button:hover,
  .photo-upload:hover {
    background-color: #383838;
  }
  
  .photo-upload {
    display: inline-block;
    cursor: pointer;
  }
  
  .photo-upload input {
    display: none;
  }
  
  /* Стили для редактируемых полей */
  .profile-edit {
    display: flex;
    flex-direction: column;
    gap: 10px; /* Расстояние между полями */
    align-items: center; /* Центрирование элементов */
  }
  
  .profile-edit input,
  .profile-edit textarea {
    width: 100%; /* Заполняют всю доступную ширину */
    max-width: 300px; /* Ограничение ширины */
    background-color: #333333;
    color: white;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
  }
  
  .profile-edit textarea {
    resize: none; /* Отключение изменения размера */
    height: 80px; /* Фиксированная высота */
  }
  
  .profile-edit button {
    margin-top: 10px;
  }
  
  /* Правая часть: вкладки */
  .profile-right {
    flex: 2 1 500px; /* Гибкая ширина с минимальной шириной 500px */
    background-color: rgb(37, 37, 37);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }
  
  .tabs button {
    padding: 8px 12px;
    border: solid white 1px;
    background-color: #333;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .tabs button.active {
    background-color: #424242;
    color: white;
  }
  
  .tab-content {
    padding: 10px;
    background-color: #333333;
    border: 1px solid #ddd;
    border-radius: 5px;
    min-height: 200px;
  }

  @media (max-width: 768px) {
    .main-container {
      margin-top: 70px;
    }
  }
  </style>
  
  