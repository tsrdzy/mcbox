<template>
  <header id="header">
    <div class="header_left">
      <div class="logo">
        <h2 class="iconfont">&#xe7fb;</h2>
        <h1>TsrCraft MCBOX V{{ this.mcbox_varsion }}</h1>
      </div>
      <ul class="nav iconfont">
        <li>
          <router-link to="/" active-class="main_active"
            ><b>&#xe639;</b> 首页</router-link
          >
        </li>
        <li>
          <router-link to="/function" active-class="main_active"
            ><b>&#xe629;</b> 工具</router-link
          >
        </li>
        <li>
          <router-link to="/resource" active-class="main_active"
            ><b>&#xe888;</b> 资源</router-link
          >
        </li>
        <li>
          <router-link to="/about" active-class="main_active"
            ><b>&#xe622;</b> 关于</router-link
          >
        </li>
      </ul>
    </div>

    <div class="set_button iconfont">
      <router-link class="set" to="/set"><div>&#xe63d;</div></router-link>
      <div class="skin">
        <h2
          tabindex="-1"
          class="iconfont"
          v-on:blur="this.header_skin_select = false"
          v-on:click="this.header_skin_select = !this.header_skin_select"
        >
          &#xe617;
        </h2>
        <transition name="fade">
          <ul v-if="this.header_skin_select" class="skin_select">
            <li v-on:click="theme('white')" style="background-color: #fff"></li>
            <li v-on:click="theme('dark')" style="background-color: #000"></li>
            <li
              v-on:click="theme('red')"
              style="background-color: #33001b"
            ></li>
            <li
              v-on:click="theme('blue')"
              style="background-color: #2c3e50"
            ></li>
            <li
              v-on:click="theme('green')"
              style="background-color: #2ecc71"
            ></li>
          </ul>
        </transition>
      </div>
      <div v-on:click="tomin(id)">&#xe64c;</div>
      <div v-if="!this.main_max" v-on:click="tomax(id)" style="font-size: 16px">
        &#xe651;
      </div>
      <div
        v-if="this.main_max"
        v-on:click="tounmax(id)"
        style="font-size: 16px"
      >
        &#xe653;
      </div>
      <div v-on:click="toclose(id)">&#xe65c;</div>
    </div>
  </header>
</template>
    
<script>
import config from "@/../package.json";
const { ipcRenderer } = window.require("electron");
export default {
  data() {
    return {
      main_max: false,
      ids: "window",
      header_skin_select: false,
      mcbox_varsion: "",
    };
  },
  mounted() {
    this.mcbox_varsion = config.version;
    ipcRenderer.on(this.ids + "-max", () => {
      this.main_max = true;
    });
    ipcRenderer.on(this.ids + "-unmax", () => {
      this.main_max = false;
    });
  },
  methods: {
    theme(data) {
      this.$store.commit("themes", data);
    },
    tomin() {
      ipcRenderer.send(this.ids + "-min");
    },
    tomax() {
      ipcRenderer.send(this.ids + "-max");
      this.main_max = true;
    },
    tounmax() {
      ipcRenderer.send(this.ids + "-unmax");
      this.main_max = false;
    },
    toclose() {
      ipcRenderer.send(this.ids + "-close");
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
  z-index: 999;
  font-family: opposansH;

  .header_left {
    display: flex;

    .logo {
      display: flex;
      width: 210px;

      h1,
      h2 {
        height: 60px;
        line-height: 60px;
        width: auto;
        font-size: 16px;
      }

      h2 {
        font-size: 22px;
        margin: 0 0 0 10px;
      }
    }

    .nav {
      display: flex;
      height: 60px;
      line-height: 60px;
      margin: 0 20px;

      li {
        -webkit-app-region: no-drag;
        height: 58px;
        min-width: 80px;

        a {
          display: block;
          text-align: center;
          line-height: 58px;
          border-bottom: 2px solid #00000000;
          width: 100%;
          height: 100%;

          b {
            font-size: 16px;
          }
        }
      }
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
      font-size: 16px;
      font-weight: bolder;
      border-radius: 3px;
      transition: all 0.2s;
    }

    .skin {
      position: relative;

      .skin_select {
        position: absolute;
        box-shadow: 0 0 2px #aaa;
        border-radius: 3px;
        left: 50%;
        top: calc(100% + 20px);
        transform: translate(-50%);
        width: auto;
        height: 28px;
        display: flex;
        background-color: #7f7f7f77;
        transition: opacity 0.2s ease;

        li {
          max-width: 20px;
          max-height: 20px;
          min-width: 20px;
          min-height: 20px;
          border: 1px solid #808080;
          border-radius: 5px;
          margin: 3px;
        }

        li:hover {
          border: 1px solid #ffffff3d;
        }
      }
    }

    .fade-leave-active,
    .fade-enter-active {
      transition: all 0.1s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }
}
</style>