import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import "./registerServiceWorker";
import axios from "axios";

import i18n from "./plugins/i18n-setup";

Vue.config.productionTip = process.env.NODE_ENV === "production";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.headers.common["Authorization"] =
  "Bearer " + process.env.VUE_APP_API_GENERAL_TOKEN;

Vue.prototype.$http = axios;

export const app = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
