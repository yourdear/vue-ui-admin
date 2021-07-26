<template>
  <div>
    <el-button @click="changeValue">改变值</el-button>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      obj: {
        children: {
          title: '123'
        }
      }
    }
  },
  watch: {
    'obj.children.title'(newv, oldv) {
      console.log(newv, oldv)
    },
    obj: {
      handler(v) {
        console.log(v)
      },
      deep: true
    }
  },
  methods: {
    changeValue() {
      this.obj.children.title = '567'
    }

  }
}
</script>
<style lang="scss" scoped>

</style>
