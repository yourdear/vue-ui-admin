<template>
  <div>
    <el-button @click="getLottoNumber">乐透随机</el-button>
    <el-button @click="getshuangseqiuNumber">双色球随机</el-button>
    <div>{{ lotto[0] }}-{{ lotto[1] }}</div>
    <two :test-data="testData" />
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
      lotto: [[], []],
      testData: {
        name: 'zs'
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
          const number = Math.ceil(Math.random() * 35)
          frontAra.push(number)
        } else {
          const number = Math.ceil(Math.random() * 12)
          backAra.push(number)
        }
      }
      const frontAraLength = Array.from(new Set(frontAra)).length
      const backAraLength = Array.from(new Set(backAra)).length
      if (frontAraLength === 5 && backAraLength === 2) {
        this.lotto = lotto
      } else {
        this.getLottoNumber()
      }
    },
    getshuangseqiuNumber() {
      const lotto = [[], []]
      const frontAra = lotto[0]
      const backAra = lotto[1]
      for (let i = 0; i < 7; i++) {
        if (frontAra.length < 6) {
          const number = Math.ceil(Math.random() * 33)
          frontAra.push(number)
        } else {
          const number = Math.ceil(Math.random() * 16)
          backAra.push(number)
        }
      }
      const frontAraLength = Array.from(new Set(frontAra)).length
      const backAraLength = Array.from(new Set(backAra)).length
      if (frontAraLength === 6 && backAraLength === 1) {
        this.lotto = lotto
      } else {
        this.getshuangseqiuNumber()
      }
    }
  }
}
</script>
