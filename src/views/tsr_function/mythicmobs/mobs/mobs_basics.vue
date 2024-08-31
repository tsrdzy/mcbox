<template>
  <n-collapse>
    <template #arrow>
      <h2 class="list_title iconfont">&#xe6b7;</h2>
    </template>
    <n-collapse-item>
      <template #header>
        <h2 class="list_title">基础设置</h2>
      </template>
      <div class="cards">
        <div class="card">
          <h2 class="card_title">生物标签:</h2>
          <input
            type="text"
            placeholder="生物标签"
            v-model="basics.label"
            v-on:input="functions"
          />
          <n-popover trigger="hover">
            <template #trigger>
              <h2 class="hint iconfont">&#xe8e9;</h2>
            </template>
            <div>
              <span>生物储存的唯一标签</span>
              <br />
              <span>不可与其他生物重复</span>
            </div>
          </n-popover>
        </div>
        <div class="card">
          <h2 class="card_title">生物种类:</h2>
          <input
            type="text"
            placeholder="生物种类"
            v-model="basics.Type"
            v-on:input="functions"
            :disabled="mobs_input"
          />
          <n-popover trigger="hover">
            <template #trigger>
              <h2 class="hint iconfont">&#xe8e9;</h2>
            </template>
            <div>
              <span>生物对玩家展示的外观</span>
              <br />
              <span>可选用所有原版实体</span>
            </div>
          </n-popover>
          <n-popover
            trigger="hover"
            :raw="true"
            :flip="false"
            content-style="undefined"
            :show-arrow="false"
            placement="bottom"
            :class="this.$store.state.colorshow"
          >
            <template #trigger>
              <h2 class="open_select">···</h2>
            </template>
            <div><yn_types @transfer="types_data"></yn_types></div>
          </n-popover>
        </div>
        <div class="card">
          <h2 class="card_title">生物名称:</h2>
          <input
            type="text"
            placeholder="生物名称"
            v-model="basics.Display"
            v-on:input="functions"
            :disabled="mobs_input"
          />
          <n-popover trigger="hover">
            <template #trigger>
              <h2 class="hint iconfont">&#xe8e9;</h2>
            </template>
            <div>
              <span>生物对玩家展示的名称</span>
              <br />
              <span>生物头顶显示的名称,支持变量</span>
            </div>
          </n-popover>
        </div>
        <div class="card">
          <h2 class="card_title">生物血量:</h2>
          <input
            type="text"
            placeholder="生物血量"
            v-model="basics.Health"
            v-on:input="functions"
            :disabled="mobs_input"
          />
          <n-popover trigger="hover">
            <template #trigger>
              <h2 class="hint iconfont">&#xe8e9;</h2>
            </template>
            <div>
              <span>生物的血量</span>
            </div>
          </n-popover>
        </div>
        <div class="card">
          <h2 class="card_title">生物伤害:</h2>
          <input
            type="text"
            placeholder="生物伤害"
            v-model="basics.Damage"
            v-on:input="functions"
            :disabled="mobs_input"
          />
          <n-popover trigger="hover">
            <template #trigger>
              <h2 class="hint iconfont">&#xe8e9;</h2>
            </template>
            <div>
              <span>生物单次的攻击伤害</span>
            </div>
          </n-popover>
        </div>
        <div class="card">
          <h2 class="card_title">生物护甲:</h2>
          <input
            type="text"
            placeholder="生物护甲"
            v-model="basics.Armor"
            v-on:input="functions"
            :disabled="mobs_input"
          />
          <n-popover trigger="hover">
            <template #trigger>
              <h2 class="hint iconfont">&#xe8e9;</h2>
            </template>
            <div>
              <span>生物的护甲值,减免伤害</span>
            </div>
          </n-popover>
        </div>
        <div class="card">
          <h2 class="card_title">生物阵营:</h2>
          <input
            type="text"
            placeholder="生物阵营"
            v-model="basics.Faction"
            v-on:input="functions"
            :disabled="mobs_input"
          />
          <n-popover trigger="hover">
            <template #trigger>
              <h2 class="hint iconfont">&#xe8e9;</h2>
            </template>
            <div>
              <span>生物的阵营,自定义输入</span>
              <br />
              <span>阵营相同的生物在AI的配合下不会互相攻击</span>
            </div>
          </n-popover>
        </div>
        <div class="card">
          <h2 class="card_title">生物坐骑:</h2>
          <input
            type="text"
            placeholder="生物坐骑"
            v-model="basics.Mount"
            v-on:input="functions"
            :disabled="mobs_input"
          />
          <n-popover trigger="hover">
            <template #trigger>
              <h2 class="hint iconfont">&#xe8e9;</h2>
            </template>
            <div>
              <span>生物生成时脚下的坐骑</span>
            </div>
          </n-popover>
        </div>
      </div>
    </n-collapse-item>
  </n-collapse>
</template>

<script>
import { NPopover, NCollapseItem, NCollapse } from "naive-ui";
import yn_types from "@/views/tsr_function/mythicmobs/yn_types.vue";
export default {
  data() {
    return {
      mobs_input: true,
      type: "",
      basics: {
        label: undefined,
        Type: undefined,
        Display: undefined,
        Health: undefined,
        Damage: undefined,
        Armor: undefined,
        Faction: undefined,
        Mount: undefined,
      },
    };
  },
  components: {
    yn_types,
    NPopover,
    NCollapseItem,
    NCollapse,
  },
  mounted() {
    this.mobs_input = this.$store.state.mobs_input;
  },
  methods: {
    types_data(msg) {
      this.basics.Type = msg;
      this.functions();
    },
    functions() {
      this.$emit("transfer", this.basics);
    },
  },
  computed: {
    isEdit() {
      return this.$store.state.mobs_input; //需要监听的数据
    },
  },
  watch: {
    isEdit(newVal) {
      this.mobs_input = newVal;
      console.log(newVal);
    },
  },
};
</script>

<style lang="less">

</style>