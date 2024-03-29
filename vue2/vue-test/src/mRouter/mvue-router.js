// vue插件编写
// 实现一个install方法
let Vue;
class VueRouter {
  constructor(options) {
    this.$options = options;
    // 保存当前hash到current, current应该是响应式的
    // 给指定对象定义响应式属性
    Vue.util.defineReactive(this, "current", window.location.hash.slice(1) || "/");
    // this.current = "/";

    // 监控hashchange
    window.addEventListener("hashchange", () => {
      this.current = window.location.hash.slice(1);
    });
  }
}

// Vue: 是vue的构造函数，目的是便于扩展
VueRouter.install = function (_Vue) {
  Vue = _Vue;

  // 1. 注册$router
  // 下面代码延迟未来某个时刻：根实例创建时
  Vue.mixin({
    beforeCreate() {
      // 只需要在根实例执行一次
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
      }
    },
  });

  // 2.注册两个全局组件
  Vue.component("router-link", {
    // template: "<a>router-link</a>",
    props: {
      to: {
        type: String,
        required: true,
      },
    },
    render(h) {
      // h就是createElement(), 返回一个虚拟dom
      // 获取插槽内容：this.$slots.default
      return h(
        "a",
        {
          attrs: {
            href: `#${this.to}`,
          },
        },
        this.$slots.default
      );
    },
  });
  Vue.component("router-view", {
    // template: "<div>router-view</div>",
    render(h) {
      // 可以直接传入一个组件渲染 return h(Home)
      // 思路：如果可以根据url的hash部分动态匹配这个要渲染组件
      // window.location.hash
      let component = null;
      const route = this.$router.$options.routes.find((route) => route.path === this.$router.current);
      if (route) {
        component = route.component;
      }
      return h(component);
    },
  });
};

export default VueRouter;
