# Audio 音频
----
### 基础用法

<style>
  .xm-audio{
    width:224px;
    height:144px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
</style>

<div class="demo-block">
  <div >
   <xm-audio src="http://124.42.103.156:8089/group1/M00/12/7B/CgrQc19kJVWAcDDxAAEIBi70ThQ698.amr"></xm-audio>
  </div>
</div>

::: demo
```html
<style>
   .xm-audio{
      width:224px;
      height:144px;
      margin-right: 10px;
      margin-bottom: 10px;
    }
</style>

<div>
   <xm-audio src="http://124.42.103.156:8089/group1/M00/12/7B/CgrQc19kJVWAcDDxAAEIBi70ThQ698.amr">

   </xm-audio>
</div>


```
:::

### Attributes

| 参数         | 说明           | 类型   | 可选值 | 默认值                                                       |
| ------------ | -------------- | ------ | ------ | ------------------------------------------------------------ |
| src          | 音频播放链接   | String | —      | -                                                            |
| palyImg      | 播放按钮       | String | —      | play.png                                                     |
| stopImg      | 暂停按钮       | String | —     | stop.png                                                     |
| icon         | 左上角类型图标 | String | —    | class:icon-music                                             |
| defaultCover | 默认背景图     | String | —     | http://124.42.103.156:8089/group1/M00/12/27/CgrQc17xnbKAUi-hAAAaz4PvzBE824.png |
| cover        | 背景图         | String | —     | -                                                            |

