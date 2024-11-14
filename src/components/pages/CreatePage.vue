<template>
    <div className="main-container">
        <Header></Header>
        <div class="form-container">
            <input v-model="title" class="title-input" placeholder="Заголовок"/>
            <textarea v-model="text" class="text-input" placeholder="Текст поста..."></textarea>
            <label for="file-upload" class="custom-file-upload">
                Загрузить изображение
            </label>
            <input id="file-upload" type="file" @change="onFileChange" multiple />
            <div class="image-preview">
                <div v-for="(image, index) in images" :key="index">
                    <img :src="image" alt="Preview" />
                    <button @click="removeImage(index)" class="delete-image-button">Удалить</button>
                </div>
            </div>
            <button @click="addPost" class="add-button">Добавить пост</button>
            <div v-for="(post, index) in posts" :key="index">
                <h4>Пост {{ index + 1 }}</h4>
                <h1>{{  post.title }}</h1>
                <p>{{ post.text }}</p>
                <div v-if="post.images.length">
                    <img v-for="(img, imgIndex) in post.images" :src="img" :key="imgIndex" width="100" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
    export default {
        name: 'PostsPage',
        components:{
            Header,
        },
        data() {
            return {
            title: '',
            text: '',
            images: [],
            posts: JSON.parse(localStorage.getItem('posts')) || []
            };
        },
        methods: {
            onFileChange(event) {
                const files = event.target.files;
                for (let i = 0; i < files.length; i++) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        this.images.push(e.target.result);
                    };
                    reader.readAsDataURL(files[i]);
                }
            },
            removeImage(index) {
                this.images.splice(index, 1);
            },
            addPost() {
                const newPost = {
                    title: this.title,
                    text: this.text,
                    images: this.images
                };
                this.posts.push(newPost);
                localStorage.setItem('posts', JSON.stringify(this.posts));
                this.resetForm();
            },
            resetForm() {
                this.title = '';
                this.text = '';
                this.images = [];
            }
        }
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

.image-preview {
  display: flex;
  flex-wrap: wrap;
}

.image-preview img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
}

.form-container {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* Hiding the standard image input */
input[type="file"] {
  display: none; 
}

/* Styles for input image button*/
.custom-file-upload {
    margin-top: 20px;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
    border: 1px solid white;
    background-color: rgb(33, 33, 33);
    border-radius: 10px;
}

.title-input {
    margin-top: 20px;
    border: 1px solid white;
    background-color: rgb(33, 33, 33);
    color: white;
    border-radius: 10px;
    padding: 6px 12px;
}

.title-input::placeholder {
    color: white;
    opacity: 0.5;
}

.text-input {
    max-width: 50%;
    min-width: 50%;
    width: 50%;
    height: 300px;
    min-height: min-content;
    margin-top: 20px;
    border: 1px solid white;
    background-color: rgb(33, 33, 33);
    color: white;
    border-radius: 10px;
    padding: 6px 12px;
}

.text-input::placeholder {
    color: white;
    opacity: 0.5;
}

.text-input::-webkit-scrollbar {
    display: none;
}

.delete-image-button {
    margin-top: 5px;
    border: 1px solid white;
    background-color: rgb(33, 33, 33);
    color: white;
    border-radius: 10px;
    padding: 6px 12px;
}

.add-button {
    margin-top: 20px;
    border: 1px solid white;
    background-color: rgb(33, 33, 33);
    color: white;
    border-radius: 10px;
    padding: 6px 12px;
}
</style>