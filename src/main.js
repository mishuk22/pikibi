//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/inspector-stylesheet.css'
import router from './router/index'

createApp(App).use(router).mount('#app')