<template>
    <div class="post-panel">
        <div class="post-text-container">
            <div class="info-string">
                <h2 class="author">Автор</h2>
                <h3 class="data-time">14.11.24, 22:46:42</h3>
            </div>
            <h1 class="post-heading">Заголовок</h1>
            <pre class="post-text-preview">{{ text }}</pre>
        </div>
        <div class="image-and-interaction-container">
            <div class="image-container">
                <img :src="test_image_sad"  alt="Jpg_Sad" class="image-prev"/>
            </div>
            <div class="interaction-container">
                <img :src="icon_like_white"  alt="like_png" class="icon_like"/>
            </div>
        </div>
    </div>
</template>

<script>
    import testImageSad from '@/assets/testImageSad.jpg';
    import importHeartEmptyRed from '@/assets/icons/heartEmptyRed.png';

    export default {
        name: 'PostMini',
        data() {
            return {
                test_image_sad: testImageSad,
                icon_like_white: importHeartEmptyRed,
                text: 'Боже это ужасно\nЖизнь оказалась не такой радужной\nНо поверь\nМожно попробовать верить в лучшееБоже это ужасно\nЖизнь оказалась не такой радужной\nНо поверь\nМожно попробовать верить в лучшееБоже это ужасноЖизнь оказалась не такой радужнойНо поверьМожно попробовать верить в лучшее'
            }
        }
    }
</script>

<style scoped>
.post-panel {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid white;
    border-radius: 10px;
    padding: 5px;
    margin-top: 20px;
    width: 40%;
    height: 200px;
}

.post-text-container {
    width: 70%;
    height: 200px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 0;
    position: relative;
    display: flex;
}

.info-string {
    padding-top: 3%;
    justify-content: center;
    align-items: center;
    position: relative;
    display: flex;
    width: 100%;
    height: 20%;
}

.author {
    position: relative;
    display: flex;
    width: 50%;
    height: 100%;
    padding-left: 1%;
    font-size: large;
}

.data-time {
    position: relative;
    display: flex;
    width: 50%;
    height: 100%;
}

.post-heading {
    position: relative;
    display: flex;
    width: 100%;
    height: 30%;
    padding-left: 5%;
    overflow: hidden;
    align-items: center;
}

.post-text-preview {
    position: relative;
    display: flex;
    width: 100%;
    height: 50%;
    padding-left: 5%;
    overflow: hidden;
}

.image-and-interaction-container {
    width: 30%;
    height: 200px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: 0;
    position: relative;
    display: flex;
}

.image-container {
    display: flex;
    width: 100%;
    height: 70%;
    position: relative;
}

.image-prev {
    width: 30%;
    height: 50%;
}

.interaction-container {
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    position: relative;
}
</style>
