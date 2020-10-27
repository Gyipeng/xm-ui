import { realFormatSecond, judgeAudioType } from './tool'
const BenzAMRRecorder = require('benz-amr-recorder')

export const mixin = {
  created () {
    if (this.isAmr) {
      this.amr = new BenzAMRRecorder()
      this.amr.initWithUrl(this.src).then(() => {
        this.audio.maxTime = this.amr.getDuration()
      })
    }
  },
  methods: {
    // 控制音频的播放与暂停
    startPlayOrPause () {
      return this.audio.playing ? this.pause() : this.play()
    },
    // 播放音频
    play () {
      this.$refs.audio.play()
    },
    // 暂停音频
    pause () {
      this.$refs.audio.pause()
    },
    // 当音频播放
    onPlay (res) {
      this.audio.playing = true
      const { target } = res
      const audios = document.getElementsByTagName('audio');
      [...audios].forEach(item => {
        if (item !== target) {
          item.pause()
        }
      })
    },
    // 当音频暂停
    onPause () {
      this.audio.playing = false
    },
    onTimeupdate (res) {
      // 时间更新时触发
      this.audio.currentTime = res.target.currentTime
    },
    onLoadedmetadata (res) {
      // 初始化音频
      this.audio.maxTime = parseInt(res.target.duration)
    },
    AmrPlayOrPause () {
      return this.audio.playing ? this.pauseAmr() : this.playAmr()
    },
    playAmr () {
      this.amr.play()
      this.changeTime()
      this.timer = setInterval(this.changeTime, 1000)
      this.audio.playing = true
      this.amr.onPlay(() => {
        this.audio.playing = true
      })
      this.amr.onStop(() => {
        this.audio.playing = false
      })
      this.amr.onEnded(() => {
        this.audio.playing = false
      })
      this.amr.onAutoEnded(() => {
        this.audio.playing = false
      })
    },
    changeTime () {
      this.audio.currentTime++
    },
    pauseAmr () {
      this.amr.stop()
      this.audio.playing = false
      this.timer = null
    }
  },
  computed: {
    palyAudioDuration () {
      return realFormatSecond(this.audio.currentTime)
    },
    audioDuration () {
      // 总时长
      return realFormatSecond(this.audio.maxTime)
    },
    audioDate () {
      // 音频创建日期
      // return formatTime2Date(this.createTime)
    },
    isAmr () {
      return judgeAudioType(this.src) === 'amr'
    }
  }
}
