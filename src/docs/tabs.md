# Tabs标签页
----
### 基础用法
<div class="demo-block">
  <div >
    <xm-tabs  :dataSource="param" v-model="selected" @change="change"></xm-tabs>

  </div>
</div>

<script>
export default {
  data() {
    return {
         param: [
                {key: '全部',value:"全部"},
                {key: '模版',value:"模版"},
                {key: '文本',value:"文本"}
              ],
         list :[
              {id: '全部(1)',name:"全部"},
              {id: '模版(2)',name:"模版"},
              {id: '文本(3)',name:"文本"}
            ],
              selected: '模版',
              checked:"全部(1)"

     }
  },
  methods:{
   change(value){
      console.log(value)

   },
    mouseenter(index,item){


     },
      mouseleave(index,item){


       },

  }

}

</script>

::: demo
```html

<div class="demo-block">
  <div >
    <xm-tabs  :dataSource="param" v-model="selected" @change="change"></xm-tabs>

  </div>
</div>

<script>
export default {
  data() {
    return {
         param: [
                {key: '全部',value:"全部"},
                {key: '模版',value:"模版"},
                {key: '文本',value:"文本"}
              ],
         list :[
              {id: '全部(1)',name:"全部"},
              {id: '模版(2)',name:"模版"},
              {id: '文本(3)',name:"文本"}
            ],
              selected: '模版',
              checked:"全部(1)"

     }
  },
  methods:{
   change(value){
      console.log(value)

   },


}

}

```
:::



### 垂直模式与自定义字段

<div class="demo-block">
  <div >
    <xm-tabs type="vertical" :dataSource="list" v-model="checked" @change="change" keyName="id" titleName="name"></xm-tabs>
  </div>
</div>


::: demo
```html

<div class="demo-block">
  <div >
    <xm-tabs type="vertical" :dataSource="list" v-model="checked" @change="change" keyName="id" titleName="name"></xm-tabs>
  </div>
</div>


<script>
export default {
  data() {
    return {
         param: [
                {key: '全部',value:"全部"},
                {key: '模版',value:"模版"},
                {key: '文本',value:"文本"}
              ],
         list :[
              {id: '全部(1)',name:"全部"},
              {id: '模版(2)',name:"模版"},
              {id: '文本(3)',name:"文本"}
            ],
              selected: '模版',
              checked:"全部(1)"

     }
  },

}

```
:::



### 自定义样式

<div class="demo-block">
  <div >
    <xm-tabs type="vertical"  :dataSource="param" v-model="selected" @change="change" className="xm-tabs-custom"  ></xm-tabs>

  </div>
</div>

::: demo
```html
<style  lang="less">
.xm-tabs-custom{
  >div {
    display: block;
    padding: 12px 16px;
    line-height:1;
    font-size: 15px;
    &:hover,&.xm-tabs__item--selected{
      border-left: 2px solid #3199F5;
      background: #EBF5FF;;
    }
  }
}

</style>

```
:::



### 自定义Tab


<div class="demo-block">
  <div >
    <xm-tabs type="vertical"  :dataSource="param" v-model="selected" @change="change" className="xm-tabs-custom"  @mouseenter="mouseenter"  @mouseleave="mouseleave">
      <template slot-scope="{tab}" slot="item">
       <xm-limit  v-model="tab.value" limit="20" :placeholder="tab.value">

       </xm-limit>
     </template>
    </xm-tabs>

  </div>
</div>

::: demo
```html

<div class="demo-block">
  <div >
    <xm-tabs type="vertical"  :dataSource="param" v-model="selected" @change="change" className="xm-tabs-custom"  @mouseenter="mouseenter"  @mouseleave="mouseleave" >
      <template slot-scope="{tab}" slot="item">
       <xm-limit  v-model="tab.value" limit="20" :placeholder="tab.value">

       </xm-limit>
     </template>
    </xm-tabs>

  </div>
</div>
export default {
  data() {
    return {
         param: [
                {key: '全部',value:"全部"},
                {key: '模版',value:"模版"},
                {key: '文本',value:"文本"}
              ],
         list :[
              {id: '全部(1)',name:"全部"},
              {id: '模版(2)',name:"模版"},
              {id: '文本(3)',name:"文本"}
            ],
              selected: '模版',
              checked:"全部(1)"

     }
  },
  methods:{
   change(value){
      console.log(value)

   },
   mouseenter(index,item){
    console.log(index,item)

  },
   mouseleave(index,item){

   console.log(index,item)
    },



}

```
:::


## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| dataSource | 选择的数据	 | Array| -| - |
| keyName| 自定义数据的key字段名 | String | - | key |
| titleName | 自定义数据的title字段名	 | String | — | value |
| value v-model | 选中的值	 | Object String | — | - |
| className | 自定义样式	 |  String | — | - |
| type | tabs水平或者是垂直方向	 |  String | default,vertical | default|

## Tabs 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| change | 切换Tab触发的事件 | object |
|click   | 点击Tab触发的事件| object |
|mouseenter | 悬浮触发|  index，object |
|mouseleave | 离开触发|  index，object |
|slot插槽 | - | - |
