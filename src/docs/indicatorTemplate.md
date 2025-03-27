<!--
 * @Author: gyp
 * @Date: 2025-03-21 14:16:13
 * @LastEditTime: 2025-03-27 10:44:02
 * @LastEditors: gyp
 * @Description: 
 * @FilePath: /xm-ui/src/docs/indicatorTemplate.md
 * 可以输入预定的版权声明、个性签名、空行等
-->
# IndicatorTemplate 指标模版
----
### 基础用法

<div class="demo-block">
  <div>
    <xm-indicator-template v-model="content">
    </xm-indicator-template>
  </div>
</div>

<script>
export default {
  data() {
    return {
        content:'1234<span style="color: red;">${[indicator2]}&nbsp;<span style="color: red;">${[indicator2]}&nbsp;<span style="color: red;">currentWeek(0)</span></span></span>'

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

