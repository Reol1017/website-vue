import { createApp } from 'vue'
import './style.css'
import 'nprogress/nprogress.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import _ from 'lodash';

window.addEventListener('resize', _.throttle((e) => {
    location.reload()
}, 5000))
createApp(App).use(router).use(createPinia()).mount('#app')
