import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Info from '@/components/InfoPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/info',
      name: 'Info',
      component: Info,
    },
  ],
});
