import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import RealHome from '@/components/RealHome';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/home',
      name: 'RealHome',
      component: RealHome,
    },
  ],
});
