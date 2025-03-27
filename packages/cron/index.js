/*
 * @Author: gyp
 * @Date: 2025-03-21 13:41:26
 * @LastEditTime: 2025-03-21 13:42:08
 * @LastEditors: gyp
 * @Description: 
 * @FilePath: /xm-ui/packages/cron/index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

import Cron from './src/cron.vue';

Cron.install = function (Vue) {
  Vue.component(Cron.name, Cron);
};

export default Cron;
