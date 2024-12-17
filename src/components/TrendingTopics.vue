<template>
    <section class="trending-topics">
      <h2>Актуальные обсуждения</h2>
      <ul>
        <li>🔥 <a href="#">Лучшие фильмы этого месяца</a> — 120 комментариев</li>
        <li>💡 <a href="#">Как начать изучать программирование?</a> — 85 комментариев</li>
        <li>✈️ <a href="#">Мой опыт путешествия по Азии</a> — 50 комментариев</li>
      </ul>
    </section>
  </template>
  
  <script>
  export default {
    name: 'TrendingTopics'
  };
  </script>
  
  <style scoped>
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  a {
    color: rgb(175, 175, 175);
  }
  </style>
  