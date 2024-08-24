<template>
  <div id="achievementtool">
    <div class="cards">
      <div class="card">
        <h2>图标类型:</h2>
        <select v-model="icontype" v-on:change="icontypez = ''">
          <option value="s0">原版MC图标</option>
          <option value="s1">本地图片</option>
          <option value="s2">网络图片</option>
        </select>
      </div>
      <div class="card">
        <h2>图标选择:</h2>
        <input
          v-model="icontypez"
          v-on:input="icons()"
          :placeholder="
            icontype == 's0'
              ? '请输入物品英文ID'
              : icontype == 's1'
              ? '请输入图片路径'
              : icontype == 's2'
              ? '请输入网络地址'
              : ''
          "
          type="text"
        />
        <div v-show="icontype == 's0'" class="itemselection">
          <n-popover trigger="click">
            <template #trigger> ··· </template>
            <mcbox_item_selection
              @open_items="open_items"
            ></mcbox_item_selection>
          </n-popover>
        </div>
      </div>
      <div class="card">
        <h2>字体选择:</h2>
        <select v-model="fonts1" v-on:click="fonts()">
          <option value="minecraft">Minecraft像素字</option>
          <option value="SimSun" style="font-family: 'SimSun'">宋体</option>
          <option
            value="Microsoft Yahei"
            style="font-family: 'Microsoft Yahei'"
          >
            微软雅黑
          </option>
          <option value="Arial">Arial</option>
          <option value="Tahoma">Tahoma</option>
          <option value="Verdana">Verdana</option>
          <option value="opposans">oppoSansH</option>
        </select>
      </div>
      <div class="card">
        <h2>成就标题:</h2>
        <input v-model="title" type="text" />
        <n-color-picker
          v-model:value="this.stylecolor1"
          :on-complete="stylecolor()"
        />
      </div>
      <div class="card">
        <h2>成就内容:</h2>
        <input v-model="content" type="text" />
        <n-color-picker
          v-model:value="this.stylecolor2"
          :on-complete="stylecolor()"
        />
      </div>
    </div>
    <h2 class="title">实时预览</h2>
    <div
      style="background-color: #77777722; padding: 10px 0; border-radius: 5px"
    >
      <div id="show" class="show">
        <div class="show_1">
          <div class="show_2">
            <img
              v-show="icontype == 's1' || icontype == 's2'"
              :src="icontypez"
              alt=" "
            />
            <p
              v-show="icontype == 's0'"
              :class="'icon-20' + ' ' + icontypez + '-20'"
            ></p>
            <div>
              <h2
                style="font-family: minecraft; color: rgba(255, 200, 0, 1)"
                id="h2ss"
              >
                {{ this.title }}
              </h2>
              <h2
                style="font-family: minecraft; color: rgba(255, 255, 255, 1)"
                id="h2ss1"
              >
                {{ this.content }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button v-on:click="canvas_show()">生成</button>
    <img class="image" :src="imggos" alt="" />
    <div class="footer_Tips">Tips:</div>
    <div class="footer_Tips">·保存请直接拖拽到需要保存的位置即可</div>
    <div class="footer_Tips">·某些浏览器或系统可能无法生成</div>
    <div class="footer_Tips">·该工具处于测试阶段</div>
  </div>
</template>

<script>
import { NColorPicker, NPopover } from "naive-ui";
import mcbox_item_selection from "@/components/module/mcbox_item_selection.vue";
import html2canvas from "html2canvas";
export default {
  components: {
    NColorPicker,
    mcbox_item_selection,
    NPopover,
  },
  data() {
    return {
      fonts1: "minecraft",
      title: "获得成就!",
      content: "使用MCBOX成就生成器!",
      stylecolor1: "rgba(255,200,0,1)",
      stylecolor2: "rgba(255,255,255,1)",
      icontype: "s0",
      icontypez: "",
      imggos: "",
    };
  },
  mounted() {
    require("@/assets/image/general/1.20.css");
    this.canvas_show();
  },
  methods: {
    canvas_show() {
      var __this = this;
      html2canvas(document.getElementById("show"), {
        allowTaint: true,
        backgroundColor: null,
      }).then(function (canvas) {
        let dataURL = canvas.toDataURL("image/png");
        if (dataURL !== "") {
          console.log(dataURL);
          __this.imggos = dataURL;
        }
      });
    },
    icons() {},
    open_items(msg) {
      this.icontypez = msg;
    },
    fonts() {
      document.getElementById("h2ss").style.fontFamily = this.fonts1;
      document.getElementById("h2ss1").style.fontFamily = this.fonts1;
    },
    stylecolor() {
      if (document.getElementById("h2ss") != undefined) {
        document.getElementById("h2ss").style.color = this.stylecolor1;
      }
      if (document.getElementById("h2ss1") != undefined) {
        document.getElementById("h2ss1").style.color = this.stylecolor2;
      }
    },
  },
};
</script>

<style lang="less" scope>
#achievementtool {
  width: 1200px;
  margin: 0 auto;
  button {
    display: block;
    margin: 10px auto;
    width: 80%;
    height: 40px;
  }
  //   .image {
  //     display: block;
  //     margin: 0 auto;
  //   }
  .title {
    width: 100%;
    text-align: center;
  }
  .cards {
    .card {
      position: relative;
      display: flex;
      line-height: 40px;
      margin: 5px 0;

      h2 {
        height: 40px;
        min-width: 100px;
        max-width: 100px;
      }

      select,
      input,
      .n-base-selection-label {
        width: 100%;
        height: 40px;
        transition: all 0.3s;
      }

      .n-color-picker {
        height: 40px;
        width: 240px;
        margin: 0;
        padding: 0;
      }

      .n-color-picker-trigger {
        border: 1px solid #8383833b;
        box-shadow: 0 0 3px #7f7f7f77;
        margin: 0;
        padding: 0;
      }
    }
  }

  .show {
    width: 320px;
    height: 65px;
    margin: 0 auto;
    border: 2px solid #000;
    border-radius: 5px;
    background-color: #000;

    .show_1 {
      width: calc(100% - 8px);
      height: calc(100% - 8px);
      border: 4px solid #555555;
      border-radius: 5px;
      background-color: #555555;

      .show_2 {
        background-color: #212121;
        border-radius: 5px;
        width: 100%;
        height: 100%;
        display: flex;

        img {
          display: block;
          max-width: 30px;
          max-height: 30px;
          min-width: 30px;
          min-height: 30px;
          margin: 13.5px;
        }
        p {
          width: 30px;
          height: 30px;
          margin: 13.5px;
        }
        div {
          margin: 5px 0;

          h2 {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 17px;
            max-height: 23.5px;
            min-height: 23.5px;
            line-height: 23.5px;
            max-width: 255px;
            min-width: 255px;
          }
        }
      }
    }
  }
  .itemselection {
    height: 40px;
    line-height: 40px;
    position: absolute;
    right: 5px;
    font-size: 28px;
    font-family: "minecraft-title";
  }
}
</style>