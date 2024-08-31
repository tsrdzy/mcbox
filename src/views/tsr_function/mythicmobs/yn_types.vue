<template>
  <div class="types">
    <div
      v-on:click="updata(typesx.value)"
      class="type"
      v-for="typesx in types"
      :key="typesx.value"
    >
      <img :src="typesx.imgurl" alt="" />
      <h2>{{ typesx.label }}</h2>
    </div>
  </div>
</template>

<script>
import types from "@/assets/json/mythicmobs/mobs_types.json";
export default {
  data() {
    return {
      types: [],
    };
  },
  mounted() {
    this.types = types;
  },
  methods: {
    updata(msg) {
      this.$emit("transfer", msg);
    },
  },
};
</script>

<style lang="less">
.types {
  width: 530px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  .type {
    width: 100px;
    height: 100px;
    // border: 1px solid #000;
    border-radius: 5px;
    margin-bottom: 10px;
    border: 1px solid rgba(0, 0, 0, 0);
    img {
      width: 60px;
      height: 60px;
      margin: 0px 20px;
      object-fit: contain;
    }
    h2 {
      height: 40px;
      width: 100px;
      text-align: center;
      font-size: 12px;
    }
  }
  .type:hover {
    border: 1px solid rgba(130, 130, 130, 0.5);
    background-color: rgba(125, 125, 125, 0.1);
  }
}
</style>