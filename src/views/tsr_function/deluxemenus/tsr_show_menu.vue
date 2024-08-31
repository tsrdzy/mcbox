<template>
  <div class="show_menu">
    <div class="menu">
      <div class="title"></div>
      <div class="cards">
        <div :key="'dm' + item" v-for="item of this.rows" class="card"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      rows: 54,
    };
  },
  mounted() {},
  methods: {},
  // computed: {
  //   rows() {
  //     return this.$store.state.chestcommands.menu["menu-settings"].rows;
  //   },
  // },
  // watch: {
  //   rows(newVal) {
  //     this.size = newVal;
  //   },
  // },
};
</script>
<style lang="less" scoped>
.show_menu {
  max-width: 340px;
  min-width: 340px;
  height: auto;
  background-color: rgb(198, 198, 198);
  border: 2px solid rgb(4, 4, 4);
  border-radius: 4px;
  .title {
    font-family: "minecraft" !important;
    height: 30px;
    overflow: hidden;
    line-height: 30px;
    margin: 0 0 0 5px;
  }
  .menu {
    border: 3px solid rgb(85, 85, 85);
    border-top: 3px solid #fff;
    border-left: 3px solid #fff;
    .cards {
      display: flex;
      margin: 0 5px 5px;
      flex-wrap: wrap;

      .card {
        width: 32px;
        height: 32px;
        border: 2px solid rgb(245, 245, 245);
        border-top: 2px solid rgb(65, 65, 65);
        border-left: 2px solid rgb(65, 65, 65);
        background-color: rgb(139, 139, 139);
      }
      .card:hover {
        background-color: rgb(192, 192, 192);
      }
    }
  }
}
</style>
