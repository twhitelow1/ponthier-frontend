import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import QuotesCreate from '../views/QuotesCreate.vue';
import Admin from '../views/Admin.vue';
import QuotesIndex from '../views/QuotesIndex.vue';
import QuoteShow from '../views/QuotesShow.vue'
import QuotesNew from '../views/QuotesNew.vue';
import QuotesSuccess from '../views/QuotesSuccess.vue';

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
    path: '/quote-new',
    name: 'quote-new',
    component: QuotesCreate,
  },
  {
    path: '/quote-success',
    name: 'quote-success',
    component: QuotesSuccess,
  },
  {
    path: '/quotes/:id',
    name: 'quote-show',
    component: QuoteShow,
  },
  {
    path: '/acp',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/quotes-new1',
    name: 'Quote-New',
    component: QuotesNew
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
