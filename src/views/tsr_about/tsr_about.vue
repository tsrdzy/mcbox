<template>
  <div id="about" class="about main_main">
    <div class="card" :key="listsx" v-for="listsx in lists">
      <h2>{{ listsx.id }}:</h2>
      <hr />
      <div style="display: flex;felx-wrap: wrap">
        <div :key="listsxlist" v-for="listsxlist in listsx.list" class="about_author" @click="
          openwww(listsxlist.url)
          ">
          <div class="about_author_head">
            <h2 class="iconfont logo" v-html="listsxlist.icon"></h2>
          </div>
          <div class="about_author_content">
            <h2>{{ listsxlist.name }}</h2>
            <h3>{{ listsxlist.introduce }}</h3>
          </div>

        </div>
      </div>
    </div>

    <br />
    <h2>赞助名单:</h2>
    <hr />
    <div style="display: flex; felx-wrap: wrap">
      <p>空空如也~</p>
    </div>
    <br />
    <h2>更新日志:</h2>
    <hr />
    <div style="display: flex; felx-wrap: wrap">

    </div>
    <br />
    <footer>
      <h2>Copyright © 2017-2024 mcbox. All rights reserved.</h2>
    </footer>
  </div>
</template> 

<script>
const { shell } = window.require("electron");
export default {
  components: {
  },
  data() {
    return {
      lists: [
        {
          id: '制作者',
          list: [
            {
              name: 'dzy',
              introduce: 'MCBOX作者',
              icon: "&#xe887;",
              url: "https://qm.qq.com/cgi-bin/qm/qr?k=FXkKihswoUe0DOGX5IABo42OEedbGEoQ&jump_from=webapi&authKey=ijTZkFbd1Z6xFwn9pC56lmQcC8DqdLpJLrw6wWKPVUeQmtuOsYMIAGIAaSxBHodi"
            },
            {
              name: 'QQ交流群',
              introduce: 'MineCraft交流群',
              icon: "&#xe887;",
              url: "https://qm.qq.com/cgi-bin/qm/qr?k=FXkKihswoUe0DOGX5IABo42OEedbGEoQ&jump_from=webapi&authKey=ijTZkFbd1Z6xFwn9pC56lmQcC8DqdLpJLrw6wWKPVUeQmtuOsYMIAGIAaSxBHodi"
            },
          ]
        },
        {
          id: '鸣谢',
          list: [
            {
              name: 'Blockbench',
              introduce: 'MineCraft建模软件',
              icon: "&#xe605;",
              url: "https://www.blockbench.net/"
            },
            {
              name: 'Blender',
              introduce: '建模软件',
              icon: "&#xeb50;",
              url: "https://www.blender.org/"
            },
            {
              name: '原版模组入门教程',
              introduce: '作者:ruhuasiyu',
              icon: "&#xe62a;",
              url: "https://zhangshenxing.github.io/VanillaModTutorial/"
            },
            {
              name: 'MC百科',
              introduce: 'MC资源站',
              icon: "&#xe62a;",
              url: "https://www.mcmod.cn/"
            },
            {
              name: 'skinview3d',
              introduce: '3D皮肤展示开源库',
              icon: "&#xe7ab;",
              url: "https://github.com/bs-community/skinview3d?tab=readme-ov-file"
            },
            {
              name: 'MinecraftColorCodes',
              introduce: 'MC字体颜色转换开源库',
              icon: "&#xe7ab;",
              url: "https://github.com/FoxInFlame/MinecraftColorCodes"
            },
          ]
        },
        {
          id: '相关链接',
          list: [
            {
              name: '建议&反馈',
              introduce: '邮箱',
              icon: "&#xe608;",
              url: "mailto:420792287@qq.com"
            },
            {
              name: 'MCBOX WIKI',
              introduce: '不会用?点我!',
              icon: "&#xe7ab;",
              url: ""
            },
            {
              name: 'github开源地址',
              introduce: '开源',
              icon: "&#xe7ab;",
              url: ""
            },
            {
              name: 'gitee开源地址',
              introduce: '开源',
              icon: "&#xe686;",
              url: ""
            },
          ]
        },
      ]
    }
  },
  methods: {
    openwww(url) {
      shell.openExternal(url);
    },
  },
};
</script>

<style lang="less">
.about {
  overflow: auto;
  height: calc(100% - 84px);
  position: relative;
  width: calc(100% - 20px);
  padding: 10px;

  .about_author {
    width: 185px;
    display: flex;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    height: 60px;
    margin: 10px 5px;

    .about_author_head {
      margin: 0 10px 0 0;
      border-radius: 50%;

      img,
      .logo {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 40px;
        margin: 10px 0 10px 5px;
      }

      .logo {
        line-height: 40px;
        text-align: center;
      }
    }

    .about_author_content {
      height: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      h2 {
        line-height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      h3 {
        line-height: 30px;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .about_author:hover {
    border: 1px solid #8282827e;
    box-shadow: 0 0 2px #8282827e;
  }

  hr {
    border: 0;
    margin: 5px 0px;
    height: 1px;
    border-top: 1px solid rgb(125, 125, 125);
    width: 100%;
  }

  footer {
    position: absolute;
    left: 50%;
    font-size: 10px;
    transform: translate(-50%, -50%);
  }
}
</style>