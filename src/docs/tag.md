<style scoped>
  .xm-tag{
    margin-right: 10px;
  }
</style>

# Tag 标签
----
### 基础用法

由type属性来选择tag的类型和背景色，也可以通过color属性来自定义按钮颜色。

<div class="demo-block">

  <div>
    <xm-tag> 默认标签</xm-tag>
     <xm-tag type="blue"> 默认标签</xm-tag>
     <xm-tag type="plain" round closable > 默认标签</xm-tag>
     <xm-tag type="plain" size="mini" round closable> 默认标签</xm-tag>
     <xm-tag closable> 默认标签</xm-tag>
  </div>

</div>


::: demo
```html

<div>
          <xm-tag> 默认标签</xm-tag>
          <xm-tag type="blue"> 默认标签</xm-tag>
          <xm-tag type="plain" round closable> 默认标签</xm-tag>
          <xm-tag type="plain" size="mini" round closable> 默认标签</xm-tag>
          <xm-tag closable> 默认标签</xm-tag>
</div>


```
:::



### 可移除标签

设置closable属性可以定义一个标签是否可移除。它接受一个Boolean，true 为关闭。
<div class="demo-block">
<xm-tag
  :key="tag.name"
  v-for="tag in dynamicTags"
  closable
  :type="tag.color"
  @click="handleClick"
  @close="handleClose(tag)" :color="tag.color">
  {{tag.name}}
</xm-tag>
<script>
export default {
    data() {
      return {
        dynamicTags: [{
           name: '标签一',
           color: 'primary'
        }, {
           name: '标签二',
           color: 'success'
        }, {
           name: '标签三',
           color: 'info'
        }, {
            name: '标签四',
            color: 'danger'
        }, {
            name: '标签五',
            color: ''
        }
        ]
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
      handleClick(){
       console.log(1)
      }
    }
  }
</script>
</div>


::: demo
```html
<xm-tag
  :key="tag.name"
  v-for="tag in dynamicTags"
  closable
  @close="handleClose(tag)" :color="tag.color">
  {{tag.name}}
</xm-tag>
<script>
export default {
    data() {
      return {
        dynamicTags: [{
           name: '标签一',
           color: 'primary'
        }, {
           name: '标签二',
           color: 'success'
        }, {
           name: '标签三',
           color: 'info'
        }, {
            name: '标签四',
            color: 'danger'
        }, {
           name: '标签五',
           color: ''
         }
        ]
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      }
    }
  }
</script>

```
:::

### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 用于触发关闭事件时的回调 | Boolean | — | false |
| color | 关闭按钮颜色类型 | String |  `primary`, `success`, `danger`, `warning`, `info` | primary |
| type | 标签风格类型 | String |  `primary`, `success`, `danger`, `warning`, `info` | "" |
| size | 按钮大小 | String |  'medium', 'small', 'mini' | "" |
| closable | 是否可关闭 | Boolean | — | false |

## Tag 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| close | 点击关闭按钮时触发 | event |
| click | 点击按钮时触发 | event |


