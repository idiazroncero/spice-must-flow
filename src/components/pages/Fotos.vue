<template>
  <section class="fotos">
    <h1>Fotos</h1>
    <router-link v-if="full" class="back link-decorated" to="/">← Volver a portada</router-link>
    <flickity v-if="full" ref="flickity" :options="flickityOptions">
      <div class="carousel-cell">
        <img src="/static/foto1.jpg" alt="">
      </div>
      <div class="carousel-cell">
        <img src="/static/foto2.jpg" alt="">
      </div>
      <div class="carousel-cell">
        <img src="/static/foto3.jpg" alt="">
      </div>
      <div class="carousel-cell">
        <img src="/static/foto4.jpg" alt="">
      </div>
    </flickity>
  </section>
</template>

<script>

import Flickity from 'vue-flickity';

export default {
  props: {
    full: Boolean,
  },
  components: {
    Flickity,
  },
  data() {
    return {
      flickityOptions: {
        prevNextButtons: false,
        pageDots: true,
        wrapAround: true,
      },
    };
  },
};
</script>


<style lang="scss">
@import "../../scss/settings.scss";

@import "flickity/css/flickity.css";

.fotos {
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  height:100%;
}
.flickity-enabled {
  width:100%;
  flex:1;
}
.carousel-cell {
  width:100%;
  height:100%;
  img {
    max-width:100%;
    max-height:100%;
    margin:0 auto;
    display:block;
  }
}

</style>
