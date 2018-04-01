<template>
  <div class="grid">
    <header class="grid__item grid__header">
      <div class="logo__wrapper">
        <Logo/>
      </div>
      <!-- <h1>{{ name }} {{title}}</h1> -->
    </header>
    <section class="grid__item grid__redes">
      <ul class="redes">
        <li>
          <a href="https://www.facebook.com/SpiceMustFlowMadrid/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 7c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1h-3c-3.3 0-6 2.7-6 6v2H7c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h2v7c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-7h2c.5 0 .9-.3 1-.8l1-4c.1-.3 0-.6-.2-.9S18.3 9 18 9h-3V7h3zm-4 4h2.7l-.5 2H14c-.6 0-1 .4-1 1v7h-2v-7c0-.6-.4-1-1-1H8v-2h2c.6 0 1-.4 1-1V7c0-2.2 1.8-4 4-4h2v2h-2c-1.1 0-2 .9-2 2v3c0 .6.4 1 1 1z"/></svg>
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/spicemustflowofficial/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 1H7C3.7 1 1 3.7 1 7v10c0 3.3 2.7 6 6 6h10c3.3 0 6-2.7 6-6V7c0-3.3-2.7-6-6-6zm4 16c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4V7c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v10z"/><path d="M12.8 7c-.5-.1-1-.1-1.5 0-2.7.4-4.6 3-4.2 5.7.2 1.3.9 2.5 2 3.3.9.6 1.9 1 3 1 .2 0 .5 0 .7-.1 1.3-.2 2.5-.9 3.3-2s1.1-2.4.9-3.7C16.7 9 15 7.3 12.8 7zm1.7 6.7c-.5.6-1.2 1.1-2 1.2-1.6.2-3.2-.9-3.4-2.5-.3-1.6.9-3.2 2.5-3.4h.8c1.3.2 2.3 1.2 2.5 2.5.2.8 0 1.6-.4 2.2zM16.8 5.8c-.2.2-.3.4-.3.7s.1.5.3.7c.2.2.5.3.7.3.3 0 .5-.1.7-.3s.3-.5.3-.7c0-.3-.1-.5-.3-.7-.4-.4-1-.4-1.4 0z"/></svg>
            <span>Instagram</span>
          </a>
        </li>
      </ul>
    </section>
    <section class="grid__item grid__info grid__rotate">
      <router-link to="/info" class="link-layer"></router-link>
      <Info/>
    </section>
    <section class="grid__item grid__fotos grid__rotate">
      <router-link to="/fotos" class="link-layer"></router-link>
      <Fotos />
    </section>
    <section class="grid__item grid__bolos grid__rotate">
      <h1>Próximo concierto</h1>
      <div class="concert">
        <div class="concert__dia">
          19 de Abril
        </div>
        <div class="concert__sitio">
          Sala Jazzville <small>(Madrid)</small>
        </div>
        <ul class="concert__links">
          <li>
            <a class="link-decorated" href="https://www.facebook.com/JAZZVILLE-111519322194148/">Facebook</a>
          </li>
          <li>
            <a class="link-decorated" href="https://goo.gl/maps/BUiBdLkDAam">Localización</a>
          </li>
          <li>
            Entrada: 5€ en taquilla.
          </li>
        </ul>
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
    font-size:2.5rem;
    line-height: 1;
    letter-spacing: 0.5rem;
  }
  p {
    margin-bottom: 1.5rem;
    &:last-child {
      margin-bottom:0;
    }
  }
}

.scroll__parent {
  display:flex;
  flex-direction:column;
  height:100%;
  align-items: flex-start;
}

.scroll {
  flex:1;
  overflow:scroll;
}

.back {
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.05rem;
  font-size: 0.5rem;
  margin-bottom: $gutter;
}

// .grid__rotate {
//   // transform: rotate(2deg);
//   // transform-origin: center center;
//   // &:hover {
//   //   transition:transform 0.25s ease-out;
//   //   transform: rotate(-0.5deg);
//   // }
// }

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
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  h1 {
    font-size: 0.75rem;
  }
}

.redes {
  ul {
    margin:0;
    padding:0;
  }
  li {
    display:inline-block;
    vertical-align:middle;
    list-style-type: none;
    margin-right:$gutter;
  }
  svg {
    fill:$blanco;
    height:1rem;
    width:auto;
    margin-right:5px;
  }
  a {
    display:block;
    &:hover {
      color: $rojo;
      svg {
        fill: $rojo;
      }
    }
  }
  svg, span {
    display:inline;
    vertical-align: middle;
  }
  span {
    font-size:0.75rem;
    line-height:0.75rem;
    text-transform: uppercase;
    font-weight:bold;
  }
}

.concert {
  margin-top:$gutter;
}

.concert__dia {
  text-transform: uppercase;
  font-size:0.8rem;
}

.concert__sitio {
   font-size:2.5rem;
   line-height:1.05;
   margin-bottom: $gutter;
   text-transform: uppercase;
}

.concert__links {
  margin:0;
  padding:0;
  list-style-type:none;
  display:flex;
  li {
    display:inline-block;
    margin-right:$gutter;
    font-size:0.75rem;
  }
}

</style>
