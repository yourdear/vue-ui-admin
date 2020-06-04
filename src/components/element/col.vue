<template>
    <div>
        <el-row>
            <el-col :span="num">111</el-col>
            <el-col :span="num">222</el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "col.vue",
        data() {
            return {
                num: 12
            }
        }
    }
</script>

<style scoped>

</style>