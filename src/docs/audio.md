# Audio 音频
----
### 基础用法

<style scoped>
  .xm-audio-demo{
    width:224px;
    height:144px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
</style>

<div class="demo-block">
  <div >
   <xm-audio class="xm-audio-demo" src="http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3"></xm-audio>
   <xm-audio class="xm-audio-demo" src="http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3"></xm-audio>
  </div>
</div>



::: demo
```html
<style>
   .xm-audio-demo{
      width:224px;
      height:144px;
      margin-right: 10px;
      margin-bottom: 10px;
    }
</style>

<div>
   <xm-audio class="xm-audio-demo" src="http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3">

   </xm-audio>
     <xm-audio class="xm-audio-demo" src="http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3"></xm-audio>
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

