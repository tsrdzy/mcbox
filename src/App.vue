<template>
  <div :id="this.theme" class="all_main_main">
    <tsr_header></tsr_header>
    <router-view />
  </div>
</template>
<script>
import tsr_header from "@/components/module/tsr_header.vue";
export default {
  components: {
    tsr_header,
  },
  data() {
    return {
      theme: "dark",
    };
  },
  mounted() {},
  methods: {},
  computed: {
    themes() {
      return this.$store.state.theme;
    },
  },
  watch: {
    themes(newVal) {
      console.log(1);
      this.theme = newVal;
    },
  },
};
</script>

<style lang="less">
html,
body,
#app,
.all_main_main {
  height: 100%;
  overflow: hidden;
}
</style>
