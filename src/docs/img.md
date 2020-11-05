# Img 图片
----
### 基础用法

<div class="demo-block">
  <xm-img v-width="250" v-height="144" title="空中列车卷二车厢少有的是空哦" :src="src"></xm-img>

</div>

<script>
  export default {
    data() {
      return {
        src: 'http://124.42.103.156:8089/group1/M00/12/8C/CgrQc1-ffv-AWFh1AAApsORQfjg796.jpg'
      }
    }
  }
</script>

::: demo
```html

<div class="demo-block">
  <xm-img v-width="250" v-height="144" title="空中列车卷二车厢少有的是空哦" :src="src"><xm-img>
</div>

<script>
  export default {
    data() {
      return {
        src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
      }
    }
  }
</script>



```
:::

## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 图片主题名称| String | — | - |
| src | 图片链接| String | — | - |
| other | 其他属性|  <el-link href="https://element.eleme.io" type="primary" target="_blank">elementUI </el-link> | — | - |
请移步到   <el-link href="https://element.eleme.io" type="primary" target="_blank">elementUI </el-link>

