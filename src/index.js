import Vue from 'vue'

function indexGet(obj, i) {
  return obj[i]
}

function indexSet(keys, val, obj) {
  if (keys.length < 2) {
    obj[keys[0]] = val
  } else {
    if (!obj[keys[0]]) {
      obj[keys[0]] = {}
    }
    obj = obj[keys.shift()]
    indexSet(keys, val, obj)
  }
}

class StoreLite {
  constructor(data) {
    this.core = new Vue({
      data: data || {}
    })

    this.core.get = (...args) => this.get(...args)
    this.core.set = (...args) => this.set(...args)
    this.core.watch = (...args) => this.watch(...args)
  }

  get(key) {
    const val = key.split('.').reduce(indexGet, this.core)

    if (typeof val === 'function') {
      return val.bind(this.core)
    }

    return val
  }

  set(key, val) {
    indexSet(key.split('.'), val, this.core)
  }

  watch(key, func) {
    this.core.$watch(key, func)
  }
}

function install(V, data) {
  const storeLite = new StoreLite(data)

  V.prototype.$store = storeLite.core
}

export default {
  StoreLite,
  install
}
