<template>
<!--指令测试-->
    <div >
        <div @click="changeStatus">换状态</div>
        <div style="width: 500px;height: 500px" v-bgType="status"></div>
    </div>
</template>

<script>
    import bgType from '../../directs/bgType.js'
    export default {
        name: "directs",
        data() {
            return {
                status: 'init'
            }
        },
        methods: {
            changeStatus(){
                this.status = 'noData'
            }
        },
        directives: {
            bgType
        },

    }
</script>

<style scoped>

</style>
