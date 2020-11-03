
# Card卡片
----
### 基础用法
<div class="demo-block">
  <div >
    <xm-card  class="mb20" v-width="244" title="测试" desc="尊敬的客户：感谢您参加流量大放送活动，恭喜您获得"
     src="http://124.42.103.156:8089/group1/M00/12/29/CgrQc176_fOAfWl1ACVUV6IVQhs429.mp4"
    :actions="['测试','生物','卡','卡地方']"> </xm-card>
    </div>
</div>

::: demo
```html

<div>
    <xm-card
    v-width="244"
    src="http://124.42.103.156:8089/group1/M00/12/7B/CgrQc19kJVWAcDDxAAEIBi70ThQ698.amr"
     title="测试"
     desc="尊敬的客户：感谢您参加流量大放送活动，恭喜您获得"
     :actions="['测试','生物','卡','卡地方']"
     >

     </xm-card>
</div>


```
:::


### 朴素
<div class="demo-block">
  <div >
    <xm-card  v-width="196"  title="测试" desc="尊敬的客户：感谢您参加流量大放送活动，恭喜您获得"
       src="https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"
        plain > </xm-card>
    </div>
</div>

::: demo
```html

<div class="demo-block">
  <div >
    <xm-card  v-width="196"  title="测试" desc="尊敬的客户：感谢您参加流量大放送活动，恭喜您获得"
       src="https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"
        plain > </xm-card>
    </div>
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
| plain |朴素卡片| String   | — | - |
| other | 其他属性请移步媒体组件| String   | — | - |
