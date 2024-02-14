<template>
  <mcbox_header title="MCBOX" id="window"></mcbox_header>
  <div style="display: flex; width: 100%; height: 100%">
    <mcbox_nav></mcbox_nav>
    <router-view />
  </div>
</template>

<script>
import mcbox_header from "@/components/mcbox_header.vue";
import mcbox_nav from "./components/mcbox_nav.vue";
export default {
  components: {
    mcbox_header,
    mcbox_nav,
  },
};
</script>

<style>
</style>