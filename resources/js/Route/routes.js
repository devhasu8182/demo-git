import Vue from "vue";
import Router from "vue-router";
import Layout from '../Componetns/Layout/Layout';
Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            redirect:'/login',
            component: () => import("../components/Auth/Auth"),
            children: [
                {
                    name: 'Login',
                    path: '/login',
                    component: ()=> import('../components/Auth/Login')
                },
                {
                    name: 'Login',
                    path: '/register',
                    component: ()=> import('../components/Auth/Register')
                },
            ]
        },
        {
            name: 'layout',
            path: '/dashboard',
            redirect:'/dashboard',
            component: Layout,
            children:[
                {
                    name: 'dashboard',
                    path: '/dashboard',
                    component: () => import('../Componetns/Dashboard/Dashboard'),
                }
            ]
        }
    ]
})
export default router;
