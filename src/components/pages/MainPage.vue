<template>
  <div className="main-container">
    <Header></Header>
    <h1>MainPage</h1>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import StickyPanel from '@/components/pages/StickyPanel.vue';

  export default {
    name: 'MainPage',
    components:{
      Header,
      StickyPanel,
    },
  };
</script>

<style scoped>
.main-container {
  width: 100%;
  height: 10000px;
  background-color: rgb(20, 20, 20);
  color: white;
  margin: 0;
  padding: 0;
}
</style>