<style>
  .buttonmore{
    margin:10px
  }

</style>



# ButtonMore 更多操作
----
### 基础用法
<div class="demo-block">
 <xm-button-more  class="buttonmore" :src="exchange" :menus="menus"> </xm-button-more>
 <xm-button-more class="buttonmore"   :menus="menus">
   <i class="icon-more"></i>
</xm-button-more>
</div>


<script>
 import exchange from "@/assets/img/exchange.png"
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
             exchange
     }
  },
  methods: {


  },
}

</script>



::: demo
```html
<style>
  .buttonmore{
    margin:10px
  }

</style>

<div class="demo-block">
 <xm-button-more class="buttonmore"  :src="exchange" :menus="menus"> </xm-button-more>
 <xm-button-more   class="buttonmore"  :menus="menus">
  <i class="icon-more"></i>
 </xm-button-more>
</div>

<script>
 import exchange from "@/assets/img/exchange.png"
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
             exchange
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
| src |  按钮图片链接  | String | — | - |
| menus | 按钮列表 | String     | —  | - |
| actions | 按钮触发方法 | Array   | — | - |
| trigger | 触发方式  | "hover " "click"    | — | - |
| name | 按钮名称 | String   | — | - |
| icon | 按钮图标  | String   | — | - |
| 其余 | 参考elementUi  | String   | — | - |



