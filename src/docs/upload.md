# Upload 文件上传（本地加载预览）
----
### 基础用法
<div class="demo-block">
     <xm-upload :onSuccess="onSuccess" accept="video/*" :onClose="onClose" :onStart="onStart" :firstUpload="!src">
          <xm-video v-if="src" :src="src"  v-width="224" v-height="144">
         </xm-video>
    </xm-upload>
</div>

<script>
export default {
  data() {
    return {
        src:""
     }
  },
  methods:{
   onSuccess(src,file){
   console.log(src)
      this.src=src
   },
   onClose(){
   this.src=""
   },
   onStart(){
       console.log(1)
             return 1
   }

  }

}

</script>

::: demo
```html

<div class="demo-block">
     <xm-upload :onSuccess="onSuccess" accept="video/*" :onClose="onClose" :onStart="onStart" :firstUpload="!src">
          <xm-video v-if="src" :src="src"  v-width="224" v-height="144">
         </xm-video>
    </xm-upload>
</div>

<script>
export default {
  data() {
    return {
        src:""
     }
  },
  methods:{
   onSuccess(src,file){
   console.log(src)
      this.src=src
   },
   onClose(){
   this.src=""
   },
     onStart(){
        console.log(1)
        return 1
      }
  }

}

</script>

```
:::



## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| accept | 数据类型	 | String| -| - |
| onProgress| 实时进度 | Function | - | - |
| limit | 数据大小限制	M为定位 | String  | — | - |
| onStart | 开始加载前回调	 | Function | — | - 返回true代表通过加载 反之 |
| onError | 加载失败回调	 |  Function | — | - |

