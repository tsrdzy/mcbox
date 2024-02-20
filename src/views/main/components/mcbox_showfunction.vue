<template>
  <div class="cards">
    <div class="card">
      <input
        type="checkbox"
        v-model="this.$store.state.item_all[0].show"
        v-on:click="shows()"
      />
      <h2>编辑器类</h2>
    </div>
    <div class="cards_1">
      <div
        class="card"
        :key="item"
        v-for="item in this.$store.state.item_all[0].items"
      >
        <input type="checkbox" v-model="item.show" v-on:click="shows()" />
        <h3>{{ item.name }}</h3>
      </div>
    </div>
    <hr />
    <div class="card">
      <input
        type="checkbox"
        v-model="this.$store.state.item_all[1].show"
        v-on:click="shows()"
      />
      <h2>工具类</h2>
    </div>
    <div class="cards_1">
      <div
        class="card"
        :key="item1"
        v-for="(item1, i1) in this.$store.state.item_all[1].items"
      >
        <input
          type="checkbox"
          v-model="this.$store.state.item_all[1].items[i1].show"
          v-on:click="shows()"
        />
        <h3>{{ item1.name }}</h3>
      </div>
    </div>
    <hr />
    <div class="card">
      <input
        type="checkbox"
        v-model="this.$store.state.item_all[2].show"
        v-on:click="shows()"
      />
      <h2>老版编辑器类</h2>
    </div>
    <div class="cards_1">
      <div
        class="card"
        :key="item2"
        v-for="(item2, i2) in this.$store.state.item_all[2].items"
      >
        <input
          type="checkbox"
          v-model="this.$store.state.item_all[2].items[i2].show"
          v-on:click="shows()"
        />
        <h3>{{ item2.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
const fs = window.require("fs");
export default {
  data() {
    return {
      item_all: [],
    };
  },
  beforeMount() {
    this.item_all = this.$store.state.item_all;
  },
  mounted() {
    this.item_all = this.$store.state.item_all;
    fs.readFile("C:/Program Files/mcbox/config.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      const datas = JSON.parse(data);
      this.items_all = datas.item_all;
    });
  },
  methods: {
    shows() {
      console.log(1);
      console.log(this.item_all[0]);
      this.$store.commit("item_all", this.item_all);
    },
  },
};
</script>

<style lang="less" scoped>
.cards {
  .card {
    display: flex;
    margin: 0 3px;
    width: 185px;

    input {
      width: 18px;
      height: 18px;
      margin: 3px;
    }
    h2 {
      line-height: 24px;
      height: 24px;
    }
    h3 {
      font-size: 12px;
    }
  }
  .cards_1 {
    margin: 0 0 0 20px;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-around;
  }
}
</style>