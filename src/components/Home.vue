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
        <li>
          <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:6XL3ROwoiOL5vtdkPxcdqs&size=basic&theme=light&show-count=0" width="200" height="28" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowtransparency="true"></iframe>
        </li>
      </ul>
    </section>
    <Info/>
    <Fotos />
    <section class="grid__item grid__bolos grid__rotate">
      <h1 data-title="Próximo concierto">Próximo concierto</h1>
      <div class="concert">
        <div class="concert__dia">
          20 de Julio · Madrid
        </div>
        <div class="concert__sitio">
          Rock Palace
        </div>
        <!-- <ul class="concert__links">
          <li>
            <a class="button" href="https://www.facebook.com/events/450883668715005/">Facebook</a>
          </li>
          <li>
            <a class="button" href="https://www.ticketea.com/entradas-festival-almanrock/">Entradas</a>
          </li>
          <li>
            Entrada: 5€
          </li>
        </ul> -->
      </div>
    </section>
    <section class="grid__contact">
      <router-link to="/contacto">
        <span>Con<br>tacto</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 28" width="30" height="28"><path d="M7.172 28c-1.609 0-3-1.094-3.391-2.656l-1.578-6.266A7.668 7.668 0 0 1 2 17.391c0-.359 0-.703-.078-1.047L.109 8.891A3.483 3.483 0 0 1 0 8c0-1.937 1.469-3.531 3.391-3.734A3.707 3.707 0 0 1 7.063 1.25a3.745 3.745 0 0 1 3.641 2.875l1.297 5.437 1.609-6.687A3.743 3.743 0 0 1 17.251 0c1.859 0 3.391 1.344 3.687 3.156 1.922.219 3.313 1.844 3.313 3.766 0 .297-.047.609-.109.922l-1.922 8C23.47 14.906 24.376 14 26.017 14c2.172 0 3.984 1.766 3.984 3.953 0 1.313-.641 2.531-1.672 3.313l-7.922 5.938a3.995 3.995 0 0 1-2.391.797H7.172zM17.25 2c-.797 0-1.5.562-1.687 1.344L13.001 14h-1.984L8.751 4.594A1.752 1.752 0 0 0 7.064 3.25c-1 0-1.75.797-1.75 1.766a2 2 0 0 0 .047.438l2.063 8.547h-.406L5.471 7.626c-.187-.766-.891-1.375-1.703-1.375a1.76 1.76 0 0 0-1.719 2.156l1.813 7.469c.219.906.063 1.813.297 2.719l1.563 6.266a1.503 1.503 0 0 0 1.453 1.141h10.844c.422 0 .844-.141 1.188-.406l7.922-5.922c.531-.406.875-1.047.875-1.719 0-1.094-.906-1.953-1.984-1.953-.438 0-.859.141-1.203.406l-4.797 3.594v-3.547c0-.125 2.016-8.406 2.172-9.078.031-.141.063-.297.063-.453 0-.969-.734-1.797-1.734-1.797-.812 0-1.516.562-1.703 1.344l-1.813 7.531h-.406l2.344-9.75c.031-.141.047-.297.047-.438 0-.984-.719-1.813-1.734-1.813z"/></svg>
      </router-link>
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

.grid {
  @include breakpoint($large) {
    display:grid;
    //background:radial-gradient(circle farthest-corner at center center, $negro 0%, #ccc 100%);
    height:100%;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(12, 1fr);
    grid-gap: 2vw;
    background: $negro;
    transform: rotate(2deg);
  }
}

.grid__item {
  background-color: $rojo;
  padding: 3rem 1.5rem;
  position:relative; // for link-layer
  margin: 0 $gutter / 2 $gutter $gutter / 2;
  @include breakpoint($large) {
    padding: 2rem;
    margin: 0;
  }
  &:hover {
    h1:after {
      opacity:1;
      top:-5px;
      left:-5px;
    }
    h1:before {
      opacity:1;
      top:5px;
      left:5px;
    }
  }
  h1 {
    text-transform: uppercase;
    color: $blanco;
    font-size:2.5rem;
    line-height: 1;
    letter-spacing: 0.5rem;
    position:relative;
    z-index:1;
    &:after {
      content: attr(data-title);
      color: $verde;
      position:absolute;
      transition:all 0.25s ease-out;
      top:0;
      left:0;
      width:100%;
      display:block;
      z-index:-1;
      opacity:0;
    }
    &:before {
      content: attr(data-title);
      transition:all 0.35s ease-out;
      color: $rosa;
      position:absolute;
      top:0;
      left:0;
      width:100%;
      display:block;
      z-index:-2;
      opacity:0;
    }
  }
  p {
    margin-bottom: 1.5rem;
    &:last-child {
      margin-bottom:0;
    }
  }
}

.grid__item--full:hover {
  background-image:none !important;
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
  margin: $gutter / 2 0;
}

.grid__header {
  background-color:transparent;
  grid-column: span 2;
  grid-row: span 6;
  transform: rotate(-2deg);
}

.grid__redes {
  grid-column: 3 / 7;
  grid-row: 1 / 3;
  background:transparent;
  padding:0;
  margin-bottom: $gutter;
  display:flex;
  justify-content:center;
  @include breakpoint($large) {
    margin-bottom: 0;
    flex-direction:column;
    justify-content:flex-end;
  }
  h1 {
    font-size:0.75rem;
    margin:0;
  }
}

@keyframes moveBg {
  from {
    background-position: center 0%;
  }
  to {
    background-position: center 33%;
  }
}

.grid__info {
  // display:none;
  grid-column: 3 / 7;
  grid-row: 3 / 7;
  &:hover {
    background-image: url('/static/smf.jpg');
    background-repeat: no-repeat;
    background-position: center 0%;
    background-size: cover;
    animation: moveBg 2s linear infinite alternate;
  }
}

@keyframes shakeBg {
  0% {
    background-position: 50% 50%;
    background-size: 210%;
  }
  25% {
    background-position: 60% 40%;
    background-size: 205%
  }
  50% {
    background-position: 40% 60%;
    background-size:185%
  }
  75% {
    background-position: 55% 45%;
    background-size:230%;
  }
}

.grid__fotos {
  //display:none;
  grid-column: 2 / 4;
  grid-row: 7 / 13;
  &:hover {
    background-image: url('/static/foto1.jpg');
    background-repeat: no-repeat;
    background-position: 0% 0%;
    background-size: 200%;
    animation: shakeBg 1s linear 5 alternate;
  }
}

.grid__bolos {
  //display:none;
  grid-column: 4 / 7;
  grid-row: 7 / 11;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  &:hover {
    h1:after {
      top:-2px;
      left:-2px;
    }
    h1:before {
      top:2px;
      left:2px;
    }
  }
  h1 {
    font-size: 1rem;
    letter-spacing:0.1rem;
  }
}

@keyframes shake {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-10deg);
  }
}

.grid__contact {
  grid-column: 4 / 6;
  grid-row: 11 / 13;
  padding: 0 $gutter;
  margin-bottom: $gutter;
  @include breakpoint($large) {
    padding:0;
    margin-bottom:0;
  }
  svg {
    fill:$blanco;
    display:block;
    height: 2rem;
  }
  span {
    display:block;
    margin-bottom: $gutter / 4;
  }
  a {
    display:block;
    text-transform: uppercase;
    font-weight:bold;
    color: $blanco;
    font-size: 1rem;
    line-height:1;
  }
  &:hover {
    svg {
      transform-origin: 50% 100%;
      animation: shake 0.75s ease-out infinite;
    }
  }
}

.redes {
  ul {
    margin:0;
    padding:0;
  }
  li {
    display:inline-block;
    vertical-align:top;
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
  margin-bottom: $gutter / 4;
  // border-bottom: $gutter / 6 solid $rojo_oscuro;
  // padding-bottom: $gutter / 2;
  text-transform: uppercase;
  font-weight:bold;
}

.concert__links {
  margin:0;
  padding:0;
  list-style-type:none;
  display:flex;
  li {
    display:inline-block;
    margin-right:$gutter / 4;
    font-size:0.55rem;
    letter-spacing: 0.04rem;
    line-height:2;
    text-transform: uppercase;
    font-weight:bold;
    a.button {
      display:block;
      background-color: $rojo-oscuro;
      padding: 0 $gutter / 4;
      &:hover,
      &:focus {
        background-color: $negro;
      }
    }
  }
}

.grid__persons {
  display:flex;
  height:75px;
  margin-bottom: $gutter;
  grid-column: 2 / 3;
  grid-row: 7 / 13;
  @include breakpoint($large) {
    flex-direction:column;
    justify-content:space-between;
    height: auto;
    margin-bottom:0;
  }
}

  .grid__person {
    flex:1;
    margin: 0 $gutter / 2;
    @include breakpoint($large) {
      flex: 0 0 30%;
      margin:0;
    }
    background-image: url('/static/smf.jpg');
    background-repeat: no-repeat;
    background-size:300% auto;
    position:relative;
  }

  .grid__pablo {
    background-position: 95% 25%;
    background-size:350% auto;
  }
  .grid__nacho {
    background-position: 0% 0%;
    background-size:250% auto;
  }
  .grid__oscar {
    background-position: 45% 25%;
    background-size:325% auto;
  }

</style>
