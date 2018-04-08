import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Info from '@/components/InfoPage';
import Fotos from '@/components/FotosPage';
import Contacto from '@/components/ContactoPage';
import Oscar from '@/components/Oscar';
import Pablo from '@/components/Pablo';
import Nacho from '@/components/Nacho';

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
      path: '/info/oscar',
      name: 'La Banda / Óscar Rough',
      component: Oscar,
    },
    {
      path: '/info/pablo',
      name: 'La Banda / Pablo Muñoz',
      component: Pablo,
    },
    {
      path: '/info/nacho',
      name: 'La Banda / Nacho Díaz',
      component: Nacho,
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
