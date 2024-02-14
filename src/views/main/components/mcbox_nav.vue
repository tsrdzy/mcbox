<template>
  <div class="main_nav">
    <router-link to="/main/editor" active-class="main_nav_active">
      <div class="card"><i class="iconfont">&#xebb7;</i> 功能</div>
    </router-link>
    <router-link to="/main/resource" active-class="main_nav_active">
      <div class="card"><i class="iconfont">&#xe611;</i> 资源</div>
    </router-link>
    <router-link to="/main/about" active-class="main_nav_active">
      <div class="card"><i class="iconfont">&#xe7e8;</i> 关于</div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.main_nav {
  padding: 0 10px;
  width: 150px;
  .card {
    transition: all 0.2s;
    width: 140px;
    margin: 10px 0;
    font-size: 18px;
    border-radius: 5px;
    padding: 5px;
    i {
      font-size: 18px;
    }
  }
  .copyright {
    position: absolute;
    font-size: 12px;
  }
}
</style>