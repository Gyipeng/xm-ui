/**
 * Created by GYP 8/8/2019. 注解
 */

import { Loading } from 'element-ui';
import prototype from './prototype.js';

export const before = function (...args) {
  return function (target, key, descriptor) {
    descriptor.value = descriptor.value.before(() => {
      // console.log(`Action-${key} 触发埋点!`, args);
    });
  };
};
export const after = function (...args) {
  return function (target, key, descriptor) {
    descriptor.value = descriptor.value.after(() => {
      // console.log(`Action-${key} 触发埋点!`);
    });
  };
};
export const around = function (...args) {
  return function (target, key, descriptor) {
    descriptor.value = descriptor.value.around(() => {
      // console.log(`Action-${key} 触发埋点before!`);
    }, () => {
      // console.log(`Action-${key} 触发埋点after!`);
    });
  };
};

export const validate = function (...args) {
  return function (target, key, descriptor) {
    descriptor.value = descriptor.value.validate(() => args, target);
  };
};

export const checkLength = function (...args) {
  return function (target, key, descriptor) {
    descriptor.value = descriptor.value.checkLength(() => args, target);
  };
};

/**
 * 检查1个中文等于2个字符
 * @param args
 * @returns {Function}
 */
export const checkCharacter = function (...args) {
  return function (target, key, descriptor) {
    descriptor.value = descriptor.value.checkCharacter(() => args, target);
  };
};
/**
 * 获取函数参数来判断字符长度
 * @param args
 * @returns {Function}
 */
export const checkParamt = function (...args) {
  return function (target, key, descriptor) {
    descriptor.value = descriptor.value.checkParamt(() => args, target);
  };
};
/**
 * 判断网站地址
 * @param args
 * @returns {Function}
 */
export const checkAddress = function (...args) {
  return function (target, key, descriptor) {
    descriptor.value = descriptor.value.checkAddress(() => args, target);
  };
};
/**
 * 判断号码格式
 * @param args
 * @returns {Function}
 */
export const checkPhone = function (...args) {
  return function (target, key, descriptor) {
    descriptor.value = descriptor.value.checkPhone(() => args, target);
  };
};
// loading
export const maapLoading = function (arg) {
  return function (target, key, descriptor) {
    let loadingInstance;
    descriptor.value = descriptor.value.maapLoading((res) => {
      const dom = document.querySelector(arg);
      loadingInstance = Loading.service({ target: dom });
      // console.log(`Action-${key} 触发埋点before!`);
    }, () => {
      loadingInstance.close();
      // console.log(`Action-${key} 触发埋点after!`);
    });
  };
};

// 延迟执行
export const Time = function (...args) {
  return function (target, key, descriptor) {
    descriptor.value = descriptor.value.Time(() => args, target);
  };
};

export const Required = checkArr => (target, key, descriptor) => { // 必填参数
  const fn = descriptor.value;

  descriptor.value = function (args) {
    if (checkArr && checkArr.length > 0) {
      for (const arr of checkArr) {
        if (!args[arr]) {
          throw new Error(`[required] params ${arr} of ${key} is undefined or null!`);
        }
      }
    }
    fn.apply(this, [args]);
  };
};


// loading
export const Disabled = function (dom) {
  return function (target, key, descriptor) {
    let getDom;
    const fn = descriptor.value;
    descriptor.value = function (parmas) {
      getDom = document.querySelector(dom);
      getDom.disabled = true;
      return fn.apply(this, parmas).then((data) => {
        getDom.disabled = false;
      }).catch((res) => {
        getDom.disabled = false;
        console.log(`失败${res}`);
      });
    };
  };
};
