
# State 状态
----
### 基础用法
<div class="demo-block">
  <div >
    <xm-state>在线 </xm-state>
    <xm-state type="primary">调试</xm-state>
    <xm-state type="offline">下线</xm-state>
    <xm-state type="warning">暂停</xm-state>
    <xm-state size="small">审核通过</xm-state>
    <xm-state size="small" type="offline">待提交</xm-state>
    <xm-state size="small" type="danger">审核不通过</xm-state>
    <xm-state size="small"  type="warning">审核中</xm-state>

  </div>
</div>

::: demo
```html


<div class="demo-block">
      <xm-state>在线</xm-state>
      <xm-state type="primary">调试</xm-state>
      <xm-state type="offline">下线</xm-state>
      <xm-state type="warning">暂停</xm-state>
      <xm-state size="small">在线</xm-state>
      <xm-state size="small">审核通过</xm-state>
      <xm-state size="small" type="offline">待提交</xm-state>
      <xm-state size="small" type="danger">审核不通过</xm-state>
      <xm-state size="small"  type="warning">审核中</xm-state>

</div>


```
:::






### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 标签风格类型 | String |  `primary`, `success`, `warning`, `offline` ，`danger`| success |
| size | 标签大小 | String |  `mini`, `small`, `medium`| mini |
