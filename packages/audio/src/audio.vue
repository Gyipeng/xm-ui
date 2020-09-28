
<template>

  <div :class="cls" >
      <div class="xm-audio__defaultCover"  :style="style"   ></div>
      <i :class="icon" class="xm-audio__type"></i>
      <img class="xm-audio__play" :src="palyOrStop" alt="" @click="handleToPlay">
      <audio ref="audio"
             class="audio"
             @timeupdate="onTimeupdate"
             @loadedmetadata="onLoadedmetadata"
             @play="onPlay"
             @pause="onPause"
             :src="src" >
      </audio>

  </div>

</template>

<script>
import { mixin } from '../../../src/utils/audio'
import stop from '../../../src/assets/img/stop.png'
import play from '../../../src/assets/img/play.png'
const classnames = require('classnames')
export default {
  name: 'xmAudio',
  data () {
    return {
      audio: {
        // 该字段是音频是否处于播放状态的属性
        playing: false,
        currentTime: 0,
        maxTime: 0,
        muted: false,
        speed: 1,
        waiting: true,
        preload: 'auto'

      }

    }
  },
  props: {
    src: String,
    palyImg: {
      type: String,
      default: play

    },
    stopImg: {
      type: String,
      default: stop
    },
    cover: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'icon-music'
    },
    defaultCover: {
      type: String,
      default: 'http://124.42.103.156:8089/group1/M00/12/27/CgrQc17xnbKAUi-hAAAaz4PvzBE824.png'
    }
  },
  mixins: [mixin],
  computed: {
    cls () {
      return classnames('xm-audio', {'xm-audio--disabled': this.playing})
    },
    palyOrStop () {
      return this.audio.playing ? this.stopImg : this.palyImg
    },
    style () {
      if (this.cover) {
        return { width: '100%', height: '100%', background: `url(${this.cover}) center center / cover no-repeat` }
      }
      return { width: '100%', height: '100%', background: `url(${this.defaultCover}) no-repeat center center / 104px ` }
    }

  },
  methods: {
    handleToPlay () {
      this.startPlayOrPause()
    }
  }
}
</script>
