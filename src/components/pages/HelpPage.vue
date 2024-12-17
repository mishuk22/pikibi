<template>
    <div class="main-container">
        <!-- Анимация пузырьков -->
        <div v-show="bubblesEnabled" class="background-container">
            <div class="bubbles" :style="getBubbleStyle()" ref="bubbleContainer">
            </div>
        </div>
        <Header></Header>
        <div class="connection-container">
            <p>
                Для использования нашего сервиса, пожалуйста, ознакомьтесь с <a href="#" @click.prevent="showModal">Пользовательским соглашением</a>.
            </p>
            <p>
                <span class="large-text">Поддержка:</span>
            </p>
            <p @click="copyText($event)" class="copy-text">supportmail1@mail.com</p>
            <p @click="copyText($event)" class="copy-text">supportmail2@mail.com</p>
            <p @click="copyText($event)" class="copy-text">supportmail3@mail.com</p>
            <p>
                <span class="large-text">По поводу рекламы:</span>
            </p>
            <p @click="copyText($event)" class="copy-text">advertisement@mail.com</p>
            <p>
                <span class="large-text">Пожелания и предложения:</span>
            </p>
            <p @click="copyText($event)" class="copy-text">suggestions@mail.com</p>
        </div>
        <div v-if="showNotification" class="notification">
                Адрес скопирован!
            </div>
        <div class="settings-container">
            <h1 class="settings-text">Настройки</h1>
            <!-- Используем явный вызов метода для обновления значения -->
            <label>
                <input 
                    type="checkbox" 
                :checked="bubblesEnabled" 
                    @change="toggleBubbles"
                />
            Включить анимацию на заднем фоне
            </label>
        </div>
        <div v-if="isModalVisible" class="modal-overlay" @click="closeModal">
            <div class="modal-content" @click.stop>
                <h2>Пользовательское соглашение</h2>
                    <div class="agreement-text">
                        <p> <span class="large-text">1. Общие положения</span><br><br>

1.1. Данное Пользовательское соглашение (далее – «Соглашение») регулирует права и обязанности пользователей (далее – «Пользователь») и Администрации сайта (далее – «Администрация») в процессе использования онлайн-форума, расположенного по адресу [вставьте адрес сайта] (далее – «Форум»).<br>

1.2. Используя Форум, Пользователь подтверждает свое согласие с условиями настоящего Соглашения. В случае несогласия с любыми условиями, Пользователь должен прекратить использование Форума.<br>

1.3. Администрация оставляет за собой право изменять условия Соглашения в любое время. Обновления будут публиковаться на этой странице, и они вступают в силу с момента публикации.<br><br><br>

2. <span class="large-text">Права и обязанности пользователей</span><br><br>

2.1. Пользователь имеет право:<br>

Регистрироваться и создавать свою учетную запись на Форуме.<br>
Участвовать в обсуждениях, задавать вопросы, оставлять ответы и комментарии.<br>
Создавать темы и публикации, если это не нарушает правила форума.<br>
Использовать доступные функции Форума в соответствии с его назначением.<br><br>
2.2. Пользователь обязуется:<br>

Соблюдать правила форума и этику общения.<br>
Не публиковать оскорбительные, агрессивные или ненавистнические материалы.<br>
Не размещать контент, нарушающий авторские права, законы или интересы третьих лиц.<br>
Уважать других участников форума и не допускать личных атак или угроз.<br><br>
2.3. Пользователь не имеет права:<br>

Размещать спам, рекламу или ссылки на сторонние сайты, если это не согласовано с Администрацией.<br>
Использовать Форум для распространения ложной или вводящей в заблуждение информации.<br>
Нарушать безопасность форума или пытаться получить несанкционированный доступ к аккаунтам других пользователей.<br><br><br>
3. <span class="large-text">Права и обязанности Администрации</span><br><br>

3.1. Администрация имеет право:<br>

Модерировать контент на Форуме, удалять сообщения, которые нарушают правила форума.<br>
Ограничивать доступ к Форуму или блокировать учетную запись пользователя за нарушение правил.<br>
Вносить изменения в функционал Форум или в данный документ.<br><br>
3.2. Администрация обязуется:<br>

Обеспечить бесперебойную работу Форума в пределах своих возможностей.<br>
Защищать персональные данные пользователей в соответствии с действующим законодательством.<br><br><br>
4. <span class="large-text">Правила публикации контента</span><br><br>

4.1. Пользователь обязуется публиковать только тот контент, на который он имеет права, или для которого он получил соответствующее разрешение.<br><br>

4.2. Запрещается размещение контента, который:<br>

Нарушает законы о защите авторских прав, торговых марок, патентов и других интеллектуальных прав.<br>
Содержит нецензурные выражения, оскорбления, угрозы, дискриминацию по любому признаку.<br>
Пропагандирует насилие, экстремизм, расизм, терроризм.<br>
Нарушает приватность других пользователей, включая публикацию личных данных без их согласия.<br><br><br>
5. <span class="large-text">Ответственность сторон</span><br><br>

5.1. Администрация не несет ответственности за содержание сообщений пользователей, опубликованных на Форуме.<br>

5.2. Пользователь несет полную ответственность за размещенный контент и действия, связанные с его аккаунтом.<br>

5.3. Администрация не несет ответственности за любой ущерб, причиненный Пользователю в связи с использованием Форума.<br><br><br>

6. <span class="large-text">Защита персональных данных</span><br><br>

6.1. В процессе регистрации на Форуме и использования его функций Пользователь предоставляет определенную информацию (например, имя, адрес электронной почты).<br>

6.2. Администрация обязуется защищать персональные данные Пользователя в соответствии с действующим законодательством о защите данных.<br>

6.3. Администрация не будет передавать персональные данные Пользователя третьим лицам без его согласия, за исключением случаев, предусмотренных законом.<br><br><br>

7. <span class="large-text">Изменения и прекращение использования форума</span><br><br>

7.1. Администрация оставляет за собой право изменить или закрыть Форум в любой момент, без предварительного уведомления пользователей.<br>

7.2. Пользователь может прекратить использование Форума в любое время, удалив свою учетную запись или прекратив посещать сайт.<br><br><br>

8. <span class="large-text">Заключительные положения</span><br><br>

8.1. Все вопросы, не урегулированные настоящим Соглашением, регулируются в соответствии с действующим законодательством [страны/региона].<br>

8.2. В случае возникновения споров между Администрацией и Пользователем, стороны будут стремиться разрешить их мирным путем.<br>
</p>
                        <!-- Добавьте весь текст соглашения здесь -->
                    </div>
                <button @click="closeModal">Закрыть</button>
            </div>
        </div>
    </div>
</template>
  
  <script>
  import { useSettingsStore } from "@/stores/useSettingsStore";
  import { storeToRefs } from "pinia";
  import Header from "@/components/Header.vue";
  import '@/assets/styles/animation-bubbles.css';
  
  export default {
    name: "HelpPage",
    components: {
    Header,
    },
    data() {
    return {
        showNotification: false,
        isModalVisible: false,  // Состояние для отображения модального окна
    };
    },
    setup() {
      const settingsStore = useSettingsStore();
      const { bubblesEnabled } = storeToRefs(settingsStore);
  
      const toggleBubbles = () => {
        settingsStore.toggleBubbles();
      };
  
      return { bubblesEnabled, toggleBubbles };
    },
    mounted() {
    this.createBubbles();
    },
    methods: {
    copyText(event) {
        const textToCopy = event.target.textContent || event.target.innerText;

      // Проверяем, поддерживается ли Clipboard API
      if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            this.showNotification = true; // Показываем уведомление

            // Через 2 секунды скрываем уведомление
            setTimeout(() => {
              this.showNotification = false;
            }, 2000);
          })
          .catch((error) => {
            console.error("Ошибка при копировании текста: ", error);
            alert("Не удалось скопировать текст.");
          });
      } else {
        alert("Clipboard API не поддерживается в вашем браузере.");
      }
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
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

  .notification {
    position: fixed; /* Фиксируем уведомление на экране */
    top: 50%; /* По центру по вертикали */
    left: 50%; /* По центру по горизонтали */
    transform: translate(-50%, -50%); /* Сдвигаем элемент на 50% от его размера, чтобы точно центрировать */
    background-color: #131313;
    color: white;
    padding: 15px 30px;
    border-radius: 10px;
    border: solid white 1px;
    font-size: 16px;
    text-align: center;
    z-index: 9999; /* Убедитесь, что уведомление будет поверх других элементов */
    max-width: 80%;
    min-width: 200px;
}
  
.copy-text {
  cursor: pointer;
  color: #e7e7e7;
  text-decoration: underline;
}

.copy-text:hover {
  color: #a5a5a5;
}
  
  /* Стили для скроллбара */
::-webkit-scrollbar {
  width: 10px; /* Ширина вертикального скроллбара */
  height: 10px; /* Высота горизонтального скроллбара */
}

/* Стили для полосы прокрутки */
::-webkit-scrollbar-track {
  background-color: #222222; /* Цвет фона полосы прокрутки */
  border-radius: 10px; /* Радиус скругления */
}

/* Стили для самой полосы прокрутки */
::-webkit-scrollbar-thumb {
  background-color: #202020; /* Цвет самой полосы прокрутки */
  border-radius: 10px; /* Скругление углов */
  border: 1px solid #f1f1f1; /* Обводка вокруг полосы прокрутки */
}

/* Стили для полосы прокрутки при наведении */
::-webkit-scrollbar-thumb:hover {
  background-color: #181818; /* Цвет полосы при наведении */
}

.large-text {
font-size: 20px;
    }


a {
  color: #cccccc;
  cursor: pointer;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный черный фон */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Убедитесь, что модальное окно поверх других элементов */
}

/* Модальное окно */
.modal-content {
  background-color: #131313;
  padding: 20px;
  border-radius: 10px;
  border: solid white 1px;
  width: 80%; /* Ширина модального окна */
  max-width: 800px; /* Максимальная ширина */
  max-height: 80vh; /* Максимальная высота окна */
  overflow: hidden; /* Скрываем элементы, выходящие за пределы окна */
  display: flex;
  flex-direction: column;
}

/* Заголовок соглашения */
.modal-content h2 {
  margin-top: 0;
  text-align: center;
}

/* Контейнер для текста соглашения с прокруткой */
.agreement-text {
  max-height: 60vh; /* Максимальная высота контейнера с текстом */
  overflow-y: auto; /* Вертикальная прокрутка, если текст не помещается */
  margin-bottom: 20px;
}

/* Кнопка закрытия */
button {
  align-self: center;
  padding: 10px 20px;
  background-color: #0f0f0f;
  color: white;
  border: solid 1px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #070707;
}

  .settings-container, .connection-container {
    position: relative;
    z-index: 1;
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background: #222;
    color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
  
  .settings-text {
    margin: 0;
    margin-bottom: 10px;
  }
  
  label {
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  input[type="checkbox"] {
  /* Убираем стандартный стиль чекбокса */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  background-color: #ddd; /* Цвет фона чекбокса */
  border: 2px solid #888; /* Цвет рамки */
  border-radius: 4px;
  position: relative;
  cursor: pointer;
}

input[type="checkbox"]:checked {
  background-color: grey; /* Цвет фона при активном состоянии */
}

input[type="checkbox"]:checked::after {
  content: "✓"; /* Символ галочки */
  position: absolute;
  right: 2px;
  top: -2px;
  font-size: 16px;
  color: white; /* Цвет галочки */
}

</style>
  