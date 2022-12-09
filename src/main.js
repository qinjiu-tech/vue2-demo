/*
 * @Author: QinJiu
 * @Date: 2022-12-09 15:03:57
 * @LastEditors: Qinjiu
 * @LastEditTime: 2022-12-09 16:16:41
 * @Description: -
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
