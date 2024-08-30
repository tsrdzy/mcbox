<template>
  <div id="home" class="title">
    <div class="title0 iconfont">&#xe7fb;</div>
    <div class="title1">解锁无限创意潜能，让每一场冒险都独一无二</div>
    <button v-on:click="gos()">开启冒险</button>
  </div>
</template>

<script>
export default {
  methods: {
    gos() {
      this.$router.push("/function");
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  height: calc(100% - 160px);
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
button {
  width: 200px;
  height: 40px;
  border-radius: 10px;
  transition: all 0.2s;
  line-height: 40px;
  margin: 20px auto;
}
.title1,
.title2,
.title0 {
  font-family: "sjxkjt";
  width: auto;
  margin: 0 auto;
}
.title1 {
  font-size: 40px;
  height: 60px;
  line-height: 60px;
}
.title2 {
  font-size: 30px;
  height: 40px;
  line-height: 40px;
  width: 80%;
  text-align: right;
}
.title0 {
  font-size: 120px;
  height: 150px;
  line-height: 150px;
}
</style>