// 属性拦截
function defineReactive(obj, key, val) {
  // 递归
  observe(val);

  Object.defineProperty(obj, key, {
    get() {
      console.log(`get ${key}:${val}`);
      return val;
    },
    set(newVal) {
      if (newVal !== val) {
        val = newVal;
        console.log(`set ${key}:${val}`);
      }
    },
  });
}

// 遍历传入obj的所有属性，执行响应式处理
function observe(obj) {
  //
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }
  Object.keys(obj).forEach((key) => defineReactive(obj, key, obj[key]));
}

// 动态新增一个属性
function set(obj, key, val) {
    defineReactive(obj, key, val);
}

const obj = {
  foo: "foo",
  bar: "bar",
  baz: {
    a: 1,
  },
};
// 用户不能手动设置所有属性：递归响应式处理过程
// defineReactive(obj, "foo", "");

observe(obj);
set(obj, "dong", "dong")

// 数组：当前方法不支持，需要拦截重写数组的7个变更方法（可改变数组本身的方法），让他们做数组操作的同时，进行变更通知
