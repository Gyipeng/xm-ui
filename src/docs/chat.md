# Chat 聊天框
----
### 基础用法
<div class="demo-block">

  <xm-chat  :messages="messages" title="139****7777(用户1备注)" @click="handleClick" ></xm-chat>

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
                       desc: '尊敬的客户：感谢您参加流量大放送活动，恭喜您获得' ,
                       plain: true,
                       name:"哈哈哈哈哈",
                       id:"1545454",
                       buttons:[{
                             name: '标签一',
                             color: 'primary'
                           }, {
                             name: '标sdsdsddgsgs签四',
                             color: 'success'
                           }, {
                             name: '标sdsdsddgsgs签四',
                             color: 'info'
                           }
                                  ]
                     },
                     user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
                     position: 'right',
                     time:"2020/04/24 17:52:12",
                   },
                   {
                     id :3,
                     type: 'system',
                     renderEl : (h, params)=>{
                           params.style={width: '224px', height: '144px' }
                           params.attrs={title:'123',src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',}
                           return h('xm-img',params)
                      },
                     user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
                     keyData:"7345734975349573457-616413-315491735713917359137591375195315491735713917359137591375195"
                   },
                   {
                     id :4,
                     type: 'xm-audio',
                     content: {
                       width:224,
                       height:144,
                       src:"http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3"
                       },
                       user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
                       position: 'right'
                   }
                 ]
     }
  },
  methods: {
   handleClick (item) {
     console.log(item)
   }
   }
}

</script>






::: demo
```html

<div class="demo-block">

  <xm-chat  :messages="messages" title="139****7777(用户1备注)" ></xm-chat>

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
                       desc: '尊敬的客户：感谢您参加流量大放送活动，恭喜您获得' ,
                       plain: true,
                       name:"哈哈哈哈哈",
                       id:"1545454",
                        buttons:[{
                             name: '标签一',
                             color: 'primary'
                           }, {
                             name: '标sdsdsddgsgs签四',
                             color: 'success'
                           }, {
                             name: '标sdsdsddgsgs签四',
                             color: 'info'
                                  }
                                 ]
                     },
                     user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
                     position: 'right',
                     time:"2020/04/24 17:52:12",

                   },
                   {
                     id :3,
                     type: 'system',
                     renderEl : (h, params)=>{
                           params.style={width: '224px', height: '144px' }
                           params.attrs={title:'123',src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',}
                           return h('xm-img',params)
                      },
                     user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
                     keyData:"7345734975349573457-616413-315491735713917359137591375195315491735713917359137591375195"


                   },
                   {
                     id :4,
                     type: 'xm-audio',
                     content: {
                       width:224,
                       height:144,
                       src:"http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3"
                       },
                       user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
                       position: 'right'
                   }
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
| title	 | 聊天框标题	 | String	 | — | - |
| messages | 消息内容数组	 | Array |  - | - |
| footer | 发送框	 | slot |  - | - |


## Messages
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| id	 | 消息唯一标识	 | String,Number	 | — | - |
| type | 消息内容类型	 | String | text,system,自定义标签（组件名）,renderEl| - |
| user | 用户信息	 | String |-| - |
| time | 发送时间	 | String  | -| - |
| content | 组件内容需要属性	 | Object  | -| - |
| position | left right	 | 发送者位置  | -| - |
| renderEl | 自定义渲染组件	 | Function  | -| - |

## slot插槽
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| header	 | 头部插槽	 | String	 | — | - |

## User

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| avatar	 | 用户头像链接	 | String	 | — | - |

## Chat 事件
| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| click | 点击触发 | message |
