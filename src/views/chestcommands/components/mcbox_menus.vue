<template>
  <div class="chestcommands_menus">
    <div class="menus_cards">
      <div class="menus_title">
        <h2 id="title" ref="title"></h2>
      </div>
      <div class="menus_rows" :key="index1" v-for="(index1, y) in this.rows">
        <div
          :key="index"
          v-on:click="xy(x + 1, y + 1)"
          v-for="(index, x) in 9"
          class="menus_card"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/../public/js/MinecraftColorCodes.3.7.js";
export default {
  data() {
    return {
      rows: 6,
      name: ``,
    };
  },
  methods: {
    xy(x, y) {
      this.$store.commit("chestcommands/xy", [x, y]);
    },
  },
  computed: {
    listData() {
      return this.$store.state.chestcommands["menu-setting"].row;
    },
    listData1() {
      return this.$store.state.chestcommands["menu-setting"].name;
    },
  },
  watch: {
    listData(newVal) {
      this.rows = newVal;
    },
    listData1(newVal) {
      console.log(newVal.replaceColorCodes());
      // this.$refs.title.appendChild(undefined);
      document.getElementById("title").innerHTML = "";
      var i = newVal.replaceColorCodes();
      this.$refs.title.appendChild(i);
    },
  },
};
</script>

<style lang="less" scoped>
.chestcommands_menus {
  // max-width: 504px;
  // width: 40%;
  width: auto;
  // margin-right: 38px;
  .menus_cards {
    flex-wrap: wrap;
    width: calc(100% - 28px);
    padding: 10px;
    background-color: rgb(198, 198, 198);
    border: 4px solid #fff;
    border-right: 4px solid rgb(79, 79, 79);
    border-bottom: 4px solid rgb(79, 79, 79);
    border-radius: 5px;
    .menus_title {
      // height: 2.8vw;
      // max-height: 36px;
      height: 24px;
      width: 100%;
      h2 {
        height: 100%;
        width: 100%;
        background-color: rgb(198, 198, 198);
        font-family: "MineCraft";
        // font-size: min(2vw, 26px);
        // line-height: min(2vw, 26px);
        background-color: rgb(198, 198, 198);
      }
    }
    .menus_rows {
      display: flex;
      .menus_card {
        aspect-ratio: 1/1;
        min-width: 36px;
        min-height: 36px;
        max-width: 50px;
        max-height: 50px;
        width: 10%;
        border: 3px solid rgb(254, 254, 254);
        border-left: 3px solid rgb(68, 68, 68);
        border-top: 3px solid rgb(68, 68, 68);
        background-color: rgb(139, 139, 139);
      }
    }

    .menus_card:hover {
      background-color: rgb(197, 197, 197);
    }
  }
}
</style>