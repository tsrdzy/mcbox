<template>
  <div class="show" :class="this.colorshow">
    <div class="title">预览配置:</div>
    <highlightjs
      class="highlightjs"
      contenteditable="false"
      language="yaml"
      :code="code"
    ></highlightjs>
  </div>
</template>

<script>
import "@/assets/style/yaml.less";
export default {
  data() {
    return {
      code: "",
      colorshow: "dark",
    };
  },
  computed: {
    isEdit() {
      return this.$store.state.config; //需要监听的数据
    },
    listData() {
      return this.$store.state.colorshow;
    },
  },
  watch: {
    isEdit(newVal) {
      this.code = newVal;
    },
    listData(newVal) {
      this.colorshow = newVal;
    },
  },
};
</script>

<style lang="less" scoped>
.show {
  width: 100%;
  height: 100%;

  .highlightjs {
    height: calc(100% - 50px);
    overflow: auto;
    border: 1px solid rgba(127, 127, 127, 0.5);
    border-radius: 10px;
    padding: 3px;
    margin-right: 5px;
  }
}
</style>