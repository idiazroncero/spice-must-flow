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
      <router-link to="/info" class="link-layer"></router-link>
      <Info/>
    </section>
    <section class="grid__item grid__fotos grid__rotate">
      <h1>Fotos</h1>
    </section>
    <section class="grid__item grid__bolos grid__rotate">
      <h1>Bolos</h1>
    </section>
  </div>
</template>

<script>

import Logo from './common/Logo';
import Info from './pages/Info';

export default {
  data() {
    return {
      title: 'Home',
    };
  },
  components: {
    Logo,
    Info,
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

@import "../scss/settings.scss";

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
  // width:100vw;
  height:100%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 2vw;
  background: $negro;
  transform: rotate(2deg);
  //background:radial-gradient(circle farthest-corner at center center, $negro 0%, #ccc 100%);
}

.grid__item {
  background: $rojo;
  padding: 2rem;
  position:relative; // for link-layer
  h1 {
    text-transform: uppercase;
    color: $blanco;
    font-size:3rem;
    line-height: 1;
    margin-bottom: $gutter;
    letter-spacing: 0.5rem;
  }
}

.grid__rotate {
  // transform: rotate(2deg);
  // transform-origin: center center;
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
  //transform: rotate(-2deg);
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  padding:0;
  h1 {
    font-size:0.75rem;
    margin:0;
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

.grid__bolos {
  //display:none;
  grid-column: 4 / 7;
  grid-row: 4 / 6;
}

</style>
