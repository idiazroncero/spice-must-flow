<template>
  <section class="radio">
    <h1>RADIO</h1>
    <div id="radio"></div>
    <button id="radio-play">Play</button>
  </section>
</template>

<script>

import WaveSurfer from 'wavesurfer.js';

export default {
  data() {
    return {
      title: 'Radio',
    };
  },
  mounted() {
    const wavesurfer = WaveSurfer.create({
      container: '#radio',
      waveColor: 'yellow',
      progressColor: 'black',
      barWidth: 3,
      height: 100,
    });
    const play = document.getElementById('radio-play');

    wavesurfer.load('/static/Free.mp3');
    play.addEventListener('click', () => wavesurfer.play());
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../../scss/settings.scss";

</style>
