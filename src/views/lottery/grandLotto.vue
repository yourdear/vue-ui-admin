<template>
  <div>
    <el-button @click="getLottoNumber">随机</el-button>
    <two :testData="testData"></two>
  </div>
</template>
<script>
import two from './twoColorBall'
export default {
  name: 'Lotto',
  components: {
    two
  },
  data() {
    return {
      testData: {
        name: 'zs',
      }
    }
  },
  watch: {
    testData: {
      deep: true,
      handler(val) {
        console.log(val)
      }
    }
  },
  methods: {
    getLottoNumber() {
      const lotto = [[], []]
      const frontAra = lotto[0]
      const backAra = lotto[1]
      for (let i = 0; i < 7; i++) {
        if (frontAra.length < 5) {
          const number = Math.ceil(Math.random()*35)
          frontAra.push(number)
        } else {
          const number = Math.ceil(Math.random()*12)
          backAra.push(number)
        }
      }
      const frontAraLength = Array.from(new Set(frontAra)).length
      const backAraLength = Array.from(new Set(backAra)).length
      if(frontAraLength === 5 && backAraLength === 2) {
        console.log(lotto[0])
        console.log(lotto[1])
      } else {
        this.getLottoNumber()
      }
    }
  }
}
</script>
