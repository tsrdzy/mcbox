<template>
  <div class="card">
    <h2>位置标签:</h2>
    <input
      v-on:input="upitem()"
      v-model="item_key"
      type="text"
      placeholder="物品标签ID"
    />
  </div>
  <div class="card">
    <h2>当前位置X:</h2>
    <input
      v-on:input="upitem()"
      v-model="this.item['POSITION-X']"
      type="text"
      placeholder="当前选中的X坐标"
    />
  </div>
  <div class="card">
    <h2>当前位置Y:</h2>
    <input
      type="text"
      v-on:input="upitem()"
      v-model="this.item['POSITION-Y']"
      placeholder="当前选中的Y坐标"
    />
  </div>
  <div class="card">
    <h2>物品ID:</h2>
    <input
      type="text"
      v-model="this.item.MATERIAL"
      placeholder="物品的英文ID"
      @input="upitem()"
    />
    <div class="itemselection">
      <n-popover trigger="click" raw :show-arrow="false" placement="buttom">
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
  <div class="card">
    <h2>物品标题:</h2>
    <input
      v-on:input="upitem()"
      v-model="this.item.NAME"
      type="text"
      placeholder="鼠标移动到物品显示的标题"
    />
  </div>
  <div class="card">
    <h2>物品lore:</h2>
    <textarea
      v-on:input="upitem()"
      v-model="this.temporary.LORE"
      placeholder="物品的lore(如有多行请直接换行)"
    ></textarea>
  </div>
  <div class="card">
    <h2>物品耐久:</h2>
    <input
      type="text"
      v-on:input="upitem()"
      v-model="this.item.DURABILITY"
      placeholder="物品的耐久度,数据值"
    />
  </div>
  <div class="card">
    <h2>显示数量:</h2>
    <input
      type="text"
      v-on:input="upitem()"
      v-model="this.item.AMOUNT"
      placeholder="物品显示的数量"
    />
  </div>
  <div class="card">
    <h2>NBT数据:</h2>
    <input
      type="text"
      v-on:input="upitem()"
      v-model="this.item['NBT-DATA']"
      placeholder="物品的NBT数据"
    />
  </div>
  <div class="card">
    <h2>皮革颜色:</h2>
    <input
      type="text"
      v-on:input="upitem()"
      v-model="this.item.COLOR"
      placeholder="RGB颜色 例:255,255,255 只生效于物品为可染色物品时"
    />
  </div>
  <div class="card">
    <h2>头颅ID:</h2>
    <input
      v-on:input="upitem()"
      v-model="this.item['SKULL-OWNER']"
      type="text"
      placeholder="正版玩家的ID 只生效于物品为头颅时"
    />
  </div>
  <div class="card">
    <h2>旗帜颜色:</h2>
    <input
      v-on:input="upitem()"
      v-model="this.item['BANNER-COLOR']"
      type="text"
      placeholder="旗帜的背景颜色,使用染料的英文ID"
    />
  </div>
  <div class="card">
    <h2>旗帜图案:</h2>
    <input
      type="text"
      v-on:input="upitem()"
      v-model="this.temporary['BANNER-PATTERNS']"
      placeholder="格式[类型:染料颜色] 如有多个请用半角逗号隔开"
    />
  </div>
  <div class="card">
    <h2>所需货币:</h2>
    <input
      v-on:input="upitem()"
      v-model="this.item.PRICE"
      type="text"
      placeholder="点击所扣除的货币数量"
    />
  </div>
  <div class="card">
    <h2>所需经验:</h2>
    <input
      v-on:input="upitem()"
      v-model="this.item.LEVELS"
      type="text"
      placeholder="点击所扣除的经验数量"
    />
  </div>
  <div class="card">
    <h2>所需物品:</h2>
    <input
      v-on:input="upitem()"
      v-model="this.temporary['REQUIRED-ITEMS']"
      type="text"
      placeholder="格式[物品ID:数量] 如有多个请用半角逗号隔开"
    />
  </div>
  <div class="card">
    <h2>关闭菜单:</h2>
    <input
      v-on:input="upitem()"
      v-model="this.item['KEEP-OPEN']"
      type="text"
      placeholder="点击后是否关闭菜单(true/false)"
    />
  </div>
  <div class="card">
    <h2>所需权限:</h2>
    <input
      v-on:input="upitem()"
      v-model="this.item.PERMISSION"
      type="text"
      placeholder="点击所需要的权限(首位置加'-'表示否定)"
    />
  </div>
  <div class="card">
    <h2>显示权限:</h2>
    <input
      v-on:input="upitem()"
      v-model="this.item['VIEW-PERMISSION']"
      type="text"
      placeholder="显示物品所需要的权限(首位置加'-'表示否定)"
    />
  </div>
  <div class="card">
    <h2>错误信息:</h2>
    <input
      v-on:input="upitem()"
      v-model="this.item['PERMISSION-MESSAGE']"
      type="text"
      placeholder="不满足点击条件提示的错误信息"
    />
  </div>
</template>

<script>
import mcbox_items from "./mcbox_items.vue";
import ENCHANTMENT_json from "@/../public/json/chestcommands/enchantment.json";
export default {
  mounted() {
    this.ENCHANTMENT_json = ENCHANTMENT_json;
  },
  components: {
    mcbox_items,
  },
  data() {
    return {
      ENCHANTMENT_json: [],
      item_key: "",
      item: {
        MATERIAL: "",
        ["POSITION-X"]: "",
        ["POSITION-Y"]: "",
        NAME: "",
        LORE: [],
        DURABILITY: "",
        AMOUNT: "",
        ["NBT-DATA"]: "",
        COLOR: "",
        ["SKULL-OWNER"]: "",
        ["BANNER-COLOR"]: "",
        ["BANNER-PATTERNS"]: [],
        PRICE: "",
        LEVELS: "",
        ["REQUIRED-ITEMS"]: [],
        ["KEEP-OPEN"]: "",
        PERMISSION: "",
        ["VIEW-PERMISSION"]: "",
        ["PERMISSION-MESSAGE"]: "",
        ENCHANTMENTS: [],
        ACTIONS: [],
      },
      temporary: {
        LORE: "",
        ["BANNER-PATTERNS"]: "",
        ["REQUIRED-ITEMS"]: "",
      },
      new_item: {
        MATERIAL: "",
        ["POSITION-X"]: "",
        ["POSITION-Y"]: "",
        NAME: "",
        LORE: [],
        DURABILITY: "",
        AMOUNT: "",
        ["NBT-DATA"]: "",
        COLOR: "",
        ["SKULL-OWNER"]: "",
        ["BANNER-COLOR"]: "",
        ["BANNER-PATTERNS"]: [],
        PRICE: "",
        LEVELS: "",
        ["REQUIRED-ITEMS"]: [],
        ["KEEP-OPEN"]: "",
        PERMISSION: "",
        ["VIEW-PERMISSION"]: "",
        ["PERMISSION-MESSAGE"]: "",
        ENCHANTMENTS: [],
        ACTIONS: [],
      },
    };
  },
  methods: {
    upitem() {
      var items = this.$store.state.chestcommands.items;
      var items_key = Object.keys(items);
      if (this.item_key == "" || this.item_key == undefined) {
        this.item_key =
          "item_" + this.item["POSITION-X"] + "_" + this.item["POSITION-Y"];
      }
      for (var i = 0; i < items_key.length; i++) {
        if (this.item_key == items_key[i]) {
          items[this.item_key] = this.item;
          return;
        }
      }
      this.$store.commit("chestcommands/itemsset", items);
    },
    open_items(data) {
      this.item.MATERIAL = data;
    },
  },
  computed: {
    listData() {
      return this.$store.state.chestcommands.xy;
    },
  },
  watch: {
    listData(newVal) {
      this.item = this.new_item;
      console.log(this.new_item.NAME);
      console.log(this.item.NAME);
      var items = this.$store.state.chestcommands.items;

      if (this.item_key == "" || this.item_key == undefined) {
        this.item_key = "item_" + newVal[0] + "_" + newVal[1];
      }
      var items_key = Object.keys(items);
      this.item["POSITION-X"] = newVal[0];
      this.item["POSITION-Y"] = newVal[1];
      for (var i = 0; i < items_key.length; i++) {
        console.log(items[items_key[i]]["POSITION-X"]);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.card {
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
  select,
  textarea {
    font-family: "opposans";
    padding: 1px;
    border: 0;
    outline: 0;
    border: 1px solid rgb(126, 126, 126);
    width: 100%;
    border-radius: 3px;
    height: 24px;
  }
  textarea {
    height: 72px;
    resize: none;
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
</style>