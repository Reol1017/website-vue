import { createApp } from 'vue'
import './style.css'
import 'nprogress/nprogress.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

createApp(App).use(router).use(createPinia()).mount('#app')
