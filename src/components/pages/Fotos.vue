<template>
  <section class="grid__item grid__fotos" v-bind:class="{ 'grid__item--full' : full}">
    <router-link v-if="!full" to="/fotos" class="link-layer"></router-link>
    <div class="fotos">
      <h1 data-title="Fotos">Fotos</h1>
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
        <div class="carousel-cell"><img src="/static/foto5.jpg" alt=""></div>
        <div class="carousel-cell"><img src="/static/foto7.jpg" alt=""></div>
        <div class="carousel-cell"><img src="/static/foto8.jpg" alt=""></div>
        <div class="carousel-cell"><img src="/static/foto9.jpg" alt=""></div>
        <div class="carousel-cell"><img src="/static/foto10.jpg" alt=""></div>
        <div class="carousel-cell"><img src="/static/foto11.jpg" alt=""></div>
        <div class="carousel-cell"><img src="/static/foto12.jpg" alt=""></div>
        <div class="carousel-cell"><img src="/static/foto13.jpg" alt=""></div>
        <div class="carousel-cell"><img src="/static/foto14.jpg" alt=""></div>
        <div class="carousel-cell"><img src="/static/foto15.jpg" alt=""></div>
      </flickity>
    </div>
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
@import "../../../node_modules/breakpoint-sass/stylesheets/breakpoint";

@import "flickity/css/flickity.css";

.fotos {
  @include breakpoint($large) {
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    height:100%;
  }
}
.flickity-enabled {
  margin-top:$gutter;
  @include breakpoint($large) {
    width:100%;
    width:calc(100% + 4rem);
    margin: 0 -2rem -2rem -2rem;
    flex:1;
  }
  // background-color: $rojo-oscuro;
}
.carousel-cell {
  width:100%;
  @include breakpoint($large) {
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
  }
  img {
    max-width:100%;
    max-height:100%;
    margin:0 auto;
    display:block;
  }
}
@include breakpoint($large) {
  @supports (object-fit:contain) {
    .carousel-cell {
      img {
        width:100%;
        height:100%;
        object-fit:contain;
        object-position:bottom;
      }
    }
  }
}

.flickity-page-dots {
  bottom:0;
  display:flex;
  .dot {
    flex:1;
    width:auto;
    height:1rem;
    border-radius:0;
    margin:0;
    opacity:0.33;
    &.is-selected {
      background-color: $rojo_oscuro;
      opacity:0.66;
    }
  }
}

</style>
