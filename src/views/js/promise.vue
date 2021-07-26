<template>
  <div>
    promise测试
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.test()
  },
  methods: {
    // promise.then().then()顺序的执行,需要在then里面手动的返回一个新的pomise
    // promise需要配合reslove/reject使用，一定要给初始化的promise一个状态
    // promise本身也是异步的，但是promise里面的handler是同步执行的，如果handler里面是一个定时器，定时器会执行，然后执行promise之后的操作，定时器时间到了之后，定时器里面额内容才会执行
    test() {
      new Promise(function(resolve) {
        setTimeout(() => {
          console.log('1')
          resolve('最后的倔强')
        }, 1000)
      }).then(() => {
        return new Promise(function(resolve) {
          setTimeout(() => {
            console.log('2')
            resolve()
          }, 3500)
        })
      }).then(() => {
        return new Promise(function(resolve) {
          setTimeout(() => {
            console.log('3')
            resolve()
          }, 1500)
        })
      })
    }
  }
}
</script>
