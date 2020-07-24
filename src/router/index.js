import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/views/home/HomePage.vue';
import * as RouteConstants from '../constants/routes';

Vue.use(VueRouter);

const routes = [
  {
    path: RouteConstants.HOME_PATH,
    name: RouteConstants.HOME_PATH_NAME,
    component: HomePage,
  },
  {
    path: RouteConstants.CREATE_PATH,
    name: RouteConstants.CREATE_PATH_NAME,
    component: () => import('@/views/create/CreatePage.vue'), // Allows lazy loading
  },
  {
    path: RouteConstants.SUCCESS_PATH,
    name: RouteConstants.SUCCESS_PATH_NAME,
    component: () => import('@/views/create-success/CreateSuccessPage.vue'), // Allows lazy loading
  },
  {
    path: RouteConstants.PAGE_PATH_WITH_MATCH,
    name: RouteConstants.PAGE_PATH_NAME,
    component: () => import('@/views/payment-page/PaymentPage.vue'), // Allows lazy loading
  },
];

const router = new VueRouter({
  routes,
});

export default router;
