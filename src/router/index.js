import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/create',
    name: 'create',
    // lazy loaded programmatic component
    component: () => import(/* webpackChunkName: "create" */ '../views/Create.vue'),
  },
  {
    path: '/update/:id',
    name: 'update',
    // lazy loaded programmatic component
    component: () => import(/* webpackChunkName: "create" */ '../views/Update.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
