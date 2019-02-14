<template>

</template>

<script>

import WaveSurfer from 'wavesurfer.js';

export default {
  data() {
    return {
      title: 'Radio',
      current: 0,
      playing: false,
      playlist: [
        {
          url: '/static/Life_is_dangerous.mp3',
          title: 'Life is Dangerous',
          subtitle: 'Brixton sessions, 1981',
          isActive: true,
        },
        {
          url: '/static/Black_magic.mp3',
          title: 'Black Magic',
          subtitle: 'Brixton sessions, 1981',
          isActive: false,
        },
        {
          url: '/static/Whispering.mp3',
          title: 'Whispering',
          subtitle: 'Brixton sessions, 1983',
          isActive: false,
        },
        // {
        //   url: '/static/Free.mp3',
        //   title: 'Free',
        //   isActive: false,
        // },
        // {
        //   url: '/static/Rain_club.mp3',
        //   title: 'Rain Club',
        //   isActive: false,
        // },
      ],
    };
  },
  methods: {
    initWavesurf() {
      this.wavesurfer = WaveSurfer.create({
        container: '#radio',
        waveColor: '#a01714',
        progressColor: '#600F0C',
        cursorColor: '#ffffff',
        cursorWidth: 0,
        barWidth: 3,
        height: 125,
      });
      this.wavesurfer.load(this.playlist[0].url);
      this.indexPlaying = 0;
    },
    addWaveSurfListeners() {
      const me = this;
      this.wavesurfer.on('finish', () => {
        me.next();
      });
      this.wavesurfer.on('ready', () => {
        if (me.playing) {
          me.play();
        }
      });
    },
    getSurfer() {
      return this.wavesurfer;
    },
    play() {
      this.playing = true;
      this.wavesurfer.play();
    },
    playItem(item) {
      this.playlist[this.indexPlaying].isActive = false;
      this.indexPlaying = item;
      this.wavesurfer.load(this.playlist[this.indexPlaying].url);
      this.playlist[this.indexPlaying].isActive = true;
    },
    pause() {
      this.playing = false;
      this.wavesurfer.pause();
    },
    next() {
      this.playlist[this.indexPlaying].isActive = false;

      if (this.indexPlaying < this.playlist.length - 1) {
        this.indexPlaying += 1;
        this.wavesurfer.load(this.playlist[this.indexPlaying].url);
      } else {
        this.indexPlaying = 0;
        this.wavesurfer.load(this.playlist[0].url);
      }

      this.playlist[this.indexPlaying].isActive = true;
    },
    prev() {
      this.playlist[this.indexPlaying].isActive = false;

      if (this.indexPlaying > 0) {
        this.indexPlaying -= 1;
        this.wavesurfer.load(this.playlist[this.indexPlaying].url);
      } else {
        this.indexPlaying = this.playlist.length - 1;
        this.wavesurfer.load(this.playlist[this.playlist.length - 1].url);
      }

      this.playlist[this.indexPlaying].isActive = true;
    },
    // togglePlayPause() {
    //   this.wavesurfer.playPause();
    // },
  },
  mounted() {
    this.initWavesurf(this);
    this.addWaveSurfListeners();
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../../scss/settings.scss";



</style>
