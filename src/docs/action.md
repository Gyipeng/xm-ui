
<style scoped>
  .test {
     border:1px solid  #D4D7D9
  }
</style>

# Action 操作
----
### 基础用法

<div class="demo-block">

  <xm-action  className="test" v-width="350" :actions="actions"  @edit="handMenuClick" @delete="handMenuClick"></xm-action>

</div>



<script>
export default {

  data() {
    return {
      actions:[
           {
             icon: 'icon-delete',
             text: '删除',
             key: 'delete'
           }, {
             icon: 'icon-edit',
             text: '编辑',
             key: 'edit'
           }
        ]
     }
  },
  methods: {
    handMenuClick (menus) {
      console.log(menus)
    }
  },
}

</script>




::: demo
```html


<style scope>
  .test {
     border:1px solid  #D4D7D9
  }
</style>

<div class="demo-block">

  <xm-action  className="test" v-width="350" :actions="actions"  @edit="handMenuClick" @delete="handMenuClick"></xm-action>

</div>



<script>
export default {

  data() {
    return {
      actions:[
           {
             icon: 'icon-delete',
             text: '删除',
             key: 'delete'
           }, {
             icon: 'icon-edit',
             text: '编辑',
             key: 'edit'
           }
        ]
     }
  },
  methods: {
    handMenuClick (menus) {
      console.log(menus)
    }
  },
}

</script>


```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| actions    | 按钮菜单配置列表   | Array    | — | —    |
| type     | 菜单风格   | string  |  -          |    —     |
| className     | 自定义类名   | string    |   - |    default  |


### Actions配置信息
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| icon    | 菜单按钮图标   | String    | — | —    |
| text     | 菜单按钮描述   | string  |  -          |    —     |
| key     | 方法触发key  | string    |   - |    -  |


## 自定义触发事件


| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| edit | 在 设置触发key为edit时 触发| item |
|delete   | 在 设置触发key为delete时 触发| item |



