import { createWebHistory, createRouter, createWebHashHistory } from "vue-router";
import httpObj from "../api/api";
import { ElMessage } from "element-plus";

const filedNum = []
for (let i = 11; i < 50; i++) {
    filedNum.push(i)
}


const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView2/index.vue')
    },
    {
        path: '/:id',
        name: 'detail',
        component: () => import('../views/DetailView2/index.vue')
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory(import.meta.env.BASE_URL)
})

router.beforeEach(async (to, from, next) => {
    if (to.name === 'detail') {
        const res = await httpObj.sendPost('/records/query', {
            from: 'btwxxiycs',
            select: [6, 7, 8, ...filedNum],
            where: `{7.EX."${to.params.id === '6800' ? '6800 ' : to.params.id}"}`
        })
        console.log(res);
        if(res.status === 200){
           if(res.data.data[0][45].value !== 'For Sale'){
            ElMessage.error('This House is not for sale!')
            next('/')
            return
           }
        } else {
            ElMessage.error('Data acquisition failed, please check the network!')
        }
    }
    next()
})
export default router;