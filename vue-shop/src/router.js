import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/Login'
import Home from './components/Home'
import Welcome from './components/Welcome'
import Users from './components/user/Users'
import Rights from './components/power/Rights'
import Roles from './components/power/Roles'
import Categories from './components/goods/Categories'
import Params from './components/goods/Params'
import GoodsList from './components/goods/List'
import Add from './components/goods/Add'
import Order from './components/order/Order'
import Report from './components/report/Report'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '', redirect: '/login' },
        { path: '/login', component: Login },
        {
            path: '/home',
            component: Home,
            redirect: '/welcome',
            children: [
                { path: '/welcome', component: Welcome },
                { path: '/users', component: Users },
                { path: '/rights', component: Rights },
                { path: '/roles', component: Roles },
                { path: '/categories', component: Categories },
                { path: '/params', component: Params },
                { path: '/goods', component: GoodsList },
                { path: '/goods/add', component: Add },
                { path: '/orders', component: Order },
                { path: '/reports', component: Report },
            ]
        }
    ],
    mode: 'history'
})


// 配置路由守卫
router.beforeEach((to, from, next) => {
    if (to.path === '/login') return next()
    const token = window.sessionStorage.getItem("token")
    if (!token) return next('/login')
    next()
})

export default router