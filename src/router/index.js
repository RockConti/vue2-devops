import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            name: "layout",
            path: "/",
            component: () => import(/* webpackChunkName: "layout" */ '@/layout/index.vue'),
            // redirect: '/dashboard',
        },
        {
            path: "/login",
            component: () => import(/* webpackChunkName: "login" */ '@/views/UserLogin.vue'),
            meta: {
                title: "登录"
            }
        },
        {
            path: "/webhome",
            component: () => import(/* webpackChunkName: "login" */ '@/views/home/WebHome.vue'),
            meta: {
                title: "登录"
            }
        },
        {
            path: "/webhome2",
            component: () => import(/* webpackChunkName: "login" */ '@/views/home/WebHome2.vue'),
            meta: {
                title: "登录"
            }
        },
        {
            path: "/webhome3",
            component: () => import(/* webpackChunkName: "login" */ '@/views/home/WebHome3.vue'),
            meta: {
                title: "登录"
            }
        },
        {
            path: "/webhome4",
            component: () => import(/* webpackChunkName: "login" */ '@/views/home/WebHome4.vue'),
            meta: {
                title: "登录"
            }
        },
    ]
})

export default router
