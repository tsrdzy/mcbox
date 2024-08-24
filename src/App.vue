<template>
  <div id="dark">
    <tsr_header></tsr_header>
      <router-view />
  </div>
</template>
<script>

import tsr_header from '@/components/module/tsr_header.vue'
export default {
  components: {
    tsr_header
  }
}
</script>

<style lang="less">
html,
body,
#app,#dark {
  height: 100%;
  overflow: hidden;
}
</style>
