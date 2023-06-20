import { RouteRecordRaw } from 'vue-router';
import Home from '@/pages/home/index.vue';

//后台管理路由，用于渲染左侧菜单栏
const adminRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'LayoutHome',
    component: Home,
    meta: {
      title: '首页',
      icon: 'shouye',
      hidden: false,
      keepAlive: false,
    },
  },
];
//合并路由表
const routes: RouteRecordRaw[] = [...adminRoutes];
export default routes;
export { adminRoutes };
