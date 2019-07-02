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
            // reduce接受两个参数,
            const arr = [1,2,3,4,5]
            let result = arr.reduce((firstChild, currentValue, index, arr)=>{
                console.log(currentValue)
                console.log(index)
                console.log(arr)
                return firstChild + currentValue
            },6)
            console.log(result)
        }
    }
</script>
<style lang="stylus" scoped>

</style>