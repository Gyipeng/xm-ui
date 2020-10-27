const utils = {
  isObject (val) {
    return Object.prototype.toString().call(val) === '[object Object]'
  },
  isArray (val) {
    return val instanceof Array || Object.prototype.toString().call(val) === '[object Array]'
  },
  isDate (val) {
    return val instanceof Date || Object.prototype.toString().call(val) === '[object Date]'
  },
  isNumber (val) {
    return val instanceof Number || Object.prototype.toString.call(val) === '[object Number]'
  },
  isString (val) {
    return val instanceof String || Object.prototype.toString.call(val) === '[object String]'
  },
  isBoolean (val) {
    return typeof val === 'boolean'
  },
  isFunction (val) {
    return typeof val === 'function'
  },
  isNull (val) {
    return val === undefined || val === null
  },
  copy (data) {
    let copyOne = null
    if (this.isObject(data)) {
      copyOne = {}
      for (const key in data) {
        copyOne[key] = this.copy(data[key])
      }
    } else if (this.isArray(data)) {
      copyOne = []
      for (const index of data) {
        copyOne.push(this.copy(index))
      }
    } else {
      copyOne = data
    }

    return copyOne
  },
  uuid () {
    const s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
  }

}

export default utils
