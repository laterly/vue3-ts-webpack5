import { RouteRecordRaw } from 'vue-router';
import Home from '@/pages/home/index.vue';

const mainRoutes: RouteRecordRaw[] = [
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
const routes: RouteRecordRaw[] = [...mainRoutes];
export default routes;
export { mainRoutes };
