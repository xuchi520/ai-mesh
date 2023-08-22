import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
      keepAlive: false,
    },
    component: () => import('../views/home/index.vue')
  }
]
const router = createRouter({
  routes,
  //路由模式：history
  history:createWebHistory(),
  //路由模式：hash
  // history: createWebHashHistory(),
  //跳转路由回到顶部
});
router.beforeEach((to,from,next)=>{
  document.body.scrollTo = 0
  document.documentElement.scrollTo = 0
  next()
})
export default router;