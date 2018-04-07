import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Info from '@/components/InfoPage';
import Fotos from '@/components/FotosPage';
import Contacto from '@/components/ContactoPage';

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
    {
      path: '/fotos',
      name: 'Fotos',
      component: Fotos,
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: Contacto,
    },
  ],
});
