<template>
    <div class="left">
        <div class="logo">logo</div>
        <div class="search-router">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <ul class="router-ul">
            <li v-for="item in liname" :key="item.name" class="router-li">
                {{item.name}}
                <div v-for="list in item.children" :key="list.name" class="router-wrapper">
                    <router-link  :to="item.path + '/' + list.path">{{list.name}}</router-link>
                </div>

            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input: '',
                liname: []
            }
        },
        methods: {},
        created() {
            let routerArr = this.$router.options.routes
            let j = 0
            for (let item of routerArr) {
                if (item.path === '/' || item.path === '/login') {
                    continue
                }
                this.liname.push({name: item.name,path: item.path, children: []})
                let routerChildren = item?.children
                if (routerChildren) {
                    let i = 0
                    for (i; i < routerChildren.length; i++) {
                        this.liname[j].children.push(routerChildren[i])
                    }
                    j++
                }
            }
            console.log(this.liname[0].children)
        },
        mounted() {

        },

    }
</script>

<style lang="stylus">
    .el-input__inner
        background-color #3C3F4E
        border none
        border-radius 2px

</style>

<style scoped lang="stylus">
    .left
        position fixed
        top 0
        left 0
        width 220px
        height 100%
        background #2A303E
        .logo
            width 100%
            height 81px
            background cadetblue
            color #fff
            font-size 24px
            text-align center
            line-height 81px
        .search-router
            margin 10px 10px
        .router-ul
            .router-li
                color #727888
                margin-left 20px
                .router-wrapper
                    a
                        text-decoration none
                        color: #fff

</style>
