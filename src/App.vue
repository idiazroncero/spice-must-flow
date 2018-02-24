<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
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
}
</style>
