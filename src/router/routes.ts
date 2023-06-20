import { RouteRecordRaw } from 'vue-router';
import { RoutePath } from './constant';
import Home from '@/pages/home/index.vue';

const mainRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: RoutePath.Home,
  },
  {
    path: RoutePath.Home,
    component: Home,
    meta: {
      title: '首页',
    },
  },
];
//合并路由表
const routes: RouteRecordRaw[] = [...mainRoutes];
export default routes;
export { mainRoutes };
