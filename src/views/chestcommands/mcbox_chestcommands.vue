<template>
  <mcbox_header
    title="MCBOX - ChestCommands Editor"
    id="chestcommands"
  ></mcbox_header>
  <div class="main">
    <div class="left">
      <div class="top">
        <mcbox_menus></mcbox_menus>
        <mcbox_mainsetVue></mcbox_mainsetVue>
      </div>
      <mcbox_itemset></mcbox_itemset>
    </div>
  </div>
</template>
  
  <script>
import mcbox_header from "@/components/mcbox_header.vue";
import mcbox_menus from "./components/mcbox_menus.vue";
import mcbox_mainsetVue from "./components/mcbox_mainset.vue";
import mcbox_itemset from "./components/mcbox_itemset.vue";
export default {
  components: {
    mcbox_header,
    mcbox_menus,
    mcbox_itemset,
    mcbox_mainsetVue,
  },
};
</script>
  
  <style lang=less scoped>
.main {
  overflow: auto;
  width: calc(100% - 20px);
  height: calc(100% - 84px);
  padding: 10px;
  .left{
    width: 70%;
    .top {
    width: 100%;
    // height: 100%;
    display: flex;
  }
  }

}
</style>