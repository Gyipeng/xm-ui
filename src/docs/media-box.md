
# MediaBox 多媒体卡片
----
### 基础用法
<div class="demo-block">
  <div >
     <xm-media-box title="测试图片"  :actions="actions" @edit="edit" v-width="236" class="mb20">
          <xm-media v-height="167" src="http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3">
          </xm-media>
     </xm-media-box>
     <xm-media-box title="测试图片"  :actions="actions" @edit="edit" v-width="236" class="mb20">
       <xm-media v-height="167" src="https://cms.cnc.blzstatic.cn/cms/gallery/4G8KGRWWG7FS1557732437703.mp4" poster="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
       </xm-media>
      </xm-media-box>
       <xm-media-box title="测试图片"  :actions="actions" @edit="edit" v-width="236">
             <xm-media v-height="260" src="http://112.35.148.16:8098/group/M00/00/20/CicAEGAt4EWATNN_AB4l1rjEc1E817_thumb.JPG">
             </xm-media>
      </xm-media-box>
  </div>
</div>

<script>
export default {
  data() {
    return {
       actions:[
                {
                  icon: 'icon-delete',
                  text: '删除',
                  key: 'delete'
                }, {
                  icon: 'icon-edit',
                  text: '编辑',
                  key: 'edit'
                }
             ]

     }
  },
  methods: {
      edit(item){
          console.log(item)
      }

  },
}

</script>




::: demo
```html

<div class="demo-block">
  <div >
     <xm-media-box title="测试图片"  :actions="actions" @edit="edit" v-width="236" class="mb20">
          <xm-media v-height="167" src="http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3">
          </xm-media>
     </xm-media-box>
     <xm-media-box title="测试图片"  :actions="actions" @edit="edit" v-width="236">
       <xm-media v-height="167" src="https://cms.cnc.blzstatic.cn/cms/gallery/4G8KGRWWG7FS1557732437703.mp4" poster="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
       </xm-media>
      </xm-media-box>
  </div>
</div>

<script>
export default {
  data() {
    return {
       actions:[
                {
                  icon: 'icon-delete',
                  text: '删除',
                  key: 'delete'
                }, {
                  icon: 'icon-edit',
                  text: '编辑',
                  key: 'edit'
                }
             ]

     }
  },
  methods: {
      edit(item){
          console.log(item)
      }

  },
}

</script>




```
:::


## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 卡片主题名称| String | — | - |
| actions  | 按钮配置列表  | Array   | — | - |
| src | 按钮图标链接| String   | — | - |

### Actions配置信息
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| icon    | 菜单按钮图标   | String    | — | —    |
| text     | 菜单按钮描述   | string  |  -          |    —     |
| key     | 方法触发key  | string    |   - |    -  |
