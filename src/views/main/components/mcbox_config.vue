<template>
  <div class="config main_main">
    <hr class="hr-solid-content" data-content="个性化" />
    <div class="config_card">
      <h2>皮肤:</h2>
      <div><mcbox_skin></mcbox_skin></div>
    </div>
    <div class="config_card">
      <div>
        <h2>
          功能隐藏:
          <p>[隐藏不需要的功能]</p>
        </h2>
      </div>
      <div><mcbox_showfunctionVue></mcbox_showfunctionVue></div>
    </div>
  </div>
</template>

<script>
import mcbox_skin from "@/components/mcbox_skin.vue";
import mcbox_showfunctionVue from './mcbox_showfunction.vue';
export default {
  props: ["title", "id"],
  components: {
    mcbox_skin,
    mcbox_showfunctionVue
  },
};
</script>

<style lang="less" scoped>
.config {
  width: 100%;
  height: 100%;
  padding: 10px;
  .config_card {
    position: relative;
    width: auto;
    height: auto;
    border: 1px solid rgba(130, 130, 130, 0.3);
    border-radius: 10px;
    padding: 15px 5px 5px 10px;
    margin: 20px 0;
    h2 {
      position: absolute;
      display: flex;
      left: 10px;
      top: -14px;
    }
  }
}
.hr-solid-content {
  color: #a2a9b6;
  border: 0;
  font-size: 12px;
  padding: 1em 0;
  position: relative;
}
.hr-solid-content::before {
  content: attr(data-content);
  position: absolute;
  padding: 0 1ch;
  line-height: 1px;
  border: solid #d0d0d5;
  border-width: 0 99vw;
  width: fit-content;
  /* for IE浏览器 */
  white-space: nowrap;
  left: 50%;
  transform: translateX(-50%);
}
</style>