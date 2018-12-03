import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  MdButton,
  MdContent,
  MdTabs,
  MdApp,
  MdDrawer,
  MdToolbar,
  MdCard,
  MdIcon,
  MdList,
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdApp);
Vue.use(MdDrawer);
Vue.use(MdToolbar);
Vue.use(MdCard);
Vue.use(MdIcon);
Vue.use(MdList);
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
