
<template>
  <div :class="cls">
     <p v-if="content">{{content}}</p>
  </div>

</template>

<script>
const classnames = require('classnames')
export default {
  name: 'bubble',
  data () {
    return {}
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    content: {}
  },
  computed: {
    cls () {
      const className = classnames('Bubble', {
        [this.type]: true
      })
      return className
    }
  }
}
</script>
