<template>
  <section class="radio grid__item">
    <h1 class="escondido">Radio</h1>
    <div id="radio"></div>
    <div class="radio__controls">
      <button @click="prev" class="radio__prev">&lt;</button>
      <button @click="play" class="radio__play">Play</button>
      <button @click="pause" class="radio__pause">Pause</button>
      <button @click="next" class="radio__next">&gt;</button>
    </div>
    <ul class="radio__playlist">
        <li @click="playItem(index)" v-for="(item, index) in playlist" :key="item.title" v-bind:class="{ 'mp3--active' : item.isActive }">
            {{ item.title }}
        </li>
    </ul>
  </section>
</template>

<script>

import WaveSurfer from 'wavesurfer.js';

export default {
  data() {
    return {
      title: 'Radio',
      current: 0,
      playlist: [
        {
          url: '/static/Free.mp3',
          title: 'Free',
          isActive: true,
        },
        {
          url: '/static/Black_magic.mp3',
          title: 'Black Magic',
          isActive: false,
        },
        {
          url: '/static/Life_is_dangerous.mp3',
          title: 'Life is Dangerous',
          isActive: false,
        },
        {
          url: '/static/Rain_club.mp3',
          title: 'Rain Club',
          isActive: false,
        },
        {
          url: '/static/Whispering.mp3',
          title: 'Whispering',
          isActive: false,
        },
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

.grid__item.radio {
  background: $negro;
  border: 5px solid $rojo-oscuro;
  padding: 0;
  display:flex;
  flex-direction:column;
}

.radio__controls {
  display:flex;
  border-bottom: 2px solid $negro;
  button {
    appearance:none;
    border:none;
    background:$rojo-oscuro;
    border-radius:0;
    color:$blanco;
    font-size:0.66rem;
    line-height:2.66;
    font-weight:bold;
    text-transform:uppercase;
    flex:1;
    &:hover,
    &:focus {
      background: $rojo;
    }
  }
  .radio__play {
    border-left: 2px solid $negro;
    border-right: 2px solid $negro;
  }
  .radio__pause {
    border-right: 2px solid $negro;
  }
}

.radio__playlist {
  margin:0;
  padding:0;
  list-style-type:none;
  display:flex;
  flex-direction:column;
  flex:1;
  li {
    flex:1;
    display:flex;
    align-items:center;
    padding: 5px;
    border-bottom:2px solid $rojo-oscuro;
    cursor: pointer;
    &.mp3--active,
    &:hover {
      font-weight:bold;
      background-color: $rojo-oscuro;
    }
  }
}

</style>
