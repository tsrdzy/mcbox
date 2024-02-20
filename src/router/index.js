import {
  createRouter,
  // createWebHistory,
  createWebHashHistory,
} from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/main/editor",
  },
  {
    path: "/main",
    name: "main",
    component: () =>
      import(/* webpackChunkName: "main" */ "../views/main/mcbox_main.vue"),
    children: [
      {
        path: "editor",
        name: "editor",
        component: () => import("@/views/main/components/mcbox_editor"),
      },
      {
        path: "resource",
        name: "resource",
        component: () => import("@/views/main/components/mcbox_resource"),
      },
      {
        path: "about",
        name: "about",
        component: () => import("@/views/main/components/mcbox_about"),
      },
      {
        path: "config",
        name: "config",
        component: () => import("@/views/main/components/mcbox_config"),
      },
    ],
  },
  {
    path: "/chestcommands",
    name: "chestcommands",
    component: () => import("@/views/chestcommands/mcbox_chestcommands.vue"),
  },
  {
    path: "/gskin",
    name: "gskin",
    component: () => import("@/views/gskin/mcbox_gskin.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
