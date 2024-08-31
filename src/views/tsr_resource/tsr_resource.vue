<template>
    <div id="resource">
        <tsr_nav :listss="this.lists"></tsr_nav>
        <router-view></router-view>
    </div>
</template>
  
<script>
import tsr_nav from '@/components/module/tsr_nav.vue'
export default {
    components: {
        tsr_nav
    },
    data() {
        return {
            lists: [
                {
                    name: "原创资源",
                    com: [
                        ['MCBOX 模型库', '/resource/models', 0, 'MCALL'],
                        ['生电&红石资料库', '', 0, 'MCALL'],
                    ]
                },
                {
                    name: "网络资源",
                    com: [
                        ['服务端核心', '/resource/servercore', 0, 'MCALL'],
                        ['客户端核心', '', 0, 'MCALL'],
                        ['模组搜索', '', 0, 'MCALL'],
                        ['插件搜索', '', 0, 'MCALL'],
                        ['材质搜索', '', 0, 'MCALL'],
                    ]
                },
            ]
        }
    }
}
</script>
  
<style lang="less" scoped>
#resource {
    height: calc(100% - 60px);
}
</style>