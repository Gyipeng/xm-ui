
# MediaPhone 多媒体模版
----
### 基础用法
<div class="demo-block">
  <div >
    <xm-media-phone  @click="handleClick">测试电话 </xm-media-phone>
  </div>
</div>

<script>
export default {
  data() {
    return {


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
    <xm-phone>测试电话 </xm-phone>
  </div>
</div>


```
:::
