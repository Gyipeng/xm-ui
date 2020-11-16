
<template>
   <div class="xm-plain-card"  v-if="plain">

     <xm-media v-height="126"  :title="title" :src="src" v-bind="$attrs"></xm-media>
     <div class="xm-plain-card__container">
       <div class="xm-plain-card__des">  {{ desc }}</div>
       <!--<div class="xm-plain-card__content" ><slot></slot></div>-->
     </div>

   </div>

  <el-card v-else :class="cls" :body-style="getBodyStyle">
    <slot name="header"></slot>
    <slot v-if="$slots.default"></slot>
    <div v-else class="xm-card__body">
      <div class="xm-card__header">
        <xm-media :src="src" v-bind="$attrs"></xm-media>
      </div>
      <div class="xm-card__content">
        <div class="xm-card__title">
          {{ title }}
        </div>
        <div class="xm-card__desc">
          {{ desc }}
        </div>
        <div class="xm-card__footer">
           <div class="xm-card--white" v-for="action in actions" :key="action">
             {{action}}
           </div>
        </div>
      </div>
    </div>
    <slot name="footer"></slot>

  </el-card>

</template>

<script>
const classnames = require('classnames')
export default {
  name: 'xmCard',
  data () {
    return {

    }
  },
  props: {
    bodyStyle: Object,
    shadow: String,
    border: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    src: {
      type: String,
      default: ''
    },
    desc: String,
    time: String,
    actions: Array,
    title: String,
    plain: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cls () {
      const className = classnames('xm-card')
      return className
    },
    getBodyStyle () {
      return { padding: '0px', ...this.bodyStyle}
    }

  }
}
</script>
