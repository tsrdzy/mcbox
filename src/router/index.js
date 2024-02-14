import {
  createRouter,
  // createWebHistory,
  createWebHashHistory
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
        component: () =>
          import(
            /* webpackChunkName: "editor" */ "@/views/main/components/mcbox_editor"
          ),
      },
      {
        path: "resource",
        name: "resource",
        component: () =>
          import(
            /* webpackChunkName: "resource" */ "@/views/main/components/mcbox_resource"
          ),
      },
      {
        path: "about",
        name: "about",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/main/components/mcbox_about"
          ),
      },
    ],
  },
  {
    path: "/chestcommands",
    name: "chestcommands",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/views/chestcommands/mcbox_chestcommands.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
