import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView2/index.vue')
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('../views/DetailView2/index.vue')
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
})

export default router;