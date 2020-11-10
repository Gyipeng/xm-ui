# Chat 聊天框
----
### 基础用法
<div class="demo-block">

  <xm-chat  :messages="messages"></xm-chat>

</div>

<script>
export default {
  data() {
    return {
        messages:
           [
                   {
                     id :1,
                     type: 'text',
                     content: { text: '主人好，我是智能助理，你的贴心小助手~' },
                     user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
                     time:"2020/04/24 17:52:12"
                   },
                   {
                     type: 'system',
                      id :2,
                     content: {
                       src: 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                       type: 'card',
                       title: '测试',
                       desc: '尊敬的客户：感谢您参加流量大放送活动，恭喜您获得',
                       plain: true

                     },
                     user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
                     position: 'right',
                     time:"2020/04/24 17:52:12"
                   },
                   {
                     id :3,
                     type: 'system',
                     content: {
                       src: 'https://cms.cnc.blzstatic.cn/cms/gallery/4G8KGRWWG7FS1557732437703.mp4',
                       poster: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
                     },
                     user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' }
                   },
                   {
                     id :4,
                     type: 'system',
                     content: { src:"http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3" },
                     user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
                     position: 'right'
                   }
                 ]
     }
  },
}

</script>






::: demo
```html

<div class="demo-block">
 <div class="mb10">
     <xm-button-ellipsis height="40" :data="data">
          <template #default="{item}" >
               <xm-button>{{item.name}}</xm-button>
           </template>
      </xm-button-ellipsis>
  </div>
    <div >
       <xm-button-ellipsis :data="data">
       </xm-button-ellipsis>
    </div>
</div>

<script>
export default {
  data() {
    return {
        data:[{
             name: '标签一',
             color: 'primary'
           }, {
             name: '标签二',
             color: 'success'
           }, {
             name: '标签三',
             color: 'info'
           }, {
             name: '标sdsdsddgsgs签四',
             color: 'danger'
           }, {
             name: '标签五'
           }, {
             name: '标签五'
           }, {
             name: '标签五'
           }, {
             name: '标签五'
           }, {
             name: '标签五'
           }, {
             name: '标签五'
           }, {
             name: '标签五'
           },
           ]
     }
  },
}

</script>


```
:::

## Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height	 | 	 | String	 | — | - |
| data | 按钮数据列表	 | Array |  - | 30 |

## Data
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name	 | 名字	 | String	 | — | - |
| color | 按钮类型	 | String | primary,success,warning,danger,info| - |
| 其余属性 | 请参考tag组件说明	 | String |-| - |
| slot | 插槽内容	 |  | -| - |
