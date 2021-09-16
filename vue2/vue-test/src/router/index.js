import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

// 引入router插件
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
