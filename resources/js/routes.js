import Layout from './Componetns/Layout/Layout';

export const routes = [
    {
        name: 'layout',
        path: '/',
        redirect:'/dashboard',
        component: Layout,
        children:[
            {
                name: 'dashboard',
                path: '/dashboard',
                component: () => import('./Componetns/Dashboard/Dashboard'),
            }
        ]
    }
];
