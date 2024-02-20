<template>
  <div :class="this.skin">
    <router-view />
  </div>
</template>

<script>
import "./assets/skin/black.less";
import "./assets/skin/white.less";

const VERSION = require("../package.json").version; //获取版本号
const fs = window.require("fs");
export default {
  data() {
    return {
      skin: "",
    };
  },
  beforeMount() {
    let base_data = {
      name: "MCBOX",
      version: VERSION,
      skin: "black",
      item_all: [],
    };
    this.skin = this.$store.state.skin; //获取当前软件皮肤
    base_data.item_all = this.$store.state.item_all;
    fs.readFile("C:/Program Files/mcbox/config.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      //获取皮肤设置
      if (JSON.parse(data).skin == "" || JSON.parse(data).skin == undefined) {
        this.$store.commit("skin", "black");
      } else {
        this.$store.commit("skin", JSON.parse(data).skin);
      }
      //获取功能隐藏设置
      this.$store.commit("item_all", JSON.parse(data).item_all);
    });

    //写入初始化配置
    if (!fs.existsSync("C:/Program Files/mcbox/config.json")) {
      fs.mkdir("C:/Program Files/mcbox", function (error) {
        if (error) {
          console.log(error);
          return false;
        }
        fs.mkdir("C:/Program Files/mcbox/config", function (error) {
          if (error) {
            console.log(error);
            return false;
          }
          fs.mkdir("C:/Program Files/mcbox/config/gskin", function (error) {
            if (error) {
              console.log(error);
              return false;
            }
          });
        });
      });
      fs.writeFile(
        "C:/Program Files/mcbox/config.json",
        JSON.stringify(base_data),
        (err) => {
          if (err) {
            console.log(err);
            return;
          }
        }
      );
    }
  },
  computed: {
    listData() {
      return this.$store.state.skin;
    },
  },
  watch: {
    listData(newVal) {
      this.skin = newVal;
    },
  },
};
</script>

<style lang="less" scoped>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>

