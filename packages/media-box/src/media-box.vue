
<template>
  <div class="xm-media-box">
    <div class="xm-media-box__top">
      <div class="xm-media-box__title">星空插画12一期14.jpg</div>
      <div class="xm-media-box__action">
        <xm-button-more    v-bind="$attrs" >
          <i class="icon-more"></i>
        </xm-button-more>
      </div>
    </div>
    <div class="xm-media-box__content">
    <slot></slot>
    </div>
    <div class="xm-media-box__bottom">

    </div>
  </div>
</template>

<script>

export default {
  name: 'xm-media-box',
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
  methods: {
    name () {

    }
  }
}
</script>
