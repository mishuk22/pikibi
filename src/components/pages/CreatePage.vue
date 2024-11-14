<template>
    <div className="main-container">
        <Header></Header>
        <div class="form-container">
            <input v-model="title" type="text" class="title-input" placeholder="Заголовок..."/>
            <div v-if="showMessage" class="message">
                {{ message }}
            </div>
            <textarea v-model="text" class="text-input" placeholder="Текст поста..."></textarea>
            <label for="file-upload" class="custom-file-upload">
                Загрузить изображение
            </label>
            <input id="file-upload" type="file" @change="onFileChange" multiple />
            <div class="image-preview">
                <div v-for="(image, index) in images" :key="index" class="image-preview-container">
                    <img :src="image" alt="Preview"/>
                    <button @click="removeImage(index)" class="delete-image-button">Удалить</button>
                </div>
            </div>
            <button @click="addPost" class="add-button">Опубликовать пост</button>
            <div v-for="(post, index) in posts" :key="index">
                <h4>Пост {{ index + 1 }}</h4>
                <h1>{{  post.title }}</h1>
                <pre>{{ post.text }}</pre>
                <div v-if="post.images.length">
                    <img v-for="(img, imgIndex) in post.images" :src="img" :key="imgIndex" width="100" />
                </div>
                <p>{{ post.time }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import '@/assets/styles/create-page-stylesheet.css'
import Header from '@/components/Header.vue';
    export default {
        name: 'PostsPage',
        components:{
            Header,
        },
        data() {
            return {
                showMessage: false,
                message: '',
                author: 'admin',
                title: '',
                text: '',
                images: [],
                time: '',
                likes: 0,
                posts: JSON.parse(localStorage.getItem('posts')) || []
            };
        },
        methods: {
            clearStorage(){
                localStorage.clear();
                localStorage.setItem('posts', JSON.stringify(this.posts));
            },
            showErrorMessage(msg) {
                this.message = msg;
                this.showMessage = true;
                // Скрыть сообщение через 3 секунды
                setTimeout(() => {
                    this.showMessage = false;
                }, 3000);
            },
            updateTime() {
                const now = new Date();
                this.time = now.toLocaleString();
            },
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
                this.updateTime();
                const trimmedValue = this.title.trim();
                if (trimmedValue == '') {
                    this.showErrorMessage('НЕДОПУСТИМЫЙ ЗАГОЛОВОК!');
                } else {
                    const newPost = {
                        author: this.author,
                        title: this.title,
                        text: this.text,
                        images: this.images,
                        time: this.time,
                        likes: this.likes,
                    };
                    this.posts.push(newPost);
                    localStorage.setItem('posts', JSON.stringify(this.posts));
                    this.resetForm();
                }
            },
            resetForm() {
                this.title = '';
                this.text = '';
                this.images = [];
                this.time = '';
            }
        }
    }
</script>