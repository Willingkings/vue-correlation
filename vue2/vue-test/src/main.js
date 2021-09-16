import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./plugins/i18n.js";
import "./plugins/element.js";
import "./assets/css/global.css"

Vue.config.productionTip = false;

import httpRequests from "./utils/api";

Vue.prototype.httpRequests = httpRequests;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
