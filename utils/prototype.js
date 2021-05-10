/**
 * Created by GYP 8/8/2019.注解
 */
import { Message } from 'element-ui';
// import {
//   nameMaxLength, byteLength, WebsiteAddress, checkPhoneCode,
// } from '@/utils/validate';

Function.prototype.before = function (beforefn) {
  const _self = this;

  return function () {
    beforefn.apply(this, arguments);
    return _self.apply(this, arguments);
  };
};
Function.prototype.after = function (afterfn) {
  const _self = this;
  return function () {
    const ret = _self.apply(this, arguments);
    afterfn.apply(this, arguments);
    return ret;
  };
};
Function.prototype.around = function (beforefn, afterfn) {
  const _self = this;
  return function () {
    beforefn.apply(this, arguments);
    const ret = _self.apply(this, arguments);
    afterfn.apply(this, arguments);
    return ret;
  };
};

Function.prototype.validate = function (beforefn, target) { // 判断长度
  const _self = this;
  return function () {
    const [{ key, arg, errMsg }] = beforefn.apply(this, arguments);

    const result = nameMaxLength({ name: eval(`this.${key}`), arg, errMsg });
    if (result !== false) {
      Message({
        message: result,
      });
      return false;
    }
    return _self.apply(this, arguments);
  };
};
Function.prototype.checkLength = function (beforefn, target) { // 获取函数参数来判断长度
  const _self = this;
  return function () {
    // console.log(arguments);
    // console.log(beforefn.apply(this, arguments));
    const [{ key, arg, errMsg }] = beforefn.apply(this, arguments);
    const len = arguments[0][key].length;
    const result = len > arg;
    if (result !== false) {
      Message({ message: errMsg });
      return false;
    }
    return _self.apply(this, arguments);
  };
};

Function.prototype.checkCharacter = function (beforefn, target) { // 判断字符长度
  const _self = this;
  return function () {
    const [{ key, arg, errMsg }] = beforefn.apply(this, arguments);
    const len = byteLength(eval(`this.${key}`));
    const result = len > arg;
    if (result !== false) {
      Message({
        message: errMsg,
      });
      return false;
    }
    return _self.apply(this, arguments);
  };
};
Function.prototype.checkParamt = function (beforefn, target) { // 获取函数参数来判断字符长度
  const _self = this;
  return function () {
    const [{ key, arg, errMsg }] = beforefn.apply(this, arguments);
    const len = byteLength(arguments[0][key]);
    const result = len > arg;
    if (result !== false) {
      Message({
        message: errMsg,
      });
      return false;
    }
    return _self.apply(this, arguments);
  };
};

Function.prototype.checkAddress = function (beforefn, target) { // 获取函数参数来判断网址格式
  const _self = this;
  return function () {
    const [{ name, type, errMsg }] = beforefn.apply(this, arguments);
    const result = WebsiteAddress(arguments[0][name], arguments[0][type], errMsg);
    if (result !== false) {
      Message({
        message: result,
      });
      return false;
    }
    return _self.apply(this, arguments);
  };
};
Function.prototype.checkPhone = function (beforefn, target) { // 获取函数参数来判断号码格式
  const _self = this;
  return function () {
    const [{ name, type, errMsg }] = beforefn.apply(this, arguments);
    const result = checkPhoneCode(arguments[0][name], arguments[0][type], errMsg);
    if (result !== false) {
      Message({
        message: result,
      });
      return false;
    }
    return _self.apply(this, arguments);
  };
};

Function.prototype.maapLoading = function (beforefn, afterfn) { // loading
  const _self = this;
  return async function () {
    beforefn.apply(this, arguments);
    let ret;
    try {
      ret = await _self.apply(this, arguments);
    } catch (e) {
      console.log(`${e}网络异常`);
    }

    afterfn.apply(this, arguments);
    return ret;
  };
};

Function.prototype.Time = function (beforefn, target) { // 延迟执行
  const _self = this;
  return function () {
    const [{ time }] = beforefn.apply(this, arguments);
    setTimeout(() => _self.apply(this, arguments), time);
  };
};

String.prototype.gblen = function () { // 获取字符串字节长度
  let len = 0;
  for (let i = 0; i < this.length; i++) {
    if (this.charCodeAt(i) > 127 || this.charCodeAt(i) == 94) {
      len += 2;
    } else {
      len++;
    }
  }
  return len;
};

