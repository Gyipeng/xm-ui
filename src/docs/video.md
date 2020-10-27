# Video 视频
----
### 基础用法
<style>
  .xm-video{
    width:224px;
    height:144px;
    margin-bottom: 10px;
    margin-right: 10px;
  }
</style>

<div class="demo-block">
  <div >
   <span>
   <xm-video src="http://124.42.103.156:8089/group1/M00/12/29/CgrQc176_fOAfWl1ACVUV6IVQhs429.mp4"  poster="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></xm-video>
   <span>
   <span>
       <xm-video src="http://124.42.103.156:8089/group1/M00/12/29/CgrQc176_fOAfWl1ACVUV6IVQhs429.mp4" ></xm-video>
   </span>

  </div>
</div>


::: demo
```html
<style>
  .xm-video{
    width:224px;
    height:144px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
</style>

<div class="demo-block">
  <div >
   <xm-video
   src="http://124.42.103.156:8089/group1/M00/12/29/CgrQc176_fOAfWl1ACVUV6IVQhs429.mp4"
   poster="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"

   ></xm-video>

   <xm-video src="http://124.42.103.156:8089/group1/M00/12/29/CgrQc176_fOAfWl1ACVUV6IVQhs429.mp4" ></xm-video>

  </div>
</div>

```
:::

### Attributes

| 参数         | 说明           | 类型   | 可选值 | 默认值                                                       |
| ------------ | -------------- | ------ | ------ | ------------------------------------------------------------ |
| src          | 视频播放链接   | String | —      | -                                                            |
| icon         | 左上角类型图标 | String | —    | class:icon-video                                         |
| poster | 背景图     | String | —     |  —  |


