<template>
    <div v-if="isSidebarVisible" class="sidebar" :class="{ fixed: isSidebarFixed }">
    <div class="add-text"> Здесь могла быть ваша реклама! </div>
    </div>
</template>

<script>
    export default {
        name: 'AddPanel',
    }
</script>

<style scoped>
.add-text {
  transform: rotate(45deg);
  white-space: nowrap; /* предотвращает перенос текста на новую строку */
}
</style>
