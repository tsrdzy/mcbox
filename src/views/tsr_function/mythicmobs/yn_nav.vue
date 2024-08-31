<template>
  <div class="nav">
    <ul>
      <li>
        <router-link to="/function/mythicmobs/mobs" active-class="ative"
          ><b class="iconfont">&#xeca6;</b>生物</router-link
        >
      </li>
      <li>
        <router-link to="/function/mythicmobs/items" active-class="ative"
          ><b class="iconfont">&#xf0a8;</b>物品</router-link
        >
      </li>
      <li>
        <n-popover
          :flip="false"
          content-style="undefined"
          :show-arrow="false"
          placement="bottom"
          :raw="true"
          :class="this.$store.state.colorshow"
          style="
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0px 0px 3px 3px rgba(128, 128, 128, 0.5);
          "
        >
          <template #trigger>
            <router-link to="/function/mythicmobs/skill" active-class="ative"
              ><b class="iconfont">&#xe601;</b>技能<b class="iconfont"
                >&#xe656;</b
              ></router-link
            >
          </template>
          <div>
            <router-link to="/function/mythicmobs/skill" active-class="ative"
              ><b class="iconfont">&#xe601;</b>技能编辑</router-link
            >
            <br />
            <router-link to="/function/mythicmobs/skills" active-class="ative"
              ><b class="iconfont">&#xe601;</b>技能组编辑</router-link
            >
          </div>
        </n-popover>
      </li>
      <li>
        <router-link to="/function/mythicmobs/droptables" active-class="ative"
          ><b class="iconfont">&#xef4d;</b>掉落表</router-link
        >
      </li>
      <li>
        <n-popover
          :flip="false"
          content-style="undefined"
          :show-arrow="false"
          placement="bottom"
          :raw="true"
          :class="this.$store.state.colorshow"
          style="
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0px 0px 3px 3px rgba(128, 128, 128, 0.5);
          "
        >
          <template #trigger>
            <router-link to="/function/mythicmobs/spawners" active-class="ative"
              ><b class="iconfont">&#xebb7;</b>刷怪点<b class="iconfont"
                >&#xe656;</b
              >
            </router-link>
          </template>
          <router-link to="/function/mythicmobs/spawners" active-class="ative"
            ><b class="iconfont">&#xebb7;</b>定点刷怪点编辑
          </router-link>
          <br />
          <router-link
            to="/function/mythicmobs/randomspawns"
            active-class="ative"
            ><b class="iconfont">&#xebb7;</b>随机刷怪点编辑
          </router-link>
        </n-popover>
      </li>
    </ul>
  </div>
</template>

<script>
import { NPopover } from "naive-ui";
export default {
  components: {
    NPopover,
  },
};
</script>

<style lang="less" scoped>
.nav {
  padding: 5px 0;
  border-bottom: 0.1px solid rgba(128, 128, 128, 0.5);
  ul {
    display: flex;
    height: 29px;
    li {
      width: auto;
      padding: 0 5px;
      text-align: center;
    }
    li:hover {
      color: rgba(128, 128, 128, 0.5);
    }
  }
}

</style>