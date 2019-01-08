import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

import axios from "axios";
import VueAxios from "vue-axios";
import * as Cookies from "tiny-cookie";
import money from "v-money";
import VueTheMask from "vue-the-mask";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import moment from "moment";

import VueI18n from "vue-i18n";
import { DatePicker } from "element-ui";
import enLang from "element-ui/lib/locale/lang/pt-br";
import locale from "element-ui/lib/locale";

import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
