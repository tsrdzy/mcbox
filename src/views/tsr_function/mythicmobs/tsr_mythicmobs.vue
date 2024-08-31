<template>
  <div id="mythicmobs">
    <yn_nav></yn_nav>
    <main>
      <yn_filenav></yn_filenav>
      <div class="set_main">
        <router-view />
        <yn_show></yn_show>
      </div>
    </main>
  </div>
</template>
  
<script>
import yn_nav from "./yn_nav.vue";
import yn_filenav from "./yn_filenav.vue";
import yn_show from "./yn_show.vue";
export default {
  components: {
    yn_nav,
    yn_filenav,
    yn_show,
  },
  data() {
    return {

    };
  },
  mounted() {
    this.colorshow = this.$store.state.colorshow;
  },
  computed: {
    listData() {
      return this.$store.state.colorshow;
    },
  },
  watch: {
    listData(newVal) {
      this.colorshow = newVal;
    },
  },
};
</script>
  
<style lang="less">
#mythicmobs {
  width: 100%;
  height: 100%;
  main {
    display: flex;
    height: calc(100% - 100px);
    width: 100%;
  }
  .set_main {
    width: 100%;
    height: auto;
    display: flex;
    .set {
      min-width: 50%;
      max-width: 50%;
    }
  }
  .cards {
    .card {
      display: flex;
      margin: 5px 0;
      position: relative;
      .card_title {
        min-width: 70px;
        max-width: 70px;
        height: 30px;
        line-height: 30px;
      }
      input,
      select {
        border-radius: 5px;
        width: 100%;
        border: 0;
        outline: none;
        padding: 5px;
        font-family: "opposans";
      }
      .hint {
        font-size: 22px;
        height: 30px;
        min-width: 30px;
        max-width: 30px;
        line-height: 30px;
        text-align: center;
      }
      .open_select {
        height: 30px;
        min-width: 30px;
        max-width: 30px;
        line-height: 30px;
        text-align: center;
        position: absolute;
        right: 30px;
      }
    }
    .card_button {
      display: flex;
      justify-content: space-between;
      width: calc(100% - 100px);
      margin-left: 70px;
      button {
        height: 34px;
        min-width: 180px;
        max-width: 300px;
        border-radius: 5px;
        font-weight: bolder;
        transition: all 0.1s;
      }
    }
    .card_table {
      width: calc(100% - 30px);
      margin: 5px 0;
      table {
        width: calc(100% - 70px);
        margin-left: 70px;
        table-layout: fixed;
        text-align: center;
        td {
          overflow: auto;
          white-space: nowrap;
          width: 80%;
        }
        .th_left {
          width: 80%;
        }
        .th_right {
          width: 20%;
        }
        tr,
        th,
        td {
          button {
            width: 80%;
            border-radius: 5px;
          }
        }
        td::-webkit-scrollbar {
          width: 8px;
          height: 6px;
        }
      }
    }
  }
}
</style>
  