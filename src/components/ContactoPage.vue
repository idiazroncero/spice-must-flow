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
    <section class="grid__item grid__form">
      <h1>Contacto</h1>
      <router-link class="back link-decorated" to="/">← Volver a portada</router-link>
      <form name="contact" method="POST" netlify class="form">
        <input type="hidden" name="form-name" value="contact" />
        <div class="form__item">
          <label>Nombre: <input type="text" name="name"></label>
        </div>
        <div class="form__item">
          <label>e-mail: <input type="email" name="email"></label>
        </div>
        <div class="form__item">
          <label>Mensaje: <textarea name="message"></textarea></label>
        </div>
        <div class="form__item">
          <button type="submit" class="form-button">Enviar</button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>

import Logo from './common/Logo';

export default {
  data() {
    return {
      title: 'Contacto',
    };
  },
  components: {
    Logo,
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import "../scss/settings.scss";
  @import "../../node_modules/breakpoint-sass/stylesheets/breakpoint";

  .grid__form {
      grid-column: 3 / 7;
      grid-row: 3 / 13;
  }

  .form {
    margin-top:$gutter;
  }

  .form__item {
    margin-bottom:$gutter;
    label {
      display:block;
    }
    input[type="text"],
    input[type="email"],
    textarea {
      display:block;
      width:100%;
      font-family: 'Geomanist', Helvetica, Arial, sans-serif;
      line-height: $base-line-height;
      font-size:1rem;
    }
    input[type="text"],
    input[type="email"],
    textarea {
      background:none;
      border:none;
      border-bottom:1px solid $blanco;
      color:$blanco;
      padding: $gutter / 2 0;
    }

    textarea {
      min-height:100px;
    }
  }

  .form-button {
    background: $rojo-oscuro;
    padding: $gutter / 4 $gutter / 2;
    text-transform: uppercase;
    font-weight:bold;
    letter-spacing: 0.1rem;
    border:none;
    color:$blanco;
    font-family: 'Geomanist', Helvetica, Arial, sans-serif;
    line-height: $base-line-height;
    font-size:1rem;
    cursor:pointer;
    &:hover,
    &:focus {
      background-color: $negro;
    }
  }

</style>
