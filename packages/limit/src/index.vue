
<template>
  <div class="xm-textarea" v-if="type==='textarea'">
    <textarea
      :style="[getInnerTextAreaStyle]"
      class="xm-textarea__inner"
      ref="textarea"
      :value="value"
      :rows="rows"
      v-bind="$attrs"
      :disabled="disabled"
      :placeholder="placeholder"
      v-on:keyup="handleTextAreaKeyDown"
      @input="handleTextAreaInput"
      @focus="focus=true"
      @blur="focus=false"
    />
    <span class="xm-textarea__textOver"  >
    <span :class="{'xm-textarea--isOver':isOver}">{{count}}</span>/<span>{{limit}}</span>
    </span>
  </div>
  <div class="xm-input" v-else

       @mouseenter="hovering = true"
       @mouseleave="hovering = false"
  >
    <input
      class="xm-input__inner"
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
      v-on:keyup="$emit('input',$event.target.value)"
      @input="input"
      @focus="focus=true"
      @blur="focus=false"
    />
    <span class="xm-input__count" >
      <span :class="{'xm-textarea--isOver':isOver}">{{count}}</span>/<span>{{limit}}</span>
   </span>
    <div class="xm-input__tip" v-if="tip">{{tip}}</div>
  </div>

</template>

<script>
const HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
  `
const CONTEXT_STYLE = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'font-family',
  'font-weight',
  'font-size',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'padding-left',
  'padding-right',
  'border-width',
  'box-sizing'
]
export default {
  name: 'xmLimit',
  data () {
    return {
      focus: false,
      hovering: false
    }
  },
  props: {
    placeholder: String,
    value: {},
    disabled: Boolean,
    type: {
      type: String,
      default: 'text',
      validate (val) {
        return ['text', 'textarea'].indexOf(val) !== -1
      }
    },
    limit: {
      type: [String, Number],
      default: 20
    },
    rows: {
      type: Number,
      default: 1
    },
    autosize: {
      type: Boolean,
      default: false
    },
    tip:{
      type: String,
      default: '',
    }
  },
  computed: {
    getInnerTextAreaStyle (targetElement) {
      return {
        minHeight: `${this.rows * 20}px`
      }
    },
    isOver () {
      return this.count > this.limit
    },
    count () {
      return this.value ? this.value.length : 0
    }
  },
  methods: {
    calcNodeStyle (targetElement) {
      const style = window.getComputedStyle(targetElement)

      const boxSizing = style.getPropertyValue('box-sizing')

      const paddingSize = (
        parseFloat(style.getPropertyValue('padding-bottom')) +
        parseFloat(style.getPropertyValue('padding-top'))
      )

      const borderSize = (
        parseFloat(style.getPropertyValue('border-bottom-width')) +
        parseFloat(style.getPropertyValue('border-top-width'))
      )

      const contextStyle = CONTEXT_STYLE.map(name => `${name}:${style.getPropertyValue(name)}`).join(';')

      return { contextStyle, paddingSize, borderSize, boxSizing }
    },
    calcTextAreaAutoHeight (target) {
      if (!this.autosize) {
        return
      }
      if (!this.tempTextArea) {
        this.tempTextArea = document.createElement('textarea')
        document.body.appendChild(this.tempTextArea)
      }
      const { contextStyle, paddingSize, borderSize, boxSize } = this.calcNodeStyle(target)
      this.tempTextArea.value = target.value
      this.tempTextArea.setAttribute('style', `${contextStyle};${HIDDEN_STYLE}`)
      const height = this.tempTextArea.scrollHeight + (this.tempTextArea.offsetHeight - this.tempTextArea.clientHeight)
      target.style.height = height + 'px'
      // console.log('calc height:', height)
    },
    handleTextAreaInput (event) {
      this.$emit('input', event.target.value)
      this.calcTextAreaAutoHeight(event.target)
    },
    handleTextAreaKeyDown (event) {
      this.$emit('input', event.target.value)
    },
    input ($event) {
      this.$emit('input', $event.target.value)
    }

  },
  watch: {
    value (val) {

      this.$emit('input', val)
      this.$emit('change', val)
      if (this.isOver) this.$emit('overText', this.value)
    }
  }

}
</script>
