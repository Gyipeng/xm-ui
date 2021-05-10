# Decorator 装饰器
----
### Decorator

- @before: 触发前

- @after : 触发后

- @around : 触发前后环绕

- @validate :方法校验

- @checkLengthg : 校验长度

- @checkParamt : 校验参数

- @checkPhone  : 校验手机

- @validate :方法校验

- @maapLoading : 加载前后

- @Time : 延迟执行

- @debounce  : 防抖

- @throttle  : 节流

- @Disabled  : 禁用

- @Required  : 必填



### 装饰器的作用
<div class="demo-block">
 <el-button
    type="primary"
    @click="loadingTable"
 >
    触发方法
  </el-button>
  <el-table
     v-loading="loading"
     :data="tableData"
     style="width: 100%">
     <el-table-column
       prop="date"
       label="日期"
       width="180">
     </el-table-column>
     <el-table-column
       prop="name"
       label="姓名"
       width="180">
     </el-table-column>
     <el-table-column
       prop="address"
       label="地址">
     </el-table-column>
   </el-table>
</div>

<style>
  body {
    margin: 0;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        loading: false
      };
    },
    methods:{
    async loadingTable(){
      this.loading=!this.loading
     setTimeout(()=>{
          this.loading=!this.loading

     },1000)

     }
    }
  };
</script>

::: demo
```html
  <div class="demo-block">
   <el-button
      type="primary"
      @click="loadingTable"
   >
      触发方法
    </el-button>
    <el-table
       :data="tableData"
       style="width: 100%">
       <el-table-column
         prop="date"
         label="日期"
         width="180">
       </el-table-column>
       <el-table-column
         prop="name"
         label="姓名"
         width="180">
       </el-table-column>
       <el-table-column
         prop="address"
         label="地址">
       </el-table-column>
     </el-table>
  </div>

  <style>
    body {
      margin: 0;
    }
  </style>

  <script>
  import { maapLoading } from '@/utils/decorator.js';
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
        };
      },
      methods:{
        @maapLoading('.demo-block')
        async loadingTable(){
         await setTimeout(()=>{
                     console.log(1);
         },1000)
       }
      }
    };
  </script>



```
:::
