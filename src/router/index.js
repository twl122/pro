import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import goods from '../pages/index/Goods'

const router = new VueRouter({

    routes: [
        {
            path: '/',
            name: 'goods',
            component: goods
        },
        {
            path: '/evaluate',
            name: 'evaluate',
            component: () => import('../pages/index/Evaluate'),
        },
         {
            path: '/shop',
            name: 'shop',
            component: () => import('../pages/index/Shop'),
        }

    ],






})

// 暴露 router
export default router