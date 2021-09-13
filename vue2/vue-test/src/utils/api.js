import axios from "axios";
import { Message } from "element-ui";
import router from "../router";

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    let tokenStr = window.sessionStorage.getItem("tokenStr");
    if (tokenStr) {
      config.headers["Authorization"] = tokenStr;
    }
    return config;
  },
  (error) => {
    console.log(error);
  }
);

axios.interceptors.response.use(
  (success) => {
    // 业务逻辑错误
    if (success.status && success.status === 200) {
      if (success.data.meta.status !== 200) {
        Message.error({ message: success.data.meta.msg });
        return;
      }
      if (success.data.meta.mag) {
        Message.success({ message: success.data.meta.msg });
      }
    }
    return success.data;
  },
  (error) => {
    if (error.response.code == 504 || error.response.code == 404) {
      Message.error({ message: "服务器被吃了！！！" });
    } else if (error.response.code == 403) {
      Message.error({ message: "权限不足" });
    } else if (error.response.code == 401) {
      Message.error({ message: "尚未登录，请登录！" });
      router.replace("/");
    } else {
      if (error.response.data.message) {
        Message.error({ message: error.response.data.message });
      } else {
        Message.error({ message: "未知错误" });
      }
    }
    return;
  }
);

let base = "";

const post = (url, params) => {
  return axios({
    method: "post",
    url: `${base}${url}`,
    data: params,
  });
};
const get = (url, params) => {
  return axios({
    method: "get",
    url: `${base}${url}`,
    data: params,
  });
};
const httpRequests = {
  post,
  get,
}
export default httpRequests;
