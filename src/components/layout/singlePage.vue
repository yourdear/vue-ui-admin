<template>
    <div>
        <Header></Header>
        <Left></Left>
        <router-view></router-view>
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

<style scoped>

</style>
