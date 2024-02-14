<template>
  <div class="mainset">
    <div class="mainset_card">
      <h2>菜单标签:<span>*</span></h2>
      <input type="text" placeholder="菜单标签" />
    </div>
    <div class="mainset_card">
      <h2>菜单名称:<span>*</span></h2>
      <input type="text" placeholder="菜单名称" />
    </div>
    <div class="mainset_card">
      <h2>菜单大小:<span>*</span></h2>
      <select>
        <option :key="index" v-for="index of 6" :value="index">
          {{ index }}行
        </option>
      </select>
    </div>
    <div class="mainset_card">
      <h2>刷新频率:</h2>
      <input type="text" placeholder="单位(秒)" />
    </div>
    <div class="mainset_card">
      <h2>打开指令:</h2>
      <input
        type="text"
        placeholder="打开菜单的指令(多个请用半角逗号 , 隔开)"
      />
    </div>
    <div class="mainset_card">
      <h2>物品打开:</h2>
      <input type="text" placeholder="使用物品打开菜单(输入物品ID)" />
      <div class="itemselection">
        <n-popover trigger="click">
          <template #trigger> ··· </template>
          <mcbox_items></mcbox_items>
        </n-popover>
      </div>
    </div>
    <div class="mainset_card">
      <h2>打开方式:</h2>
      <div style="display: flex; justify-content: space-between;width:100%">
        <n-space>
          <div style="line-height: 28px;">左键打开<n-switch size="medium" /></div>
        </n-space>
        <n-space>
          <div style="line-height: 28px;">右键打开<n-switch size="medium" /></div
        ></n-space>
      </div>
    </div>
  </div>
</template>

<script>
import mcbox_items from "./mcbox_items.vue";
export default {
  components: {
    mcbox_items,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.mainset {
  min-width: 420px;
  .mainset_card {
    position: relative;
    display: flex;
    margin: 5px 0;
    h2 {
      min-width: 80px;
      border: 1px solid rgba(255, 255, 255, 0);
      height: 24px;
      line-height: 24px;
      padding: 1px;
      span {
        color: rgb(200, 100, 100);
      }
    }
    input,
    select {
      font-family: "opposans";
      padding: 1px;
      border: 0;
      outline: 0;
      border: 1px solid rgb(126, 126, 126);
      width: 100%;
      border-radius: 3px;
      height: 24px;
    }
    .itemselection {
      background-color: rgba(255, 255, 255, 0);
      height: 27.5px;
      line-height: 27.5px;
      position: absolute;
      right: 12px;
    }
  }
}
</style>