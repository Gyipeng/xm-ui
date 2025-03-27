/*
 * @Author: gyp
 * @Date: 2025-03-21 13:41:26
 * @LastEditTime: 2025-03-23 13:51:04
 * @LastEditors: gyp
 * @Description: 
 * @FilePath: /xm-ui/packages/indicatorTemplate/index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

import IndicatorTemplate from './src/indicatorTemplate.vue';

IndicatorTemplate.install = function (Vue) {
  Vue.component(IndicatorTemplate.name, IndicatorTemplate);
};

export default IndicatorTemplate;
