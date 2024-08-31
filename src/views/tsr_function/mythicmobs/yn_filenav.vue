<template>
  <div class="file_nav">
    <div>
      <input class="file_nav_input" v-model="file" type="text" placeholder="请选择MythicMobs目录" />
      <div class="file_button iconfont" v-on:click="file_button">&#xe78e;</div>
    </div>
  </div>
</template>

<script>
const { ipcRenderer } = window.require("electron");
export default {
  data() {
    return {
      file: "",
    };
  },
  methods: {
    file_button() {
      let _this = this
      ipcRenderer.send("open_file");
      ipcRenderer.on("open_files", function (e, files) {
        console.log(files)
        _this.file = files[0];
      });
    },
  },
};
</script>

<style lang=less scoped>
.file_nav {
  border: 1px solid rgb(119, 119, 119);
  position: relative;
  min-width: 210px;
  max-width: 210px;
  border-radius: 5px;
  input {
    width: calc(100% - 38px);
    border: 0;
    background-color: rgba(255, 255, 255, 0);
    outline: none;
    border: 1px solid rgb(122, 122, 122);
    border-radius: 3px;
    margin: 5px;
    padding-right: 24px;
  }
  .file_button {
    position: absolute;
    top: 4px;
    left: calc(100% - 26px);
    background-color: rgba(255, 255, 255, 0);
  }
  .file_button:hover {
    color: rgba(98, 98, 98, 0.537);
    font-weight: bolder;
  }
}
</style>