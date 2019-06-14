<template>
    <div class="login">
        <el-button type="primary" @click="goIndex">登录跳转</el-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {
            goIndex() {
                this.$router.push("/element/upload")
            }
        },
        created() {
            let a = 15
            function test() {
                console.log(a)
            }
            a = 10
            if (a) {
                test()
            }
        },
        mounted() {

        },

    }
</script>

<style scoped lang="stylus">
    .login
        display flex
        justify-content center
        align-items center
</style>
