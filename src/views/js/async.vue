<template>
  <div>
    <div>{{ num }}</div>
    <div>输出顺序--111，222，333，444</div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      num: '初始化中'
    }
  },
  mounted() {
    // async语法  async function test() {}
    // async 修饰函数表明当前函数是异步函数，调用async修饰的函数后，在后面打印一句话，会发现打印的话会先执行
    // async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。
    // async通常配合await使用
    // await语法 [返回值] = await 表达式;
    // await可以修饰一个promise也可以修饰其他
    // await 表达式会暂停当前 async function 的执行，等待 Promise 处理完成。若 Promise 正常处理(fulfilled)，其回调的resolve函数参数作为 await 表达式的值，继续执行 async function。
    // 如果 await 操作符后的表达式的值不是一个 Promise，则返回该值本身。
    this.getNum()
  },
  methods: {
    async  getNum() {
      const value = await this.resolveAfter2Seconds(5)
      console.log(value)
      console.log('last')
    },
    resolveAfter2Seconds(x) {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log('111')
          resolve(x)
        }, 2000)
      })
    }
  }
}
</script>
