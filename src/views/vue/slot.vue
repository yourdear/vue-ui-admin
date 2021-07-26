<template>
  <div>
    <slot name="test"
          :user="user">
      我是默认选项
    </slot>
    <slot>默认插槽</slot>
  </div>
</template>

<script>
export default {
  name: 'TestSlot',
  props: {
    user: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>
