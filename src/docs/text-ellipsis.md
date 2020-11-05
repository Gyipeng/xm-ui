# TextEllipsis 显示更多
----
### 基础用法
<div class="demo-block">
  <div >
  <xm-text-ellipsis  height="40" :text="text" :useTooltip="true" >
      <template slot="more" >....</template>
  </xm-text-ellipsis>
  </div>
</div>

<script>
export default {
  data() {
    return {
      text: '据青岛市卫健委通报，截至10月13日8时，青岛市已采样3078528份进行核酸检测，未发现新增阳性感染者据青岛市卫健委通报，截至10月13日8时，青岛市已采样3078528份进行核酸检测，未发现新增阳性感染者据青岛市卫健委通报，截至10月13日8时，青岛市已采样3078528份进行核酸检测，未发现新增阳性感染者',
      isLimitHeight:true
    };
  },
    methods:{
      show(){

       this.isLimitHeight=!this.isLimitHeight

      }


    }

};
</script>


::: demo
```html


<div class="demo-block">
  <xm-text-ellipsis  height="40" :text="text">
      <template slot="more">.....</template>
  </xm-text-ellipsis>
</div>

<script>
export default {
  data() {
    return {

      text: '据青岛市卫健委通报，截至10月13日8时，青岛市已采样3078528份进行核酸检测，未发现新增阳性感染者据青岛市卫健委通报，截至10月13日8时，青岛市已采样3078528份进行核酸检测，未发现新增阳性感染者据青岛市卫健委通报，截至10月13日8时，青岛市已采样3078528份进行核酸检测，未发现新增阳性感染者',
      isLimitHeight:true
    };
  }

};
</script>

```
:::





### 自定义前缀后缀


<div class="demo-block">
  <div >
  <xm-text-ellipsis  height="40" :text="text">
     <span  slot="before" class="xm-tag--danger xm-tag">new</span>
      <template slot="more" >....</template>
      <span slot="after">[09/18]</span>

  </xm-text-ellipsis>
  </div>
</div>


::: demo
```html


<div class="demo-block">
  <xm-text-ellipsis  height="40" :text="text">
      <span  slot="before" class="xm-tag--danger xm-tag">new</span>
      <template slot="more">.....</template>
      <span slot="after">[09/18]</span>

  </xm-text-ellipsis>
</div>

<script>
export default {
  data() {
    return {
      text: '据青岛市卫健委通报，截至10月13日8时，青岛市已采样3078528份进行核酸检测，未发现新增阳性感染者据青岛市卫健委通报，截至10月13日8时，青岛市已采样3078528份进行核酸检测，未发现新增阳性感染者据青岛市卫健委通报，截至10月13日8时，青岛市已采样3078528份进行核酸检测，未发现新增阳性感染者'
    };
  },

};
</script>

```
:::


### 自定义查看更多
<div class="demo-block">
  <div >
  <xm-text-ellipsis :isLimitHeight="isLimitHeight"  height="40" :text="text">
      <template slot="more"  ><span @click="show">{{isLimitHeight?'查看更多':'收起'}}</span></template>
  </xm-text-ellipsis>
  </div>
</div>


::: demo
```html
<script>
export default {
  data() {
    return {
      text: '据青岛市卫健委通报，截至10月13日8时，青岛市已采样3078528份进行核酸检测，未发现新增阳性感染者据青岛市卫健委通报，截至10月13日8时，青岛市已采样3078528份进行核酸检测，未发现新增阳性感染者据青岛市卫健委通报，截至10月13日8时，青岛市已采样3078528份进行核酸检测，未发现新增阳性感染者',
      isLimitHeight:true
    };
  },
    methods:{
      show(){

       this.isLimitHeight=!this.isLimitHeight

      }


    }

};
</script>
```
:::

### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| text	 | 需要省略的文本	 | String	 | — | - |
| height | 限制的高度	 | String,Number |  - | - |
| row	 | 限制行数与限制高度不能同时写 只能写一个	 | String,Number | — | - |
| isLimitHeight | 是否开启限制	 | Boolean | - |false|
| textStyle | 文字的style | String, Object, Array | — | - |
| textClass	 | 文字的class | String, Object, Array | — | - |
| more	 | 省略文字后面 | String | — | - |
| useTooltip	 | 是否使用tooltip	 | Boolean | — | false |



## TextEllipsis 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| show | 当isLimitHeight为true，文本全部展示的时候 | event |
| hide | 当isLimitHeight为true，文本省略的时候 | event |


