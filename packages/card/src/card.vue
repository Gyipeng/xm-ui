
<template>
  <div :class="cls">
    1234
  </div>
</template>

<script>
const classnames = require('classnames')
export default {
  name: 'xmCard',
  data () {
    return {

    }
  },
  computed: {
    cls () {
      const className = classnames('xm-card')
      return className
    }
  }
}
</script>
