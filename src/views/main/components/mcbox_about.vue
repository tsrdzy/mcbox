<template>
  <div class="about main_main">
    <h2>制作者:</h2>
    <hr />
    <div
      class="about_author"
      @click="
        openwww(
          'https://qm.qq.com/cgi-bin/qm/qr?k=FXkKihswoUe0DOGX5IABo42OEedbGEoQ&jump_from=webapi&authKey=ijTZkFbd1Z6xFwn9pC56lmQcC8DqdLpJLrw6wWKPVUeQmtuOsYMIAGIAaSxBHodi'
        )
      "
    >
      <div class="about_author_head">
        <img src="../../../../public/img/main/dzy.png" alt="dzy" />
      </div>
      <div class="about_author_content">
        <h2>dzy</h2>
        <h3>MCBOX作者</h3>
      </div>
    </div>
    <br />
    <h2>鸣谢:</h2>
    <hr />
    <div style="display: flex; felx-wrap: wrap">
      <div
        class="about_author"
        @click="openwww('https://zhangshenxing.gitee.io/vanillamodtutorial/')"
      >
        <div class="about_author_head">
          <img src="../../../../public/img/main/ruhuasiyu.png" alt="dzy" />
        </div>
        <div class="about_author_content">
          <h2>ruhuasiyu</h2>
          <h3>原版模组入门教程</h3>
        </div>
      </div>
      <div class="about_author" @click="openwww('https://www.mcmod.cn/')">
        <div class="about_author_head">
          <img src="../../../../public/img/main/mcmod.png" alt="dzy" />
        </div>
        <div class="about_author_content">
          <h2>mc百科</h2>
          <h3>mcmod.cn</h3>
        </div>
      </div>
      <div class="about_author" @click="openwww('https://github.com/bs-community/skinview3d?tab=readme-ov-file')">
        <div class="about_author_head">
          <img src="../../../../public/img/main/github.png" alt="dzy" />
        </div>
        <div class="about_author_content">
          <h2>skinview3d</h2>
          <h3>3D皮肤展示</h3>
        </div>
      </div>
    </div>
    <br />
    <h2>相关链接:</h2>
    <hr />
    <div style="display: flex; flex-wrap: wrap">
      <div class="about_author" @click="openwww('mailto:420792287@qq.com')">
        <div class="about_author_head">
          <img src="../../../../public/img/main/bug.png" alt="dzy" />
        </div>
        <div class="about_author_content">
          <h2>建议&BUG反馈</h2>
          <h3>找虫专家</h3>
        </div>
      </div>
      <div class="about_author" @click="openwww('')">
        <div class="about_author_head">
          <img src="../../../../public/img/main/wiki.png" alt="dzy" />
        </div>
        <div class="about_author_content">
          <h2>MCBOX WIKI</h2>
          <h3>不会用?</h3>
        </div>
      </div>
      <div
        class="about_author"
        @click="openwww('https://github.com/tsrdzy/mcbox')"
      >
        <div class="about_author_head">
          <img src="../../../../public/img/main/github.png" alt="dzy" />
        </div>
        <div class="about_author_content">
          <h2>github</h2>
          <h3>github开源地址</h3>
        </div>
      </div>
      <div
        class="about_author"
        @click="openwww('https://gitee.com/mctsr/mcbox')"
      >
        <div class="about_author_head">
          <img src="../../../../public/img/main/gitee.png" alt="dzy" />
        </div>
        <div class="about_author_content">
          <h2>gitee</h2>
          <h3>gitee开源地址</h3>
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
    <footer><h2>Copyright © 2017-2024 mcbox. All rights reserved.</h2></footer>
  </div>
</template> 

<script>
const { shell } = window.require("electron");
export default {
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
  width: 100%;
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
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 5px 0;
      }
    }
    .about_author_content {
      height: 60px;
      h2 {
        line-height: 30px;
      }
      h3 {
        line-height: 30px;
        font-size: 12px;
      }
    }
  }
  .about_author:hover {
    border: 1px solid #fff;
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