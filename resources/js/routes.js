import Auth from "./components/Auth/Auth"
import Login from './components/Auth/Login'
export const routes = [
    {
        name: 'Auth',
        path: '/',
        redirect:'/login',
        components: Auth,
        children:[
            {
                name : "Login",
                path : '/login',
                component: Login
            }
        ]
    }
];
