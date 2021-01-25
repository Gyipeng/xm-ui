
<template>
   <div class="xm-plain-card"  v-if="plain||size==='mini'">

     <xm-media v-height="126"  :title="title" :src="src" v-bind="$attrs" :fit="fit"></xm-media>
     <div class="xm-plain-card__container" :style="bodyStyle">
       <div class="xm-plain-card__des">  {{ desc }}</div>
       <!--<div class="xm-plain-card__content" ><slot></slot></div>-->
     </div>
   </div>
   <div :class="cls" v-else-if="size==='small'">
     <xm-media v-height="144"  :src="src" v-bind="$attrs" :fit="fit"></xm-media>
     <div class="xm-card--small-container" :style="bodyStyle">
        <div class="xm-card--small-title">{{title}}</div>
        <div class="xm-card--small-des">{{ desc }}</div>
     </div>
   </div>

   <div v-else :class="cls" >
    <slot name="header"></slot>
    <slot v-if="$slots.default"></slot>
    <div v-else class="xm-card__body" >
      <div class="xm-card__header">
        <xm-media :src="src" v-bind="$attrs" :fit="fit"></xm-media>
      </div>
      <div class="xm-card__content" :style="bodyStyle">
        <div class="xm-card__title">
          {{ title }}
        </div>
        <div class="xm-card__desc">
          {{ desc }}
        </div>
        <div class="xm-card__footer">
           <xm-tag class="xm-card__action" round  type="plain" v-for="action in actions" >
             {{action}}
           </xm-tag>
        </div>
      </div>
    </div>
    <slot name="footer"></slot>

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
    },
    size: {
      type: String,
      validator: (value) => {
        return ['medium', 'small', 'mini'].indexOf(value) !== -1
      },
      default: 'medium'
    },
    fit: {
      type: String,
      default: 'contain'
    }
  },
  computed: {
    cls () {
      const className = classnames('xm-card', {[`xm-card--${this.size}`]: !!this.size})
      return className
    },
    getBodyStyle () {
      return { padding: '0px', ...this.bodyStyle}
    }

  }
}
</script>
