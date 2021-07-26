const fileStr = `
<template>
  <div class="box-wrapper">
    盒子
    <div class="box1" @click="test1"></div>
    <div class="box2" @click="test2"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    test1() {
      console.log('test1')
    },
    test2() {
      console.log('test2')
    }
  }
}
</script>
<style>

 .box-wrapper  .box1 {
    width: 100px;
    height: 100px;
    background-color: #6492ff;
  }
 .box-wrapper  .box2 {
    width: 100px;
    height: 100px;
    background-color: #0085c5;
  }

</style>
`
export { fileStr }
