# Video 视频
----
### 基础用法


<div class="demo-block">
  <div >

   <xm-video v-width="224" v-height="144" class="mb10" src="https://cms.cnc.blzstatic.cn/cms/gallery/4G8KGRWWG7FS1557732437703.mp4"  poster="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></xm-video>
       <xm-video  v-width="224" v-height="144" src="https://cms.cnc.blzstatic.cn/cms/gallery/4G8KGRWWG7FS1557732437703.mp4" ></xm-video>


  </div>
</div>


::: demo
```html


<div class="demo-block">
  <div >
   <xm-video
   v-width="224" v-height="144"
  src="https://cms.cnc.blzstatic.cn/cms/gallery/4G8KGRWWG7FS1557732437703.mp4"
   poster="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"

   ></xm-video>

     <xm-video  v-width="224" v-height="144"  src="https://cms.cnc.blzstatic.cn/cms/gallery/4G8KGRWWG7FS1557732437703.mp4" ></xm-video>

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


