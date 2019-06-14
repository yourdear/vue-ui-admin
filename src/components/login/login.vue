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
            let obj = {
                name: 'lilei',
                age: 28,
                pingjia:{
                    good: 25,
                    bad: 44
                }
            }
            let copy = Object.assign({},obj)
            //这个时候会拷贝第一层的值，但是对象里面的对象是浅拷贝，拷贝的是引用，测试一下
            copy.name = 'laowang'
            copy.age = 28
            copy.pingjia.good = 55
            console.log(obj)
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
