<template>
  <div>
    <!--        第一种方式-->
    <el-input v-model="curValue" />
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  // 第一种方式
  computed: {
    curValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
