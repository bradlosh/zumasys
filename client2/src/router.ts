import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import APIE from './views/API.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    { 
      name: 'api',
      path: '/:id',
      component: APIE,
      props: true,
    },
    {
      name: 'napi',
      path: '/new',
      component: APIE,
      props: true,
    },
    { path: '*', redirect: '/' },
  ],
});
