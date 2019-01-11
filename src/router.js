import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Site",
      redirect: "/home",
      component: () => import("./components/Site.vue"),
      children: [
        {
          path: "/home",
          name: "Home",
          component: () => import("./components/Home.vue")
        }
      ]
    }
  ]
});
