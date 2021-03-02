
<template>
  <div class="xm-img">
    <el-image v-width="'100%'"  v-height="'100%'"  v-bind="$attrs" :src="src"></el-image>
    <div class="xm-img__title" v-if="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'xm-img',
  data () {
    return {

    }
  },
  props: {
    title: String,
    src: String
  },
  created () {
    // console.log(this)
  }
}
</script>
