<template>
  <div id="servercore">
    <div class="nav"></div>
    <div class="cards">
      <div
        :key="listsx"
        v-for="listsx in lists"
        class="card"
        v-on:click="openwww(listsx.link)"
      >
        <h2>
          {{ listsx.english_name }}<i>[{{ listsx.versions }}]</i>
        </h2>
        <hr />
        <div style="overflow-x: scroll">
          <h3>介绍:</h3>
          <P>{{ listsx.intro }}</P>
          <h3>优势:</h3>
          <ul>
            <li :key="advantagex" v-for="advantagex in listsx.advantage">
              ·{{ advantagex }}
            </li>
          </ul>
          <h3>劣势:</h3>
          <ul>
            <li
              :key="disadvantagex"
              v-for="disadvantagex in listsx.disadvantage"
            >
              ·{{ disadvantagex }}
            </li>
          </ul>
          <h3>
            插件支持:<b>{{ listsx.public ? "是" : "否" }}</b>
          </h3>
          <h3>
            模组支持:<b>{{ listsx.mod ? "是" : "否" }}</b>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { shell } = window.require("electron");
export default {
  data() {
    return {
      lists: [
        {
          english_name: "MineCraft_Server",
          chinese_name: "我的世界官方服务器核心",
          intro:
            "Mojang官方制作的原版服务端，其更新速度非常快，基本上与Minecraft客户端版本同时发布。它不支持安装任何Mod和插件，仅允许使用原版的命令和物品，非常适合朋友间联机使用。",
          advantage: [
            "配置简单：原版服务端配置相对简单，适合初学者使用。",
            "特性同步：与原版Minecraft客户端特性完全同步，保证游戏体验的一致性。",
          ],
          disadvantage: [
            "不兼容插件：无法安装任何插件，限制了服务器的扩展性。",
            "存在安全问题：由于没有插件支持，可能面临一些安全威胁。",
            "NCP功能弱：网络控制功能相对较弱，可能无法有效应对复杂网络情况。",
          ],
          star: 6,
          versions: "全版本",
          public: false,
          mod: false,
          link: "https://www.minecraft.net/en-us/download/server",
        },
        {
          english_name: "Akarin",
          chinese_name: "",
          intro:
            "Akarin是一款支持多线程的Minecraft服务端核心，来自“新维度”团队，其前身是TorchSpigot服务端。Akarin致力于提供高效、稳定的服务器体验，同时支持Spigot能使用的几乎所有插件，为Minecraft服务器运营者提供了丰富的功能和灵活性。",
          advantage: [
            "多线程支持：Akarin支持多线程，能够在多核CPU上更好地利用硬件资源，提高服务器的处理能力和响应速度。",
            "插件兼容性强：作为Spigot的分支，Akarin继承了Spigot对插件的良好兼容性，使得大部分Spigot插件都可以在Akarin上运行。",
            "性能优化：Akarin在Spigot的基础上进行了进一步的性能优化，提升了服务器的TPS（每秒事务处理量）等关键性能指标。",
          ],
          disadvantage: [
            "版本稳定性：在某些新版本上，如1.13.2版本，Akarin可能还未完全稳定，存在一些bug，这需要在选择版本时特别注意。",
            "社区支持：相比Spigot等主流服务端核心，Akarin的社区支持和文档可能相对较少，对于新手来说可能需要更多的自学和探索。",
          ],
          star: 7,
          versions: "1.12.2-1.16.5",
          public: true,
          mod: false,
          link: "https://github.com/Akarin-project/Akarin",
        },
        {
          english_name: "BungeeCord",
          chinese_name: "",
          intro:
            "BungeeCord是一个高性能的反向代理服务端，专为Minecraft设计。它的主要功能是将多个Minecraft服务器连接成一个“群组服务器”，允许玩家在多个子服务器之间无缝切换，同时降低CPU负荷并充分利用多核CPU资源。通过分散玩家到不同的子服务器，BungeeCord还能提升整体负载能力，增强游戏体验。",
          advantage: [
            "跨服连接：BungeeCord允许玩家在不同子服务器之间自由切换，无需重新登录，提升了游戏的连贯性和流畅度。",
            "负载均衡：通过将玩家分散到多个子服务器，BungeeCord能够有效降低单个服务器的负载，提高整体稳定性。",
            "资源利用：支持多核CPU的充分利用，提高服务器资源的利用效率。",
          ],
          disadvantage: [
            "配置复杂：相对于一些简单的服务端核心，BungeeCord的配置可能稍显复杂，需要一定的技术基础。",
            "依赖子服务器：BungeeCord本身不提供游戏内容，完全依赖于其子服务器，因此子服务器的稳定性和性能直接影响整个群组服务器的表现。",
          ],
          star: 8,
          versions: "1.4+",
          public: false,
          mod: false,
          link: "https://www.spigotmc.org/wiki/bungeecord/",
        },
        {
          english_name: "Akarin",
          chinese_name: "",
          intro: "",
          advantage: ["", "", ""],
          disadvantage: ["", "", ""],
          star: 7,
          versions: "",
          public: false,
          mod: false,
          link: "",
        },
        {
          english_name: "Akarin",
          chinese_name: "",
          intro: "",
          advantage: ["", "", ""],
          disadvantage: ["", "", ""],
          star: 7,
          versions: "",
          public: false,
          mod: false,
          link: "",
        },
        {
          english_name: "Akarin",
          chinese_name: "",
          intro: "",
          advantage: ["", "", ""],
          disadvantage: ["", "", ""],
          star: 7,
          versions: "",
          public: false,
          mod: false,
          link: "",
        },
      ],
    };
  },
  methods: {
    openwww(url) {
      shell.openExternal(url);
    },
  },
};
</script>

<style lang="less" scoped>
#servercore {
  width: 100%;
  height: 100%;
  .cards {
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .card {
      padding: 5px;
      width: 600px;
      white-space: nowrap;
      height: auto;
      border: 1px solid #66666680;
      box-shadow: 0 0 1px #66666680;
      margin: 10px;
      border-radius: 5px;
      h2,
      h3 {
        font-weight: bold;
        text-shadow: 0 0 5px #72727277;
        font-size: 16px;
      }
      h2 {
        font-size: 20px;
        height: 30px;
        line-height: 30px;
        width: 100%;
        text-align: center;
      }
    }
    .card:hover {
      box-shadow: 0 0 10px #66666680;
      background-color: #0000000a;
    }
  }
}
</style>