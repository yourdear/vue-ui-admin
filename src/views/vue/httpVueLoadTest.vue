<template>
  <div id="my-app">
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data() {
    return {
      componentName:''
    }
  },
  created() {

   this.componentName = httpVueLoader('borserImportCom.vue')
    console.log(this.componentName)
    Vue.component('testh', this.componentName)
  }
}
</script>
