//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from "pinia"
import App from './App.vue'
import '@/assets/styles/inspector-stylesheet.css'
import router from './router/index'

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.mount("#app");

createApp(App).use(router).mount('#app')