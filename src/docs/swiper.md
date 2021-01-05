# Swiper 轮播
----
### 基础用法

<style scoped>
  .card{
    margin:0 auto;
    width:224px;

  }
</style>


<div class="demo-block">
  <div >
    <xm-swiper  :data="list" >
            <template #default="{item}" >
              <template v-if="item">
                   <xm-card
                           class="card"
                           src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                           title="测试"
                           desc="尊敬的客户：感谢您参加流量大放送活动，恭喜您获得"
                           :actions="['测试','生物','卡','卡地方']"
                  >   </xm-card>
              </template>
            </template>
    </xm-swiper>

  </div>
</div>

<script>

export default {
  data() {
    return {
      list:[1,2,3,4]

     }
  },
    methods:{
    addCard(){
     this.list.push(1)
    }
    }


}

</script>


::: demo
```html

<style>
  .card{
    margin:0 auto;
    width:224px;

  }
</style>

<div class="demo-block">
  <div >
    <xm-swiper  :data="list" >
            <template #default="{item}" >
              <template v-if="item">
                   <xm-card
                          class="card"
                           src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                           title="测试"
                           desc="尊敬的客户：感谢您参加流量大放送活动，恭喜您获得"
                           :actions="['测试','生物','卡','卡地方']"
                  >   </xm-card>
              </template>
            </template>
    </xm-swiper>

  </div>
</div>

<script>

export default {
  data() {
    return {
      list:[1,2,3,4]

     }
  }

}

</script>

```
:::


### 动态操作卡片


<div class="demo-block">
  <div >
    <xm-swiper  :data="list" >
            <template #default="{item}" >
              <template v-if="item">
                   <xm-card
                           class="card"
                           src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                           title="测试"
                           desc="尊敬的客户：感谢您参加流量大放送活动，恭喜您获得"
                           :actions="['测试','生物','卡','卡地方']"
                  >   </xm-card>
              </template>
            </template>
            <template slot="button">
                    <xm-button @click="addCard">添加按钮</xm-button>
          </template>
    </xm-swiper>

  </div>
</div>

::: demo
```html

<style>
  .card{
    margin:0 auto;
    width:224px;

  }
</style>

<div class="demo-block">
  <div >
    <xm-swiper  :data="list" >
            <template #default="{item}" >
              <template v-if="item">
                   <xm-card
                           class="card"
                           src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                           title="测试"
                           desc="尊敬的客户：感谢您参加流量大放送活动，恭喜您获得"
                           :actions="['测试','生物','卡','卡地方']"
                  >   </xm-card>
              </template>
            </template>
            <template slot="button">
                    <xm-button @click="addCard">添加按钮</xm-button>
          </template>
    </xm-swiper>

  </div>
</div>

<script>

export default {
  data() {
    return {
      list:[1,2,3,4],


     }
  },
    methods:{
    addCard(){
     this.list.push(1)
    }
    }


}

</script>

```
:::



## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data | 数据源| Array | — | - |
| cardShowNumber | 每页显示的轮播数 | Numbers     | —  | 3 |
| centeredSlides | 轮播块是否居中 | String   | — | center |
| showPage | 是否一直显示箭头 | String   | — | - |


## Swiper事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| isShowArrow |  是否显示箭头 | -  |
| swiperClick | 关闭下拉 | - |

