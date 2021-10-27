<!--<template>-->
<!--  <div />-->
<!--</template>-->

<!--<script>-->
<!--import '@/mock'-->
<!--export default {-->
<!--  name: '',-->
<!--  data() {-->
<!--    return {}-->
<!--  },-->
<!--  created() {-->
<!--    // axios.post('/api/news').then(res=>{-->
<!--    //     console.log(res.data)-->
<!--    // })-->
<!--    this.$post('/api/news').then(res => {-->
<!--      console.log(res.data)-->
<!--    }-->
<!--    )-->
<!--  }-->
<!--}-->
<!--</script>-->
<!--<style lang="scss" scoped>-->

<!--</style>-->

<template>
  <el-button @click="getFile">获取文件</el-button>
</template>

<script>
export default {
  methods: {
    getFile() {
      getFileModel(params).then(res=> {})
    }
  }
}
</script>
