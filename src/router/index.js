import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    routes: [
        // {
        //     path: '/',
        //     component: () =>
        //         import ( /* webpackChunkName: "home" */ '@/layouts'),
        //     meta: {
        //         title: '首页'
        //     },
        //     children:[
        //         {
        //             path: 'home',
        //             component: () =>
        //                 import ( /* webpackChunkName: "home" */ '@/page/home'),
        //             meta: {
        //                 title: '首页'
        //             },
        //         }
        //     ]
        // },
        // {
        //     path: '/',
        //     component: () =>
        //         import ( /* webpackChunkName: "home" */ '@/page/home.vue'),
        //     meta: {
        //         title: '首页'
        //     }
        // },
        {
            path: '/',
            component: () =>
                import ( /* webpackChunkName: "home" */ '@/page/dataV/home.vue'),
            meta: {
                title: '首页'
            }
        },
        {
            path: '/stystem',
            component: () =>
                import ( /* webpackChunkName: "home" */ '@/page/dataV/stystem/index.vue'),
            meta: {
                title: '子系统'
            },
            children:[
                {
                    path:'card_manage',
                    name:'card_manage',
                    component:()=>import( /* webpackChunkName: "card_manage" */ '@/page/dataV/stystem/common/card.vue'),
                    meta: {
                        title: '标识卡管理'
                    },
                },
                {
                    path:'card_collection',
                    name:'card_collection',
                    component:()=>import( /* webpackChunkName: "card_manage" */ '@/page/dataV/stystem/common/collection.vue'),
                    meta: {
                        title: '标识卡采集'
                    },
                },
                {
                    path:'setting',
                    name:'setting',
                    component:()=>import( /* webpackChunkName: "card_manage" */ '@/page/dataV/stystem/common/setting.vue'),
                    meta: {
                        title: '巡检点设置'
                    },
                },
                {
                    path:'intell',
                    name:'intell',
                    component:()=>import( /* webpackChunkName: "card_manage" */ '@/page/dataV/stystem/common/intell.vue'),
                    meta: {
                        title: '智能分析'
                    },
                },
                {
                    path:'auto',
                    name:'auto',
                    component:()=>import( /* webpackChunkName: "card_manage" */ '@/page/dataV/stystem/common/record.vue'),
                    meta: {
                        title: '自动巡检'
                    },
                },
                {
                    path:'record_table',
                    name:'record_table',
                    component:()=>import( /* webpackChunkName: "card_manage" */ '@/page/dataV/stystem/common/sheet.vue'),
                    meta: {
                        title: '自动巡检'
                    },
                },
            ]
        },
        {
            path: '/login',
            component: () =>
                import ('@/page/login'),
            meta: {
                title: '登录'
            }
        },
        {
            path: "/404",
            component: () =>
                import ('@/page/404'),
        },
        {
            path: "*",
            redirect: "/404"
        }
    ]
});
// 导航守卫
/* // 判断用户是否登录，添加前置导航守卫
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    const sign = localStorage.getItem('sign');
    if (sign) {
        next()
    } else {
        if (to.path === '/login') { // 如果是登录页
            next();
        } else {
            next({ path: '/login' })
        }
    }
}) */
export default router
