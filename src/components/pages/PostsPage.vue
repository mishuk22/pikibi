<template>
    <div className="main-container">
    <Header></Header>
    <div class="posts-container">
      <PostMini></PostMini>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import PostMini from '@/components/PostMini.vue';
    export default {
        name: 'PostsPage',
        components:{
          Header,
          PostMini,
        },
    }
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

.posts-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>