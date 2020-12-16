
<template>
  <div class="xm-media-box">
    <div class="xm-media-box__top">
      <div class="xm-media-box__title">{{title}}</div>
      <!--<div class="xm-media-box__action">-->
        <!--<xm-button-more    v-bind="$attrs" >-->
          <!--<i class="icon-more"></i>-->
        <!--</xm-button-more>-->
      <!--</div>-->
    </div>
    <div class="xm-media-box__content">
    <slot></slot>
    </div>
    <div class="xm-media-box__bottom">
      <slot name="footer">
        <xm-action  v-bind="$attrs" ></xm-action>
      </slot>
    </div>
  </div>
</template>

<script>
import emitter from '../../../utils/emitter.js'
export default {
  name: 'xm-media-box',
  componentName: 'parent',
  data () {
    return {

    }
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  mixins: [emitter],
  methods: {
    name () {

    }
  }
}
</script>
