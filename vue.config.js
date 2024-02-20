const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,//代码检测
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "cn.dzy.mcbox",
        productName: "MCBOX", //项目名，也是生成的安装文件名，即aDemo.exe
        copyright: "Copyright © 2024", //版权信息
        directories: {
          output: "./dist", //输出文件路径，之前编译的默认是dist_electron
        },
        win: {
          icon: "./public/logo.ico", //这里注意配好图标路径
        },
        extraResources: [
          {
            from: "./public/MCBOX",
            //默认打包到resources目录下  所以这里使用了../
            // "to": "res" 则是复制到 resources/res 目录下
            to: "./MCBOX",
          },
        ],
        nsis: {
          //nsis相关配置，打包方式为nsis时生效
          oneClick: false, // 是否一键安装
          allowElevation: true, // 允许请求提升，如果为false，则用户必须使用提升的权限重新启动安装程序。
          allowToChangeInstallationDirectory: true, // 允许修改安装目录
          installerIcon: "./public/logo.ico", // 安装图标
          uninstallerIcon: "./public/logo.ico", //卸载图标
          installerHeaderIcon: "./public/logo.ico", // 安装时头部图标
          createDesktopShortcut: true, // 创建桌面图标
          createStartMenuShortcut: true, // 创建开始菜单图标
          shortcutName: "MCBOX", // 图标名称
        },
      },
    },
  },
  //解决强迫症警告
  chainWebpack: (config) => {
    config.plugin("define").tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: "true",
        __VUE_PROD_DEVTOOLS__: "false",
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
      });
      return definitions;
    });
  },
});
