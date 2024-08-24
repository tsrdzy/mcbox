<template>
  <div class="show_all">
    <div class="show_menu">
      <div class="menu_outer">
        <div class="menu_title" id="menu_title"></div>
        <div class="menu_cards" id="menu_cards">
          <div
            class="menu_card"
            v-on:mousemove="
              mousemoves(
                $event,
                (i % 9 != 0 ? i % 9 : 9) + '*' + (parseInt(i / 9.1) + 1)
              )
            "
            v-on:click="
              card_click(i % 9 != 0 ? i % 9 : 9, parseInt(i / 9.1) + 1)
            "
            :key="item"
            v-for="(i, item) in size * 9"
          >
            <div
              :key="value"
              v-show="
                key == (i % 9 != 0 ? i % 9 : 9) + '*' + (parseInt(i / 9.1) + 1)
                  ? true
                  : false
              "
              v-for="(value, key) in menus"
              :class="'icon-' + value[3] + ' ' + value[0] + '-' + item_version"
            >
              <div
                class="card_lore"
                v-show="value[1] != undefined || value[2] != undefined"
                :id="
                  key ==
                  (i % 9 != 0 ? i % 9 : 9) + '*' + (parseInt(i / 9.1) + 1)
                    ? 'card_lore' +
                      (i % 9 != 0 ? i % 9 : 9) +
                      '*' +
                      (parseInt(i / 9.1) + 1)
                    : null
                "
              >
                <div class="card_lore2">
                  <div
                    v-html="value[1]"
                    class="title"
                    :id="
                      key ==
                      (i % 9 != 0 ? i % 9 : 9) + '*' + (parseInt(i / 9.1) + 1)
                        ? 'card_lore2' +
                          (i % 9 != 0 ? i % 9 : 9) +
                          '*' +
                          (parseInt(i / 9.1) + 1)
                        : null
                    "
                  ></div>
                  <div
                    v-html="value[2]"
                    class="lore"
                    :id="
                      key ==
                      (i % 9 != 0 ? i % 9 : 9) + '*' + (parseInt(i / 9.1) + 1)
                        ? 'card_lore3' +
                          (i % 9 != 0 ? i % 9 : 9) +
                          '*' +
                          (parseInt(i / 9.1) + 1)
                        : null
                    "
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="set_card">
      <h2>当前 - X:</h2>
      <input disabled v-model="x" type="text" placeholder="未选定" />
    </div>
    <div class="set_card">
      <h2>当前 - Y:</h2>
      <input disabled v-model="y" type="text" placeholder="未选定" />
    </div>
    <div class="set_card_button">
      <div v-on:click="d4">
        <h4 class="iconfont">&#xec7a;</h4>
        <h5>复制</h5>
      </div>
      <div v-on:click="d3">
        <h4 class="iconfont">&#xe610;</h4>
        <h5>粘贴</h5>
      </div>
      <div v-on:click="d2">
        <h4 class="iconfont">&#xe60e;</h4>
        <h5>清空</h5>
      </div>

      <form action="">
        <label for="upfile">
          <div>
            <h4 class="iconfont">&#xe616;</h4>
            <h5>导入</h5>
          </div>
        </label>
        <input
          style="display: none"
          accept=".yml,.yaml"
          type="file"
          id="upfile"
          v-on:change="filechange"
        />
      </form>

      <div v-on:click="d1">
        <h4 class="iconfont">&#xe617;</h4>
        <h5>导出</h5>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/script/general/MinecraftColorCodes.3.7";
const { dialog } = window.require("electron").remote;
import { saveAs } from "file-saver";

export default {
  components: {},
  data() {
    return {
      item_version: "20",
      title: null,
      size: 6,
      x: null,
      y: null,
      menu_title: "",
      menus: {},
      card_lorex: "",
    };
  },
  mounted() {
    this.size = this.$store.state.chestcommands.menu["menu-settings"].rows;
    var data = this.$store.state.chestcommands.menu["menu-settings"].name;
    var newdata = data.replaceColorCodes();
    document.getElementById("menu_title").innerHTML = "";
    document.getElementById("menu_title").appendChild(newdata);
    this.item_versions();
    for (var i = 1; i <= 6; i++) {
      for (var n = 1; n <= 9; n++) {
        this.menus[n + "*" + i] = [null, undefined, undefined, null];
      }
    }
  },
  methods: {
    filechange() {
      var $this = this;
      this.size = 6;
      var file_return = "";
      var selectedFile = document.getElementById("upfile").files[0];
      var menuname = selectedFile.name;
      menuname = menuname.replace(".yml", "");
      menuname = menuname.replace(".yaml", "");

      this.$store.commit("chestcommands/menu_file", menuname);

      var reader = new FileReader();
      reader.readAsText(selectedFile);
      reader.onload = function () {
        for (var v = 1; v <= 6; v++) {
          for (var g = 1; g <= 9; g++) {
            $this.menus[g + "*" + v] = [null, undefined, undefined, null];
          }
        }
        file_return = JSON.parse(JSON.stringify(this.result));
        $this.$store.commit("chestcommands/upfile", file_return);
      };
    },
    card_click(x, y) {
      this.x = x;
      this.y = y;
      this.$store.commit("chestcommands/xy", [x, y]);
    },
    item_versions() {
      this.items = require("@/assets/json/general/1." +
        this.item_version +
        ".json");
      require("@/assets/image/general/1." + this.item_version + ".css");
    },
    mousemoves(event, xy) {
      if (document.getElementById("card_lore" + xy) != null) {
        const sx = document.getElementById("card_lore" + xy);
        sx.style.top = event.layerY - 5 + "px";
        const sy = document.getElementById("card_lore" + xy);
        sy.style.left = event.layerX + 15 + "px";
      }
    },
    d1() {
      const object_data = JSON.parse(
        JSON.stringify(this.$store.state.chestcommands.menu)
      );

      if (this.$store.state.chestcommands.menu_file != "") {
        var filename = this.$store.state.chestcommands.menu_file + ".yml";
      } else {
        filename = "MCBOX_ChestCommands.yml";
      }
      const yaml = require("js-yaml");
      const yaml_data = yaml.dump(object_data, "uft-8");
      var all_data = new Blob([yaml_data], {
        type: "text/plain;charset=utf-8",
      });
      saveAs(all_data, filename);
    },
    d2() {
      for (var v = 1; v <= 6; v++) {
        for (var g = 1; g <= 9; g++) {
          this.menus[g + "*" + v] = [null, undefined, undefined, null];
        }
      }
      var xx = this.$store.state.chestcommands.x;
      var yy = this.$store.state.chestcommands.y;
      if (xx != null && yy != null) {
        var r = confirm("是否清空当前位置!");
        if (r == true) {
          this.$store.commit("chestcommands/delete_card", [xx, yy]);
        }
      } else {
        dialog.showMessageBox({
          type: "info",
          title: "提示",
          message: "当前选中位置为空,无法清空!",
        });
      }
    },
    d3() {
      for (var v = 1; v <= 6; v++) {
        for (var g = 1; g <= 9; g++) {
          this.menus[g + "*" + v] = [null, undefined, undefined, null];
        }
      }
      var xx = this.$store.state.chestcommands.x;
      var yy = this.$store.state.chestcommands.y;
      if (xx != null && yy != null) {
        this.$store.commit("chestcommands/paste_card", [
          xx,
          yy,
          "item-" + xx + "-" + yy,
        ]);
      } else {
        dialog.showMessageBox({
          type: "info",
          title: "提示",
          message: "你还没有选择位置,无法粘贴",
        });
      }
    },
    d4() {
      var xx = this.$store.state.chestcommands.x;
      var yy = this.$store.state.chestcommands.y;
      if (xx != null && yy != null) {
        this.$store.commit("chestcommands/copy_card", [xx, yy]);
      } else {
        dialog.showMessageBox({
          type: "info",
          title: "提示",
          message: "你还没有选择位置,无法复制",
        });
      }
    },
  },
  computed: {
    rows() {
      return this.$store.state.chestcommands.menu["menu-settings"].rows;
    },
    name() {
      return this.$store.state.chestcommands.menu["menu-settings"].name;
    },
    menusdata() {
      return this.$store.state.chestcommands.menu;
    },
  },
  watch: {
    rows(newVal) {
      this.size = newVal;
    },
    name(newVal) {
      var newMOTD = newVal.replaceColorCodes();
      document.getElementById("menu_title").innerHTML = "";
      document.getElementById("menu_title").appendChild(newMOTD);
    },
    menusdata: {
      handler(newVal) {
        var newVal1 = JSON.parse(JSON.stringify(newVal));
        this.size = newVal1["menu-settings"].rows;
        delete newVal1["menu-settings"];
        for (let keys in newVal1) {
          var xx = JSON.parse(JSON.stringify(newVal1[keys]["POSITION-X"]));
          var yy = JSON.parse(JSON.stringify(newVal1[keys]["POSITION-Y"]));
          if (newVal1[keys].MATERIAL != undefined) {
            var img = newVal1[keys].MATERIAL.replace(" ", "_");
          }
          var card_title = "";
          var card_lore = "";
          var card_title_f = "";
          var card_lore_f = "";

          card_title = newVal1[keys].NAME;
          card_lore = newVal1[keys].LORE;
          if (card_title == undefined || card_title == "") {
            card_title = " ";
          }
          if (card_lore == undefined || card_lore == "") {
            card_lore = " ";
          }
          if (card_title != "" && card_title != undefined) {
            card_title_f = card_title.replaceColorCodes();
            var s = document.getElementById("card_lore2" + xx + "*" + yy);
            if (s != "" && s != undefined) {
              s.innerHTML = "";
              s.appendChild(card_title_f);
            }
          }
          var card_lore_all = "";
          if (card_lore != undefined && card_lore.length != 0) {
            for (var i = 0; i < card_lore.length; i++) {
              if (card_lore_all != "") {
                card_lore_all = card_lore_all + "\n&f" + card_lore[i];
              } else {
                card_lore_all = card_lore[i];
              }
            }

            card_lore_f = card_lore_all.replaceColorCodes();
            var m = document.getElementById("card_lore3" + xx + "*" + yy);
            if (m != "" && m != undefined) {
              m.innerHTML = "";
              m.appendChild(card_lore_f);
            }
          }
          var show_lore = [img, undefined, undefined, null];
          if (s != undefined) {
            show_lore[1] = s.innerHTML;
            show_lore[3] = 20;
          }
          if (m != undefined) {
            show_lore[2] = m.innerHTML;
            show_lore[3] = 20;
          }
          this.menus[xx + "*" + yy] = show_lore;
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
<style lang=less scoped>
.show_all {
  width: 100%;
  margin: 0 auto;

  .show_menu {
    border: 2px solid rgb(4, 4, 4);
    border-radius: 4px;
    height: auto;
    max-width: 340px;
    min-width: 340px;
    background-color: rgb(198, 198, 198);

    .menu_outer {
      border: 3px solid rgb(85, 85, 85);
      border-top: 3px solid #fff;
      border-left: 3px solid #fff;
    }

    .menu_title {
      font-family: "minecraft" !important;
      height: 30px;
      overflow: hidden;
      line-height: 30px;
      margin: 0 0 0 5px;
    }

    .menu_cards {
      display: flex;
      margin: 0 5px 5px;
      flex-wrap: wrap;

      .menu_card {
        width: 32px;
        height: 32px;
        border: 2px solid rgb(245, 245, 245);
        border-top: 2px solid rgb(65, 65, 65);
        border-left: 2px solid rgb(65, 65, 65);
        background-color: rgb(139, 139, 139);
      }

      .menu_card:hover {
        background-color: rgb(192, 192, 192);
      }

      .menu_card:hover .card_lore {
        display: block;
      }
    }
  }
}

.set_card {
  display: flex;
  margin: 4px 0;

  h2,
  h3 {
    min-width: 70px;
    max-width: 70px;
    flex-grow: 1;
    font-weight: bolder;
  }

  h3 {
    max-width: 100%;
  }

  input,
  select {
    width: 100%;
    flex-grow: 4;
    box-shadow: 0 0 2px #000000;
    border-radius: 5px;
  }

  input:focus,
  select:focus {
    outline: 1px solid #7e7e7e;
  }
}

.set_card_button {
  display: flex;
  justify-content: space-between;
  margin: 15px 0 0 0;

  div {
    border: 1px solid #72727250;
    border-radius: 10px;
    width: 50px;
    height: 50px;

    h4 {
      font-size: 20px;
      text-align: center;
    }

    h5 {
      text-align: center;
    }
  }
}

.menu_card {
  .card_lore {
    position: absolute;
    border: 3px solid rgba(9, 1, 17, 0.8);
    border-radius: 3px;
    z-index: 999;
    display: none;

    .card_lore2 {
      border: 2px solid rgb(35, 4, 85);
      background-color: rgba(13, 2, 29, 0.95);
      color: #fff;
      padding: 5px;

      span {
        white-space: nowrap;
        display: inline-block;
        overflow: hidden;
      }

      .title {
        display: flex;
      }

      .lore {
        span {
          float: left;
        }
      }
    }
  }
}
</style>
