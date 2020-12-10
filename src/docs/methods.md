# Methods 全局方法
----


### Filter插件
- moment：时间
### 时间过滤
<div class="demo-block">
 {{ "1500799859" | moment }}
</div>

::: demo
```html

<div>
 {{ "1500799859" | moment }}
</div>


```
:::









### Directive插件

- v-width : 宽度

- v-height : 高度

- v-color : 字体颜色

- v-bg-color :背景颜色

- v-padding : 内边距

- v-margin : 外边距

- v-font  : 字体大小

 ### 宽度


<div class="demo-block">

  <div >
    <xm-card  v-width="300"  style="margin-right: 10px" title="测试" desc="尊敬的客户：感谢您参加流量大放送活动，恭喜您获得"
     src="http://124.42.103.156:8089/group1/M00/12/7B/CgrQc19kJVWAcDDxAAEIBi70ThQ698.amr"
    :actions="['测试','生物','卡','卡地方']"> </xm-card>
  </div>
</div>

::: demo
```html

<div>

    <xm-card
     v-width="300"
     style="margin-right: 10px"
   src="http://124.42.103.156:8089/group1/M00/12/7B/CgrQc19kJVWAcDDxAAEIBi70ThQ698.amr"
     title="测试"
     desc="尊敬的客户：感谢您参加流量大放送活动，恭喜您获得"
     :actions="['测试','生物','卡','卡地方']"
     >

     </xm-card>
</div>


```
:::

 ### 高度

<div class="demo-block">
  <div >
    <xm-card  v-height="500"  style="margin-right: 10px" title="测试" desc="尊敬的客户：感谢您参加流量大放送活动，恭喜您获得"
     src="http://124.42.103.156:8089/group1/M00/12/7B/CgrQc19kJVWAcDDxAAEIBi70ThQ698.amr"
    :actions="['测试','生物','卡','卡地方']"> </xm-card>
  </div>
</div>

::: demo
```html

<div>
    <xm-card
     v-height="500"
     style="margin-right: 10px"
     src="http://124.42.103.156:8089/group1/M00/12/7B/CgrQc19kJVWAcDDxAAEIBi70ThQ698.amr"
      title="测试"
     desc="尊敬的客户：感谢您参加流量大放送活动，恭喜您获得"
     :actions="['测试','生物','卡','卡地方']"
     >

     </xm-card>
</div>


```
:::


## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | 宽度| Number String  | 100  100% | - |
| height | 高度 | Number String     | 100 100%  | - |
| color | 字体颜色 | String   | #123456 | - |
| bg-color | 背景颜色 | String   | #123456 | - |
| padding | 内边距 | Number String    | 100 100% | - |
| margin | 外边距 | Number String   | 100 100% | - |
| font | 字体大小 | Number String   | 100 100% | - |
