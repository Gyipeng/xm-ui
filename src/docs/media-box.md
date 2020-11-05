
# MediaBox 多媒体卡片
----
### 基础用法
<div class="demo-block">
  <div >
     <xm-media-box title="测试图片"  :menus="menus" @edit="edit" v-width="236">
          <xm-media src="http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3">
          </xm-media>
     </xm-media-box>
        <xm-media-box title="测试图片"  :menus="menus" @edit="edit" v-width="236">
                <xm-media src="https://cms.cnc.blzstatic.cn/cms/gallery/4G8KGRWWG7FS1557732437703.mp4" poster="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
                </xm-media>
            </xm-media-box>
  </div>
</div>

<script>
export default {
  data() {
    return {
        menus: [
               {
                 name: '编辑',
                 action:(item)=>{
                  console.log(item)
                 },
                 icon: 'icon-edit',
                 key:'edit'
               },
               {
                 name: '删除',
                 action:()=>{
                   console.log(2)
                 },
                 icon: 'icon-delete',
                 key:"delete"
               },
             ],

     }
  },
  methods: {
      edit(){
          console.log(2)
      }

  },
}

</script>




::: demo
```html

<div class="demo-block">
  <div >
     <xm-media-box title="测试图片"  :menus="menus" @edit="edit" v-width="236">
          <xm-media src="http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3">
          </xm-media>
      </xm-media-box>
        <xm-media-box title="测试图片"  :menus="menus" @edit="edit" v-width="236">
                <xm-media src="https://cms.cnc.blzstatic.cn/cms/gallery/4G8KGRWWG7FS1557732437703.mp4" poster="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
                </xm-media>
            </xm-media-box>
  </div>
</div>

<script>
export default {
  data() {
    return {
        menus: [
               {
                 name: '编辑',
                 action:(item)=>{
                  console.log(item)
                 },
                 icon: 'icon-edit',
                 key:'edit'
               },
               {
                 name: '删除',
                 action:()=>{
                   console.log(2)
                 },
                 icon: 'icon-delete',
                 key:"delete"
               },
             ],

     }
  },
  methods: {
      edit(){
          console.log(2)
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
| actions  | 按钮方法  | Array   | — | - |
| key  与action 选其一| 按钮key触发emit  | String   | — | - |
| src | 按钮图标链接| String   | — | - |
| menus | 按钮列表 | String     | —  | - |
| menus的其余 | buttonMore组件有详细说明 | String     | —  | - |
