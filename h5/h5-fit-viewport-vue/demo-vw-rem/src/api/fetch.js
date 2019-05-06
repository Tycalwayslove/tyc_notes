import axios from "axios";
// import router from "@/router";
// import store from "@/store";
import { DEV_HOST } from "./config";

const instance = axios.create({
  //默认地址
  baseURL: DEV_HOST,
  // 请求超时时间
  timeout: 5000,
  // 请求头
  header: {
    "content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  },
  //公用参数
  data: {}
});

//请求拦截
instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

//返回状态拦截
instance.interceptors.response.use(
  res => {
    console.log(res);
    return res;
  },
  err => {
    console.log(err);
    return Promise.reject(err);
  }
);

export default options => {
  return new Promise((resolve, reject) => {
    instance(options)
      .then(
        response => {
          console.log(response.data);
          resolve(response.data);
        },
        err => {
          reject(err);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
};
