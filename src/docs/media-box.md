<style>
  .xm-media-box{
    width:236px;

  }
</style>
# MediaBox 多媒体卡片
----
### 基础用法
<div class="demo-block">
  <div >
     <xm-media-box :menus="menus" >
          <xm-media src="http://124.42.103.156:8089/group1/M00/12/7B/CgrQc19kJVWAcDDxAAEIBi70ThQ698.amr">
          </xm-media>
      </xm-media-box>
  </div>
</div>

<script>
export default {
  data() {
    return {
        menus: [
               {
                 name: '编辑',
                 action:()=>{
                  console.log(1)
                 },
                 icon: 'icon-edit'
               },
               {
                 name: '删除',
                 action:()=>{
                   console.log(2)
                 },
                 icon: 'icon-delete'
               },
             ],

     }
  },
  methods: {


  },
}

</script>




::: demo
```html
<div class="demo-block">
  <div >
     <xm-media-box :menus="menus" >
          <xm-media src="http://124.42.103.156:8089/group1/M00/12/7B/CgrQc19kJVWAcDDxAAEIBi70ThQ698.amr">
          </xm-media>
      </xm-media-box>
  </div>
</div>

<script>
export default {
  data() {
    return {
        menus: [
               {
                 name: '编辑',
                 action:()=>{
                  console.log(1)
                 },
                 icon: 'icon-edit'
               },
               {
                 name: '删除',
                 action:()=>{
                   console.log(2)
                 },
                 icon: 'icon-delete'
               },
             ],

     }
  },
  methods: {


  },
}

</script>

```
:::


## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 卡片主题名称| String | — | - |
| actions | 按钮方法 | Array   | — | - |
| src | 按钮图标链接| String   | — | - |
| menus | 按钮列表 | String     | —  | - |
| menus的其余 | buttonMore组件有详细说明 | String     | —  | - |
