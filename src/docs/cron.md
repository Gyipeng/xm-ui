<!--
 * @Author: gyp
 * @Date: 2025-03-21 14:16:13
 * @LastEditTime: 2025-03-25 16:05:14
 * @LastEditors: gyp
 * @Description: 
 * @FilePath: /xm-ui/src/docs/cron.md
 * 可以输入预定的版权声明、个性签名、空行等
-->
# Cron 按钮
----
### 基础用法

<div class="demo-block">
  <div>
    <xm-cron type="week" v-model="expression"></xm-cron>
    <xm-cron type="day" v-model="expression1"></xm-cron>
    <xm-cron type="diy" v-model="expression2"></xm-cron>
    <xm-cron type="month" v-model="expression3"></xm-cron>
  </div>
</div>

<script>
export default {
  data() {
    return {
      expression: '',
      expression1: '',
      expression2: '',
      expression3: '',
     }
  },

}

</script>
::: demo
```html
<div class="demo-block">
  <div>
    <xm-cron v-model="expression"></xm-cron>
  </div>
</div>

<script>
export default {
  data() {
    return {
      expression: '0 54 14 9 12 ? 2024'
     }
  },

}
```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   default,medium,small            |    —     |
| color     | 按钮颜色类型   | string    |   primary,success,warning,danger,info |     —    |
| border     | 是否显示边框   | Boolean    | — | true   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 右上角图标 x和√ | string   |  —  |  —  |

