import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Fullscreen from "vue-fullscreen";
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
  MdProgress,
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "@material/typography/dist/mdc.typography.css";

Vue.use(Fullscreen, { name: "vue-fullscreen" });
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdApp);
Vue.use(MdDrawer);
Vue.use(MdToolbar);
Vue.use(MdCard);
Vue.use(MdIcon);
Vue.use(MdList);
Vue.use(MdProgress);
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
