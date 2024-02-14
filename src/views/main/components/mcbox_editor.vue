<template>
  <div class="editor main_main">
    <div class="card" v-on:click="runwin('ChestCommands')">
      <div class="card_logo">
        <img src="@/../public/img/main/ChestCommands.png" alt="" />
      </div>
      <div class="card_title">ChestCommands编辑器</div>
    </div>
  </div>
</template>

<script>
const { ipcRenderer } = window.require("electron");
export default {
  methods: {
    runwin(winid) {
      ipcRenderer.send("run" + winid);
    },
  },
};
</script>

<style lang="less" scoped>
.editor {
  width: 100%;
  padding: 20px;
  .card {
    height: 50px;
    margin: 0 auto;
    border-radius: 5px;
    border: 1px solid rgba(125, 125, 125, 0.5);
    display: flex;
    .card_logo {
      width: 40px;
      height: 40px;
      margin: 5px;
      img {
        width: 40px;
        height: 40px;
        filter: grayscale(70%);
      }
    }
    .card_title {
      line-height: 50px;
      height: 50px;
    }
  }
  .card:hover {
    .card_logo {
      img {
        filter: grayscale(0);
      }
    }
  }
}
</style>