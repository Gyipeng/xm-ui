
<template>
  <transition name="xm-zoom-in-center">
  <div  :class="cls" >
       <span class="xm-tag__desc" @click="click"><slot></slot></span>
       <i :class="closeCls" v-if="closable" @click="close"></i>
  </div>
  </transition>
</template>

<script>
const classnames = require('classnames')
export default {
  name: 'xmTag',
  data () {
    return {

    }
  },
  props: {
    closable: Boolean,
    type: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'primary'
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    click () {
      this.$emit('click')
    }
  },
  computed: {
    cls () {
      const className = classnames('xm-tag', 'xm-tag--default', {
        [`xm-tag--${this.type}`]: this.type
      })

      return className
    },
    closeCls () {
      const className = classnames('xm-icon', 'icon-X', {
        [`xm-icon--${this.color || 'primary'}`]: true
      })
      return className
    }
  }
}
</script>
