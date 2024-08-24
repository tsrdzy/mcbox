<template>
  <div id="nav">
    <transition name="nav_ass">
      <nav class="nav_all" id="nav_all" v-if="nav_button_show" ref="sidebar">
        <n-collapse class="nav_1" :default-expanded-names="[1]">
          <n-collapse-item
            :key="listsx"
            v-for="(listsx, i) in lists"
            :name="i + 1"
          >
            <template #header>
              <div class="title_1">{{ listsx.name }}</div>
            </template>
            <template #header-extra>
              <div class="title_1">[{{ listsx.com.length }}]</div>
            </template>
            <div id="title_1_con">
              <div class="nav_2" :key="comx" v-for="comx in listsx.com">
                <router-link :to="comx[1]" v-show="comx[1] != '[software]'">
                  <div class="title_2">
                    {{ comx[0] }}
                    <ul>
                      <li
                        id="nav_state"
                        class="state"
                        :style="
                          comx[2] == 0
                            ? 'background-color:#85ce61;color:rgb(25,25,25)'
                            : comx[2] == 1
                            ? 'background-color:#ebb563;color:rgb(25,25,25)'
                            : comx[2] == 2
                            ? 'background-color:#a6a9ad;color:rgb(25,25,25)'
                            : 'background-color:#f78989;color:rgb(25,25,25)'
                        "
                      >
                        {{
                          comx[2] == 0
                            ? "活跃"
                            : comx[2] == 1
                            ? "稳定"
                            : comx[2] == 2
                            ? "停更"
                            : "未知"
                        }}
                      </li>
                      <li id="nav_version" class="version">{{ comx[3] }}</li>
                    </ul>
                  </div>
                </router-link>
                <div
                  v-on:click="execrun(comx[4])"
                  id="nav_3"
                  v-show="comx[1] == '[software]'"
                >
                  <div class="title_2">
                    {{ comx[0] }}
                    <ul>
                      <li
                        id="nav_state"
                        class="state"
                        :style="
                          comx[2] == 0
                            ? 'background-color:#85ce61;color:rgb(25,25,25)'
                            : comx[2] == 1
                            ? 'background-color:#ebb563;color:rgb(25,25,25)'
                            : comx[2] == 2
                            ? 'background-color:#a6a9ad;color:rgb(25,25,25)'
                            : 'background-color:#f78989;color:rgb(25,25,25)'
                        "
                      >
                        {{
                          comx[2] == 0
                            ? "活跃"
                            : comx[2] == 1
                            ? "稳定"
                            : comx[2] == 2
                            ? "停更"
                            : "未知"
                        }}
                      </li>
                      <li id="nav_version" class="version">{{ comx[3] }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </n-collapse-item>
        </n-collapse>
      </nav>
    </transition>

    <div class="nav_s" id="nav_s">
      <div v-on:click.stop="handleSidebarClick($event)" class="button_s">
        {{ this.nav_button_show ? "《" : "》" }}
      </div>
    </div>
  </div>
</template>

<script>
import { NCollapse, NCollapseItem } from "naive-ui";
const exec = window.require("child_process").exec;
const path = window.require("path");
export default {
  props: ["listss"],
  components: {
    NCollapse,
    NCollapseItem,
  },
  data() {
    return {
      nav_button_show: true,
      lists: this.listss,
    };
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
    document
      .getElementById("header")
      .addEventListener("click", this.preventSidebarHide);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    execrun(runname) {
      let urls = "";
      if (process.env.NODE_ENV === "development") {
        // 开发环境
        urls = path.join(
          process.cwd(),
          "public",
          "MCBOX",
          "resource",
          "software",
          `${runname}.exe`
        );
      } else {
        // 生产环境
        urls = path.join(
          process.cwd(),
          "resources",
          "public",
          "MCBOX",
          "resource",
          "software",
          `${runname}.exe`
        );
      }
      exec(`"${urls}"`);
    },
    handleSidebarClick(event) {
      // 阻止事件冒泡
      event.stopPropagation();
      // 切换侧边栏状态
      this.nav_button_show = !this.nav_button_show;
    },
    handleClickOutside(event) {
      const sidebarElement = this.$refs.sidebar;
      const headers = document.getElementById("header");
      // 确保 sidebarElement 存在，并且点击事件的目标不是 sidebarElement 本身或其子元素
      if (
        headers &&
        sidebarElement &&
        !sidebarElement.contains(event.target) &&
        event.target.id !== "header"
      ) {
        // 如果不是，则隐藏侧边栏
        this.nav_button_show = false;
      }
    },
    preventSidebarHide(event) {
      // 这里你可以做更多的事情，但在这个示例中，我们什么也不做，只是不调用handleClickOutside
      // 因为#header的点击事件已经在这里被“拦截”了
      event.stopPropagation(); // 虽然在这个上下文中可能不是必需的，但展示了如何阻止事件冒泡
    },
  },
};
</script>

<style lang="less" scoped>
#nav {
  display: flex;
  height: calc(100% - 60px);
  overflow: hidden;
  position: absolute;
  z-index: 999;

  nav {
    width: 240px;
    height: 100%;
    overflow: hidden;
    border-right: 1px solid #7b7b7b77;
    overflow-y: scroll;

    .nav_1 {
      width: 95%;
      margin: 0 auto;
      height: auto;

      .title_1 {
        display: flex;
        width: calc(100% - 10px);
        height: 30px;
        line-height: 30px;

        #title_1_icon {
          width: 30px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          transform: rotate(90deg);
        }
      }

      .nav_2 {
        // display: flex;
        // justify-content: center;
        // flex-wrap: wrap;
        margin: 10px auto;
        width: calc(100% - 30px);
        font-size: 11px;

        .title_2 {
          width: calc(100%);
          height: 50px;
          overflow: hidden;
          line-height: 25px;
          padding: 5px;
          text-overflow: ellipsis;
          // border-bottom: 1px solid #74747474;
          box-shadow: 0 0 3px #78787874;
          border-radius: 3px;
          margin: 2px 0;
          transition: all 0.3s;

          ul {
            display: flex;
            height: 25px;

            width: calc(90% - 10px);

            li {
              border: 1px solid #fff;
              padding: 0 3px;
              border-radius: 3px;
              margin: 3px 0;
              margin-right: 3px;
              height: 19px;
              line-height: 19px;
            }
          }
        }

        .title_2:hover {
          box-shadow: 0 0 6px #7b7b7b77;
          background-color: #6e6e6e16;
        }

        h2:hover {
          background-color: #7373731d;
        }
      }
    }
  }

  .nav_s {
    width: 10px;
    height: 150px;
    background-color: #ffffff00;
    position: relative;
    overflow: hidden;
    top: 50%;
    left: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    transform: translateY(-50%);

    .button_s {
      // background-color: #ffffff00;
      height: 150px;
      width: 10px;
      font-size: 0;
      line-height: 150px;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #7e7e7e14;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      transition: all 0.3s ease;
    }

    .button_s:hover {
      transition: all 0.3s ease;
      background-color: #7878787a;
    }
  }

  .nav_s:hover {
    width: 30px;
    background-color: #ffffff00;
    transition: all 0.3s ease;

    .nav_s_icon {
      width: 30px;
    }

    .button_s {
      width: 30px;
      font-size: 16px;
    }
  }

  .nav_ass-leave-active,
  .nav_ass-enter-active {
    transition: width 0.3s ease;
  }

  .nav_ass-enter-from,
  .nav_ass-leave-to {
    width: 0;
  }

  .title_1_ass-enter-active,
  .title_1_ass-leave-active {
    transition: all 0.2s ease;
  }

  .title_1_ass-enter-from,
  .title_1_ass-leave-to {
    height: 0;
  }

  // .title_1_ass-enter-to,
  // .title_1_ass-leave-from {
  //     height: auto;
  //     /* 或其他具体的高度值 */
  // }
}
</style>