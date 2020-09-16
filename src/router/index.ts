import {
  createRouter,
  createWebHashHistory,
  RouteLocationNormalized,
  RouteRecordRaw,
} from 'vue-router';
import Home from '@/views/Home.vue';
import AddGameResult from '@/views/AddGameResult.vue';
import Auth from '@/views/Auth.vue';
import SignUp from '@/views/SignUp.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/add-game-result',
    name: 'AddGameResult',
    component: AddGameResult,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: Function) => {
  if (to.name !== 'Auth' && false) {
    next({ name: 'Auth' });
  } else {
    next();
  }
});

export default router;
