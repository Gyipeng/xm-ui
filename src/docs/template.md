# Template 模版
----
### 基础用法

<div class="demo-block">
    <xm-template v-width="322"  class="mr10"
    :buttons="data"
    :id="123"
    :label="123"
     name="测试"
    >
         <xm-audio v-width="224" v-height="144" src="http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3"></xm-audio>
    </xm-template>

</div>

::: demo
```html


<div class="demo-block">
    <xm-template v-width="322"  class="mr10"
    :buttons="data"
    :id="123"
    :label="123"
     name="测试"
    >
         <xm-audio v-width="224" v-height="144" src="http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3"></xm-audio>
    </xm-template>

</div>

<script>
export default {
  data() {
    return {
        data:[{
             name: '标签一',
             color: 'primary'
           }, {
             name: '标sdsdsddgsgs签四',
             color: 'success'
           }, {
             name: '标sdsdsddgsgs签四',
             color: 'info'
           }
           ],

     }
  },

}

</script>


```
:::

### footer 插槽


<div class="demo-block">
    <xm-template v-width="322"  class="mr10"
    :buttons="data"
    :id="123"
    :label="123"
     name="测试"
     more="覆盖更多终端"
    >
         <xm-audio v-width="224" v-height="144" src="http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3"></xm-audio>
          <div slot="footer" class="xm-template__footer">
            <div>审核通过</div>
            <div>关联关键词：5个</div>
          </div>
    </xm-template>

</div>

::: demo
```html


<div class="demo-block">
    <xm-template v-width="322"  class="mr10"
    :buttons="data"
    :id="123"
    :label="123"
     name="测试"
     more="覆盖更多终端"
    >
         <xm-audio v-width="224" v-height="144" src="http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3"></xm-audio>
          <div slot="footer" >
            <div>审核通过</div>
            <div>关联关键词：5个</div>
          </div>
    </xm-template>

</div>

```
:::



### 多选框组

<div class="demo-block">
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">
    全选
   </el-checkbox>

 <el-checkbox-group v-model="checkedCities" v-font="14" @change="handleCheckedCitiesChange">
    <xm-template v-width="322"  v-for=" item in templates" class="mr10"
    :menus="item.menus"
    :buttons="data"
    :id="item.id"
    :label="item.label"
    :name="item.name"
    :state="item.state"
    :isEdit="item.isEdit"
    :disabled="item.disabled"
    :stateColor="item.stateColor"
    >
         <xm-audio v-width="224" v-height="144" src="http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3"></xm-audio>
    </xm-template>
   </el-checkbox-group>

</div>

<script>
export default {
  data() {
    return {
        data:[{
             name: '标签一',
             color: 'primary'
           }, {
             name: '标sdsdsddgsgs签四',
             color: 'success'
           }, {
             name: '标sdsdsddgsgs签四',
             color: 'info'
           }
           ],
           isIndeterminate:false,
           checkAll:false,
           checkedCities:[],
           templates:[
           {
               disabled:true,
               buttons:this.data,
               state:'审核不通过',
               isEdit:true,
               menus:[
                 {
                    name: '编辑',
                    icon: 'icon-edit',
                     key:"edit"
                    },
                  {
                    name: '删除',
                    icon: 'icon-delete',
                     key:"delete"
                  },
                      ],
               label:1234567,
               id:1234567,
               name:'店铺开业宣传活动',
               stateColor:"#FF404F"

           },
            {
               disabled:false,
               buttons:this.data,
               state:'审核通过',
               stateColor:"#33CE90",
               isEdit:true,
               menus:[
                 {
                    name: '编辑',
                    icon: 'icon-edit',
                     key:"edit"
                    },
                  {
                    name: '删除',
                    icon: 'icon-delete',
                     key:"delete"
                  },
                   ],
               label:123456,
               id:123456,
               name:'店铺开业宣传活动'

                      }
           ],

     }
  },
  methods:{
    handleCheckAllChange(val){
             this.checkedCities = val ? this.getLabels : [];
             this.isIndeterminate = false;
    },
     handleCheckedCitiesChange(value) {

            let checkedCount = value.length;
            this.checkAll = checkedCount === this.templates.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.templates.length;
     },
  },
  computed:{
    getLabels(){

        return this.templates.map(item=>!item.disabled&&item.label)
       }
  }
}

</script>


::: demo
```html

<div class="demo-block">
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">
    全选
   </el-checkbox>

 <el-checkbox-group v-model="checkedCities" v-font="14" @change="handleCheckedCitiesChange">
    <xm-template v-width="322"  v-for=" item in templates" class="mr10"
    :menus="item.menus"
    :buttons="data"
    :id="item.id"
    :label="item.label"
    :name="item.name"
    :state="item.state"
    :isEdit="item.isEdit"
    :disabled="item.disabled"
    :stateColor="item.stateColor"
    >
         <xm-audio v-width="224" v-height="144" src="http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3"></xm-audio>
    </xm-template>
   </el-checkbox-group>

</div>

<script>
export default {
  data() {
    return {
        data:[{
             name: '标签一',
             color: 'primary'
           }, {
             name: '标sdsdsddgsgs签四',
             color: 'success'
           }, {
             name: '标sdsdsddgsgs签四',
             color: 'info'
           }
           ],
           isIndeterminate:false,
           checkAll:false,
           checkedCities:[],
           templates:[
           {
               disabled:true,
               buttons:this.data,
               state:'审核不通过',
               isEdit:true,
               menus:[
                 {
                    name: '编辑',
                    icon: 'icon-edit',
                     key:"edit"
                    },
                  {
                    name: '删除',
                    icon: 'icon-delete',
                     key:"delete"
                  },
                      ],
               label:1234567,
               id:1234567,
               name:'店铺开业宣传活动',
               stateColor:"#FF404F"

           },
            {
               disabled:false,
               buttons:this.data,
               state:'审核通过',
               stateColor:"#33CE90",
               isEdit:true,
               menus:[
                 {
                    name: '编辑',
                    icon: 'icon-edit',
                     key:"edit"
                    },
                  {
                    name: '删除',
                    icon: 'icon-delete',
                     key:"delete"
                  },
                   ],
               label:123456,
               id:123456,
               name:'店铺开业宣传活动'

                      }
           ],

     }
  },
  methods:{
    handleCheckAllChange(val){
             this.checkedCities = val ? this.getLabels : [];
             this.isIndeterminate = false;
    },
     handleCheckedCitiesChange(value) {

            let checkedCount = value.length;
            this.checkAll = checkedCount === this.templates.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.templates.length;
     },
  },
  computed:{
    getLabels(){

        return this.templates.map(item=>!item.disabled&&item.label)
       }
  }
}

</script>



```
:::


### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| disabled	 | 是否禁用	 | Boolean	 | — | false|
| border | 是否出现选中边框（选中状态默认出现）	 | Boolean |  - |false|
| modelType	 | 选中遮罩层类型 	 | String |primary| primary|
| buttons | 按钮省略组件列表	 | Array | - |-|
| stateColor | 状态圆圈颜色 | String | #123456 | - |
| bodyStyle | 修改templateContent样式 插槽样式 | Obejct | style | - |
| state	 | 状态 | String | — | - |
| menus	 | 更多操作组件列表 | Array | — | - |
| label	 | 选中状态的值 | string number  boolean| — | - |
| isEdit	 | 是否出现checkout选中框 | boolean| — | false |
| value / v-mode	 | 绑定值 |  string number  boolean| — | - |
| id	 | 模版id |  string number  | — | - |
| name	 | 模版名称 |  string number  | — | - |

### slot
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| default | 默认插槽	 | 	- | — | -|
| footer | 底部插槽	 |  -|  - |-|


## Template 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| 其余方法 | 请去观看elemtnui文档 此次不再多说明 | event |




