import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Find Anime",
    },
  },
  {
    path: "/manga",
    name: "Manga",
    component: () => import("../views/Manga.vue"),
    meta: {
      title: "Find Manga",
    },
  },
  {
    path: "/anime/:id",
    name: "Anime",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Anime.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title =
    toRoute.meta && toRoute.meta.title ? toRoute.meta.title : "Find Anime";

  next();
});
/* router.beforeEach((to, from) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = (to.meta && to.meta.title) || "Find Anime";
  });
}); */

export default router;
