import Vue from "vue";
import VueRouter from "./mvue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import User from "../components/User.vue";

// 引入router插件
// use方法将来会调用install方法
Vue.use(VueRouter);

// 路由映射表
const routes = [
  // {
  //   path: "/",
  //   redirect: "login",
  // },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    children: [
      {
        path: "/user",
        name: "user",
        component: User,
      },
    ],
    // component: () => import("../views/Dashboard.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
