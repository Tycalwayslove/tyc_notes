import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import Krouter from "./kkb-router/index";
import store from "./store";
import "@/assets/css/index.scss";
// import "normalize.css";
Vue.use(krouter);
Vue.config.productionTip = false;

new Vue({
  krouter,
  store,
  render: h => h(App)
}).$mount("#app");
