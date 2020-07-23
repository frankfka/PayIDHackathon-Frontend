import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home/HomePage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('@/views/create/CreatePage.vue'), // Allows lazy loading
  },
];

const router = new VueRouter({
  routes,
});

export default router;
