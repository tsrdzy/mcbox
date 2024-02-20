<template>
  <div class="main_skin_cards">
    <div
      v-on:click="skin('white')"
      class="card"
      style="background-color: #fff"
    ></div>
    <div
      v-on:click="skin('black')"
      class="card"
      style="background-color: rgb(25, 25, 25)"
    ></div>
  </div>
</template>

<script>
const fs = window.require("fs");
export default {
  name: "mcbox_skin",
  methods: {
    skin(skin) {
      this.$store.commit("skin", skin);

      //获取设置皮肤
      fs.readFile(
        "C:/Program Files/mcbox/config.json",
        "utf-8",
        (err, data) => {
          if (err) {
            console.log(err);
            return;
          }
          const datas = JSON.parse(data);
          datas.skin = skin;
          fs.writeFile(
            "C:/Program Files/mcbox/config.json",
            JSON.stringify(datas),
            (err) => {
              if (err) {
                console.log(err);
                return;
              }
              console.log("ok");
            }
          );
        }
      );
    },
  },
};
</script>

<style lang="less" scoped>
.main_skin_cards {
  height: 22px;
  display: flex;
  // padding: 5px;
  margin: 0;
  -webkit-app-region: no-drag;
  border-radius: 3px;
  // border: 1px solid rgba(125, 125, 125, 0.7);
  // background-color: rgba(127, 127, 127, 0.1);
  .card {
    margin: 0 2px;
    width: 20px;
    height: 20px;
    border: 1px solid rgba(127, 127, 127, 0.5);
  }
  .card:hover {
    box-shadow: 0px 0px 5px rgba(127, 127, 127, 0.7);
  }
}
</style>