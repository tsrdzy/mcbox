<template>
  <div class="chestcommands_menus">
    <div class="menus_cards">
      <div class="menus_title"><h2>1</h2></div>
      <div class="menus_rows" :key="index1" v-for="index1 in this.rows">
        <div :key="index" v-for="index in 9" class="menus_card"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: 6,
    };
  },
};
</script>

<style lang="less" scoped>
.chestcommands_menus {
  max-width: 504px;
  width: 40%;
  min-width: 324px;
  margin-right: 38px;
  .menus_cards {
    flex-wrap: wrap;
    width: 100%;
    padding: 10px;
    background-color: rgb(198, 198, 198);
    border: 4px solid #fff;
    border-right: 4px solid rgb(79, 79, 79);
    border-bottom: 4px solid rgb(79, 79, 79);
    border-radius: 5px;
    .menus_title {
      height: 2.8vw;
      max-height: 36px;
      min-height: 24px;
      width: 100%;
      h2 {
        height: 100%;
        width: 100%;
        background-color: rgb(198, 198, 198);
        font-family: "MineCraft";
        font-size: min(2vw, 26px);
        line-height: min(2vw, 26px);
      }
    }
    .menus_rows {
      display: flex;
      .menus_card {
        aspect-ratio: 1/1;
        min-width: 30px;
        min-height: 30px;
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