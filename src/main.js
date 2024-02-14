import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/../public/fonts/iconfont/iconfont.css";
import "@/../public/css/base.css";

import naive from "naive-ui";

createApp(App).use(store).use(router).use(naive).mount("#app");
