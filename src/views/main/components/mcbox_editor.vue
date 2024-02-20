<template>
  <div class="editor main_main">
    <n-collapse>
      <n-collapse-item
        v-if="this.$store.state.item_all[0].show"
        class="editor_items"
      >
        <template #header> <h1>编辑器</h1> </template>
        <div
          class="card"
          v-on:click="runwin(item_editor.id)"
          :key="item_editor.name"
          v-for="item_editor in this.$store.state.item_all[0].items"
          v-show="item_editor.show"
        >
          <div class="card_logo">
            <img :src="item_editor.img" alt="" />
          </div>
          <div class="card_title">{{ item_editor.name }}</div>
        </div>
        <template #header-extra>
          <!-- <h1>{{ this.item_all.items_editor.length }}</h1> -->
        </template>
      </n-collapse-item>
    </n-collapse>
    <n-collapse>
      <n-collapse-item
        v-if="this.$store.state.item_all[1].show"
        class="editor_items"
      >
        <template #header> <h1>工具</h1> </template>
        <div
          class="card"
          v-on:click="runwin(item_tool.id)"
          :key="item_tool.name"
          v-for="item_tool in this.$store.state.item_all[1].items"
          v-show="item_tool.show"
        >
          <div class="card_logo">
            <img :src="item_tool.img" alt="" />
          </div>
          <div class="card_title">{{ item_tool.name }}</div>
        </div>
        <template #header-extra>
          <!-- <h1>{{ this.item_all.items_tool.length }}</h1> -->
        </template>
      </n-collapse-item>
    </n-collapse>
    <n-collapse>
      <n-collapse-item
        v-if="this.$store.state.item_all[2].show"
        class="editor_items"
      >
        <template #header> <h1>老版编辑器[停更]</h1> </template>
        <h1 style="color: rgb(141, 73, 73)">
          此列表编辑器已永久停更,最高支持1.12.2
        </h1>
        <h1 style="color: rgb(141, 73, 73)">
          如有任何使用问题或功能问题无法解决
        </h1>
        <div
          class="card"
          v-on:click="runwinexe(item_old_editor.id)"
          :key="item_old_editor.name"
          v-for="item_old_editor in this.$store.state.item_all[2].items"
          v-show="item_old_editor.show"
        >
          <div class="card_logo">
            <img :src="item_old_editor.img" alt="" />
          </div>
          <div class="card_title">{{ item_old_editor.name }}</div>
        </div>
        <template #header-extra>
          <!-- <h1>{{ this.item_all.items_old_editor.length }}</h1> -->
        </template>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<script>
const { ipcRenderer } = window.require("electron");
const { execFile } = window.require("child_process");
export default {
  data() {
    return {
      item_all: [],
    };
  },
  mounted() {
    this.item_all = this.$store.state.item_all;
  },
  methods: {
    runwin(winid) {
      ipcRenderer.send("run" + winid);
      console.log(winid);
    },
    runwinexe(winid) {
      let exeurl = `${__dirname}`;
      exeurl = exeurl.replace("\\app.asar", "");
      exeurl = exeurl + "\\MCBOX\\software\\" + winid + ".exe";
      console.log(exeurl);
      execFile(exeurl);
    },
  },
};
</script>

<style lang="less" scoped>
.editor {
  width: 100%;
  height: calc(100% - 84px);
  padding: 20px;
  overflow: auto;
  .editor_items {
    border: 1px solid rgba(127, 127, 127, 0.3);
    border-radius: 5px;
    padding: 10px;
    margin: 10px auto;
  }
  .editor_items:hover {
    border: 1px solid rgba(127, 127, 127, 0.7);
  }
  .card {
    height: 50px;
    margin: 0 auto 10px;
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