<!--
 * @Author: gyp
 * @Date: 2025-03-21 13:41:26
 * @LastEditTime: 2025-03-25 16:04:38
 * @LastEditors: gyp
 * @Description: 
 * @FilePath: /xm-ui/packages/cron/src/cronMonth.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->

<template>
  <div class="xm-cronMonth">
      <div class="xm-cron__checkbox">
        <el-checkbox-group v-model="checkedList"   @change="change" >
          <el-checkbox 
            v-for="item in checkedMenus"
            :label="item.value" 
            :key="item.label" 
            >
            {{item.label}}
            </el-checkbox>
       </el-checkbox-group>
      </div>
     <div class="xm-cron__time">
       <el-input v-model="huors"   @change="change" ></el-input>
       <el-input v-model="minutes" @change="change"  ></el-input>
     </div>
  
  </div>
</template>

<script>
const classnames = require('classnames')
import { provideCornDayForMonthExpression, provideDayMenuForMonth } from './cronUtil'
export default {
  name: 'xmcronMonth',
  data () {
    return {
      checkedList: [],
      cornList:[],
      huors:'',
      minutes:''

    }
  },
  props: {
     value: {
      type: String,
      default: provideCornDayForMonthExpression()
    },
    checkedMenus: {
      type: Array,
      default: () => provideDayMenuForMonth()
    },
  },
  created () {
    this.cornList = this.value.split(' ')
    this.checkedList = this.cornList[3].split(',')
    this.huors = this.cornList[2]
    this.minutes = this.cornList[1]
    this.change()
  },
  computed: {
   
  },
  methods: {
    change (e) {
      this.cornList[3] = this.checkedList.join(',')
      this.cornList[2] = this.huors
      this.cornList[1] = this.minutes
      let value = this.cornList.join(' ')
      console.log('value', value)
      this.$emit('change', value)
      this.$emit('input', value)
    }
  }
}
</script>
