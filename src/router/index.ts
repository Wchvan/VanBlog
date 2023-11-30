import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/views/index.vue'),
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/profile/profile.vue'),
    },
    {
        path: '/blogs',
        name: 'Blogs',
        component: () => import('@/views/blogs/blogs.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
