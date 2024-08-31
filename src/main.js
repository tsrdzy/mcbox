import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
const path = window.require('path');

import hljs from "highlight.js/lib/core";
import highlightPlugin from "@highlightjs/vue-plugin";
import yaml from "highlight.js/lib/languages/yaml";
hljs.registerLanguage("yaml", yaml);

// 字体文件读取
if (process.env.NODE_ENV === "development") {
    // 开发环境
    const urls1 = path.join(
        process.cwd(),
        "public",
        "MCBOX",
        "resource",
        "fonts"
    );
    addFontToDOM(
        "opposansH",
        urls1 + "/OPPOSans-H-2.ttf"
    );
    addFontToDOM(
        "opposansR",
        urls1 + "/OPPOSans-R-2.ttf"
    );
    addFontToDOM(
        "minecraft-title",
        urls1 + "/Minecrafter.Alt.ttf"
    );
    addFontToDOM(
        "minecraft",
        urls1 + "/Minecraft-AE.ttf"
    );
    addFontToDOM(
        "sjxkjt",
        urls1 + "/SanJiXingKaiJianTi-Cu-2.ttf"
    );
} else {
    // 生产环境
    console.log(2)
    const urls = path.join(
        process.cwd(),
        "resources",
        "public",
        "MCBOX",
        "resource",
        "fonts"
    );
    addFontToDOM(
        "opposansH",
        urls + "/OPPOSans-H-2.ttf"
    );
    addFontToDOM(
        "opposansR",
        urls + "/OPPOSans-R-2.ttf"
    );
    addFontToDOM(
        "minecraft-title",
        urls + "/Minecrafter.Alt.ttf"
    );
    addFontToDOM(
        "minecraft",
        urls + "/Minecraft-AE.ttf"
    );
    addFontToDOM(
        "sjxkjt",
        urls + "/SanJiXingKaiJianTi-Cu-2.ttf"
    );
}
function addFontToDOM(fontFamily, fontPath) {
    const style = document.createElement('style');
    style.type = 'text/css';
    let allcss = "@font-face{font-family:'"
        + fontFamily + "';src:url('" + fontPath + "')format('truetype');}"
    allcss = allcss.replace(/\\/g, "/")
    style.appendChild(document.createTextNode(allcss));
    document.head.appendChild(style);
}
import "@/assets/style/base.css"; // 基础样式表
import "@/assets/fonts/iconfont/iconfont.css"; // icon字体文件
import "@/assets/style/theme/dark.less"; // 主题 暗
import "@/assets/style/theme/white.less";
import "@/assets/style/theme/red.less";
import "@/assets/style/theme/blue.less";
import "@/assets/style/theme/green.less";

createApp(App).use(store).use(router).use(highlightPlugin).mount("#app");
