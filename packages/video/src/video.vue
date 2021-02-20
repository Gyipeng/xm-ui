
<template>
 <div :class="cls" :style="style">
   <img  v-if="!playing&&poster" class="xm-video__play" :src="play" alt="" @click.stop="handleToPlay">
   <!--<i :class="icon"  class="xm-video__type" ></i>-->
   <video
     ref="video"
     v-show="show"
     controls
     @canplay="onCanplay"
     @play="onPlay"
     @pause="onPaused"
     class="video"
     object-fit="contain"
     :src="src"
     style="width: 100%;height: 100%"
   >
     抱歉，您的浏览器不支持内嵌视频，不过不用担心，你可以 <a :href="src">下载</a>
     并用你喜欢的播放器观看!
   </video>
   <div class="xm-video__time" v-if="poster">{{this.duration}}</div>
 </div>
</template>

<script>
import {realFormatSecond} from '../../../utils/tool'
import play from '../../../assets/img/play.png'
const classnames = require('classnames')
export default {
  name: 'xmVideo',
  data () {
    return {
      duration: '00:00',
      playing: false,
      play,
      onePlay: !!this.poster
    }
  },
  props: {
    src: {
      type: String,
      default: ''
    },
    poster: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }

  },
  methods: {
    onCanplay () {
      const video = this.$refs.video
      this.duration = video && video.duration && realFormatSecond(video.duration)
    },
    handleToPlay (e) {
      this.playing = true
      this.onePlay = false
      const video = this.$refs.video
      video.play()
      const { target } = e
      const videos = document.getElementsByTagName('video');
      [...videos].forEach((item) => {
        if (item.parentElement !== target.parentElement) {
          item.pause()
        }
      })
    },
    onPlay (e) {
      this.playing = true
      const { target } = e
      const video = document.getElementsByTagName('video');
      [...video].forEach((item) => {
        if (item !== target) {
          item.pause()
        }
      })
    },
    onPaused () {

    },
    init () {
      this.$refs.video.currentTime = 0
      this.playing = false
    }
  },
  computed: {
    cls () {
      return classnames('xm-video')
    },
    style () {
      return { background: `url(${this.playing ? '' : this.poster}) center center / cover no-repeat`}
    },
    show () {
      return this.playing || !this.poster
    }

  }
}
</script>
