<template>
    <div>
        <div class="loader">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        created() {
            const arr = ['admin', 'xiaoming', 'xiaohong', 'xiaomei']
            const newArr = arr.splice(3, 1, '小淘气','xiamomeiei')
            console.log(arr) //['admin', 'xiaoming', 'xiaohong', '小淘气']
            console.log(newArr) // ["xiaomei"]
        }
    }
</script>
<style lang="stylus" scoped>

</style>