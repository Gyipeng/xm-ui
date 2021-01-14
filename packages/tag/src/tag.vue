
<template>
  <transition name="xm-zoom-in-center">
  <div  :class="cls" @click="click">
       <span class="xm-tag__desc" ><slot></slot></span>
       <i :class="closeCls" v-if="closable" @click.stop="close"></i>
      <!--<img src="../../../assets/im" alt="">-->
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
    },
    round: [Boolean],
    border: [Boolean],
    size: {
      type: String,
      validator: (value) => {
        return ['medium', 'small', 'mini'].indexOf(value) !== -1
      },
      default: 'small'
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
        [`xm-tag--${this.type}`]: this.type,
        [`xm-tag--${this.size}`]: !!this.size,
        [`is-round`]: this.round,
        [`is-border`]: this.closable
      })

      return className
    },
    closeCls () {
      const className = classnames('xm-icon', 'icon-Cha', {
        [`xm-icon--${this.color || 'primary'}`]: true
      })
      return className
    }
  }
}
</script>
