<template>
  <mcbox_header title="MCBOX - ChestCommands" id="chestcommands"></mcbox_header>
  <main>
    <mcbox_menus></mcbox_menus>
    <mcbox_mainsetVue></mcbox_mainsetVue>
  </main>
</template>
  
  <script>
import mcbox_header from "@/components/mcbox_header.vue";
import mcbox_menus from "./components/mcbox_menus.vue";
import mcbox_mainsetVue from "./components/mcbox_mainset.vue";
export default {
  components: {
    mcbox_header,
    mcbox_menus,
    mcbox_mainsetVue,
  },
};
</script>
  
  <style lang=less scoped>
main {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px;
}
</style>