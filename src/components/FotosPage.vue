<template>
  <div class="grid">
    <header class="grid__item grid__header">
      <div class="logo__wrapper">
        <Logo/>
      </div>
      <!-- <h1>{{ name }} {{title}}</h1> -->
    </header>
    <section class="grid__item grid__redes">
      <h1>Redes Sociales y tal y cual</h1>
    </section>
    <section class="grid__item grid__fotos grid__rotate">
      <Fotos full />
    </section>
  </div>
</template>

<script>

import Logo from './common/Logo';
import Fotos from './pages/Fotos';

export default {
  data() {
    return {
      title: 'Info',
    };
  },
  components: {
    Logo,
    Fotos,
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    @import "../scss/settings.scss";

    .grid__fotos {
        grid-row: 2 / 7;
        grid-column: 3 / 7;
    }

</style>
