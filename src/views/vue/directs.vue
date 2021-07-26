<template>
  <!--指令测试-->
  <div>
    <div @click="changeStatus">换状态</div>
    <div v-bgType="status"
         style="width: 500px;height: 500px" />
  </div>
</template>

<script>
import bgType from '../../directs/bgType.js'
export default {
  name: 'Directs',
  directives: {
    bgType
  },
  data() {
    return {
      status: 'init'
    }
  },
  methods: {
    changeStatus() {
      this.status = 'noData'
    }
  }

}
</script>

<style scoped>

</style>
