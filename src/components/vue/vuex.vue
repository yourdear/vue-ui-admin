<template>
    <div>
        <div>
            <div>同步</div>
            <el-button @click="addH">+</el-button>
            <el-button @click="reduceH">-</el-button>
        </div>
        <div>
            <div>异步</div>
            <el-button @click="anyscreduceH">-</el-button>
        </div>
        <div>{{count}}</div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {

            }
        },
        computed: {
            count(){
                return this.$store.state.app.pageCount
            }
        },
        methods: {
            addH() {
                this.$store.commit('app/CHANGEPAGECOUNT')
            },
            reduceH() {
                this.$store.commit('app/CHANGEDATA')
            },
            anyscreduceH() {

                this.$store.dispatch('app/AYSNCCHANGEDATA')
            },
        }
    }
</script>
<style lang="scss" scoped>

</style>
