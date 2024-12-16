<template>
  <div v-if="isSidebarVisible" class="sidebar-add" :class="{ fixed: isSidebarFixed }"
  @mouseenter="isHoweredAddPanel = true" @mouseleave="isHoweredAddPanel = false">
    <div class="add-text" :class="{ fixed: isHoweredAddPanel }"> Здесь могла быть ваша реклама! </div>
  </div>
  <!-- Sticky Panel -->
    <div v-if="isSidebarVisible" class="sidebar" :class="{ fixed: isSidebarFixed }" 
    @mouseenter="isHoweredStickyPanel = true" @mouseleave="isHoweredStickyPanel = false">
        <div className="sticky-panel-menu"> 
          <div className="logo-img-container">
       <!-- <h2 className="logo2">PIKIBI</h2> -->
        <img :src="icon_logo" alt="Png_logo" class="logo-img"/> <!--Logo icon-->
      </div>
          <router-link to="/">
                <div class="sticky-panel-btn" :class="{'expanded':isHoweredStickyPanel}">
                  <div class="image-container">
                    <img :src="icon_main_page"  alt="Png_main_page" 
                    class="image1" height="85%" width="85%"/> <!--Main page icon-->
                  </div>
                    <h1 class="sticky-panel-text" :class="{'expanded':isHoweredStickyPanel}">
                  Главная
                  </h1>
                </div>
            </router-link>
            <router-link to="/posts">
                <div class="sticky-panel-btn" :class="{'expanded':isHoweredStickyPanel}">
                  <div class="image-container">
                    <img :src="icon_main_list"  alt="Png_main_list" 
                    class="image2" height="65%" width="65%"/> <!--Main list icon-->
                  </div>
                    <h1 class="sticky-panel-text" :class="{'expanded':isHoweredStickyPanel}">
                  Посты
                </h1>
                </div>
            </router-link>
            <router-link to="/rating">
                <div class="sticky-panel-btn" :class="{'expanded':isHoweredStickyPanel}">
                  <div class="image-container">
                    <img :src="icon_rating_list"  alt="Png_rating_list" 
                    class="image" height="80%" width="80%"/> <!--Rating list icon-->
                  </div>
                    <h1 class="sticky-panel-text" :class="{'expanded':isHoweredStickyPanel}">
                  Лучшее
                </h1>
                </div>
             </router-link>
            <router-link to="/subs">
                <div class="sticky-panel-btn" :class="{'expanded':isHoweredStickyPanel}">
                  <div class="image-container">
                    <img :src="icon_sub_list"  alt="Png_sub_list" 
                    class="image" height="80%" width="80%"/> <!--Sub list icon-->
                  </div>
                    <h1 class="sticky-panel-text" :class="{'expanded':isHoweredStickyPanel}">
                  Подписки
                </h1>
                </div>
            </router-link> 
            <router-link to="/create">
                <div class="sticky-panel-btn" :class="{'expanded':isHoweredStickyPanel}">
                  <div class="image-container">
                    <img :src="icon_plus_btn"  alt="Png_plus_btn" 
                    class="image" height="80%" width="80%"/> <!--Plus button icon-->
                  </div>
                    <h1 class="sticky-panel-text" :class="{'expanded':isHoweredStickyPanel}">
                  Создать
                </h1>
                </div>
            </router-link>
            <router-link to="/profile">
                <div class="sticky-panel-btn" :class="{'expanded':isHoweredStickyPanel}">
                  <div class="image-container">
                    <img :src="icon_profile_btn"  alt="Png_profile_btn" 
                    class="image3" height="75%" width="75%"/> <!--Profile button icon-->
                  </div>
                    <h1 class="sticky-panel-text" :class="{'expanded':isHoweredStickyPanel}">
                  Профиль
                </h1>
                </div>
            </router-link>
            <router-link to="/help">
                <div class="sticky-panel-btn" :class="{'expanded':isHoweredStickyPanel}">
                  <div class="image-container">
                    <img :src="icon_help_btn"  alt="Png_help_btn" 
                    class="image" height="80%" width="80%"/> <!--Help button icon-->
                  </div>
                    <h1 class="sticky-panel-text" :class="{'expanded':isHoweredStickyPanel}">
                  Помощь
                </h1>
                </div>
            </router-link>
            <router-link to="/">
                <div class="sticky-panel-btn" :class="{'expanded':isHoweredStickyPanel}">
                  <div class="image-container">
                    <img :src="icon_search_btn"  alt="Png_search_btn" 
                    class="image" height="80%" width="80%"/> <!--Search button icon-->
                  </div>
                  <input type="text" class="search-input-panel" :class="{'expanded':isHoweredStickyPanel}" placeholder="Поиск..."/> 
                </div>
            </router-link>
        </div>
    </div>
    <!-- Header -->
    <header ref="header" className="header">
      <!-- Added link in logo to main page --> 
      <router-link to="/">
        <div className="logo-container">
          <h1 className="logo">PIKIBI</h1>
          <img :src="icon_logo" alt="Png_logo" class="logo-img"/> <!--Logo icon-->
        </div>
      </router-link>
      <!-- Main menu on Header -->
      <div className="header-main-menu"> 
            <router-link to="/">
                <div class="main-page-link">
                    <img :src="icon_main_page"  alt="Png_main_page" 
                    class="image1" height="85%" width="85%"/> <!--Main page icon-->
                </div>
            </router-link>
            <router-link to="/posts">
                <div class="main-list-link">
                    <img :src="icon_main_list"  alt="Png_main_list" 
                    class="image2" height="65%" width="65%"/> <!--Main list icon-->
                </div>
            </router-link>
            <router-link to="/rating">
                <div class="rating-list-link">
                    <img :src="icon_rating_list"  alt="Png_rating_list" 
                    class="image" height="80%" width="80%"/> <!--Rating list icon-->
                </div>
             </router-link>
            <router-link to="/subs">
                <div class="sub-list-link">
                    <img :src="icon_sub_list"  alt="Png_sub_list" 
                    class="image" height="80%" width="80%"/> <!--Sub list icon-->
                </div>
            </router-link> 
      </div>
      <div class="header-profile-menu" :class="{'expanded':isHowered}">
        <!-- Search container begin -->
        <div class="search-container" :class="{'expanded':isHowered}" @mouseenter="showInput, isHowered = true" @mouseleave="hideInput, isHowered = false">
          <input type="text" class="search-input" :class="{'expanded':isHowered}" placeholder="Поиск..."/> 
          <router-link to="/">
                <div class="search-button">
                    <img :src="icon_search_btn"  alt="Png_search_btn" 
                    class="image" height="80%" width="80%"/> <!--Search button icon-->
                </div>
            </router-link>
        </div>
        <!-- Search container end -->
            <router-link to="/create">
                <div class="plus-button">
                    <img :src="icon_plus_btn"  alt="Png_plus_btn" 
                    class="image" height="80%" width="80%"/> <!--Plus button icon-->
                </div>
            </router-link>
            <router-link to="/profile">
                <div class="profile-button">
                    <img :src="icon_profile_btn"  alt="Png_profile_btn" 
                    class="image3" height="75%" width="75%"/> <!--Profile button icon-->
                </div>
            </router-link>
            <router-link to="/help">
                <div class="help-button">
                    <img :src="icon_help_btn"  alt="Png_help_btn" 
                    class="image" height="80%" width="80%"/> <!--Help button icon-->
                </div>
            </router-link>
      </div>
    </header>
  </template>
  
<script>
  import '@/assets/styles/header-stylesheet.css'
/* Import icons begin*/
  import importMainPageIconOff from '@/assets/icons/homeIconWhite.png';
  import importMainListIconOff from '@/assets/icons/mainListIconWhite.png';
  import importRatingListIconOff from '@/assets/icons/ratingIconWhite.png';
  import importSubListIconOff from '@/assets/icons/subMarkIconWhite.png';
  import importSearchIconOff from '@/assets/icons/searchIconVar1White.png';
  import importPlusIconOff from '@/assets/icons/plusIconWhite.png';
  import importProfileIconOff from '@/assets/icons/profileIconWhite.png';
  import importHelpIconOff from '@/assets/icons/questionIconWhite.png';
  import importLogoIcon from '@/assets/icons/logoIcon.png';
  /* Import icons end*/

  export default {
    name: 'Header',
    data() {
        return {
            /*Initialization icons begin*/
            icon_main_page: importMainPageIconOff,
            icon_main_list: importMainListIconOff,
            icon_rating_list: importRatingListIconOff,
            icon_sub_list: importSubListIconOff,
            icon_search_btn: importSearchIconOff,
            icon_plus_btn: importPlusIconOff,
            icon_profile_btn: importProfileIconOff,
            icon_help_btn: importHelpIconOff,
            icon_logo: importLogoIcon,
            /*Initialization icons end*/

            /*StickyPanel logic flags*/
            isSidebarFixed: false,
            isSidebarVisible: false,

            isInputVisible: false,
            isHowered: false,
            isHoweredStickyPanel: false,
            isHoweredAddPanel: false,
        };
    },
    /* Realize StickyPanel logic begin*/
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const header = this.$refs.header;
            if (header.getBoundingClientRect().bottom < 0) {
                this.isSidebarFixed = true;
                this.isSidebarVisible = true;
            }   else {
                this.isSidebarFixed = false;
                this.isSidebarVisible = false;
            }
        },
        /* Realize StickyPanel logic end*/

        
        /* Realize SearchPanel logic begin*/
        showInput() {
            setTimeout(() => {
              this.isHowered = true;
            }, 50000); // 0.5s
        },
        hideInput() {
          setTimeout(() => {
              this.isHowered = false;
            }, 50000);
        },
        /* Realize SearchPanel logic end*/
    },
  };
</script>

<style scoped>
.sidebar-add {
    display: flex; /* Включаем Flexbox */
    flex-direction: column; /* Элементы будут располагаться в столбик (по умолчанию это row) */
    align-items: center; /* Горизонтальное выравнивание по центру */
    justify-content: center; /* Вертикальное выравнивание по центру */
    opacity: 0;
    animation: ani 2.5s forwards;
    width: 100px;
    height: 100vh;
    background-color: #070707;
    position: absolute;
    top: 0;
    right: 0;
}

.sidebar-add.fixed {
    transition: position 0.3s ease, width 0.5s ease;
    background-color: #070707;
    position: fixed;
    border-left: solid white;
    display: flex; /* Повторно задаем Flexbox, если вдруг он был перезаписан */
    align-items: center; /* Горизонтальное выравнивание по центру */
    justify-content: center; /* Вертикальное выравнивание по центру */
}

.add-text {
    transition: font-size 0.5s ease;
    font-family: '@components/LogoFont';
    font-size: 36px;
    transform: rotate(-90deg); /* Поворот текста */
    white-space: nowrap; /* Запрещаем перенос текста */
}
    @keyframes ani {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }

  .add-text.fixed {
    transition: font-size 0.5s ease;
    font-size: 45px;
  }
  .sidebar-add.fixed:hover {
    transition: width 0.5s ease;
    width: 250px;
  }


  .bubbles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none; /* Блокируем взаимодействие с пузырьками */
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bubble {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  animation: bubbleAnimation 6s infinite;
  opacity: 0;
}

@keyframes bubbleAnimation {
  0% {
    transform: scale(0.2) translateY(100%);
    opacity: 1;
  }
  50% {
    transform: scale(1.2) translateY(-50vh);
    opacity: 0.5;
  }
  100% {
    transform: scale(0) translateY(-100%);
    opacity: 0;
  }
}
</style>
  