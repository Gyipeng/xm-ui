<style>
  .xm-card{
    width:224px;

  }
  .xm-checked-card{
   margin-right:10px;
   float:left
  }
</style>
# Card卡片
----
### 基础用法
<div class="demo-block">
  <div >
   <xm-checked-card-group v-model="checked">
     <xm-checked-card label="复选框 A" :disabled="true">
         <xm-card
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          title="测试"
          desc="尊敬的客户：感谢您参加流量大放送活动，恭喜您获得"
          :actions="['测试','生物','卡','卡地方']"
          >   </xm-card>
      </xm-checked-card>
      <xm-checked-card label="复选框 B" >
               <xm-card
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                title="测试"
                desc="尊敬的客户：感谢您参加流量大放送活动，恭喜您获得"
                :actions="['测试','生物','卡','卡地方']"
                >   </xm-card>
      </xm-checked-card>
        <xm-checked-card label="复选框 C" >
                     <xm-card
                      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                      title="测试"
                      desc="尊敬的客户：感谢您参加流量大放送活动，恭喜您获得"
                      :actions="['测试','生物','卡','卡地方']"
                      >   </xm-card>
            </xm-checked-card>
    </xm-checked-card-group>
  </div>
</div>

<script>
export default {
  data() {
    return {
       checked:"复选框 B"
    };
  },

};
</script>





::: demo
```html
<style>
  .xm-card{
    width:224px;

  }
  .xm-checked-card{
   margin-right:10px;
   float:left
  }
</style>
<div class="demo-block">
  <div >
   <xm-checked-card-group v-model="checked">
     <xm-checked-card label="复选框 A" :disabled="true" >
         <xm-card
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          title="测试"
          desc="尊敬的客户：感谢您参加流量大放送活动，恭喜您获得"
          :actions="['测试','生物','卡','卡地方']"
          >   </xm-card>
      </xm-checked-card>
      <xm-checked-card label="复选框 B" >
               <xm-card
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                title="测试"
                desc="尊敬的客户：感谢您参加流量大放送活动，恭喜您获得"
                :actions="['测试','生物','卡','卡地方']"
                >   </xm-card>
      </xm-checked-card>
        <xm-checked-card label="复选框 C" >
                           <xm-card
                            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                            title="测试"
                            desc="尊敬的客户：感谢您参加流量大放送活动，恭喜您获得"
                            :actions="['测试','生物','卡','卡地方']"
                            >   </xm-card>
                  </xm-checked-card>
    </xm-checked-card-group>
  </div>
</div>

<script>
export default {
  data() {
    return {
         checked:"复选框 B"
    };
  },

};
</script>


```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model     | 选中值   | string    | — | —    |
| size     | 尺寸   | string  |   default,medium,small            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |

## checkCard 事件


| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| input | 在 Input 值改变时触发 | value |
|change   | 在 Input 值改变时触发| value |
|其他属性   | 其他属性参考elementUI | value |
