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
@import "../node_modules/breakpoint-sass/stylesheets/breakpoint";


</style>
