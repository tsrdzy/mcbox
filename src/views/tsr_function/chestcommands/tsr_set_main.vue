<template>
  <div class="set_main">
    <div class="set_card">
      <h2>菜单名称:</h2>
      <input
        v-model="this.menufile"
        v-on:input="menu_main_updata()"
        type="text"
        placeholder="菜单的标签,不可重复"
      />
    </div>
    <div class="set_card">
      <h2>菜单标题:</h2>
      <input
        v-model="this['menu-settings'].name"
        v-on:input="menu_main_updata()"
        type="text"
        placeholder="菜单顶部显示的名称"
      />
    </div>
    <div class="set_card">
      <h2>菜单大小:</h2>
      <select
        v-model="this['menu-settings'].rows"
        v-on:click="menu_main_updata()"
      >
        <option :key="i" v-for="i of 6" :value="i">{{ i }}行</option>
      </select>
    </div>
    <div class="set_card">
      <h2>刷新频率:</h2>
      <input
        v-model="this['menu-settings']['auto-refresh']"
        v-on:input="menu_main_updata()"
        type="number"
        placeholder="菜单内容更新,单位(秒)"
      />
    </div>
    <div class="set_card">
      <h2>打开指令:</h2>
      <input
        v-model="this.temporary.commands"
        v-on:input="menu_main_updata()"
        type="text"
        placeholder="打开菜单的指令(多个请用半角逗号隔开)"
      />
    </div>
    <div class="set_card">
      <h2>物品打开:</h2>
      <input
        v-model="this['menu-settings']['open-with-item'].material"
        v-on:input="menu_main_updata()"
        type="text"
        placeholder="物品的英文ID"
      />
      <div class="itemselection">
        <n-popover trigger="click">
          <template #trigger> ··· </template>
          <mcbox_item_selection @open_items="open_items"></mcbox_item_selection>
        </n-popover>
      </div>
    </div>
    <div class="set_card">
      <h2>打开方式:</h2>
      <div style="width: 100%; display: flex; justify-content: space-between">
        <n-space>
          <n-switch
            v-model:value="
              this['menu-settings']['open-with-item']['left-click']
            "
            @update:value="menu_main_updata()"
          >
            <template #checked>左键打开</template>
            <template #unchecked>左键打开</template>
          </n-switch>
        </n-space>
        <n-space>
          <n-switch
            v-model:value="
              this['menu-settings']['open-with-item']['right-click']
            "
            @update:value="menu_main_updata()"
          >
            <template #checked>右键打开</template>
            <template #unchecked>右键打开</template>
          </n-switch>
        </n-space>
      </div>
    </div>
    <div class="set_card">
      <h3>打开菜单时执行:</h3>
    </div>
    <div class="set_card">
      <h3>执行类型:</h3>
      <select v-model="this.command">
        <option
          selected
          :key="commandsx"
          :value="commandsx"
          v-for="commandsx in cc_actions"
        >
          {{ commandsx.label }}
        </option>
      </select>
    </div>
    <div class="set_card">
      <h2 v-if="command.value != ''">{{ this.command.value.label }}:</h2>
      <input
        v-if="command.value != ''"
        v-model="this.temporary.function"
        v-on:input="menu_main_updata()"
        type="text"
        :placeholder="this.command.value.command"
      />
    </div>
    <div
      style="
        margin: 0 0 0 70px;
        width: calc(100% - 70px);
        display: flex;
        justify-content: space-between;
      "
    >
      <button v-on:click="empty_button">清空</button>
      <button v-on:click="add_button">添加</button>
    </div>
    <div class="table">
      <table>
        <thead>
          <tr>
            <th style="width: 80%">内容</th>
            <th style="width: 20%">选项</th>
          </tr>
        </thead>
        <tbody>
          <tr
            :key="open_actions"
            v-for="(open_actions, index) in this.temporary.open_actions"
          >
            <td>{{ open_actions }}</td>
            <td><button v-on:click="delete_button(index)">删除</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { NSwitch, NPopover, NSpace } from "naive-ui";
import mcbox_item_selection from "@/views/tsr_function/chestcommands/tsr_item_selection.vue";

import cc_actions from "@/assets/json/chestcommands/actions.json";
const { dialog } = window.require("electron").remote;
export default {
  components: {
    mcbox_item_selection,
    NSwitch,
    NSpace,
    NPopover,
  },
  mounted() {
    this["menu-settings"].rows = this.$store.getters["chestcommands/get_rows"];
    this.cc_actions = cc_actions;
  },
  data() {
    return {
      menufile: "",
      cc_actions: [],
      command: { value: "", label: "", command: "" },
      temporary: {
        commands: "",
        function: "",
        open_actions: [],
      },
      "menu-settings": {
        name: "&bMCBOX &c&lChestCommands &dEditor",
        rows: 6,
        "auto-refresh": null,
        commands: [],
        "open-actions": [],
        "open-with-item": {
          material: "",
          "left-click": false,
          "right-click": true,
        },
      },
    };
  },
  methods: {
    open_items(msg) {
      this["menu-settings"]["open-with-item"].material = msg;
      this.$store.commit(
        "chestcommands/menu_main_updata",
        this["menu-settings"]
      );
    },
    menu_main_updata() {
      if (
        this.temporary.commands.charAt(this.temporary.commands.length - 1) !=
        ","
      ) {
        this["menu-settings"].commands = this.temporary.commands.split(",");
      } else {
        this["menu-settings"].commands = this.temporary.commands
          .slice(0, -1)
          .split(",");
      }
      this.$store.commit(
        "chestcommands/menu_main_updata",
        this["menu-settings"]
      );
      this.$store.commit("chestcommands/menu_file", this.menufile);
    },
    add_button() {
      if (this.temporary.function != "") {
        if (this.command.value.value != "") {
          this["menu-settings"]["open-actions"].push(
            this.command.value.value + ": " + this.temporary.function
          );
          this.temporary.open_actions.push(
            this.command.label + ": " + this.temporary.function
          );
        } else {
          this["menu-settings"]["open-actions"].push(
            this.command.value.value + this.temporary.function
          );
          this.temporary.open_actions.push(
            this.command.label + ": " + this.temporary.function
          );
        }
        this.menu_main_updata();
      } else {
        // alert("请输入具体内容");
        dialog
          .showMessageBox({
            type: "info",
            title: "提示",
            message: "请输入具体内容",
          })
          .then((result) => {
            console.log("用户点击了提示框按钮：", result);
          })
          .catch((err) => {
            console.error(err);
          });
      }
      this.temporary.function = "";
    },
    empty_button() {
      var r = confirm("是否清空!");
      if (r == true) {
        this["menu-settings"]["open-actions"] = [];
        this.temporary.open_actions = [];
      }
    },
    delete_button(data) {
      this["menu-settings"]["open-actions"].splice(data, 1);
      this.temporary.open_actions.splice(data, 1);
    },
  },
  computed: {
    menusdata() {
      return this.$store.state.chestcommands.menu["menu-settings"];
    },
    menu_name() {
      return this.$store.state.chestcommands.menu_file;
    },
  },
  watch: {
    menusdata: {
      handler(newVal) {
        this["menu-settings"] = newVal;
      },
      deep: true,
      immediate: true,
    },
    menu_name(newVal) {
      this.menufile = newVal;
    },
  },
};
</script>
<style lang=less scoped>
.set_main {
  padding: 10px 20px;
  // width: 100%;
  // max-width: 500px;

  .set_card {
    position: relative;
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

    .itemselection {
      height: 24px;
      line-height: 24px;
      position: absolute;
      right: 3px;
      font-size: 28px;
      font-family: "minecraft-title";
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

  button {
    width: 100px;
    height: 26px;
    border-radius: 4px;
    margin: 5px 0;
    background-color: #dddddd;
  }

  button:hover {
    background-color: #bebebe;
  }

  .table {
    border-radius: 10px;
    border: 1px solid #00000075;
    margin: 0 0 0 70px;
    width: calc(100% - 70px);
    height: 107px;
    overflow-y: auto;

    table {
      width: 100%;
      border-radius: 10px;

      td,
      th {
        border-bottom: 1px solid #8686869f;

        button {
          display: block;
          width: 80%;
          height: 22px;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
