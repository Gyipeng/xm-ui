
<template>
    <div :class="Cls" @click="checkedCard(label)">
      <slot>
      </slot>
      <div v-if="disabled || isChecked" :class="getModelType"></div>
      <!--<div  :class="{'xm-mask xm-mask&#45;&#45;disabled':disabled}"></div>-->
      <i :class="checkedCls" v-if="isChecked" ></i>
    </div>
</template>

<script>
import emitter from '../../../utils/emitter.js'
const prefix = 'xm-checked-card'
const classnames = require('classnames')
export default {
  name: 'xm-checked-card',
  data () {
    return {
      prefix
    }
  },
  mixins: [emitter],
  props: {
    value: {},
    color: {},
    checkValue: [String, Number, Boolean],
    label: [String, Number, Boolean],
    disabled: Boolean,
    border: {
      type: Boolean,
      default: false
    },
    modelType: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      validator: (value) => {
        return ['medium', 'small', 'mini', 'tiny'].indexOf(value) !== -1
      }
    }
  },
  methods: {
    checkedCard (val) {
      if (this.disabled) return
      if (this.isGroup) {
        this.dispatch('checkedCardGroup', 'input', val)
        this.dispatch('checkedCardGroup', 'change', val)
      } else {
        this.$emit('input', val)
        this.$emit('change', val)
      }
    }

  },
  computed: {
    checkCardGroup () {
      let checkCardGroup = null
      let parent = this.$parent
      while (parent) {
        const parentComponentName = parent.$options.componentName
        const isCheckCardGroup = parentComponentName === 'checkedCardGroup'
        if (isCheckCardGroup) {
          checkCardGroup = parent
          break
        } else {
          parent = parent.$parent
        }
      }
      return checkCardGroup
    },
    isGroup () {
      let parent = this.$parent
      while (parent) {
        const parentComponentName = parent.$options.componentName
        const isCheckCardGroup = parentComponentName === 'checkedCardGroup'
        if (isCheckCardGroup) {
          return true
        } else {
          parent = parent.$parent
        }
      }
      return false
    },
    model: {
      get () {
        let result
        if (this.isGroup) {
          result = this.checkCardGroup.$props.value
        } else {
          result = this.value
        }
        return result
      },
      set (val) {
        if (this.isGroup) {
          this.dispatch('checkedCardGroup', 'input', this.value)
        } else {
          this.$emit('input', val)
        }
      }
    },
    isChecked () {
      return this.model === this.label
    },
    Cls () {
      const className = classnames(prefix, {
        'is-border': this.isChecked,
        'is-disabled': this.disabled
      })
      return className
    },
    checkedCls () {
      const className = classnames('xm-icon', 'icon-gou', {
        [`xm-icon--${this.color || 'primary'}`]: this.isChecked
      })
      return this.isChecked && className
    },
    getModelType () {
      const cls = classnames('xm-mask', {
        'xm-mask--disabled': this.disabled,
        [`xm-mask--${this.modelType}`]: this.isChecked
      })
      return cls
    }

  }

}
</script>
