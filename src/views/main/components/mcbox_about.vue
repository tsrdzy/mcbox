<template>
  <div class="about main_main">
    <h2>制作者:</h2>
    <hr />
    <div class="about_author">
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
      <div class="about_author">
        <div class="about_author_head">
          <img src="../../../../public/img/main/ruhuasiyu.png" alt="dzy" />
        </div>
        <div class="about_author_content">
          <h2>ruhuasiyu</h2>
          <h3>原版模组入门教程</h3>
        </div>
      </div>
      <div class="about_author">
        <div class="about_author_head">
          <img src="../../../../public/img/main/mcmod.png" alt="dzy" />
        </div>
        <div class="about_author_content">
          <h2>mc百科</h2>
          <h3>mcmod.cn</h3>
        </div>
      </div>
    </div>
    <br />
    <h2>相关链接:</h2>
    <hr />
    <div style="display: flex; flex-wrap: wrap">
      <div class="about_author">
        <div class="about_author_head">
          <img src="../../../../public/img/main/bug.png" alt="dzy" />
        </div>
        <div class="about_author_content">
          <h2>建议&BUG反馈</h2>
          <h3>找虫专家</h3>
        </div>
      </div>
      <div class="about_author">
        <div class="about_author_head">
          <img src="../../../../public/img/main/wiki.png" alt="dzy" />
        </div>
        <div class="about_author_content">
          <h2>MCBOX WIKI</h2>
          <h3>不会用?</h3>
        </div>
      </div>
      <div class="about_author">
        <div class="about_author_head">
          <img src="../../../../public/img/main/github.png" alt="dzy" />
        </div>
        <div class="about_author_content">
          <h2>github</h2>
          <h3>github开源地址</h3>
        </div>
      </div>
      <div class="about_author">
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
    <br>
    <footer><h2>Copyright © 2017-2024 mcbox. All rights reserved.</h2></footer>
  </div>
</template> 

<script>
export default {};
</script>

<style lang="less">
.about {
  overflow: auto;
  height: calc(100% - 84px);
  position: relative;
  width: 100%;
  padding: 10px;
  .about_author {
    width: 200px;
    display: flex;
    .about_author_head {
      margin: 0 10px 0 0;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
    .about_author_content {
      h3 {
        font-size: 12px;
      }
    }
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
    top: calc(100%+24px);
    font-size: 10px;
    transform: translate(-50%, -50%);
  }
}
</style>