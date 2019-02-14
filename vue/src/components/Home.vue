<template>
  <div class="grid">

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


</style>
