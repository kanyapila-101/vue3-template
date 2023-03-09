import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router';
import App from '@/App.vue';

const routes = [
    {
        path: '/',
        name: 'app',
        component: App,
    },
    {
        path: '/material',
        name: 'material',
        component: App,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('@/components/example/Dashboard.vue')
            },
            {
                path: 'formlayout',
                name: 'formlayout',
                component: () => import('@/components/example/FormLayoutDemo.vue')
            },
            {
                path: 'input',
                name: 'input',
                component: () => import('@/components/example/InputDemo.vue')
            },
            {
                path: 'floatlabel',
                name: 'floatlabel',
                component: () => import('@/components/example/FloatLabelDemo.vue')
            },
            {
                path: 'invalidstate',
                name: 'invalidstate',
                component: () => import('@/components/example/InvalidStateDemo.vue')
            },
            {
                path: 'button',
                name: 'button',
                component: () => import('@/components/example/ButtonDemo.vue')
            },
            {
                path: 'table',
                name: 'table',
                component: () => import('@/components/example/TableDemo.vue')
            },
            {
                path: 'list',
                name: 'list',
                component: () => import('@/components/example/ListDemo.vue')
            },
            {
                path: 'tree',
                name: 'tree',
                component: () => import('@/components/example/TreeDemo.vue')
            },
            {
                path: 'panel',
                name: 'panel',
                component: () => import('@/components/example/PanelsDemo.vue')
            },
            {
                path: 'overlay',
                name: 'overlay',
                component: () => import('@/components/example/OverlayDemo.vue')
            },
            {
                path: 'media',
                name: 'media',
                component: () => import('@/components/example/MediaDemo.vue')
            },
            {
                path: 'menu',
                component: () => import('@/components/example/MenuDemo.vue'),
                children: [
                    {
                        path: '',
                        component: () => import('@/components/menu/PersonalDemo.vue')
                    },
                    {
                        path: 'menu/seat',
                        component: () => import('@/components/menu/SeatDemo.vue')
                    },
                    {
                        path: 'menu/payment',
                        component: () => import('@/components/menu/PaymentDemo.vue')
                    },
                    {
                        path: 'menu/confirmation',
                        component: () => import('@/components/menu/ConfirmationDemo.vue')
                    },
                ],
            },
            {
                path: 'messages',
                name: 'messages',
                component: () => import('@/components/example/MessagesDemo.vue')
            },
            {
                path: 'file',
                name: 'file',
                component: () => import('@/components/example/FileDemo.vue')
            },
            {
                path: 'chart',
                name: 'chart',
                component: () => import('@/components/example/ChartDemo.vue')
            },
            {
                path: 'misc',
                name: 'misc',
                component: () => import('@/components/example/MiscDemo.vue')
            },
            {
                path: 'crud',
                name: 'crud',
                component: () => import('@/pages/CrudDemo.vue')
            },
            {
                path: 'timeline',
                name: 'timeline',
                component: () => import('@/pages/TimelineDemo.vue')
            },
            {
                path: 'empty',
                name: 'empty',
                component: () => import('@/components/example/EmptyPage.vue')
            },
            {
                path: 'documentation',
                name: 'documentation',
                component: () => import('@/components/example/Documentation.vue')
            },
            {
                path: 'blocks',
                name: 'blocks',
                component: () => import('@/components/example/BlocksDemo.vue')
            },
            {
                path: 'icons',
                name: 'icons',
                component: () => import('@/components/example/IconsDemo.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/Login.vue')
    },
    {
        path: '/landing',
        name: 'landing',
        component: () => import('@/pages/LandingDemo.vue')
    },
    {
        path: '/error',
        name: 'error',
        component: () => import('@/pages/Error.vue')
    },
    {
        path: '/notfound',
        name: 'notfound',
        component: () => import('@/pages/NotFound.vue')
    },
    {
        path: '/access',
        name: 'access',
        component: () => import('@/pages/Access.vue')
    }
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;
