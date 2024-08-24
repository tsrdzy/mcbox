<template>
  <div class="all">
    <div class="set_card">
      <h2>位置标签:</h2>
      <input
        v-on:input="item_input"
        v-model="this.item_name"
        :disabled="disabled_data1"
        type="text"
        placeholder="物品的唯一标示"
      />
    </div>
    <div class="set_card">
      <h2>物品ID:</h2>
      <input
        v-model="this.item_cards.MATERIAL"
        v-on:input="item_commont"
        :disabled="disabled_data2"
        type="text"
        placeholder="物品的英文ID"
      />
      <div class="itemselection">
        <n-popover trigger="click" :disabled="disabled_data2">
          <template #trigger> ··· </template>
          <mcbox_item_selection
            @open_items="open_items_1"
          ></mcbox_item_selection>
        </n-popover>
      </div>
    </div>
    <div class="set_card">
      <h2>物品标题:</h2>
      <input
        v-on:input="item_commont"
        v-model="this.temporary.NAME"
        :disabled="disabled_data2"
        type="text"
        placeholder="物品第一行的名称"
      />
    </div>
    <div class="set_card">
      <h2>物品lore:</h2>
      <textarea
        v-on:input="item_commont"
        v-model="this.temporary.LORE"
        :disabled="disabled_data2"
        type="text"
        placeholder="物品的介绍,多个请换行输入"
      ></textarea>
    </div>
    <div class="set_card">
      <h2>物品耐久:</h2>
      <input
        v-model="this.temporary.DURABILITY"
        v-on:input="item_commont"
        :disabled="disabled_data2"
        type="number"
        placeholder="物品的耐久度,数据值"
      />
    </div>
    <div class="set_card">
      <h2>显示金额:</h2>
      <input
        v-model="this.temporary.AMOUNT"
        v-on:input="item_commont"
        :disabled="disabled_data2"
        type="number"
        placeholder="显示物品的金额"
      />
    </div>
    <div class="set_card">
      <h2>NBT数据:</h2>
      <input
        v-model="this.temporary['NBT-DATA']"
        v-on:input="item_commont"
        :disabled="disabled_data2"
        type="text"
        placeholder="物品的NBT数据"
      />
    </div>
    <div class="set_card">
      <h2>皮革颜色:</h2>
      <input
        v-model="this.temporary.COLOR"
        v-on:input="item_commont"
        :disabled="disabled_data2"
        type="text"
        placeholder="皮革物品的颜色,例:255,255,255"
      />
    </div>
    <div class="set_card">
      <h2>头颅ID:</h2>
      <input
        v-model="this.temporary['SKULL-OWNER']"
        v-on:input="item_commont"
        :disabled="disabled_data2"
        type="text"
        placeholder="输入正版玩家ID即可获取相应头颅,例:{tsrdzy}"
      />
    </div>
    <div class="set_card">
      <h2>旗帜颜色:</h2>
      <input
        v-model="this.temporary['BANNER-COLOR']"
        v-on:input="item_commont"
        :disabled="disabled_data2"
        type="text"
        placeholder="旗帜的背景颜色,使用染料英文ID"
      />
    </div>
    <div class="set_card">
      <h2>旗帜图案:</h2>
      <input
        v-model="this.temporary['BANNER-PATTERNS']"
        v-on:input="item_commont"
        :disabled="disabled_data2"
        type="text"
        placeholder="例[类型:染料颜色],多个请使用半角逗号隔开"
      />
    </div>
    <div class="set_card">
      <h2>所需金钱:</h2>
      <input
        v-model="this.temporary.PRICE"
        v-on:input="item_commont"
        :disabled="disabled_data2"
        type="number"
        placeholder="点击所需要扣除的金钱"
      />
    </div>
    <div class="set_card">
      <h2>所需经验:</h2>
      <input
        v-model="this.temporary.LEVELS"
        v-on:input="item_commont"
        :disabled="disabled_data2"
        type="number"
        placeholder="点击所需要扣除的经验"
      />
    </div>
    <div class="set_card">
      <h2>所需物品:</h2>
      <input
        v-model="this.temporary['REQUIRED-ITEMS']"
        v-on:input="item_commont"
        :disabled="disabled_data2"
        type="text"
        placeholder="点击所需要扣除的物品(例:物品ID,数量),多个请使用感叹号逗号隔开"
      />
    </div>
    <div class="set_card">
      <h2>关闭菜单:</h2>
      <input
        v-model="this.temporary['KEEP-OPEN']"
        v-on:input="item_commont"
        :disabled="disabled_data2"
        type="text"
        placeholder="点击后是否关闭菜单(true/false)"
      />
    </div>
    <div class="set_card">
      <h2>所需权限:</h2>
      <input
        v-model="this.temporary.PERMISSION"
        v-on:input="item_commont"
        :disabled="disabled_data2"
        type="text"
        placeholder="点击所需要的权限(首位加-表示取反/否定)"
      />
    </div>
    <div class="set_card">
      <h2>显示权限:</h2>
      <input
        v-model="this.temporary['VIEW-PERMISSION']"
        v-on:input="item_commont"
        :disabled="disabled_data2"
        type="text"
        placeholder="显示该物品所需要的权限(首位加-表示取反/否定)"
      />
    </div>
    <div class="set_card">
      <h2>无权提示:</h2>
      <input
        v-model="this.temporary['PERMISSION-MESSAGE']"
        v-on:input="item_commont"
        :disabled="disabled_data2"
        type="text"
        placeholder="没有相应权限时提示的信息"
      />
    </div>
    <hr class="hr_gradient2" />
    <div class="set_card">
      <h3>物品附魔:</h3>
    </div>
    <div class="set_card">
      <h3>附魔类型:</h3>
      <select v-model="enchantment_new" :disabled="disabled_data2">
        <option
          :value="enchantmentx.value"
          :key="enchantmentx"
          v-for="enchantmentx in enchantment_all"
        >
          {{ enchantmentx.label }}
        </option>
      </select>
    </div>
    <div class="set_card">
      <h2>附魔等级:</h2>
      <input
        v-model="enchantment_level_new"
        type="number"
        :disabled="disabled_data2"
        placeholder="附魔的等级"
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
      <button :disabled="disabled_data2" v-on:click="e_empty_button">
        清空
      </button>
      <button :disabled="disabled_data2" v-on:click="e_add_button">添加</button>
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
            :key="item_cards_e"
            v-for="(item_cards_e, index) in this.temporary.ENCHANTMENTS"
          >
            <td>{{ item_cards_e }}</td>
            <td>
              <button
                :disabled="disabled_data2"
                v-on:click="e_delete_button(index)"
              >
                删除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr class="hr_gradient2" />

    <div class="set_card">
      <h3>点击时执行:</h3>
    </div>
    <div class="set_card">
      <h3>执行类型:</h3>
      <select :disabled="disabled_data2" v-model="this.command">
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
        :disabled="disabled_data2"
        v-if="this.command.value != ''"
        v-model="this.temporary.function"
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
      <button :disabled="disabled_data2" v-on:click="empty_button">清空</button>
      <button :disabled="disabled_data2" v-on:click="add_button">添加</button>
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
            :key="item_cards_a"
            v-for="(item_cards_a, index) in this.temporary.ACTIONS"
          >
            <td>{{ item_cards_a }}</td>
            <td>
              <button
                :disabled="disabled_data2"
                v-on:click="delete_button(index)"
              >
                删除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import cc_actions from "@/assets/json/chestcommands/actions.json";
import cc_enchantment from "@/assets/json/chestcommands/enchantment.json";
import { NPopover } from "naive-ui";
import mcbox_item_selection from "@/views/tsr_function/chestcommands/tsr_item_selection.vue";

import enchantment_all from "@/assets/json/chestcommands/enchantment.json";
const { dialog } = window.require("electron").remote;
export default {
  components: {
    NPopover,
    mcbox_item_selection,
  },
  data() {
    return {
      disabled_data1: true,
      disabled_data2: true,
      card_exist: false,
      cc_actions: [],
      cc_enchantment: [],
      command: { value: "", label: "", command: "" },
      enchantment_all: [],
      enchantment_new: "",
      enchantment_level_new: null,
      temporary: {
        NAME: "",
        LORE: "",
        DURABILITY: null,
        AMOUNT: null,
        "NBT-DATA": "",
        COLOR: "",
        "SKULL-OWNER": "",
        "BANNER-COLOR": "",
        "BANNER-PATTERNS": "",
        PRICE: null,
        LEVELS: null,
        "REQUIRED-ITEMS": "",
        "KEEP-OPEN": "",
        PERMISSION: "",
        "VIEW-PERMISSION": "",
        "PERMISSION-MESSAGE": "",
        ENCHANTMENTS: [],
        "open-actions": [],
        function: "",
        open_actions: "",
        ACTIONS: [],
      },
      item_name: "",
      item_cards: {
        MATERIAL: "",
        "POSITION-X": "",
        "POSITION-Y": "",
      },
    };
  },
  mounted() {
    this.cc_actions = cc_actions;
    this.cc_enchantment = cc_enchantment;
    this.enchantment_all = enchantment_all;
  },
  methods: {
    open_items_1(msg) {
      this.item_cards.MATERIAL = msg;
      this.item_commont();
    },
    item_input() {
      for (let key in this.$store.state.chestcommands.menu) {
        if (key != "menu-settings") {
          if (key == this.item_name) {
            // alert("请输入其他值,这个值已经被使用了");
            dialog.showMessageBox({
              type: "info",
              title: "提示",
              message: "请输入其他值,这个值已经被使用了",
            });
            this.disabled_data2 = true;
            return;
          } else {
            if (this.item_name.length != 0) {
              this.disabled_data2 = false;
            } else {
              this.disabled_data2 = true;
            }
          }
        }
      }
      this.item_commont();
    },
    item_commont() {
      this.card_exist = false;
      if (
        this.item_name != "" &&
        this.$store.state.chestcommands.x != null &&
        this.$store.state.chestcommands.y != null &&
        this.item_cards.MATERIAL != ""
      ) {
        this.item_cards.MATERIAL = this.item_cards.MATERIAL.replace(/ /gi, "_");
        if (this.temporary.NAME != "") {
          this.item_cards["NAME"] = this.temporary.NAME;
        }
        if (this.temporary.LORE != "") {
          this.item_cards["LORE"] = this.temporary.LORE.split("\n");
        }
        if (
          this.temporary.DURABILITY != null &&
          this.temporary.DURABILITY != ""
        ) {
          this.item_cards["DURABILITY"] = this.temporary.DURABILITY;
        }
        if (this.temporary.AMOUNT != null && this.temporary.AMOUNT != "") {
          this.item_cards["AMOUNT"] = this.temporary.AMOUNT;
        }
        if (this.temporary["NBT-DATA"] != "") {
          this.item_cards["NBT-DATA"] = this.temporary["NBT-DATA"];
        }
        if (this.temporary.COLOR != undefined && this.temporary.COLOR != "") {
          if (this.temporary.COLOR.length != 0) {
            this.item_cards["COLOR"] = this.temporary.COLOR;
          }
        }
        if (this.temporary["SKULL-OWNER"] != "") {
          this.item_cards["SKULL-OWNER"] = this.temporary["SKULL-OWNER"];
        }
        if (this.temporary["BANNER-COLOR"] != "") {
          this.item_cards["BANNER-COLOR"] = this.temporary["BANNER-COLOR"];
        }
        if (this.temporary["BANNER-PATTERNS"] != "") {
          this.item_cards["BANNER-PATTERNS"] =
            this.temporary["BANNER-PATTERNS"].split(",");
        }
        if (this.temporary.PRICE != "" && this.temporary.PRICE != null) {
          this.item_cards["PRICE"] = this.temporary.PRICE;
        }
        if (this.temporary.LEVELS != "" && this.temporary.LEVELS != null) {
          this.item_cards["LEVELS"] = this.temporary.LEVELS;
        }
        if (this.temporary["REQUIRED-ITEMS"] != "") {
          this.item_cards["REQUIRED-ITEMS"] =
            this.temporary["REQUIRED-ITEMS"].split("!");
        }
        if (
          this.temporary["KEEP-OPEN"] != "" &&
          this.temporary["KEEP-OPEN"] != null
        ) {
          this.item_cards["KEEP-OPEN"] = this.temporary["KEEP-OPEN"];
        }
        if (this.temporary.PERMISSION != "") {
          this.item_cards["PERMISSION"] = this.temporary.PERMISSION;
        }
        if (this.temporary["VIEW-PERMISSION"] != "") {
          this.item_cards["VIEW-PERMISSION"] =
            this.temporary["VIEW-PERMISSION"];
        }
        if (this.temporary["PERMISSION-MESSAGE"] != "") {
          this.item_cards["PERMISSION-MESSAGE"] =
            this.temporary["PERMISSION-MESSAGE"];
        }
        if (this.temporary.ENCHANTMENTS != undefined) {
          if (this.temporary.ENCHANTMENTS.length != 0) {
            this.item_cards["ENCHANTMENTS"] = this.temporary.ENCHANTMENTS;
          }
        }
        if (this.temporary.ACTIONS != undefined) {
          if (this.temporary.ACTIONS.length != 0) {
            this.item_cards["ACTIONS"] = this.temporary.ACTIONS;
          }
        }
        this.$store.commit("chestcommands/card_exist", [
          this.item_name,
          this.item_cards,
        ]);
      } else {
        // alert("位置,标签,id不可为空!");
        dialog.showMessageBox({
          type: "info",
          title: "提示",
          message: "请输入其他值,这个值已经被使用了",
        });
      }
    },
    e_add_button() {
      if (this.enchantment_new != "") {
        if (
          this.enchantment_level_new == null ||
          this.enchantment_level_new == ""
        ) {
          this.temporary.ENCHANTMENTS.push(this.enchantment_new);
        } else {
          this.temporary.ENCHANTMENTS.push(
            this.enchantment_new + ", " + this.enchantment_level_new
          );
        }
      }
      this.item_commont();
    },
    e_empty_button() {
      var r = confirm("是否清空!");
      if (r == true) {
        // this["menu-settings"]["open-actions"] = [];
        // this.temporary.open_actions = [];
        this.temporary.ENCHANTMENTS = [];
      }
      this.item_commont();
    },
    e_delete_button(data) {
      this.temporary.ENCHANTMENTS.splice(data, 1);
      this.item_commont();
    },
    add_button() {
      if (this.temporary.function != "") {
        if (this.command.value.value != "") {
          this.temporary.ACTIONS.push(
            this.command.value.value + ": " + this.temporary.function
          );
        } else {
          this.temporary.ACTIONS.push(this.temporary.function);
        }
        this.item_commont();
      } else {
        alert("请输入具体内容");
      }
      this.temporary.function = "";
    },
    empty_button() {
      var r = confirm("是否清空!");
      if (r == true) {
        this.item_cards.ACTIONS = [];
        this.temporary.ACTIONS = [];
      }
      this.item_commont();
    },
    delete_button(data) {
      this.temporary.ACTIONS.splice(data, 1);
      this.item_commont();
    },
  },
  watch: {
    item_name: function (newVal) {
      if (newVal.length != 0) {
        this.disabled_data2 = false;
      } else {
        this.disabled_data2 = true;
      }
    },
    xy(newVal) {
      this.temporary = {
        NAME: "",
        LORE: "",
        DURABILITY: null,
        AMOUNT: null,
        "NBT-DATA": "",
        COLOR: "",
        "SKULL-OWNER": "",
        "BANNER-COLOR": "",
        "BANNER-PATTERNS": "",
        PRICE: null,
        LEVELS: null,
        "REQUIRED-ITEMS": "",
        "KEEP-OPEN": "",
        PERMISSION: "",
        "VIEW-PERMISSION": "",
        "PERMISSION-MESSAGE": "",
        ENCHANTMENTS: [],
        "open-actions": [],
        function: "",
        open_actions: "",
        ACTIONS: [],
      }; //初始化
      this.item_cards = { MATERIAL: "", "POSITION-X": "", "POSITION-Y": "" }; //初始化
      this.item_cards["POSITION-X"] = newVal[0];
      this.item_cards["POSITION-Y"] = newVal[1];
      if (newVal[0] != null && newVal[1] != null) {
        this.disabled_data1 = false; //解除位置标签聊天静止
      }
      if (Object.keys(this.$store.state.chestcommands.menu).length == 1) {
        //判断当前有无子控件
        //如果没有,生成位置标签
        this.item_name =
          "item-" +
          this.$store.state.chestcommands.x +
          "-" +
          this.$store.state.chestcommands.y;
      } else {
        for (let key in newVal[2]) {
          //循环当前所有子控件
          if (key != "menu-settings") {
            //排除主控件
            if (
              this.$store.state.chestcommands.menu[key]["POSITION-X"] ==
                this.item_cards["POSITION-X"] &&
              this.$store.state.chestcommands.menu[key]["POSITION-Y"] ==
                this.item_cards["POSITION-Y"]
            ) {
              this.item_name = key;
              this.item_cards.MATERIAL =
                this.$store.state.chestcommands.menu[key].MATERIAL;
              this.temporary.NAME =
                this.$store.state.chestcommands.menu[key].NAME;
              if (
                this.$store.state.chestcommands.menu[key].LORE != undefined &&
                this.$store.state.chestcommands.menu[key].LORE != ""
              ) {
                for (
                  var k = 0;
                  k < this.$store.state.chestcommands.menu[key].LORE.length;
                  k++
                ) {
                  if (this.$store.state.chestcommands.menu[key].LORE[k] == "") {
                    if (this.temporary.LORE != "") {
                      this.temporary.LORE = this.temporary.LORE + "\n";
                    }
                  } else {
                    this.temporary.LORE =
                      this.temporary.LORE +
                      "\n" +
                      this.$store.state.chestcommands.menu[key].LORE[k];
                  }
                }
                this.temporary.LORE = this.temporary.LORE.substr(1);
              }
              this.temporary.DURABILITY =
                this.$store.state.chestcommands.menu[key].DURABILITY;
              this.temporary.AMOUNT =
                this.$store.state.chestcommands.menu[key].AMOUNT;
              this.temporary["NBT-DATA"] =
                this.$store.state.chestcommands.menu[key]["NBT-DATA"];
              this.temporary.COLOR =
                this.$store.state.chestcommands.menu[key].COLOR;
              this.temporary["SKULL-OWNER"] =
                this.$store.state.chestcommands.menu[key]["SKULL-OWNER"];
              this.temporary["BANNER-COLOR"] =
                this.$store.state.chestcommands.menu[key]["BANNER-COLOR"];
              if (
                this.$store.state.chestcommands.menu[key]["BANNER-PATTERNS"] !=
                  undefined &&
                this.$store.state.chestcommands.menu[key]["BANNER-PATTERNS"] !=
                  ""
              ) {
                for (
                  var i = 0;
                  i <
                  this.$store.state.chestcommands.menu[key]["BANNER-PATTERNS"]
                    .length;
                  i++
                ) {
                  if (
                    this.$store.state.chestcommands.menu[key][
                      "BANNER-PATTERNS"
                    ][i] == ""
                  ) {
                    if (this.temporary["BANNER-PATTERNS"] != "") {
                      this.temporary["BANNER-PATTERNS"] =
                        this.temporary["BANNER-PATTERNS"] + ",";
                    }
                  } else {
                    this.temporary["BANNER-PATTERNS"] =
                      this.temporary["BANNER-PATTERNS"] +
                      "," +
                      this.$store.state.chestcommands.menu[key][
                        "BANNER-PATTERNS"
                      ][i];
                  }
                }
                this.temporary["BANNER-PATTERNS"] =
                  this.temporary["BANNER-PATTERNS"].substr(1);
              }
              this.temporary.PRICE =
                this.$store.state.chestcommands.menu[key].PRICE;
              this.temporary.LEVELS =
                this.$store.state.chestcommands.menu[key].LEVELS;
              if (
                this.$store.state.chestcommands.menu[key]["REQUIRED-ITEMS"] !=
                  undefined &&
                this.$store.state.chestcommands.menu[key]["REQUIRED-ITEMS"] !=
                  ""
              ) {
                for (
                  var n = 0;
                  n <
                  this.$store.state.chestcommands.menu[key]["REQUIRED-ITEMS"]
                    .length;
                  n++
                ) {
                  if (
                    this.$store.state.chestcommands.menu[key]["REQUIRED-ITEMS"][
                      n
                    ] == ""
                  ) {
                    if (this.temporary["REQUIRED-ITEMS"] != "") {
                      this.temporary["REQUIRED-ITEMS"] =
                        this.temporary["REQUIRED-ITEMS"] + "!";
                    }
                  } else {
                    this.temporary["REQUIRED-ITEMS"] =
                      this.temporary["REQUIRED-ITEMS"] +
                      "," +
                      this.$store.state.chestcommands.menu[key][
                        "REQUIRED-ITEMS"
                      ][n];
                  }
                }
                this.temporary["REQUIRED-ITEMS"] =
                  this.temporary["REQUIRED-ITEMS"].substr(1);
              }
              this.temporary["KEEP-OPEN"] =
                this.$store.state.chestcommands.menu[key]["KEEP-OPEN"];
              this.temporary.PERMISSION =
                this.$store.state.chestcommands.menu[key].PERMISSION;
              this.temporary["VIEW-PERMISSION"] =
                this.$store.state.chestcommands.menu[key]["VIEW-PERMISSION"];
              this.temporary["PERMISSION-MESSAGE"] =
                this.$store.state.chestcommands.menu[key]["PERMISSION-MESSAGE"];
              if (
                this.$store.state.chestcommands.menu[key].ENCHANTMENTS ==
                undefined
              ) {
                this.temporary.ENCHANTMENTS = [];
              } else {
                this.temporary.ENCHANTMENTS =
                  this.$store.state.chestcommands.menu[key].ENCHANTMENTS;
              }
              if (
                this.$store.state.chestcommands.menu[key].ACTIONS == undefined
              ) {
                this.temporary.ACTIONS = [];
              } else {
                this.temporary.ACTIONS =
                  this.$store.state.chestcommands.menu[key].ACTIONS;
              }
              return;
            } else {
              this.item_name =
                "item-" +
                this.$store.state.chestcommands.x +
                "-" +
                this.$store.state.chestcommands.y;
            }
          }
        }
      }
    },
  },
  computed: {
    xy() {
      return [
        this.$store.state.chestcommands.x,
        this.$store.state.chestcommands.y,
        this.$store.state.chestcommands.menu,
      ];
    },
  },
};
</script>
<style lang=less scoped>
.all {
  margin: 10px 20px;

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
    select,
    textarea {
      width: 100%;
      flex-grow: 4;
      box-shadow: 0 0 2px #000000;
      border-radius: 5px;
    }

    input:focus,
    select:focus,
    textarea:focus {
      outline: 1px solid #7e7e7e;
    }

    textarea {
      height: 72px;
      resize: none;
    }
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
          margin: 0 auto;
        }
      }
    }
  }
}

.hr_gradient2 {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
}
</style>
