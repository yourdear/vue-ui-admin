<template>
  <div>
    <div>递归深拷贝</div>
    <el-button @click="testMethods">
      测试
    </el-button>
    <div>
      {{result}}
    </div>
  </div>
</template>

<script>
  import { deepClone } from '../../utils/dealData'
  export default {
    data() {
      return {
        result: ''
      }
    },
    created() {},
    methods: {
      testMethods() {
        let obj = {
          name: 'zs',
          age: '22'
        }
        const arr = [1, 2, 3, [2,3,4], {name: 'zs'}, {age: [1,2,3]}]
        let arr1 = deepClone(arr)
        console.log(arr1)
        arr1[4].name = 'li'
        console.log(arr)
      }
    }
  }
</script>

<style scoped>

</style>
