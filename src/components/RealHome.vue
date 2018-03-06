<template>
  <div class="grid">
    <header class="grid__item grid__header">
      <div class="logo__wrapper">
        <Logo/>
      </div>
      <!-- <h1>{{ name }} {{title}}</h1> -->
    </header>
    <section class="grid__item grid__redes">
      <h1>Redes</h1>
    </section>
    <section class="grid__item grid__info">
      <h1>Info</h1>
    </section>
    <section class="grid__item grid__fotos">
      <h1>Fotos</h1>
    </section>
    <section class="grid__item grid__bolos">
      <h1>Bolos</h1>
    </section>
    <section class="grid__item grid__radio">
      <h1>Radio</h1>
    </section>
  </div>
</template>

<script>

import Logo from './common/Logo';

export default {
  data() {
    return {
      title: 'Home',
    };
  },
  components: {
    Logo,
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

@import "../scss/settings.scss";


html {
    background: $negro;
}

.logo__wrapper {
  height:100%;
  svg {
    display:block;
    height:100%;
    width:auto;
    margin:0 auto 0 0;
  }
}

.logo {
  height:100%;
}

.grid {
  display:grid;
  //position:fixed;
  //width:100vw;
  height:100vh;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 2vw;
  background: $negro;
  //background:radial-gradient(circle farthest-corner at center center, $negro 0%, #ccc 100%);
  padding:4vw;
  transform: rotate(2deg);
}

.grid__item {
  background: $rojo;
  padding: 2rem;
  h1 {
    text-transform: uppercase;
    color: $blanco;
    font-size:3rem;
    letter-spacing: 0.75rem;
    margin:0;
  }
  &:hover {
    transition:transform 0.25s ease-out;
    transform: rotate(-2deg);
  }
}

.grid__header {
  background:transparent;
  grid-column: span 2;
  grid-row: span 3;
  transform: rotate(-2deg);
}

.grid__redes {
  grid-column: 3 / 7;
  grid-row: 1 / 2;
  background:transparent;
  h1 {
    font-size:0.5rem;
  }
}

.grid__info {
  // display:none;
  grid-column: 3 / 7;
  grid-row: 2 / 4;
}

.grid__fotos {
  //display:none;
  grid-column: 2 / 4;
  grid-row: 4 / 7;
}

.grid__radio {
  //display:none;
  grid-column: 7 / 9;
  grid-row: 1 / 5;
}

.grid__bolos {
  //display:none;
  grid-column: 4 / 7;
  grid-row: 4 / 6;
}

</style>
