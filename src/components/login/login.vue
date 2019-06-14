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
            const arr1 = [3,5,5]
            const arr2 = [6,7,8]
            const arr3 = [[9,10,11],12]
            const arr = arr1.concat(arr2,arr3)
            arr[6][0] = 10

            console.log(arr1) //[3,5,5]
            console.log(arr2) //[6,7,8]
            console.log(arr3) //[[10,10,11],12]
            arr3[0][0] = 9
            console.log(arr) // [3,5,5,6,7,8,[9,10,11],12]
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
