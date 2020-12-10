
<template>
  <div :class="cls" >
    <i :class="icon"></i>

  </div>
</template>

<script>
const classnames = require('classnames')

export default {
  name: 'xm-alert',
  data () {
    return {

    }
  },
  props: {
    type: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    cls () {
      return classnames('xm-alert', {[`xm-alert--${this.type}`]: !!this.type})
    }
  }
}
</script>
