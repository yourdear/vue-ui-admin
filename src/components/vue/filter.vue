<template>
   <div>
       <div>{{10 | addNum(20, 30)}}</div>
       <div>{{'2019' | formatDate}}</div>
       <div>{{10 | testFilter(50)}}</div>
   </div>
</template>

<script>
    import testFilter from '@/utils/testFilters.js'
    export default {
        name: '',
        data() {
            return {
                num: 10
            }
        },
        filters: {
            formatDate(val) {
                return val + '年'
            },
            testFilter
        }
    }
</script>
<style lang="scss" scoped>

</style>
