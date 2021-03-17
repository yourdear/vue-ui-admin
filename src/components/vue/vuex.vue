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
        <div>{{test}}</div>
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
            },
            test() {
                return this.$store.state.test.pageTest
            }
        },
        methods: {
            addH() {
                this.$store.commit('app/CHANGEPAGECOUNT')
                this.$store.commit('test/CHANGETEST')
            },
            reduceH() {
                this.$store.commit('app/CHANGEDATA')
            },
            anyscreduceH() {
                this.$store.dispatch('app/AYSNCCHANGEDATA')
                this.$store.dispatch('test/AYSNCCHANGETEST')
            },
        }
    }
</script>
<style lang="scss" scoped>

</style>
