import Vue from "vue";
import Router from "vue-router";

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
                }
            ]
        },
    ]
})
export default router;
