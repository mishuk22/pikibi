<template>
    <header class="mobile-header">
      <button @click="toggleSidebar" class="menu-button">
        <span class="menu-icon"></span>
      </button>
      <div class="logo">
        <p>PIKIBI</p>
      </div>
    </header>
  
    <transition name="slide">
      <aside :class="{'sidebar': true, 'open': isSidebarOpen}">
        <button @click="toggleSidebar" class="close-button">×</button>
          <router-link to="/">
                <div class="sticky-panel-btn" :class="{'expanded':isHoweredStickyPanel}">
                    <h1 class="sticky-panel-text" :class="{'expanded':isHoweredStickyPanel}">
                  Главная
                  </h1>
                </div>
            </router-link>
            <router-link to="/posts">
                <div class="sticky-panel-btn" :class="{'expanded':isHoweredStickyPanel}">
                    <h1 class="sticky-panel-text" :class="{'expanded':isHoweredStickyPanel}">
                  Посты
                </h1>
                </div>
            </router-link>
            <router-link to="/rating">
                <div class="sticky-panel-btn" :class="{'expanded':isHoweredStickyPanel}">
                    <h1 class="sticky-panel-text" :class="{'expanded':isHoweredStickyPanel}">
                  Лучшее
                </h1>
                </div>
             </router-link>
            <router-link to="/subs">
                <div class="sticky-panel-btn" :class="{'expanded':isHoweredStickyPanel}">
                    <h1 class="sticky-panel-text" :class="{'expanded':isHoweredStickyPanel}">
                  Подписки
                </h1>
                </div>
            </router-link> 
            <router-link to="/create">
                <div class="sticky-panel-btn" :class="{'expanded':isHoweredStickyPanel}">
                    <h1 class="sticky-panel-text" :class="{'expanded':isHoweredStickyPanel}">
                  Создать
                </h1>
                </div>
            </router-link>
            <router-link to="/profile">
                <div class="sticky-panel-btn" :class="{'expanded':isHoweredStickyPanel}">
                    <h1 class="sticky-panel-text" :class="{'expanded':isHoweredStickyPanel}">
                  Профиль
                </h1>
                </div>
            </router-link>
            <router-link to="/help">
                <div class="sticky-panel-btn" :class="{'expanded':isHoweredStickyPanel}">
                    <h1 class="sticky-panel-text" :class="{'expanded':isHoweredStickyPanel}">
                  Помощь
                </h1>
                </div>
            </router-link>
            <router-link to="/">
                <div class="sticky-panel-btn" :class="{'expanded':isHoweredStickyPanel}">
                  <input type="text" class="search-input-panel" :class="{'expanded':isHoweredStickyPanel}" placeholder="Поиск..."/> 
                </div>
            </router-link>
      </aside>
    </transition>
  </template>
  
  <script>
  import { ref } from "vue";
  import logoSrc1 from "@/assets/icons/logoIcon.png";
  
  export default {
    name: "MobileHeader",
    components: {
        logoSrc: logoSrc1,
    },
    setup() {
      const isSidebarOpen = ref(false);
  
      const toggleSidebar = () => {
        isSidebarOpen.value = !isSidebarOpen.value;
      };
  
      return {
        isSidebarOpen,
        toggleSidebar,
      };
    },
  };
  </script>
  
  <style scoped>

.sticky-panel-btn {
    text-decoration: none;
    transition: width 0.3s ease, justify-content 0.3s ease;
    width: 100px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  .sticky-panel-btn a{
    text-decoration: none;
  }

  .sticky-panel-btn.expanded {
    text-decoration: none;
    transition: width 0.3s ease, justify-content 0.3s ease;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sticky-panel-text a:hover {
  text-decoration: none;
  font-family: '@components/LogoFont';
}
.sticky-panel-text {
    opacity: 1;
  z-index: 1011;
  font-family: '@components/LogoFont';
  color: white;
  text-decoration: none;
  cursor: default;
  font-size: 20px;  /* Стандартный размер шрифта */
  width: 100px;     /* Начальная ширина */
  height: 60px;     /* Начальная высота */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 0.3s ease, height 0.3s ease, font-size 0.3s ease;
}

/* Стиль для расширенной версии sticky-panel-text */
.sticky-panel-text.expanded {
    text-decoration: none;
    opacity: 1;
  font-size: 28px;  /* Увеличенный размер шрифта */
  width: 250px;     /* Расширенная ширина */
  height: 60px;     /* Оставляем постоянную высоту */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: width 0.3s ease, font-size 0.3s ease;
}

/* Для наведения */
.sticky-panel-text.expanded:hover {
  font-size: 30px;
  filter: brightness(70%);
  text-decoration: none;
}
    /* Мобильный хедер */
.mobile-header {
  flex-direction: row;
  position: absolute;
  text-decoration: none;
  display: none; /* Скрыт по умолчанию для больших экранов */
  z-index: 1001;
  text-decoration: none;
  opacity: 0;
  background-color: #131313;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid white;
  top: 0;
  left: 0;
  padding: 0 20px;
  animation: ani 0.5s forwards;
}

/* Стиль для кнопки меню */
.menu-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-icon {
  width: 20px;
  height: 2px;
  background: #fff;
  position: relative;
  display: block;
}

.menu-icon::before,
.menu-icon::after {
  content: "";
  width: 20px;
  height: 2px;
  background: #fff;
  position: absolute;
  left: 0;
}

.menu-icon::before {
  top: -6px;
}

.menu-icon::after {
  top: 6px;
}

/* Логотип */
.logo {
    margin-right: 20px;
}
.logo img {
  max-height: 40px;
  object-fit: contain;
}

/* Боковое меню */
.sidebar {
  text-decoration: none;
  position: fixed;
  top: 0;
  left: -300px; /* Изначально скрыто за пределами экрана */
  width: 200px;
  height: 100%;
  background-color: #131313;
  color: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  padding: 20px;
  z-index: 2000;
  transition: left 0.3s ease; /* Плавная анимация */
}

/* Когда меню открыто */
.sidebar.open {
  left: 0; /* Меню открыто, сдвигаем на экран */
}

/* Кнопка для закрытия меню */
.sidebar .close-button {
  background: none;
  border: none;
  font-size: 1.5em;
  color: #fff;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}

/* Стили для навигации внутри бокового меню */
.sidebar-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-nav ul li {
  margin-bottom: 10px;
}

.sidebar a {
  text-decoration: none;
  color: #fff;
  font-family: '@components/LogoFont';
}

/* Показываем мобильный хедер при ширине экрана 768px и меньше */
@media (max-width: 768px) {
  .mobile-header, .sidebar {
    display: flex; /* Показываем мобильный хедер */
    opacity: 1;    /* Делаем его видимым */
  }
}
  </style>
  