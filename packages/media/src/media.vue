
<template>

  <div class="xm-media">

    <xm-audio   v-if="type.indexOf('audio')>-1" :src="src" v-bind="$attrs"></xm-audio>

    <xm-video  v-if="type.indexOf('video')>-1"  :src="src"  v-bind="$attrs"></xm-video>

    <el-image v-if="type.indexOf('image')>-1" :src="src"  v-bind="$attrs"></el-image>

  </div>

</template>

<script>
import { matchType } from '../../../utils/tool'
export default {
  name: 'xm-media',
  data () {
    return {

    }
  },
  props: {
    src: {
      type: String,
      default: ''
    },
    defaultCover: {
      type: String,
      default: ''
    }
  },
  computed: {
    type () {
      return matchType(this.src)
    }
  }
}
</script>
