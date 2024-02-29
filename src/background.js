"use strict";

import { app, protocol, BrowserWindow, ipcMain } from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
const isDevelopment = process.env.NODE_ENV !== "production";
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);
const winURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : `file://${__dirname}/index.html`;
async function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 550,
    minHeight: 550,
    minWidth: 800,
    frame: false,
    icon: "./public/favicon.ico",
    title: "MCBOX",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      webSecurity: false, //路径识别,关闭安全策略
    },
  });
  //判断是否最大化
  win.on("maximize", () => {
    win.webContents.send("window-max");
  });
  win.on("unmaximize", () => {
    win.webContents.send("window-unmax");
  });
  //按钮控制区域
  ipcMain.on("window-min", () => {
    win.minimize();
  });
  ipcMain.on("window-max", () => {
    win.maximize();
  });
  ipcMain.on("window-unmax", () => {
    win.unmaximize();
  });
  ipcMain.on("window-close", () => {
    win.close();
    app.quit();
    // const choice = dialog.showMessageBoxSync(win, {
    //   type: "info",
    //   buttons: ["取消", "确认退出"],
    //   title: "提示",
    //   message: "关闭主界面前请确认是否保存所有设置!",
    //   defaultId: 0,
    //   cancelId: 1
    // });
    // const leave = choice === 0;
    // if (!leave) {
    //   win.close();
    //   app.quit();
    // }
  });
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
  } else {
    createProtocol("app");
    win.loadURL("app://./index.html");
  }
  // win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
}

//chestcommands
let chestcommands = false;
let winChestCommands;
ipcMain.on("runChestCommands", () => {
  if (!chestcommands) {
    winChestCommands = new BrowserWindow({
      width: 1200,
      height: 750,
      minHeight: 750,
      minWidth: 1200,
      frame: false,
      icon: "./public/favicon.ico",
      title: "MCBOX",
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true,
      },
    });
    chestcommands = true;
    //判断是否最大化
    winChestCommands.on("maximize", () => {
      winChestCommands.webContents.send("chestcommands-max");
    });
    winChestCommands.on("unmaximize", () => {
      winChestCommands.webContents.send("chestcommands-unmax");
    });
    //按钮控制区域
    ipcMain.on("chestcommands-min", () => {
      winChestCommands.minimize();
    });
    ipcMain.on("chestcommands-max", () => {
      winChestCommands.maximize();
    });
    ipcMain.on("chestcommands-unmax", () => {
      winChestCommands.unmaximize();
    });
    ipcMain.on("chestcommands-close", () => {
      winChestCommands.hide();
    });
    createProtocol("app");
    winChestCommands.loadURL(winURL + "#/chestcommands");
    console.log(winURL + "#/chestcommands");
  } else {
    winChestCommands.show();
  }

  
});

//gskin
let gskin = false;
let wingskin;
ipcMain.on("rungskin", () => {
  if (!gskin) {
    wingskin = new BrowserWindow({
      width: 900,
      height: 620,
      minHeight: 620,
      minWidth: 900,
      frame: false,
      icon: "./public/favicon.ico",
      title: "MCBOX",
      webPreferences: {
        webSecurity: false, //跨域解决
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true,
      },
    });
    gskin = true;
    //判断是否最大化
    wingskin.on("maximize", () => {
      wingskin.webContents.send("gskin-max");
    });
    wingskin.on("unmaximize", () => {
      wingskin.webContents.send("gskin-unmax");
    });
    //按钮控制区域
    ipcMain.on("gskin-min", () => {
      wingskin.minimize();
    });
    ipcMain.on("gskin-max", () => {
      wingskin.maximize();
    });
    ipcMain.on("gskin-unmax", () => {
      wingskin.unmaximize();
    });
    ipcMain.on("gskin-close", () => {
      wingskin.hide();
    });
    createProtocol("app");
    wingskin.loadURL(winURL + "#/gskin");
    console.log(winURL + "#/gskin");
  } else {
    wingskin.show();
  }
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
app.on("ready", async () => {
  createWindow();
});
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}
