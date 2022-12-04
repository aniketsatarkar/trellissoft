import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Global from "@/mixins/global";

import "@/style/app.scss";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.mixin(Global);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
