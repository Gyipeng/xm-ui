<!--
 * @Author: gyp
 * @Date: 2025-03-21 13:41:26
 * @LastEditTime: 2025-03-25 15:12:14
 * @LastEditors: gyp
 * @Description: 
 * @FilePath: /xm-ui/packages/cron/src/cronDiy.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->

<template>
  <div class="xm-cronDiy">
    <el-input v-model="_value"   @change="change" ></el-input>
  </div>
</template>

<script>
const classnames = require('classnames')
export default {
  name: 'xmCronDiy',
  data () {
    return {
       _value: ''
    }
  },
  props: {
     value: {
      type: String,
      default: ''
    }
  },
  created () {
    this._value = this.value
  },
  methods: {
    change (e) {
      this.$emit('change', this._value)
      this.$emit('input', this._value)
    }
  }
}
</script>
