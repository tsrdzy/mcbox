import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
const path = window.require('path');

// 字体文件读取
if (process.env.NODE_ENV === "development") {
    // 开发环境

} else {
    // 生产环境
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
}
function addFontToDOM(fontFamily, fontPath) {
    console.log(process.cwd())
    console.log(fontPath)
    const style = document.createElement('style');
    style.type = 'text/css';
    let allcss = "@font-face{font-family:'"
        + fontFamily + "';src:url('" + fontPath + "')format('truetype');}"
    allcss = allcss.replace(/\\/g, "/")
    style.appendChild(document.createTextNode(allcss));
    console.log(style)
    document.head.appendChild(style);
}
import "@/assets/fonts/basefont.css"
import "@/assets/style/base.css"; // 基础样式表
import "@/assets/fonts/iconfont/iconfont.css"; // icon字体文件
import "@/assets/style/theme/dark.less"; // 主题 暗

createApp(App).use(store).use(router).mount("#app");
