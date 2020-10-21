
# FixedMenu 固定菜单
----
### 基础用法
<div class="demo-block">
  <div >
    <xm-fixed-menu
        :menus="menus"
        @handMenuClick="handMenuClick"
        @handMenuItemClick="handMenuItemClick">
    </xm-fixed-menu>
  </div>
</div>

<script>
export default {

  data() {
    return {
     menus: [{
            key: '菜单一',
            value: '菜单一',
            menus: [
              {
                key: '测试1',
                value: '测试1'
              },
              {
                key: '测试2',
                value: '测试2'
              },
              {
                key: '测试3',
                value: '测试3'
              }

            ]
          },
          {
              key: '菜单二',
              value: '菜单二',
              menus: [
                {
                  key: '测试4',
                  value: '测试4'
                },
                {
                  key: '测试5',
                  value: '测试5'
                   },
                {
                  key: '测试6',
                  value: '测试6'
                   }

              ]
            },
             {
                 key: '菜单二',
                 value: '菜单二',
                 menus: [
                   {
                     key: '测试4',
                     value: '测试4'
                   },
                   {
                     key: '测试5',
                     value: '测试5'
                      },
                   {
                     key: '测试6',
                     value: '测试6'
                      }

                 ]
               }

          ]
     }
  },
  methods: {
    handMenuClick (menus) {
      console.log(menus)
    },
    handMenuItemClick (e) {
      console.log(e)
    }
  },
}

</script>






::: demo
```html
<div class="demo-block">
  <div >
    <xm-fixed-menu
        :menus="menus"
        @handMenuClick="handMenuClick"
        @handMenuItemClick="handMenuItemClick">
    </xm-fixed-menu>
  </div>
</div>

<script>
export default {

  data() {
    return {
     menus: [{
            key: '菜单一',
            value: '菜单一',
            menus: [
              {
                key: '测试1',
                value: '测试1'
              },
              {
                key: '测试2',
                value: '测试2'
              },
              {
                key: '测试3',
                value: '测试3'
              }

            ]
          },
          {
              key: '菜单二',
              value: '菜单二',
              menus: [
                {
                  key: '测试4',
                  value: '测试4'
                },
                {
                  key: '测试5',
                  value: '测试5'
                   },
                {
                  key: '测试6',
                  value: '测试6'
                   }

              ]
            },
             {
                 key: '菜单二',
                 value: '菜单二',
                 menus: [
                   {
                     key: '测试4',
                     value: '测试4'
                   },
                   {
                     key: '测试5',
                     value: '测试5'
                      },
                   {
                     key: '测试6',
                     value: '测试6'
                      }

                 ]
               }

          ]
     }
  },
  methods: {
    handMenuClick (menus) {
      console.log(menus)
    },
    handMenuItemClick (e) {
      console.log(e)
    }
  },
}

</script>





```
:::



### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| key | 菜单文本 | String | — | - |
| value | 菜单值，方法回调返回值 | Object | - | - |
| menus | 菜单列表 | Array | - | - |


## FixedMenu 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| handMenuClick | 点击菜单回调 | value 菜单值 |
| handMenuItemClick | 点击子菜单回调 | value 菜单值 |



