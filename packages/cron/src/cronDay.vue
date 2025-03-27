<!--
 * @Author: gyp
 * @Date: 2025-03-21 13:41:26
 * @LastEditTime: 2025-03-25 16:05:01
 * @LastEditors: gyp
 * @Description: 
 * @FilePath: /xm-ui/packages/cron/src/cronDay.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->

<template>
  <div class="xm-cronDay">
    <div class="xm-cron__time">
    <el-input v-model="huors"   @change="change" ></el-input>
    <el-input v-model="minutes" @change="change"  ></el-input>
    </div>
  </div>
</template>

<script>
const classnames = require('classnames')
import { provideCornHoursForDayExpression, provideWeekMenuForWeek } from './cronUtil'
export default {
  name: 'xmCronDay',
  data () {
    return {
        cornList: [],
        huors: '',
        minutes: ''
    }
  },
  props: {
     value: {
      type: String,
      default: provideCornHoursForDayExpression()
    }
  },
  created () {
    this.cornList = this.value.split(' ')
    this.huors = this.cornList[2]
    this.minutes = this.cornList[1]
    this.change()
  },
  methods: {
    change (e) {
      this.cornList[2] = this.huors
      this.cornList[1] = this.minutes
      let value = this.cornList.join(' ')
      this.$emit('change', value)
      this.$emit('input', value)
    }
  }
}
</script>
