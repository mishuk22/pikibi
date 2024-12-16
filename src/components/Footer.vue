<template>
      <!-- Стрелка вверх (визуальный элемент) -->
      <div class="footer-arrow" v-if="isFooterVisible">
        ↑
      </div>
  
      <!-- Футер -->
      <div
        v-show="isFooterVisible"
        class="footer-container"
        @mouseenter="clearHideTimer"   
        @mouseleave="startHideTimer"   
      >
        <p>Это футер. Контент футера...</p>
      </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isFooterVisible: false,  // Показывать ли футер
        showTimer: null,  // Таймер для задержки появления футера
        hideTimer: null,  // Таймер для задержки исчезновения футера
      };
    },
    methods: {
      handleMouseMove(event) {
        // Проверка на нахождение курсора внизу экрана (на 100px от низа)
        const isCursorAtBottom = event.clientY >= window.innerHeight - 100;
  
        if (isCursorAtBottom && !this.isFooterVisible) {
          // Запускаем таймер для появления футера, если курсор находится внизу экрана
          this.showFooter();
        } else if (!isCursorAtBottom && this.isFooterVisible) {
          // Если курсор ушел, запускаем таймер для скрытия футера
          this.startHideTimer();
        }
      },
      showFooter() {
        // Если футер уже виден, не нужно ничего делать
        if (this.isFooterVisible) return;
  
        // Таймер для появления футера (1 секунда)
        this.showTimer = setTimeout(() => {
          this.isFooterVisible = true;
        }, 1000);
      },
      startHideTimer() {
        // Запускаем таймер для скрытия футера через 1 секунду
        if (this.hideTimer) {
          clearTimeout(this.hideTimer);  // Очищаем предыдущий таймер скрытия
        }
        this.hideTimer = setTimeout(() => {
          this.isFooterVisible = false;
        }, 1000);
      },
      clearHideTimer() {
        // Если курсор на футере, очищаем таймер скрытия
        if (this.hideTimer) {
          clearTimeout(this.hideTimer);
          this.hideTimer = null;
        }
      },
    },
    mounted() {
      // Добавляем обработчик для движения мыши по всему окну
      window.addEventListener('mousemove', this.handleMouseMove);
    },
    beforeDestroy() {
      // Убираем обработчик событий перед уничтожением компонента
      window.removeEventListener('mousemove', this.handleMouseMove);
      if (this.showTimer) {
        clearTimeout(this.showTimer); // Очищаем таймер при уничтожении компонента
      }
      if (this.hideTimer) {
        clearTimeout(this.hideTimer); // Очищаем таймер при уничтожении компонента
      }
    },
  };
  </script>
  
  <style scoped>
  .footer-arrow {
    z-index: 3;
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
    cursor: pointer;
    opacity: 1; /* Стрелка всегда видна */
    transition: opacity 0.5s ease;
  }
  
  .footer-container {
    z-index: 3;
    height: 500px;
    position: fixed;
    bottom: 0;
    left: 50%;
    width: 100%;  /* Футер на всю ширину */
    transform: translateX(-50%) translateY(100%);  /* Скрываем футер снизу */
    background-color: #333;
    color: #fff;
    padding: 10px;
    text-align: center;
    transition: transform 0.5s ease, opacity 0.3s ease-in-out;
    opacity: 0; /* Изначально скрыт */
  }
  
  .footer-container p {
    margin: 0;
    font-size: 16px;
  }
  
  /* Когда футер появляется, сдвигаем его вверх */
  .footer-container.v-enter-active,
  .footer-container.v-leave-active {
    transition: transform 0.5s ease, opacity 0.3s ease-in-out;
  }
  
  .footer-container.v-enter, 
  .footer-container.v-leave-to {
    transform: translateX(-50%) translateY(100%);
    opacity: 0;
  }
  
  .footer-container.v-enter-to, 
  .footer-container.v-leave {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
  </style>
  