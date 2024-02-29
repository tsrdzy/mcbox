<template>
  <div class="mainset">
    <div class="mainset_card">
      <h2>菜单标签:<span>*</span></h2>
      <input type="text" placeholder="菜单标签" />
    </div>
    <div class="mainset_card">
      <h2>菜单名称:<span>*</span></h2>
      <input
        v-on:input="set_input()"
        v-model="this.menuset['menu-setting'].name"
        type="text"
        placeholder="菜单名称"
      />
    </div>
    <div class="mainset_card">
      <h2>菜单大小:<span>*</span></h2>
      <select v-on:click="set_input()" v-model="menuset['menu-setting'].row">
        <option :key="index" v-for="index of 6" :value="index">
          {{ index }}行
        </option>
      </select>
    </div>
    <div class="mainset_card">
      <h2>刷新频率:</h2>
      <input
        v-on:input="set_input()"
        v-model="this.menuset['menu-setting']['auto-refresh']"
        type="number"
        placeholder="单位(秒)"
      />
    </div>
    <div class="mainset_card">
      <h2>打开指令:</h2>
      <input
        v-model="commands"
        v-on:input="set_input_commands(value)"
        type="text"
        placeholder="打开菜单的指令(多个请用半角逗号 , 隔开)"
      />
    </div>
    <div class="mainset_card">
      <h2>物品打开:</h2>
      <input
        type="text"
        v-model="this.menuset['menu-setting']['open-with-item'].material"
        placeholder="使用物品打开菜单(输入物品ID)"
        v-on:input="set_input()"
      />
      <div class="itemselection">
        <n-popover trigger="click" raw :show-arrow="false">
          <template #trigger> ··· </template>
          <div
            :class="this.$store.state.skin"
            style="
              background-color: rgba(255, 255, 255, 0);
              border: 1px solid rgba(127, 127, 127, 0.5);
              border-radius: 5px;
            "
          >
            <mcbox_items @open_items="open_items"></mcbox_items>
          </div>
        </n-popover>
      </div>
    </div>
    <div class="mainset_card">
      <h2>打开方式:</h2>
      <div style="display: flex; justify-content: space-between; width: 100%">
        <n-space>
          <div style="line-height: 28px">
            左键打开<n-switch
              v-on:click="set_input()"
              style="border: 1px solid rgb(128, 128, 128); border-radius: 16px"
              size="medium"
              v-model:value="
                this.menuset['menu-setting']['open-with-item']['left-click']
              "
            />
          </div>
        </n-space>
        <n-space>
          <div style="line-height: 28px">
            右键打开<n-switch
              v-on:click="set_input()"
              style="border: 1px solid rgb(128, 128, 128); border-radius: 16px"
              size="medium"
              v-model:value="
                this.menuset['menu-setting']['open-with-item']['right-click']
              "
            /></div
        ></n-space>
      </div>
    </div>
    <hr />
    <div class="mainset_card">
      <h2>打开菜单时执行:</h2>
      <select v-model="actions_action">
        <option :key="list" v-for="list in actions" :value="list.action">
          {{ list.name }}
        </option>
      </select>
    </div>
    <div class="mainset_card">
      <h2>执行内容:</h2>
      <input
        v-model="action_message"
        type="text"
        :placeholder="list.message"
        v-show="list.action == this.actions_action"
        :key="list.message"
        v-for="list in actions"
      />
    </div>
    <div class="card_button">
      <button v-on:click="empty_open_action">清空</button>
      <button v-on:click="add_open_action">添加</button>
    </div>
    <div class="card_table">
      <table>
        <thead>
          <tr>
            <th class="thead_left">内容</th>
            <th class="thead_right">选项</th>
          </tr>
        </thead>
        <tbody>
          <tr
            :key="open_actions"
            v-for="(open_actions, index) in this.menuset['menu-setting'][
              'open-actions'
            ]"
          >
            <td>{{ open_actions }}</td>
            <td class="open_menu_button">
              <button v-on:click="delete_open_action(index)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <n-modal
      :style="
        this.skin == 'black'
          ? 'background-color:rgb(25,25,25);color:#fff'
          : 'background-color:#FFF;color:#000'
      "
      v-model:show="showModal"
      :mask-closable="false"
      preset="dialog"
      title="信息"
      content="请输入内容后再添加"
      positive-text="确认"
    />
  </div>
</template>

<script>
import mcbox_items from "./mcbox_items.vue";
import actions from "@/../public/json/chestcommands/click_actions.json";

export default {
  components: {
    mcbox_items,
  },
  data() {
    return {
      skin: "black",
      showModal: false,
      menuset: {
        "menu-setting": {
          name: "",
          row: 6,
          commands: [],
          "auto-refresh": null,
          "open-actions": [],
          "open-with-item": {
            material: "",
            "left-click": false,
            "right-click": true,
          },
        },
      },
      commands: "",
      actions: [],
      action_message: "",
      actions_action: "",
    };
  },
  mounted() {
    this.actions = actions;
  },
  methods: {
    set_input() {
      this.$store.commit("chestcommands/menuset", this.menuset["menu-setting"]);
    },
    set_input_commands() {
      console.log(this.commands);
      this.menuset["menu-setting"].commands = this.commands.split(",");
      this.set_input();
    },
    open_items(msg) {
      this.menuset["menu-setting"]["open-with-item"].material = msg;
      this.set_input();
    },
    add_open_action() {
      if (this.action_message != "") {
        this.menuset["menu-setting"]["open-actions"].push(
          this.actions_action + this.action_message
        );
        this.action_message = "";
      } else {
        this.showModal = true;
      }

      this.set_input();
    },
    delete_open_action(a) {
      this.menuset["menu-setting"]["open-actions"].splice(a, 1);
      this.set_input();
    },
    empty_open_action() {
      this.menuset["menu-setting"]["open-actions"] = [];
      this.set_input();
    },
  },
  // computed: {
  //   listData() {
  //     return this.$store.state.skin;
  //   },
  // },
  // watch: {
  //   listData(newVal) {
  //     this.skin = newVal;
  //   },
  // },
};
</script>

<style lang="less" scoped>
.mainset {
  flex-grow: 2;
  .mainset_card {
    position: relative;
    display: flex;
    margin: 3px 0;
    h2 {
      min-width: 120px;
      border: 1px solid rgba(255, 255, 255, 0);
      height: 24px;
      line-height: 24px;
      padding: 1px;
      span {
        color: rgb(200, 100, 100);
      }
    }
    input,
    select {
      font-family: "opposans";
      padding: 1px;
      border: 0;
      outline: 0;
      border: 1px solid rgb(126, 126, 126);
      width: 100%;
      border-radius: 3px;
      height: 24px;
    }
    .itemselection {
      background-color: rgba(255, 255, 255, 0);
      height: 27.5px;
      line-height: 27.5px;
      position: absolute;
      right: 8px;
    }
  }
  .card_button {
    display: flex;
    justify-content: space-between;
    margin: 3px 0;
    margin-left: 124px;
    button {
      width: 100px;
      border-radius: 5px;
    }
  }
  .card_table {
    margin: 3px 0;
    margin-left: 124px;
    // width: calc(100% - 86px);
    max-height: 160px;
    overflow: auto;
    table {
      width: 100%;
      border: 1px solid #666;
    }
    .thead_left {
      width: 70%;
      border: 1px solid #666;
    }
    .thead_right {
      width: 30%;
      border: 1px solid #666;
    }
    tbody {
      td {
        border: 1px solid #666;
        height: 28px;
      }
      .open_menu_button {
        display: flex;
        justify-content: center;
        // border-top: 0;
        // border-left: 0;
        button {
          margin: auto;
          width: 70%;
          height: 24px;
          border-radius: 3px;
          background-color: rgb(225, 124, 124);
          color: #fff;
        }
        button:hover {
          background-color: rgb(173, 92, 92);
        }
      }
    }
  }
}
</style>