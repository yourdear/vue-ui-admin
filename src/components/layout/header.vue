<template>
    <div class="header">
        <div class="split-line"></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        created() {

        },
        mounted() {

        },

    }
</script>

<style scoped lang="stylus">
    .header
        position fixed
        top 0
        left 220px
        width calc(100% - 220px)
        height 65px
        background #3D4A5D
        box-shadow 0 1px #959BA7
        z-index 2
        .split-line
            height 100%
            width 2px
            background #5592EB
</style>
