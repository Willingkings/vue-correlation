// 实现插件：
// 1. 声明一个Store类：维护响应式state，暴露commit/dispatch
// 2. install: 注册$store

let Vue;

class Store {
  constructor(options) {
    // 保存选项
    this.$options = options;

    this._mutations = options.mutations;
    this._actions = options.actions;
    this._wrappedGetters = options.getters;

    this.getters = {}
    const computed = {};
    const store = this;
    Object.keys(this._wrappedGetters).forEach((key) => {
      const fn = store._wrappedGetters[key];
      computed[key] = function () {
        return fn(store.state)
      };
      Object.defineProperty(store.getters, key, {
        get: () => store._vm[key],
      });
    });
    // api: state
    // 用户传入state选项应该是响应式的
    this._vm = new Vue({
      data() {
        return {
          $$state: options.state,
        };
      },
      computed,
    });
    this.commit = this.commit.bind(this);
    this.dispatch = this.commit.bind(this);
  }
  // 存取器
  get state() {
    return this._vm._data.$$state;
  }
  commit(type, payload) {
    // 匹配type对应的mutation
    const entry = this._mutations[type];
    if (!entry) {
      console.error("error");
      return;
    }
    entry(this.state, payload);
  }

  dispatch(type, payload) {
    // 匹配type对应的mutation
    const entry = this._actions[type];
    if (!entry) {
      console.error("error");
      return;
    }
    // 此处的上下问是什么？
    // {commit, dispatch， state }
    return entry(this, payload);
  }
}

function install(_Vue) {
  Vue = _Vue;

  // 注册$store
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
}

// 导出对象是Vuex
export default { Store, install };
