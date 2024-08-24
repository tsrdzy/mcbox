<template>
  <div style="max-width: 625px;">
    <!-- <div class="card">
      <h2>物品版本:</h2>
      <select v-on:change="item_versions" v-model="item_version">
        <option :key="index" v-for="index of 8" :value="index + 12">
          1.{{ index + 12 }}
        </option>
      </select>
    </div> -->
    <div class="card">
      <h2>物品搜索:</h2>
      <input type="text" v-model="name" v-on:input="sou">
    </div>
    <hr class="hr-solid-content" style="width: 100% !important" data-content="物品列表" />
    <div class="items">
      <div :key="itemsx" v-show="itemsx.hasOwnProperty('show') ?
        itemsx.show == 1 ? true : itemsx.show == null ?
          false : true : true" v-for="itemsx in items" class="item" v-on:click="values(itemsx.value)">
        <div class="img" :class="'icon-' + item_version + ' ' + itemsx.value + '-' + item_version"></div>
        <h2>{{ itemsx.label }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/image/general/1.13.css";
export default {
  data() {
    return {
      items: [],
      // item_version: "",
      name: ""
    };
  },
  mounted() {
    this.item_version = 20;
    this.item_versions();
  },
  methods: {
    item_versions() {
      this.name = null
      this.items = require("@/assets/json/general/1." + this.item_version + ".json");
      require("@/assets/image/general/1." + this.item_version + ".css");
    },
    values(a) {
      this.$emit("open_items", a);
    },
    sou() {
      for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i].label
        if (item.includes(this.name)) {
          this.items[i].show = 1
        } else {
          this.items[i].show = null
        }

      }
    }
  },
};
</script>

<style lang="less" scoped>
.card {
  display: flex;
  margin: 5px;
  position: relative;

  h2 {
    width: 80px;
    height: 22px;
    line-height: 22px;
    padding: 1px;
  }

  .itemselection {
    height: 27.6px;
    line-height: 27.6px;
    position: absolute;
    right: 3px;
  }
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
  outline: 1px solid #7e7e7e
}

.items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 625px;
  overflow: auto;
  height: 400px;

  .item {
    width: 80px;
    height: 80px;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 5px;

    .img {
      width: 32px;
      height: 32px;
      margin: 0 24px;
    }

    h2 {
      font-size: 10px;
      text-align: center;
    }
  }

  .item:hover {
    border: 1px solid #9c9c9c;
  }
}
</style>