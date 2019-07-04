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
            const arr = [{name: 'zs'},{name: 'ls'}]
            arr.map((item) => {
                item.age = 23
                // return item
            })
             // console.log(newArr) // [{name: "zs", age: 23}, {name: "ls", age: 23}]
             console.log(arr) // [{name: "zs", age: 23}, {name: "ls", age: 23}]
             // console.log(arr === newArr) //虽然值完全相等，但是他们指向不同的内存地址，所以是不相等的

        }
    }
</script>
<style lang="stylus" scoped>

</style>