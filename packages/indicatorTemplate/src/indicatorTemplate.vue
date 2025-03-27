<!--
 * @Author: gyp
 * @Date: 2025-03-21 13:41:26
 * @LastEditTime: 2025-03-27 10:32:42
 * @LastEditors: gyp
 * @Description: 
 * @FilePath: /xm-ui/packages/indicatorTemplate/src/indicatorTemplate.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->

<template>
  <div class="xm-indicatorTemplate">
    <div class="xm-indicatorTemplate__content">
      <div ref="editor" 
        @keyup="keyup"
        @mouseup="mouseup"
        contenteditable="true" 
        @focus="focus"
        @input="change" 
        style="width: 200px;height: 200px;border: 1px solid black;"
      >
      </div>
    </div>
    <div class="xm-indicatorTemplate__actionBar">
      <div class="xm-indicatorTemplate__actionBar__title">{{title}}</div>
      <div class="xm-indicatorTemplate__actionContent">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane v-for="item in barMenu" :label="item.label" :name="item.value" :key="item.value">
            <div class="xm-indicatorTemplate__actionContent__item"
              v-for="indicator in item.indicators" 
              :key="indicator.value" 
              @click="addIndicator(indicator.value, item.value)"
              >
              {{indicator.label}}
            </div>
          </el-tab-pane>
      </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
const classnames = require('classnames')
export default {
  name: 'xmIndicatorTemplate',
  data () {
    return {
      activeName: '',
      content: '',
    }
  },
  props: {
    title: {
      type: String,
      default: '插入其他指标内容'
    },
     value: {
      type: String,
      default: ''
    },
    barMenu: {
      type: Array,
      default: () => [{
        label: '指标字段',
        value: 'indicator',
        indicators: [
          {
            label: '指标1',
            value: 'indicator1'
          },{
            label: '指标2',
            value: 'indicator2'
          },{
            label: '指标3',
            value: 'indicator3'
          }
        ]
      },{
        label: '日期函数',
        value: 'func',
        indicators: [
          {
            label: 'currentDay',
            value: 'currentDay'
          },{
            label: 'currentWeek',
            value: 'currentWeek'
          },{
            label: 'currentMonth',
            value: 'currentMonth'
          },{
            label: 'currentYear',
            value: 'currentYear'
          }
        ]
      }]
    }
    
  },
  created () {
    this.activeName = this.barMenu[0].value
  },
   mounted () {
    this.$nextTick(() => {
      this.$refs.editor.focus()
      this.content = this.value
      this.$refs.editor.innerHTML = this.value
    })
  },
  computed: {

  },
  methods: {
    focus () {
      this.range = window.getSelection().rangeCount && window.getSelection().getRangeAt(0)
    },
   mouseup () {
      this.range = window.getSelection().getRangeAt(0)
    },
    keyup (e) {
      this.range = window.getSelection().getRangeAt(0)
    },
    insertNode (newNode) {
       if (this.range) {
          this.range.insertNode(newNode)
          this.range.setStartAfter(newNode)
          this.range.collapse(true)
          this.range.deleteContents()
          this.content = this.$refs.editor.innerHTML
       }
    },
    createNode (text, type) {
      let newNode = document.createElement('span')
      if (type === 'indicator') {
        newNode.innerText =  "${[" +`${text}`+ "]}"
      } else if (type === 'func') {
        newNode.innerText = `${text}(0)`
      }
      newNode.style.color = 'red'
      return newNode
    },
    addIndicator (text, type) {
      let newNode = this.createNode(text, type)
      this.insertNode(newNode)
      this.emitValue()
    },
    handleClick (tab, event) {
      console.log(tab, 'tab')
    },
    emitValue () {
      this.$emit('change', this.content)
      this.$emit('input', this.content)
    },
    change (e) {
      let html = this.$refs.editor.innerHTML
      this.content = html
      this.range = window.getSelection().getRangeAt(0)
      this.emitValue()
    }
  }
}
</script>
<style scoped>
 .xm-indicatorTemplate {
   display: flex;
  
   width: 100%;
   height: 100%;
 }
</style>
