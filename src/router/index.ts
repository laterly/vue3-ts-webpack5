import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
//导航被确认
router.beforeEach(async (to, from, next) => {
  next();
});
export default router;
