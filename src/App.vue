<template>
    <router-view></router-view>
  </template>
  
  <script>
  
  export default {
    name: 'App',
    components:{ 
    }
  }
  </script>
  <style>
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
  </style>
  