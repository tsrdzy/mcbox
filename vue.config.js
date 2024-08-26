const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "com.tsr.dzy.mcbox",// 应用的唯一标识符，用于区分不同的应用  
        copyright: "Copyright © dzy",// 版权声明  
        productName: "MCBOX",// 产品的名称，将用于安装程序和应用程序的显示名称  
        asar: true,// 是否将应用打包为asar格式，有助于优化和隐藏源代码  
        directories: { output: 'dist' },// 自定义输出目录  
        extraResources: ["./public/MCBOX"],
        win: {
          icon: `./logo.png`,// 应用程序的图标文件路径 
          target: ["nsis"],// 指定构建目标，nsis表示使用NSIS安装程序  
        },
        nsis: {
          oneClick: false,// 是否一键安装，false表示需要用户确认安装选项  
          perMachine: true,// 是否为所有用户安装，而不仅仅是当前用户  
          allowToChangeInstallationDirectory: true,// 是否允许用户更改安装目录  
          deleteAppDataOnUninstall: true,// 卸载时是否删除应用程序数据  
          installerIcon: "./favicon.ico",// 安装程序的图标  
          uninstallerIcon: "./favicon.ico",// 卸载程序的图标  
          installerHeaderIcon: "./favicon.ico",// 安装程序头部的图标（可能用于安装向导的不同页面） 
          createDesktopShortcut: true,// 是否在安装时创建桌面快捷方式  
          createStartMenuShortcut: true,// 是否在安装时创建开始菜单快捷方式  
          shortcutName: 'MCBOX'
        },
      },
    },
  },
});
