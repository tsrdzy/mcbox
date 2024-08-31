<template>
  <main id="deluxemenu">
    <tsr_show_menu></tsr_show_menu>
  </main>
</template>

<script>
import tsr_show_menu from "./tsr_show_menu.vue";
export default {
  components: {
    tsr_show_menu,
  },
};
</script>

<style lang="less" scoped>
main {
  width: 1200px;
  margin: 0 auto;
}
</style>