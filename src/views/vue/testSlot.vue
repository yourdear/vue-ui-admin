<template>
  <div>
    测试页面
    <test-slot :user="user">
      <template #test="{user}">
        <div>{{ user.name }}</div>
        <div>{{ user.age }}</div>
      </template>
    </test-slot>
  </div>
</template>

<script>
import testSlot from './slot'
export default {
  name: 'Test',
  components: {
    testSlot
  },
  data() {
    return {
      user: {
        age: 26,
        name: '小凯'
      }
    }
  },
  created() {
    const [a, ...rest] = [1, 2, 3, 4]
    console.log(a)
    console.log(rest)
  }
}
</script>

<style scoped>

</style>
