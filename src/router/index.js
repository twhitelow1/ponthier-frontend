import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Quote from '../views/Quote.vue';
import Admin from '../views/Admin.vue';
import QuotesIndex from '../views/QuotesIndex.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quotes',
    name: 'quotes-index',
    component: QuotesIndex
  },
  {
    path: '/quote',
    name: 'Quote',
    component: Quote
  },
  {
    path: '/acp',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
