<template>
  <main>
    <div class="nav">
      <h2>类型:</h2>
      <ul>
        <li
          :style="
            typess == 'creature'
              ? 'background-color:#00000025;color:#aaa'
              : 'background-color:#ffffff00'
          "
          v-on:click="type('creature')"
        >
          生物模型
        </li>
        <li
          :style="
            typess == 'weapon'
              ? 'background-color:#00000025;color:#aaa'
              : 'background-color:#ffffff00'
          "
          v-on:click="type('weapon')"
        >
          武器装备
        </li>
        <li
          :style="
            typess == 'item'
              ? 'background-color:#00000025;color:#aaa'
              : 'background-color:#ffffff00'
          "
          v-on:click="type('item')"
        >
          物品道具
        </li>
        <li
          :style="
            typess == 'decorate'
              ? 'background-color:#00000025;color:#aaa'
              : 'background-color:#ffffff00'
          "
          v-on:click="type('decorate')"
        >
          装饰建筑
        </li>
      </ul>
    </div>
    <div id="main"></div>
    <div class="main_title">
      <n-space vertical>
        <n-pagination
          v-on:click="model_set(this.typess)"
          v-model:page="page"
          :page-count="Math.ceil(this.model_length / 12)"
        />
      </n-space>
    </div>
  </main>
</template>

<script>
import * as THREE from "three"; //three本体
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; //GLTF读取器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; //轨道控制器
import { NSpace, NPagination } from "naive-ui";

const fs = window.require("fs");
export default {
  components: {
    NSpace,
    NPagination,
  },
  data() {
    return {
      model_length: 0,
      page: null,
      old_page: null,
      url: "",
      typess: "weapon",
      old_typess: "",
    };
  },
  mounted() {
    this.type(this.typess);
  },
  methods: {
    model(
      url,
      id,
      [camera_x, camera_y, camera_z],
      [model_x, model_y, model_z]
    ) {
      // 获取页面上的canvas元素
      const canvas = document.getElementById("model" + id);
      // 创建一个透视相机
      canvas.width = 300;
      const camera = new THREE.PerspectiveCamera(
        60,
        canvas.width / canvas.height,
        0.1,
        1000
      );
      // 创建一个新的场景
      const scene = new THREE.Scene();
      // 创建一个GLTFLoader实例用于加载GLTF模型
      const gltfLoader = new GLTFLoader();
      let mixer;
      let clock = new THREE.Clock(); // 创建一个时钟对象
      // 使用gltfLoader加载模型
      gltfLoader.load(
        url + id + ".gltf",
        (gltf) => {
          // 获取加载的模型场景
          const model = gltf.scene;
          // 将模型绕y轴旋转180度（π弧度）
          model.rotation.y = Math.PI;
          if (gltf.animations && gltf.animations.length > 0) {
            mixer = new THREE.AnimationMixer(model);
            const action = mixer.clipAction(gltf.animations[0]);
            action.play(); // 开始播放动画
          }
          // 遍历模型中的所有子对象，如果是网格（Mesh），则调整其材质，解决模型为黑色的问题
          gltf.scene.traverse(function (child) {
            if (child.isMesh) {
              // 将材质的发射色设置为与颜色相同，这样即使没有光源也能看到颜色
              // child.material.emissive = child.material.color;
              // 如果材质有贴图，也将贴图设置为发射贴图（这一步可能不是必需的，取决于具体效果需求）
              child.material.emissiveMap = child.material.map;
            }
          });
          // 将模型添加到场景中

          scene.add(model);
          //显示模型的时候自动计算模型缩放比例
          //计算和世界轴对齐的一个对象 Object3D （含其子对象）的包围盒
          var bBox = new THREE.Box3().setFromObject(model);
          let height = bBox.max.y - bBox.min.y;
          var dist = height / (2 * Math.tan((camera.fov * Math.PI) / 360));
          model.scale.set(50 / dist, 50 / dist, 50 / dist);

          //   设置相机的位置
          camera.position.set(camera_x, camera_y, camera_z);

          // 设置模型位置
          model.position.set(model_x, model_y, model_z);
        },
        function (xhr) {
          console.log("加载进度" + xhr.loaded + "/" + xhr.total);
        },
        function (error) {
          // 如果加载过程中发生错误，则在控制台输出错误信息
          console.error("加载GLTF模型时发生错误:", error);
        }
      );
      // 创建一个WebGL渲染器，并将其与canvas元素关联

      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true, // 允许透明背景
      });
      // 环境光
      const directionalLight1 = new THREE.DirectionalLight(0xaaaaaa, 1); // 白色光，强度为1
      directionalLight1.position.set(2, 2, -1);
      scene.add(directionalLight1);

      const directionalLight2 = new THREE.DirectionalLight(0xaaaaaa, 5); // 白色光，强度为1
      directionalLight2.position.set(-2, 2, 1);
      scene.add(directionalLight2);

      const directionalLight3 = new THREE.DirectionalLight(0xaaaaaa, 0.2); // 白色光，强度为1
      directionalLight3.position.set(0, -2, 0);
      scene.add(directionalLight3);
      // 设置渲染器的像素比，确保在高清屏幕上也能清晰显示
      renderer.setPixelRatio(window.devicePixelRatio);
      // 设置渲染器的大小
      // renderer.setSize(canvas.width, canvas.height);
      renderer.setSize(360, 170);
      // 设置渲染器的输出编码为sRGB，以便更准确地显示颜色
      renderer.outputEncoding = THREE.sRGBEncoding;
      // 设置渲染器的背景色和透明度
      renderer.setClearColor(0x444444, 0.2);

      // 定义渲染循环函数(轨道控制器)
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;

      function animate() {
        requestAnimationFrame(animate); // 请求浏览器在下一次重绘之前调用animate函数
        if (mixer) {
          const delta = clock.getDelta(); // 使用时钟对象获取时间差
          mixer.update(delta);
          controls.update();
        }
        renderer.render(scene, camera); // 渲染场景和相机
      }
      // 启动渲染循环
      animate();
    },
    model_set(data) {
      if (this.page == null) {
        this.page = 1;
      }
      const _this = this;

      if (this.old_page == this.page && this.old_typess == this.typess) {
        return;
      }
      this.old_page = this.page;
      this.old_typess = this.typess;
      fs.readdir(this.url, (err, files) => {
        if (err) console.log(err);
        else {
          const canvas1 = document.getElementById("main");
          canvas1.innerHTML = "";
          _this.model_length = files.length;
          for (var i = (_this.page - 1) * 12; i < _this.page * 12; i++) {
            if (files[i] != "" && files[i] != null && files[i] != undefined) {
              const card = document.createElement("div");
              const canvas = document.createElement("canvas");
              card.id = "cards";
              canvas.id = "model" + files[i].substring(0, 6);
              const tsrh1 = document.createElement("h1");
              tsrh1.innerHTML = `UUID:` + files[i].substring(0, 6);
              card.appendChild(canvas);
              card.appendChild(tsrh1);
              canvas1.appendChild(card);
              if (data == "creature") {
                this.model(
                  _this.url,
                  files[i].substring(0, 6),
                  [-70, 60, 90],
                  [-20, -5, 0]
                );
              } else if (data == "weapon") {
                this.model(
                  _this.url,
                  files[i].substring(0, 6),
                  [-160, 80, 40],
                  [-20, -20, -10]
                );
              }
            }
          }
        }
      });
    },
    type(data) {
      var urls = "";

      if (process.env.NODE_ENV === "development") {
        //开发环境 do something
        urls =
          process.cwd() + "/public/MCBOX/resource/models/" + data + "/gltf/";
      } else {
        //生产环境 do something
        urls =
          process.cwd() +
          "/resources/public/MCBOX/resource/models/" +
          data +
          "/gltf/";
      }
      this.typess = data;
      this.url = urls;
      this.page = 1;
      this.model_set(this.typess);
    },
  },
};
</script>

<style lang="less">
main {
  width: auto;
  height: calc(100% - 60px);
  background-color: rgb(25, 25, 25);
  margin: 0;
  padding: 20px;
  user-select: none;

  .nav {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 10px;
    display: flex;
    box-shadow: 0 0 2px #fff;
    border-radius: 10px;
    padding: 0 5px;

    h2 {
      height: 40px;
      line-height: 40px;
      font-size: 16px;
    }

    ul {
      display: flex;
      height: 40px;
      line-height: 40px;

      li {
        // border: 1px solid #7a7a7a77;
        box-shadow: 0 0 3px #95959574;
        border-radius: 10px;
        margin: 5px 5px;
        height: 30px;
        line-height: 30px;
        padding: 0 15px;
      }

      li:hover {
        background-color: #7b7b7b30;
      }
    }
  }

  #main {
    height: calc(100% - 112px);
    margin: 0 auto;
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(3, 33%);
    grid-template-rows: repeat(4, 25%);
    max-width: 90%;
    border: 1px solid rgba(122, 122, 122, 0.5);
    border-radius: 20px;

    #cards {
      position: relative;
      width: 360px;
      height: 170px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      canvas {
        display: block;
        width: 360px;
        height: 170px;
        border-radius: 10px;
      }

      h1 {
        color: #aaa;
        position: absolute;
        width: 370px;
        height: 24px;
        top: calc(50% - 80px);
        left: calc(50% - 175px);
        z-index: 8;
        font-size: 14px;
        line-height: 24px;
      }
    }
  }

  .main_title {
    height: 40px;
    width: auto;

    .n-pagination {
      display: flex;
      justify-content: center;
      margin: 20px auto;
    }
  }
}
</style>