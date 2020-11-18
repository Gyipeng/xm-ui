
<template>
  <div :class="cls">
    <el-table
      :data="dataSource"
      border
      :span-method="objectSpanMethod"
      :show-header="false"
      style="width: 100%"
      :key="menuKey"
    >
      <el-table-column
        label="0"
        :min-width="dataWidth[0]">
        <template slot-scope="scope">
          <el-checkbox  v-if="scope.row[0]"
                        :checked="getCheckbox(scope.row[0])"
                        :indeterminate="getIndeterminate(scope.row[0])"
                        @change="(e)=>onChange(e,scope.row[0])"
          >{{scope.row[0]}}</el-checkbox>
        </template>
      </el-table-column>
      <el-table-column
        label="1"
        :min-width="dataWidth[1]">
        <template slot-scope="scope">
          <el-checkbox v-if="scope.row[1]"
                       :checked="getCheckbox(scope.row[1])"
                       :indeterminate="getIndeterminate(scope.row[1])"
                       @change="(e)=>onChange(e,scope.row[1])"
          >{{scope.row[1]}}</el-checkbox>
        </template>
      </el-table-column>
      <el-table-column
        label="2"
        :min-width="dataWidth[2]">
        <template slot-scope="scope">
          <el-checkbox v-if="scope.row[2]"
                       :checked="getCheckbox(scope.row[2])"
                       @change="(e)=>onChange(e,scope.row[2])"
          >{{scope.row[2]}}</el-checkbox>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
const TestData = [
  {
    title: '我的工作台',
    children: [
      {
        title: '我的关注'
      },
      {
        title: '其他层级'
      }
    ]
  },
  {
    title: '数据产品'
  },
  {
    title: '数据分析',
    children: [
      {
        title: '报表展示',
        children: [
          {
            title: '移动报表'
          },
          {
            title: '删除报表'
          }
        ]
      }
    ]
  },
  {
    title: '数据目录'
  },
  {
    title: '实用工具'
  },
  {
    title: '测试',
    children: [
      {
        title: '用户管理',
        children: [
          {
            title: '部门组织架构'
          },
          {
            title: '角色权限管理'
          },
          {
            title: '权限申请管理'
          }
        ]
      },
      {
        title: '主页'
      }
    ]
  }
]
const classnames = require('classnames')
export default {
  name: 'xm-permission',
  data () {
    return {
      dataSource: [],
      max: 0,
      childrenMap: {

      },
      menuKey: 1,
      checkedKeys: ['数据产品', '其他层级', '我的关注', '部门组织架构']// 选中check
    }
  },
  props: {
    dataWidth: {
      type: Array,
      default: () => ['30%', '40%', '30%']
    }
  },
  created () {
    this.dataSource = this.encodeData(TestData)
    this.max = this.getMax(TestData)
    this.childrenMap = this.getChildrenMap(TestData)
  },
  computed: {
    cls () {
      const className = classnames('xm-permission')
      return className
    },
    checked () {
      return function (key) {
        return this.getCheckbox(key)
      }
    }
  },
  methods: {
    encodeData (data, i = 0, addData = {}) { // 编码data转化成表格格式
      let ret = []
      data.map(item => {
        let next = {[i]: item.title, ...addData}
        if (item.children) {
          ret.push(...this.encodeData(item.children, i + 1, next))
        } else {
          ret.push(next)
        }
      })
      return ret
    },
    objectSpanMethod ({ row, column, rowIndex, columnIndex }) { // 表格合并
      let dataSource = this.dataSource
      let obj = {}
      // 列合并
      if (row[columnIndex] === undefined) {
        obj.colspan = 0
      } else if (row[columnIndex + 1] === undefined && columnIndex < this.max - 1) {
        obj.colspan = this.max - columnIndex
      } else {
        obj.colspan = 1
      }
      // 行合并
      if (dataSource[rowIndex - 1] && dataSource[rowIndex - 1][columnIndex] === dataSource[rowIndex][columnIndex]) {
        obj.rowspan = 0
      } else {
        let rowspan = 1
        for (let j = 1; dataSource[rowIndex + j] && dataSource[rowIndex + j][columnIndex] === dataSource[rowIndex][columnIndex]; j++) {
          rowspan++
        }
        obj.rowspan = rowspan
      }
      return obj
    },
    getMax (data) { // 得到层级最大值
      let max = 1
      data.map(item => {
        if (item.children) {
          let childDepth = this.getMax(item.children)
          if (max < childDepth + 1) {
            max = 1 + childDepth
          }
        }
      }
      )
      return max
    },
    getChildrenMap (data) { // 映射child字段用于checkbox选择
      let ret = {}
      data.map(item => {
        if (item.children) {
          ret[item.title] = []
          let childrenMap = this.getChildrenMap(item.children)
          item.children.map(subItem => {
            if (childrenMap[subItem.title]) {
              ret[item.title].push(...childrenMap[subItem.title])
            } else {
              ret[item.title].push(subItem.title)
            }
          })
          ret = Object.assign(ret, childrenMap)
        }
      })
      return ret
    },
    getCheckbox (key) { // 判断是否选中
      if (this.childrenMap[key]) {
        const hasSeleted = this.hasInArray(this.childrenMap[key], this.checkedKeys)
        const hasUnSeleted = this.hasNotInArray(this.childrenMap[key], this.checkedKeys)
        return hasSeleted && !hasUnSeleted
      }
      return this.checkedKeys.includes(key)
    },
    getIndeterminate (key) { // 是否半选中
      if (this.childrenMap[key]) {
        const hasSeleted = this.hasInArray(this.childrenMap[key], this.checkedKeys)
        const hasUnSeleted = this.hasNotInArray(this.childrenMap[key], this.checkedKeys)
        return hasSeleted && hasUnSeleted
      }
      return false
    },
    hasInArray (subArray, array) { // subArray中有元素在array中返回true
      for (let i in subArray) {
        if (array.indexOf(subArray[i]) >= 0) { return true }
      }
    },
    hasNotInArray (subArray, array) { // subArray中有元素不在array中返回true
      for (let i in subArray) {
        if (array.indexOf(subArray[i]) < 0) { return true }
      }
    },
    onChange (e, key) {

      if (!this.childrenMap[key]) {
        return this.lastCheck(e, key)
      }
      if (e === true) {
        this.checkAll(key)
      } else {
        this.checkNotAll(key)
      }
    },
    checkAll (key) { // 全选
      this.checkedKeys = this.checkedKeys.concat(this.childrenMap[key].filter((item) => !this.checkedKeys.includes(item)))
      ++this.menuKey
    },
    checkNotAll (key) { // 全不选
      this.checkedKeys = this.checkedKeys.concat(this.childrenMap[key]).filter((item) => {
        return this.checkedKeys.includes(item) && !this.childrenMap[key].includes(item)
      }
      )
      ++this.menuKey
    },
    lastCheck (e, key) {
      if (e) {
        this.checkedKeys.push(key)
      } else {
        this.checkedKeys = this.checkedKeys.filter(item => item !== key)
      }
      ++this.menuKey
    }

  }
}
</script>
