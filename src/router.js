import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export const ROUTE_HOME = "home";
export const ROUTE_ABOUT = "about" 

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: ROUTE_HOME,
      component: Home,
    },
    {
      path: "/about",
      name: ROUTE_ABOUT,
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue"),
    },
  ],
});
