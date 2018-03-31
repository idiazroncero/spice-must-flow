<template>
  <div id="app">
    <transition name="page" :duration="1500">
      <router-view/>
    </transition>
    <div class="radio__wrapper">
      <Radio />
    </div>
  </div>
</template>

<script>
import Radio from './components/pages/Radio';

export default {
  name: 'App',
  components: {
    Radio,
  },
};
</script>

<style lang="scss">

@import "scss/settings.scss";

@font-face {
  font-family: 'Geomanist';
  src: url('assets/fonts/geomanist-thin-webfont.woff2') format('woff2'),
       url('assets/fonts/geomanist-thin-webfont.woff') format('woff');
  font-weight: 100;
  font-style: normal;
}
@font-face {
  font-family: 'Geomanist';
  src: url('assets/fonts/geomanist-light-webfont.woff2') format('woff2'),
       url('assets/fonts/geomanist-light-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Geomanist';
  src: url('assets/fonts/geomanist-bold-webfont.woff2') format('woff2'),
       url('assets/fonts/geomanist-bold-webfont.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

* {
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html {
  font-family: 'Geomanist', Helvetica, Arial, sans-serif;
  background: $negro;
  color: $blanco;
  font-size:100%;
  line-height: $base-line-height;
}

a,
a:link,
a:visited {
  color: $blanco;
  text-decoration:none;
  position:relative;
  &.link-decorated {
      &:before {
        content:"";
        position:absolute;
        bottom: - 0.25em;
        right:0;
        width:100%;
        max-width:50%;
        height: 0.25em;
        background-color: $blanco;
        opacity:0.5;
        transition: all 0.5s ease-in-out;
      }
  }
}

a:focus,
a:hover {
  &.link-decorated {
      &:before {
        max-width:100%;
        opacity:1;
      }
  }
}

a.link-layer {
  position:absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
}

.page-enter-active {
  position:absolute;
  top:0;
  left:0;
  opacity:0;
  transition: opacity 0.75s ease-out 0.75s;
}

.page-enter-to {
  opacity:1;
}

.page-leave-active {
  .grid__info{
    transition: opacity 0.25s ease-out;
    opacity:1;
  }
  .grid__fotos {
    transition: opacity 0.25s ease-out 0.25s;
    opacity:1;
  }
  .grid__bolos {
    transition: opacity 0.25s ease-out 0.5s;
    opacity:1;
  }
}

.page-leave-to {
  .grid__info,
  .grid__fotos,
  .grid__bolos {
    opacity:0;
  }
}


#app {
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  overflow:hidden;
  display:flex;
}

.grid {
  width: 75%;
  padding:4vw 0 4vw 4vw;
}

.radio__wrapper {
  display:grid;
  height:100%;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 2vw;
  transform: rotate(2deg);
  width: calc(25% - 2vw);
  margin-left: 2vw;
  padding:4vw 4vw 4vw 0;
}

.radio {
  grid-row: 2 / span 4;
}

.escondido {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
}

</style>
