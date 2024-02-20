import { createStore } from "vuex";
const fs = window.require("fs");

export default createStore({
  //主要组
  state: {
    skin: "black",
    item_all: [
      {
        name: "items_editor",
        show: true,
        items: [
          {
            show: true,
            name: "ChestCommands编辑器",
            img: require("@/../public/img/main/ChestCommands.png"),
            id: "ChestCommands",
          },
          {
            show: true,
            name: "MythicMobs编辑器",
            img: require("@/../public/img/main/MythicMobs.png"),
            id: "MythicMobs",
          },
          {
            show: true,
            name: "DeluxeMenus编辑器",
            img: require("@/../public/img/main/DeluxeMenus.png"),
            id: "DeluxeMenus",
          },
          {
            show: true,
            name: "DataPack数据包编辑器",
            img: require("@/../public/img/main/DataPack.png"),
            id: "DataPack",
          },
        ],
      },
      {
        name: "items_tool",
        show: true,
        items: [
          {
            show: true,
            name: "正版皮肤获取器",
            img: require("@/../public/img/main/skin.png"),
            id: "gskin",
          }
        ],
      },
      {
        name: "items_old_editor",
        show: true,
        items: [
          {
            show: true,
            name: "custommobs编辑器",
            id: "custommobs",
            img: require("@/../public/img/main/custommobs.png"),
          },
          {
            show: true,
            name: "MythicMobs编辑器",
            id: "MythicMobs",
            img: require("@/../public/img/main/MythicMobs.png"),
          },
          {
            show: true,
            name: "GrSciptBlock编辑器",
            id: "GrSciptBlock",
            img: require("@/../public/img/main/GrSciptBlock.png"),
          },
          {
            show: true,
            name: "imipet编辑器",
            id: "imipet",
            img: require("@/../public/img/main/imipet.png"),
          },
          {
            show: true,
            name: "RevivedLocyItem编辑器",
            id: "RevivedLocyItem",
            img: require("@/../public/img/main/RevivedLocyItem.png"),
          },
          {
            show: true,
            name: "RPGitem编辑器",
            id: "RPGitem",
            img: require("@/../public/img/main/RPGitem.png"),
          },
          {
            show: true,
            name: "SkillSystem编辑器",
            id: "SkillSystem",
            img: require("@/../public/img/main/SkillSystem.png"),
          },
          {
            show: true,
            name: "specialattributes编辑器",
            id: "specialattributes",
            img: require("@/../public/img/main/specialattributes.png"),
          },
          {
            show: true,
            name: "Unicode转码工具",
            id: "Unicode转码工具",
            img: require("@/../public/img/main/Unicode转码工具.png"),
          },
          {
            show: true,
            name: "材质包生成器",
            id: "材质包生成器",
            img: require("@/../public/img/main/材质包生成器.png"),
          },
        ],
      },
    ],
  },
  getters: {},
  mutations: {
    skin(state, skin) {
      state.skin = skin;
    },
    item_all(state, item_all) {
      state.item_all = item_all;
      fs.readFile(
        "C:/Program Files/mcbox/config.json",
        "utf-8",
        (err, data) => {
          if (err) {
            console.log(err);
            return;
          }
          const datas = JSON.parse(data);
          datas.item_all = state.item_all;
          fs.writeFile(
            "C:/Program Files/mcbox/config.json",
            JSON.stringify(datas),
            (err) => {
              if (err) {
                console.log(err);
                return;
              }
            }
          );
        }
      );
    },
  },
  actions: {},
  modules: {
    chestcommands: {
      state: {},
      mutations: {},
    },
  },
});
