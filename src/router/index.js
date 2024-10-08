import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "../views/tsr_home/tsr_home.vue"
      ),
  },
  {
    path: "/function",
    name: "function",
    component: () =>
      import(
        /* webpackChunkName: "function" */ "../views/tsr_function/tsr_function.vue"
      ),
    children: [
      {
        path: "/function/getskin",
        component: () =>
          import("../views/tsr_function/skinget/tsr_skinget.vue"),
      },
      {
        path: "/function/chestcommands",
        component: () =>
          import("../views/tsr_function/chestcommands/tsr_chestcommands.vue"),
      },
      {
        path: "/function/deluxemenus",
        component: () =>
          import("../views/tsr_function/deluxemenus/tsr_deluxemenus.vue"),
      },
      {
        path: "/function/mythicmobs",
        component: () =>
          import("../views/tsr_function/mythicmobs/tsr_mythicmobs.vue"),
        children: [
          {
            path: "/function/mythicmobs/mobs",
            component: () => import("../views/tsr_function/mythicmobs/mobs/yn_mobs.vue"),
          },
          {
            path: "/function/mythicmobs/items",
            component: () => import("../views/tsr_function/mythicmobs/items/yn_items.vue"),
          },
          {
            path: "/function/mythicmobs/skill",
            component: () => import("../views/tsr_function/mythicmobs/skills/yn_skill.vue"),
          },
          {
            path: "/function/mythicmobs/skills",
            component: () => import("../views/tsr_function/mythicmobs/skills/yn_skills.vue"),
          },
          {
            path: "/function/mythicmobs/droptables",
            component: () => import("../views/tsr_function/mythicmobs/droptables/yn_droptables.vue"),
          },
          {
            path: "/function/mythicmobs/spawners",
            component: () => import("../views/tsr_function/mythicmobs/spawners/yn_spawners.vue"),
          },
          {
            path: "/function/mythicmobs/randomspawns",
            component: () => import("../views/tsr_function/mythicmobs/spawners/yn_randomspawns.vue"),
          },
        ]
      },
      {
        path: "/function/keyboardtestutility",
        component: () =>
          import(
            "../views/tsr_function/keyboardtestutility/tsr_keyboardtestutility.vue"
          ),
      },
      {
        path: "/function/achievementtool",
        component: () =>
          import(
            "../views/tsr_function/achievementtool/tsr_achievementtool.vue"
          ),
      },
    ],
  },
  {
    path: "/resource",
    name: "resource",
    component: () =>
      import(
        /* webpackChunkName: "resource" */ "../views/tsr_resource/tsr_resource.vue"
      ),
    children: [
      {
        path: "/resource/models",
        component: () => import("../views/tsr_resource/models/tsr_model.vue"),
      }, {
        path: "/resource/servercore",
        component: () => import("../views/tsr_resource/servercore/tsr_servercore.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/tsr_about/tsr_about.vue"
      ),
  },
  {
    path: "/set",
    name: "set",
    component: () =>
      import(/* webpackChunkName: "set" */ "../views/tsr_set/tsr_set.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
