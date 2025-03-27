<!--
 * @Author: gyp
 * @Date: 2025-03-21 13:41:26
 * @LastEditTime: 2025-03-25 16:04:19
 * @LastEditors: gyp
 * @Description: 
 * @FilePath: /xm-ui/packages/cron/src/cronWeek.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->

<template>
  <div class="xm-cronWeek">
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
import { provideCornWeekForWeekExpression, provideWeekMenuForWeek } from './cronUtil'
export default {
  name: 'xmCronWeek',
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
      default: provideCornWeekForWeekExpression()
    },
    checkedMenus: {
      type: Array,
      default: () => provideWeekMenuForWeek()
    },
  },
  created () {
    this.cornList = this.value.split(' ')
    this.checkedList = this.cornList[5].split(',')
    this.huors = this.cornList[2]
    this.minutes = this.cornList[1]
    this.change()
  },
  methods: {
    change (e) {
      this.cornList[5] = this.checkedList.join(',')
      this.cornList[2] = this.huors
      this.cornList[1] = this.minutes
      let value = this.cornList.join(' ')
      this.$emit('change', value)
      this.$emit('input', value)
    }
  }
}
</script>
