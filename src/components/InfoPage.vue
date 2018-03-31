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
    <section class="grid__item grid__info grid__rotate">
      <Info full />
    </section>
  </div>
</template>

<script>

import Logo from './common/Logo';
import Info from './pages/Info';
import Radio from './pages/Radio';

export default {
  data() {
    return {
      title: 'Info',
    };
  },
  components: {
    Logo,
    Info,
    Radio,
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    @import "../scss/settings.scss";

    .grid {
        height:100vh;
        grid-template-rows: repeat(6, 1fr);
    }

    .grid__info {
        grid-row: 2 / 7;
    }

</style>
