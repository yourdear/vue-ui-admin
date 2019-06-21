<template>
    <div>
        <Header></Header>
        <Left></Left>
        <router-view class="count"></router-view>
    </div>
</template>
<script>
    import Header from './header'
    import Left from './leftMenu'
    export default {
        data() {
            return {}
        },
        created() {

        },
        mounted() {

        },
        components: {
            Header,
            Left
        },
        methods: {

        },

    }
</script>

<style scoped lang="stylus">
    .count
        position absolute
        left 220px
        top 65px
        width calc(100% - 220px)
        height calc(100% - 65px)
        background: #EEEFF3


</style>
