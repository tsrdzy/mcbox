<template>
  <n-collapse>
    <template #arrow>
      <h2 class="list_title iconfont">&#xe6b7;</h2>
    </template>
    <n-collapse-item>
      <template #header>
        <h2 class="list_title">掉落设置</h2>
      </template>
      <div class="cards">
        <div class="card">
          <h2 class="card_title">掉落类型:</h2>
          <select
            ref="card_title_select"
            v-model="drop_new"
            v-on:change="drop_type"
            v-on:click="drop_type"
            :disabled="mobs_input"
          >
            <option :key="Typex" v-for="Typex in Types" :value="Typex.value">
              {{ Typex.label }}
            </option>
          </select>
          <n-popover trigger="hover">
            <template #trigger>
              <div class="iconfont hint">&#xe8e9;</div>
            </template>
            <div>
              <span>种类将决定该MythicMobs基于什么原版实体</span>
            </div>
          </n-popover>
        </div>
        <div class="card" :key="contents" v-for="(contents, i) in content">
          <h2 class="card_title">{{ contents[0] }}:</h2>
          <input
            type="text"
            :placeholder="contents[1]"
            v-model="content_num[i]"
            :disabled="mobs_input"
          />
          <n-popover trigger="hover">
            <template #trigger>
              <div class="iconfont hint">&#xe8e9;</div>
            </template>
            <div></div>
          </n-popover>
        </div>
        <div class="card_button">
          <button v-on:click="empty" :disabled="mobs_input">清空</button>
          <button v-on:click="add" :disabled="mobs_input">添加</button>
        </div>
        <div class="card_table">
          <table>
            <tr>
              <th class="th_left">掉落配置</th>
              <th class="th_right">操作</th>
            </tr>
            <tr
              :key="Drops_configx"
              v-for="(Drops_configx, index) in Drops_config"
            >
              <td>{{ Drops_configx }}</td>
              <td>
                <button v-on:click="delete_drop(index)" :disabled="mobs_input">
                  删除
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </n-collapse-item>
  </n-collapse>
</template>

<script>
import { NPopover, NCollapseItem, NCollapse } from "naive-ui";
import types from "@/assets/json/mythicmobs/mobs_drops.json";
const { dialog } = window.require("electron").remote;
export default {
  mounted() {
    this.Types = types;
    this.mobs_input = this.$store.state.mobs_input;
  },
  data() {
    return {
      mobs_input: true,
      Types: {},
      drop_new: "",
      content: [],
      content_num: ["", "", "", ""],
      Drops_config: [],
    };
  },
  components: {
    NPopover,
    NCollapseItem,
    NCollapse,
  },
  methods: {
    drop_type() {
      for (var i = 0; i < this.Types.length; i++) {
        if (this.Types[i].value == this.drop_new) {
          this.content = this.Types[i].config;
          return;
        }
      }
    },
    drop_function() {
      this.$emit("drops", this.Drops_config);
    },
    add() {
      if (this.drop_new != "") {
        var temporary_drop = "";
        if (
          this.drop_new == "skillapi-exp" ||
          this.drop_new == "mcmmo-exp" ||
          this.drop_new == "exp" ||
          this.drop_new == "money"
        ) {
          temporary_drop = this.drop_new;
          if (this.content_num[0] != "") {
            temporary_drop = temporary_drop + " " + this.content_num[0];
          }
          if (this.content_num[1] != "") {
            temporary_drop = temporary_drop + " " + this.content_num[1];
          }
        } else if (
          this.drop_new == "oraxen" ||
          this.drop_new == "mythicdrop" ||
          this.drop_new == "phatloot"
        ) {
          temporary_drop = this.drop_new;
          if (this.content_num[0] != "") {
            temporary_drop = temporary_drop + " " + this.content_num[0];
          }
          if (this.content_num[1] != "") {
            temporary_drop = temporary_drop + " " + this.content_num[1];
          }
          if (this.content_num[2] != "") {
            temporary_drop = temporary_drop + " " + this.content_num[2];
          }
        } else if (this.drop_new == "cmd") {
          temporary_drop = this.drop_new;
          if (this.content_num[0] != "") {
            temporary_drop =
              temporary_drop + '{c="' + this.content_num[0] + '"}';
          }
        } else if (this.drop_new == "mmoitems") {
          temporary_drop = this.drop_new + "{";
          if (this.content_num[0] != "") {
            temporary_drop =
              temporary_drop + "type=" + this.content_num[0] + ";";
          }
          if (this.content_num[1] != "") {
            temporary_drop = temporary_drop + "id=" + this.content_num[1];
          }
          temporary_drop = temporary_drop + "}";
          if (this.content_num[2] != "") {
            temporary_drop = temporary_drop + " " + this.content_num[2];
          }
          if (this.content_num[3] != "") {
            temporary_drop = temporary_drop + " " + this.content_num[3];
          }
        } else if (this.drop_new == "mythicmob") {
          temporary_drop = this.drop_new;
          if (this.content_num[0] != "") {
            temporary_drop =
              temporary_drop + "{type=" + this.content_num[0] + "}";
          }
          if (this.content_num[1] != "") {
            temporary_drop = temporary_drop + " " + this.content_num[1];
          }
          if (this.content_num[2] != "") {
            temporary_drop = temporary_drop + " " + this.content_num[2];
          }
        } else if (this.drop_new == "ItemsAdder") {
          if (this.content_num[0] != "") {
            temporary_drop = this.content_num[0];
          }
          if (this.content_num[1] != "") {
            temporary_drop = temporary_drop + ":" + this.content_num[1];
          }
        } else if (this.drop_new == "掉落表") {
          if (this.content_num[0] != "") {
            temporary_drop = this.content_num[0];
          }
        }
        this.drop_new = "";
        this.content = [];
        this.content_num = ["", "", "", ""];
        this.Drop_config = [];
        this.Drops_config.push(temporary_drop);
        this.$emit("drop_set", this.Drops_config);
      } else {
        dialog.showMessageBoxSync({
          message: "请先选择一个掉落类型",
          title: "错误",
          type: "info",
        });
      }
    },
    delete_drop(index) {
      this.Drops_config.splice(index, 1);
      this.$emit("drop_set", this.Drops_config);
    },
    empty() {
      this.Drops_config = [];
      this.$emit("drop_set", this.Drops_config);
    },
  },
  computed: {
    isEdit() {
      return this.$store.state.mobs_input; //需要监听的数据
    },
  },
  watch: {
    isEdit(newVal) {
      this.mobs_input = newVal;
      console.log(newVal);
    },
  },
};
</script>

<style lang=less scoped>
</style>