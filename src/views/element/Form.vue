<template>
  <div>
    <el-form ref="form"
             :inline="true"
             :model="formdata">
      <el-form-item label="姓名">
        <el-input v-model="formdata.name" />
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="formdata.age" />
      </el-form-item>
      <el-form-item>
        <el-button @click="resetParam">重置</el-button>
      </el-form-item>
    </el-form>
    <!--        <loader vueName="@/components/element/Form.vue"></loader>-->
    <component :is="name.default" />
  </div>
</template>

<script>
// import loader from './loader'
export default {
  name: '',
  components: {
    // loader
  },
  data() {
    return {
      formdata: {
        name: '',
        age: ''
      },
      name: ''
    }
  },
  created() {
    this.name = require('@/views/element/table')
    // console.log(require('@/components/element/table'))
  },
  methods: {
    resetParam() {
      console.log(this.$refs.form)
      this.$refs.form.resetFields()
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
