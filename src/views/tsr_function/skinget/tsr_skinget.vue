<template>
  <main>
    <canvas id="canvas" style="width: 0; height: 0; position: absolute"></canvas>
    <div class="card">
      <h2>正版ID:</h2>
      <input v-model="id" type="text" />
      <button v-on:click="getskin()">获取</button>
    </div>
    <div style="display: flex; justify-content: center">
      <div class="canvasskin">
        <canvas id="skin_container"></canvas>
        <div class="canvasskin_pause iconfont">
          <div v-show="this.autoRotate" v-on:click="skin_autoRotate(false)">
            &#xe87a;
          </div>
          <div v-show="!this.autoRotate" v-on:click="skin_autoRotate(true)">
            &#xe6aa;
          </div>
        </div>
        <div class="availableAnimations iconfont">
          <div v-show="this.availableAnimations == 1" v-on:click="skin_availableAnimations(2)">
            &#xe610;
          </div>
          <div v-show="this.availableAnimations == 2" v-on:click="skin_availableAnimations(3)">
            &#xe661;
          </div>
          <div v-show="this.availableAnimations == 3" v-on:click="skin_availableAnimations(4)">
            &#xe636;
          </div>
          <div v-show="this.availableAnimations == 4" v-on:click="skin_availableAnimations(1)">
            &#xe6a8;
          </div>
        </div>
        <div class="skinlayers">
          <div>
            <div class="skin_head" v-on:click="skin_skinlayers(0)">
              <div v-show="skinlayers[0]"></div>
            </div>
          </div>
          <div style="display: flex">
            <div class="skin_left_arm" v-on:click="skin_skinlayers(1)">
              <div v-show="skinlayers[1]"></div>
            </div>
            <div class="skin_body" v-on:click="skin_skinlayers(2)">
              <div v-show="skinlayers[2]"></div>
            </div>
            <div class="skin_right_arm" v-on:click="skin_skinlayers(3)">
              <div v-show="skinlayers[3]"></div>
            </div>
          </div>
          <div style="display: flex">
            <div class="skin_left_leg" v-on:click="skin_skinlayers(4)">
              <div v-show="skinlayers[4]"></div>
            </div>
            <div class="skin_right_leg" v-on:click="skin_skinlayers(5)">
              <div v-show="skinlayers[5]"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="shows">
        <textarea v-model="data_message" readonly disabled></textarea>
      </div>
    </div>
    <div style="display: flex; justify-content: center">
      <div class="show_skin"><img :src="this.skinurl" alt="" /></div>
      <div class="show_cape"><img :src="this.capeurl" alt="" /></div>
    </div>
    <hr />
    <div class="lists_skin">
      <div class="list_skin" :key="list_skin" v-for="list_skin in lists_skin">
        <img :src="list_skin.skinurl" alt="" />
        <h2>{{ list_skin.name }}</h2>
      </div>
    </div>
  </main>
</template>
    
<script>
import skinview3d from "@/assets/script/skinget/skinview3d.bundle.js";
const fs = window.require("fs");
import axios from "axios";
export default {
  data() {
    return {
      id: "",
      skinurl: "",
      capeurl: "",
      data_message: "",
      lists_skin: [],
      autoRotate: true,
      availableAnimations: 1,
      skinlayers: [true, true, true, true, true, true],
    };
  },
  mounted() {
    this.skinview();
    //写入初始化配置
    if (!fs.existsSync("C:/Program Files/mcbox/config/gskin/skins.json")) {
      fs.writeFile(
        "C:/Program Files/mcbox/config/gskin/skins.json",
        "[]",
        (err) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log("ok");
        }
      );
    }
    //读取历史获取
    fs.readFile(
      "C:/Program Files/mcbox/config/gskin/skins.json",
      "utf-8",
      (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        this.lists_skin = JSON.parse(data);
      }
    );
  },
  methods: {
    // 定义 skinview 函数  
    skinview() {
      // 使用 fs 模块读取 skins.json 文件  
      fs.readFile(
        "C:/Program Files/mcbox/config/gskin/skins.json",
        "utf-8",
        (err, data) => {
          if (err) {
            console.log(err);
            return;
          }
          // 将读取的数据解析为 JSON，并赋值给 this.lists_skin  
          this.lists_skin = JSON.parse(data);
        }
      );

      // 获取当前实例的一些属性  
      let autoRotate = this.autoRotate;
      let availableAnimations = this.availableAnimations;
      let skinlayers = this.skinlayers;
      let skinurl = this.skinurl;
      let capeurl = this.capeurl;

      // 创建一个新的 SkinViewer 实例  
      let skinViewer = new skinview3d.SkinViewer({
        // 初始化 SkinViewer 配置  
        canvas: document.getElementById("skin_container"),
        width: 300,
        height: 400,
        // 初始皮肤设置为 steve.png  
        skin: require("@/assets/image/function/skinget/steve.png"),
      });
      if (this.skinurl != "") {
        // 加载用户指定的皮肤  
        skinViewer
          .loadSkin(skinurl, {
            model: "auto-detect",
            ears: false,
          })
          .then(() => { })
          .catch((e) => {
            console.error(e);
          });

      }

      // 如果提供了披风 URL，则加载披风  
      if (capeurl != "" && capeurl != undefined && capeurl != null) {
        skinViewer.loadCape(capeurl, {
          backEquipment: "cape",
        });
      } else {
        skinViewer.loadCape(null);
      }

      // 设置 SkinViewer 的一些属性  
      skinViewer.width = 300;
      skinViewer.height = 400;
      skinViewer.fov = 70;
      skinViewer.zoom = 0.8;

      // 设置是否自动旋转  
      skinViewer.autoRotate = autoRotate;

      // 根据 availableAnimations 的值设置不同的动画  
      if (availableAnimations == 1) {
        skinViewer.animation = new skinview3d.IdleAnimation();
      } else if (availableAnimations == 2) {
        skinViewer.animation = new skinview3d.WalkingAnimation();
      } else if (availableAnimations == 3) {
        skinViewer.animation = new skinview3d.RunningAnimation();
      } else if (availableAnimations == 4) {
        skinViewer.animation = new skinview3d.FlyingAnimation();
      } else {
        skinViewer.animation = null;
      }

      // 设置哪些部分可见  
      const skinParts = [
        "head",
        "rightArm",
        "body",
        "leftArm",
        "rightLeg",
        "leftLeg",
      ];
      for (var i = 0; i < skinlayers.length; i++) {
        skinViewer.playerObject.skin[skinParts[i]]["innerLayer"].visible =
          skinlayers[i];
        skinViewer.playerObject.skin[skinParts[i]]["outerLayer"].visible =
          skinlayers[i];
      }
    },
    skin_autoRotate(data) {
      this.autoRotate = data;
      this.skinview();
    },
    skin_availableAnimations(data) {
      this.availableAnimations = data;
      this.skinview();
    },
    skin_skinlayers(data) {
      let dataa = this.skinlayers[data];
      if (dataa == true) {
        this.skinlayers[data] = false;
      } else {
        this.skinlayers[data] = true;
      }
      this.skinview();
    },
    getskin() {
      this.data_message = "正在获取UUID\n";
      axios
        .get("https://api.mojang.com/users/profiles/minecraft/" + this.id)
        .then((response) => {
          this.data_message =
            this.data_message + "UUID获取成功\n正在获取ID信息\n";
          axios
            .get(
              "https://sessionserver.mojang.com/session/minecraft/profile/" +
              response.data.id
            )
            .then((response1) => {
              this.data_message =
                this.data_message + "ID信息获取成功\n解码中\n";
              let idskinurl = JSON.parse(
                atob(response1.data.properties[0].value)
              );
              this.data_message =
                this.data_message + "解码完成\n皮肤数据获取中\n";
              if (idskinurl.textures.CAPE != undefined) {
                this.capeurl = idskinurl.textures.CAPE.url;
              } else {
                this.capeurl = null;
              }

              this.skinurl = idskinurl.textures.SKIN.url;
              this.data_message = this.data_message + "获取完成\n数据保存中\n";
              this.skinview();
              fs.readFile(
                "C:/Program Files/mcbox/config/gskin/skins.json",
                "utf-8",
                (err, data) => {
                  if (err) {
                    console.log(err);
                    return;
                  }
                  let datas = JSON.parse(data);
                  this.skinurl = idskinurl.textures.SKIN.url;
                  console.log(idskinurl.textures.SKIN.url);
                  datas.push({
                    name: idskinurl.profileName,
                    skinurl: this.skinurl,
                    capeurl: this.capeurl,
                  });
                  //数组去重
                  let hash = {};
                  var newArr = datas.reduce((item, next) => {
                    hash[next.name]
                      ? ""
                      : (hash[next.name] = true && item.push(next));
                    return item;
                  }, []);
                  fs.writeFile(
                    "C:/Program Files/mcbox/config/gskin/skins.json",
                    JSON.stringify(newArr),
                    (err) => {
                      if (err) {
                        console.log(err);
                        return;
                      }
                      console.log("ok");
                      this.data_message = this.data_message + "数据保存完毕.\n";
                    }
                  );
                  this.lists_skin = newArr;
                  this.data_message = this.data_message + "结束.\n";
                }
              );
            })
            .catch((error1) => {
              console.log(error1);
              this.data_message = this.data_message + "ID信息获取失败\n结束.\n";
            });
        })
        .catch((error) => {
          console.log(error);
          this.data_message = this.data_message + "UUID获取失败\n结束.\n";
        });
    },
  },
};
</script>
    
<style lang=less scoped>
main {
  width: 100%;
  height: calc(100% - 82px);
  padding: 10px;
  overflow: auto;

  .canvasskin {
    position: relative;
    margin: 10px 0;
    width: 300px;
    height: 400px;
    border: 1px solid rgba(126, 126, 126, 0.5);
    border-radius: 5px;

    #skin_container {
      border-radius: 5px;
    }

    .canvasskin_pause {
      position: absolute;
      bottom: 10px;
      right: 10px;
      border: 1px solid rgba(126, 126, 126, 0.5);
      padding: 3px;
      border-radius: 50%;
      height: 28px;
      width: 28px;
      line-height: 28px;
      text-align: center;

      div {
        font-size: 18px;
      }
    }

    .availableAnimations {
      position: absolute;
      top: 10px;
      right: 10px;
      border: 1px solid rgba(126, 126, 126, 0.5);
      padding: 3px;
      border-radius: 50%;
      height: 28px;
      width: 28px;
      line-height: 28px;
      text-align: center;

      div {
        font-size: 25px;
      }
    }

    .skinlayers {
      width: 60px;
      position: absolute;
      top: 10px;
      left: 10px;

      * {
        display: flex;
        justify-content: center;
      }

      .skin_head {
        margin: 2px;
        width: 20px;
        height: 20px;
        border: 1px solid rgba(139, 139, 139, 0.6);

        div {
          width: 100%;
          height: 100%;
          background-color: rgba(120, 120, 120, 0.43);
        }
      }

      .skin_left_arm,
      .skin_right_arm {
        margin: 2px;
        min-width: 10px;
        height: 35px;
        border: 1px solid rgba(139, 139, 139, 0.6);

        div {
          min-width: 10px;
          height: 35px;
          background-color: rgba(120, 120, 120, 0.43);
        }
      }

      .skin_body {
        margin: 2px;
        min-width: 20px;
        border: 1px solid rgba(255, 255, 255, 0.6);

        div {
          min-width: 20px;
          background-color: rgba(120, 120, 120, 0.43);
        }
      }

      .skin_left_leg,
      .skin_right_leg {
        margin: 2px;
        width: 10px;
        height: 35px;
        border: 1px solid rgba(255, 255, 255, 0.6);

        div {
          width: 10px;
          height: 35px;
          background-color: rgba(120, 120, 120, 0.43);
        }
      }
    }
  }

  .shows {
    margin: 10px;
    width: 154px;

    textarea {
      padding: 2px;
      width: 137px;
      height: 396px;
      border-radius: 3px;
      border: 1px solid rgba(125, 125, 125, 0.5);
      resize: none;
      font-family: "opposans";
      background-color: #ffffff00;
    }
  }

  .show_skin,
  .show_cape {
    border: 1px solid rgba(255, 255, 255, 0.5);
    width: 64px;
    height: 64px;
    margin: 5px;
    border-radius: 5px;
    padding: 2px;
  }

  .lists_skin {
    display: flex;
    flex-wrap: wrap;

    .list_skin {
      border: 1px solid rgba(125, 125, 125, 0.5);
      border-radius: 5px;
      margin: 2px;
      padding: 2px;
      width: 64px;

      img {
        width: 64px;
        height: 64px;
      }

      h2 {
        text-align: center;
        font-size: 12px;
        overflow: hidden;

      }
    }
  }

  .card {
    position: relative;
    display: flex;
    margin: 3px 0;
    width: calc(100% - 20px);
    height: 28px;

    button {
      width: 100px;
      border: 1px solid rgb(126, 126, 126);
      border-radius: 3px;
      margin: 0 5px;
    }

    button:hover {
      background-color: rgba(132, 132, 132, 0.2);
    }

    h2 {
      min-width: 60px;
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
      padding: 1px;
      border: 0;
      width: 100%;
      border-radius: 3px;
      height: 24px;
      transition: all 0.3s;
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