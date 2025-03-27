/*
 * @Author: gyp
 * @Date: 2020-09-22 16:21:33
 * @LastEditTime: 2025-03-21 15:00:51
 * @LastEditors: gyp
 * @Description: 
 * @FilePath: /xm-ui/packages/button/index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

import Button from './src/button.vue';

Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
