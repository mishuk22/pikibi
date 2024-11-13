<template>
    <div className="main-container">
    <Header></Header>
    <h1>MainPagethehteheth</h1>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
    export default {
        name: 'PostsPage',
        components:{
      Header,
    },
    }
</script>

<style scoped>
.h1 {
  color:white;
}
.main-container {
  width: 100%;
  height: 10000px;
  background-color: rgb(20, 20, 20);
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
  margin: 0;
  padding: 0;
}
</style>