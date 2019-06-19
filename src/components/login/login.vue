<template>
    <div class="login">
<!--        <el-button type="primary" @click="goIndex">登录跳转</el-button>-->
        <div class="wrapper">
            <div class="inner"></div>

        </div>
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
          if(new Boolean(false)){
              console.log('comein')
          }


        },
        mounted() {
            const obj = {
                person: {
                    intresting: {
                        read: 'xuanhuan'
                    }
                }
            }

            console.log(obj?.person?.intresting?.read)
        },

    }
</script>

<style scoped lang="stylus">
    .login
        display flex
        justify-content center
        align-items center
        .wrapper
            background cadetblue
            overflow auto
            .inner
                position sticky
                top 0
                height 200px
                background darkturquoise
</style>
