<template>
  <div :class="cls">
    <div class="xm-template__more" v-if="!isEdit&&more">
      <div class="xm-template__moreText">{{more}}</div>
      <img src="../../../assets/img/more.png" alt=""></div>
    <div v-if="isEdit&&(disabled || isChecked)" :class="getModelType"></div>
    <div class="xm-template__header">
      <div class="xm-template__name">
        <span class="xm-label mr5">模板名称:</span>{{ name }}
      </div>
      <el-checkbox
        v-if="isEdit"
        :label="label"
        :disabled="disabled"
        style="margin-right: -10px"
      >&nbsp
      </el-checkbox
      >
    </div>
    <!--<div class="xm-template__title">-->
    <!--<span class="xm-label mr5">模板ID:</span>{{ id }}-->
    <!--</div>-->
    <div></div>
    <div class="xm-template__content" :style="bodyStyle">
      <slot></slot>
    </div>
    <div class="xm-template__des">
      <xm-button-ellipsis size="mini" :data="buttons"></xm-button-ellipsis>
    </div>
    <div class="xm-template__footer mt20" v-if="state">
      <div class="xm-template__state">
        <span
          class="xm-template__circle mr6"
          v-if="stateColor"
          v-bg-color="stateColor"
        ></span>
        <span>{{ state }}</span>
      </div>
      <xm-button-more :menus="menus" class="xm-template__menus">
        <i class="icon-more"></i>
      </xm-button-more>
    </div>
    <slot name="footer" v-else></slot>

  </div>
</template>

<script>
  import emitter from '../../../utils/emitter.js'

  const prefix = 'xm-template'
  const classnames = require('classnames')
  export default {
    name: 'xm-template',
    componentName: 'parent',
    data() {
      return {
        prefix
      }
    },
    mixins: [emitter],
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      border: {
        type: Boolean,
        default: false
      },
      modelType: {
        type: String,
        default: 'primary'
      },
      buttons: {
        type: Array,
        default: () => []
      },
      stateColor: {
        type: String,
        default: ''
      },
      state: {
        type: String,
        default: ''
      },
      menus: {
        type: Array,
        default: () => []
      },
      label: {},
      isEdit: {},
      value: {},
      id: {},
      name: {},
      footer: {
        type: Boolean,
        default: false
      },
      bodyStyle: {
        type: Boolean
      },
      more: {
        type: [Boolean, String]
      }
    },
    computed: {
      cls() {
        const cls = classnames('xm-template', {
          'xm-template--disabled': this.isEdit && this.disabled,
          'xm-template--border': this.isEdit && this.isChecked
        })

        return cls
      },
      getModelType() {
        const cls = classnames('xm-mask', {
          'xm-mask--disabled': this.isEdit && this.disabled,
          [`xm-mask--${this.modelType}`]: this.isEdit && this.isChecked
        })
        return cls
      },
      _checkboxGroup() {
        let parent = this.$parent
        while (parent) {
          if (parent.$options.componentName !== 'ElCheckboxGroup') {
            parent = parent.$parent
          } else {
            return parent
          }
        }
        return false
      },
      store() {
        return this._checkboxGroup ? this._checkboxGroup.value : this.value
      },
      isChecked() {
        return this._checkboxGroup && this.store.includes(this.label)
      }
    }
  }
</script>
