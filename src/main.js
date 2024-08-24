import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/style/base.css"; // 基础样式表
import "@/assets/fonts/iconfont/iconfont.css"; // icon字体文件
import "@/assets/style/theme/dark.less"; // 主题 暗

createApp(App).use(store).use(router).mount("#app");
