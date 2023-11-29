import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/views/index.vue'),
    },
    {
        path: '/home',
        name: 'Home',
        // meta: {
        //     title: '用户登录',
        //     keepAlive: true,
        //     avoidAuth: true,
        // },
        component: () => import('@/views/home/home.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 路由守卫

// router.beforeEach((to, from, next) => {
//     // const userStore = useAdminStore();
//     // const isAuthenticated = userStore.userName;
//     // if (!to.matched.some((record) => record.meta.avoidAuth)) {
//     //     if (!isAuthenticated) {
//     //         next('/login');
//     //     } else {
//     //         next();
//     //     }
//     // } else {
//     //     next();
//     // }
// });

export default router;
