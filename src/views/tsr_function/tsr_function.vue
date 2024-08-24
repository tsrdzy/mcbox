<template>
  <div id="function">
    <tsr_nav :listss="this.lists"></tsr_nav>
    <router-view></router-view>
  </div>
</template>

<script>
import tsr_nav from "@/components/module/tsr_nav.vue";
export default {
  components: {
    tsr_nav,
  },
  data() {
    return {
      lists: [
        {
          name: "插件相关编辑器",
          com: [
            ["ChestCommands编辑器", "/function/chestcommands", 1, "MC1.13+"],
            ["DeluxeMenus编辑器", "/function/deluxemenus", 0, "MC1.13+"],
            ["MythicMobs编辑器", "/function/mythicmobs", 0, "MC1.13+"],
          ],
        },
        {
          name: "模组相关编辑器",
          com: [],
        },
        {
          name: "工具",
          com: [
            ["正版皮肤获取器", "/function/getskin", 1, "MCALL"],
            ["键盘检测工具", "/function/keyboardtestutility", 1, "MCALL"],
            ["MC成就生成器", "/function/achievementtool", 1, "MCALL"],
            ["配置文件机翻工具", "/function/", 1, "MCALL"],
          ],
        },
        {
          name: "过时工具",
          com: [
            ["CustomMobs编辑器", "[software]", 2, "MC1.12-", "CustomMobs"],
            ["GrSciptBlock编辑器", "[software]", 2, "MC1.12-", "GrSciptBlock"],
            ["ImiPet编辑器", "[software]", 2, "MC1.12-", "ImiPet"],
            ["MythicMobs编辑器", "[software]", 2, "MC1.12-", "MythicMobs"],
            ["rli技能编辑器", "[software]", 2, "MC1.12-", "rli"],
            ["RPGitem编辑器", "[software]", 2, "MC1.12-", "RPGitem"],
            ["SkillSystem编辑器", "[software]", 2, "MC1.12-", "SkillSystem"],
            [
              "SpecialAttributes编辑器",
              "[software]",
              2,
              "MC1.12-",
              "SpecialAttributes",
            ],
            ["材质包生成器", "[software]", 2, "MC1.12", "材质包生成器"],
            ["Unicode转码工具", "[software]", 2, "MCALL", "Unicode转码工具"],
          ],
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
#function {
  display: flex;
  height: calc(100% - 60px);
  width: 100%;
}
</style>