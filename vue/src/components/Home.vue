<template>
  <div class="grid">


    <Info/>
    <Fotos />
    <section class="grid__item grid__bolos grid__rotate">
      <h1 data-title="Próximo concierto">Próximo concierto</h1>
      <div class="concert">
        <div class="concert__dia">
          22 de Febrero
        </div>
        <div class="concert__sitio">
          Sala The Cover
        </div>
        <!-- <ul class="concert__links">
          <li>
            <a class="button" href="https://www.facebook.com/SoulArt.ts/">Facebook</a>
          </li>
        </ul> -->
      </div>
    </section>

  </div>
</template>

<script>

import Logo from './common/Logo';
import Info from './pages/Info';
import Fotos from './pages/Fotos';

export default {
  data() {
    return {
      title: 'Home',
    };
  },
  components: {
    Logo,
    Info,
    Fotos,
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

@import "../scss/settings.scss";
@import "../../node_modules/breakpoint-sass/stylesheets/breakpoint";


</style>
