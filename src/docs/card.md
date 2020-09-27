<style>
  .xm-card{
    width:224px;
    margin-right: 10px;
  }
</style>
# Card卡片
----
### 基础用法
<div class="demo-block">
  <div >
    <xm-card title="测试" desc="尊敬的客户：感谢您参加流量大放送活动，恭喜您获得"
     src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    :actions="['测试','生物','卡','卡地方']"> </xm-card>
  </div>
</div>

::: demo
```html
<style>
  .xm-card{
    width:224px;
    margin-right: 10px;
  }
</style>

<div>
    <xm-card
     src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
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
| src | 卡片图片| String   | — | - |
