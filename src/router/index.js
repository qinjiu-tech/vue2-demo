/*
 * @Author: QinJiu
 * @Date: 2022-12-09 15:03:57
 * @LastEditors: Qinjiu
 * @LastEditTime: 2022-12-09 16:55:59
 * @Description: -
 */
import Vue from "vue";
import VueRouter from "vue-router";
import BaseLayout from "@/layout/BaseLayout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: BaseLayout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
