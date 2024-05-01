import { createApp } from 'vue'
import './style.css'
import 'nprogress/nprogress.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

window.addEventListener('resize', (e) => {
    location.reload()
})
createApp(App).use(router).use(createPinia()).mount('#app')
