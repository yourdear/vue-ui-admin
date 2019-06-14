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
            const obj1 = {
                name: 'sj'
            }
            const obj2 = {
                age: 25
            }
            const newobj = Object.assign({},obj1)
            newobj.name = 'zs'
            console.log(newobj) //{name:'sj',age: 25}
            console.log(obj1) //{name:'sj',age: 25}
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
