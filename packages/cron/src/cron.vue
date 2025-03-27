<!--
 * @Author: gyp
 * @Date: 2025-03-21 13:41:26
 * @LastEditTime: 2025-03-25 15:41:46
 * @LastEditors: gyp
 * @Description: 
 * @FilePath: /xm-ui/packages/cron/src/cron.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->

<template>
  <div class="xm-cron">
    <xm-cron-week  
      @change="change" 
      :value="value"
      v-bind="$attrs" 
      v-if="type == 'week'"
    > </xm-cron-week>
    <xm-cron-month 
      v-bind="$attrs" 
      :value="value"
      v-else-if="type == 'month'"
    > </xm-cron-month>
    <xm-cron-day
      @change="change" 
      :value="value"
      v-bind="$attrs" 
      v-else-if="type =='day'"
    > </xm-cron-day>
    <xm-cron-diy 
      :value="value"
      @change="change"
      v-else
    >
    </xm-cron-diy>
  </div>
</template>

<script>
const classnames = require("classnames");
import xmCronWeek from "./cronWeek.vue";
import xmCronDay from "./cronDay.vue";
import xmCronMonth from "./cronMonth.vue";
import xmCronDiy from "./cronDiy.vue";
export default {
  name: "xmCron",
  components: {
    xmCronWeek,
    xmCronDay,
    xmCronMonth,
    xmCronDiy
  },
  data() {
    return {};
  },
  props: {
    type: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  created() {

  },
  methods: {
    change(e) {
      console.log("e", e);
      this.$emit("change", e);
      this.$emit("input", e);
    },
  },
};
</script>
