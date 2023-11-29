import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    //     {
    //         path: '/',
    //         redirect: '/combo',
    //     },
    //     {
    //         path: '/login',
    //         name: 'Login',
    //         meta: {
    //             title: '用户登录',
    //             keepAlive: true,
    //             avoidAuth: true,
    //         },
    //         component: () => import('@/pages/login/login.vue'),
    //     },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// 路由守卫

router.beforeEach((to, from, next) => {
    // const userStore = useAdminStore();
    // const isAuthenticated = userStore.userName;
    // if (!to.matched.some((record) => record.meta.avoidAuth)) {
    //     if (!isAuthenticated) {
    //         next('/login');
    //     } else {
    //         next();
    //     }
    // } else {
    //     next();
    // }
});

export default router;
