<template>
  <div>
    <div class="card">
      <h2>物品版本:</h2>
      <select v-on:change="item_versions" v-model="item_version">
        <option :key="index" v-for="index of 8" :value="index + 12">
          1.{{ index + 12 }}
        </option>
      </select>
    </div>
    <hr
      class="hr-solid-content"
      style="width: 100% !important"
      data-content="物品列表"
    />
    <div class="items">
      <div
        :key="itemsx"
        v-for="itemsx in items"
        class="item"
        v-on:click="values(itemsx.value)"
      >
        <div
          class="img"
          :class="
            'icon-' + item_version + ' ' + itemsx.value + '-' + item_version
          "
        ></div>
        <h2>{{ itemsx.label }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import "@/../public/items/1.13.css";
export default {
  data() {
    return {
      items: [],
      item_version: "",
    };
  },
  mounted() {
    this.item_version = 20;
    this.item_versions();
  },
  methods: {
    item_versions() {
      this.items = require("@/../public/items/1." +
        this.item_version +
        ".json");
      require("@/../public/items/1." + this.item_version + ".css");
    },
    values(a) {
      this.$emit("open_items", a);
    },
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
    span {
      color: rgb(200, 100, 100);
    }
  }
  select {
    font-family: "opposans";
    padding: 1px;
    border: 0;
    outline: 0;
    border: 1px solid rgba(127, 127, 127, 0.5);
    width: 100%;
    border-radius: 3px;
    height: 24px;
  }
  .itemselection {
    height: 27.6px;
    line-height: 27.6px;
    position: absolute;
    right: 3px;
  }
}
.items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 625px;
  overflow: auto;
  min-height: 100px;
  max-height: 500px;

  .item {
    width: 120px;
    height: 100px;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 5px;
    .img {
      width: 32px;
      height: 32px;
      margin: 0px 44px;
    }
    h2 {
      font-size: 10px;
      text-align: center;
    }
  }
  .item:hover {
    border: 1px solid rgba(127, 127, 127, 0.5);
  }
}
</style>