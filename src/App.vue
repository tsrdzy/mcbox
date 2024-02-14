<template>
  <div :class="this.skin">
    <router-view />
  </div>
</template>

<script>
import "./assets/skin/black.less";
import "./assets/skin/white.less";
export default {
  data() {
    return {
      skin: "",
    };
  },
  mounted() {
    this.skin = this.$store.state.skin;
  },
  computed: {
    listData() {
      return this.$store.state.skin;
    },
  },
  watch: {
    listData(newVal) {
      this.skin = newVal;
    },
  },
};
</script>

<style lang="less" scoped>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>

