"use strict";

import { app, protocol, BrowserWindow, ipcMain } from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
const isDevelopment = process.env.NODE_ENV !== "production";

protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);

async function createWindow() {
  const win = new BrowserWindow({
    width: 1500,
    height: 950,
    minHeight: 950,
    minWidth: 1500,
    frame: false,
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
  });
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
  } else {
    createProtocol("app");
    win.loadURL("app://./index.html");
  }
}
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
