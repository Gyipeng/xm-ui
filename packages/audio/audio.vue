
<template>

  <div class="xm-audio">
    <div>


    </div>
  </div>

</template>

<script>
export default {
  name: 'audio',
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
        preload: 'auto',
      },

    }
  }
}
</script>
