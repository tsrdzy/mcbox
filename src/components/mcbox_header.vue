<template>
  <header>
    <div class="logo">
      <h2 class="iconfont">&#xe7fa;</h2>
      <h1>{{ title }}</h1>
    </div>
    <div class="set_button iconfont">
      <n-popover
        trigger="click"
        placement="bottom"
        :raw="true"
        :show-arrow="false"
      >
        <template #trigger>
          <div>&#xe617;</div>
        </template>
        <mcbox_skin></mcbox_skin>
      </n-popover>
      <div v-on:click="tomin(id)">&#xe60e;</div>
      <div v-if="!this.main_max" v-on:click="tomax(id)" style="font-size: 16px">
        &#xe651;
      </div>
      <div
        v-if="this.main_max"
        v-on:click="tounmax(id)"
        style="font-size: 16px"
      >
        &#xe600;
      </div>
      <div v-on:click="toclose(id)">&#xe612;</div>
    </div>
  </header>
</template>
  
  <script>
const { ipcRenderer } = window.require("electron");
import mcbox_skin from "./mcbox_skin.vue";
export default {
  props: ["title", "id"],
  components: {
    mcbox_skin,
  },
  data() {
    return {
      main_max: false,
      ids: this.id,
    };
  },
  mounted() {
    ipcRenderer.on(this.ids + "-max", () => {
      this.main_max = true;
    });
    ipcRenderer.on(this.ids +"-unmax", () => {
      this.main_max = false;
    });
  },
  methods: {
    tomin() {
      ipcRenderer.send(this.ids +"-min");
    },
    tomax() {
      ipcRenderer.send(this.ids +"-max");
      this.main_max = true;
    },
    tounmax() {
      ipcRenderer.send(this.ids +"-unmax");
      this.main_max = false;
    },
    toclose() {
      ipcRenderer.send(this.ids +"-close");
    },
    colorshow(colorshow) {
      this.$store.commit("colorshow", colorshow);
    },
  },
};
</script>
  
<style lang="less" scoped>
header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  -webkit-app-region: drag;
  border-bottom: 1px solid rgba(126, 126, 126, 0.5);
  .logo {
    display: flex;
    h1,
    h2 {
      height: 60px;
      line-height: 60px;
      width: auto;
      font-size: 18px;
    }
    h2 {
      font-size: 32px;
      margin: 0 5px 0 10px;
    }
  }
  .set_button {
    display: flex;
    div {
      cursor: pointer;
      -webkit-app-region: no-drag;
      height: 30px;
      width: 30px;
      text-align: center;
      margin: 15px 5px 15px 10px;
      line-height: 30px;
      font-size: 20px;
      font-weight: bolder;
      border-radius: 3px;
      transition: all 0.2s;
    }
    div:hover {
      background-color: rgba(128, 128, 128, 0.4);
      color: rgb(123, 123, 123);
    }
  }
}
</style>