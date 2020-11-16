
<template>
    <div class="xm-fold"  >
      <slot></slot>
      <div  class="xm-fold__shadow" ref="shadow"></div>
    </div>
</template>

<script>
export default {
  name: 'xm-fold',
  data () {
    return {
      height: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.height = this.$el.offsetHeight * 0.85
      let dom = this.$el.querySelector('.xm-fold__shadow')
      dom.style.height = this.height + 'px'
    })
  },
  computed: {

  }
}
</script>
