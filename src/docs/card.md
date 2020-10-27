<style>
  .xm-card{
    width:224px;

  }
</style>
# Card卡片
----
### 基础用法
<div class="demo-block">
  <div >
    <xm-card  style="margin-right: 10px" title="测试" desc="尊敬的客户：感谢您参加流量大放送活动，恭喜您获得"
     src="http://124.42.103.156:8089/group1/M00/12/7B/CgrQc19kJVWAcDDxAAEIBi70ThQ698.amr"
    :actions="['测试','生物','卡','卡地方']"> </xm-card>
  </div>
</div>

::: demo
```html
<style>
  .xm-card{
    width:224px;

  }
</style>

<div>
    <xm-card
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
| title | 卡片主题名称| String | — | - |
| desc | 卡片描述 | String     | —  | - |
| actions | 卡片按钮名称 | Array   | — | - |
| src | 图片链接 音频链接 或者视频链接| String   | — | - |
