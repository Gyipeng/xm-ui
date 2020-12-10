

# limit 限制输入域
----
### 基础用法
<div class="demo-block">
  <div >
   <xm-limit class="mb10"  type="textarea" v-model="content" :rows="4" limit="20" placeholder="最多输入10个字符" autosize></xm-limit>
    <xm-limit  v-model="content" tip="重复名称" limit="20" placeholder="最多输入10个字符"></xm-limit>
  </div>
</div>


::: demo
```html


<div>
   <xm-limit  type="textarea" v-model="content" :row="4" limit="20" placeholder="最多输入10个字符" autosize>

   </xm-limit>

   <xm-limit  v-model="content" tip="重复名称" limit="20" placeholder="最多输入10个字符">

   </xm-limit>

</div>


```
:::

<script>
export default {
  data() {
    return {
      content: ''
    };
  }
}
</script>

## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| rows | 列高 | Number | — | 4 |
| limit| Number | 长度限制 | - | 20 |
| tip|  提示| String | - | - |
| placeholder | 输入时需要显示的提示文案 | String | — | 请输入内容 |

## Limit 事件


| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| overText | 超出限制长度触发 | content |
|change   | 在 Input 值改变时触发| value |
|其他属性   | 其他属性参考elementUI | value |
