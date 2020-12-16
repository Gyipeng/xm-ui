# ButtonEllipsis 按钮省略
----
### 基础用法
<div class="demo-block">
 <div class="mb10">
     <xm-button-ellipsis height="40" :data="data">
          <template #default="{item}" >
               <xm-button>{{item.name}}</xm-button>
           </template>
            <template #number="{number}" >
           <xm-button >{{number}} </xm-button>
             </template>
      </xm-button-ellipsis>
  </div>
    <div >
       <xm-button-ellipsis :data="data">
       </xm-button-ellipsis>
    </div>
</div>

<script>
export default {
  data() {
    return {
        data:[{
             name: '标签一',
             color: 'primary'
           }, {
             name: '标签二',
             color: 'success'
           }, {
             name: '标签三',
             color: 'info'
           }, {
             name: '标sdsdsddgsgs签四',
             color: 'danger'
           }, {
             name: '标签五'
           }, {
             name: '标签五'
           }, {
             name: '标签五'
           }, {
             name: '标签五'
           }, {
             name: '标签五'
           }, {
             name: '标签五'
           }, {
             name: '标签五'
           },
           ]
     }
  },
}
</script>



::: demo
```html

<div class="demo-block">
 <div class="mb10">
     <xm-button-ellipsis height="40" :data="data">
          <template #default="{item}" >
               <xm-button>{{item.name}}</xm-button>
           </template>
      </xm-button-ellipsis>
  </div>
    <div >
       <xm-button-ellipsis :data="data">
       </xm-button-ellipsis>
    </div>
</div>

<script>
export default {
  data() {
    return {
        data:[{
             name: '标签一',
             color: 'primary'
           }, {
             name: '标签二',
             color: 'success'
           }, {
             name: '标签三',
             color: 'info'
           }, {
             name: '标sdsdsddgsgs签四',
             color: 'danger'
           }, {
             name: '标签五'
           }, {
             name: '标签五'
           }, {
             name: '标签五'
           }, {
             name: '标签五'
           }, {
             name: '标签五'
           }, {
             name: '标签五'
           }, {
             name: '标签五'
           },
           ]
     }
  },
}

</script>


```
:::

## Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height	 | 	 | String	 | — | - |
| data | 按钮数据列表	 | Array |  - | 30 |

## Data
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name	 | 名字	 | String	 | — | - |
| color | 按钮类型	 | String | primary,success,warning,danger,info| - |
| 其余属性 | 请参考tag组件说明	 | String |-| - |
| slot | 插槽内容	 |  | -| - |
