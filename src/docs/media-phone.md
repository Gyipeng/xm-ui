
# MediaPhone 多媒体模版
----
### 基础用法
<div class="demo-block">
  <div >
    <xm-media-phone  @click="handleClick" :templates="templates">
     <template slot="footer">
      <div>测试电话</div>
     </template>
    </xm-media-phone>
  </div>
</div>

<script>
export default {
  data() {
    return {
        templates:[
          {
                id: 3,
                    renderEl: (h, params) => {
                      params.style = {width: '224px', height: '144px'}
                      params.attrs = {
                        title: '123',
                        src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                      }
                      return h('xm-img', params)
                    },
                  },
                  {
                    id: 4,
                    type: 'xm-audio',
                    content: {
                      width: 224,
                      height: 144,
                      src: "http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3"
                    },
                  }]

     }
  },
  methods: {
      handleClick(item){
          console.log(item)
      }

  },
}

</script>




::: demo
```html


<div class="demo-block">
  <div >
    <xm-media-phone  @click="handleClick" :templates="templates">
       <template slot="footer">
           <div>测试电话</div>
          </template>
     </xm-media-phone>
  </div>
</div>

<script>
export default {
  data() {
    return {
        templates:[
          {
                id: 3,
                    renderEl: (h, params) => {
                      params.style = {width: '224px', height: '144px'}
                      params.attrs = {
                        title: '123',
                        src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                      }
                      return h('xm-img', params)
                    },
                  },
                  {
                    id: 4,
                    type: 'xm-audio',
                    content: {
                      width: 224,
                      height: 144,
                      src: "http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3"
                    },
                  }]

     }
  },
  methods: {
      handleClick(item){
          console.log(item)
      }

  },
}

</script>


```
:::



## Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| id	 | 消息唯一标识	 | String,Number	 | — | - |
| type | 消息内容类型	 | String | text,system,自定义标签（组件名）,renderEl| - |
| content | 组件内容需要属性	 | Object  | -| - |
| renderEl | 自定义渲染组件	 | Function  | -| - |


## slot插槽
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| footer	 | 尾部插槽	 | String	 | — | - |



## template 事件
| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| click | 点击触发 | object |
