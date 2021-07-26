<template>
  <div>
    <el-button @click="changeDivValue">改变div</el-button>
    <input id="text"
           type="text">
    <div id="div">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      value: '',
      data: {
        name
      }
    }
  },
  mounted() {
    const divDom = document.getElementById('div')
    const inputDom = document.getElementById('text')
    Object.defineProperty(this.data, 'name', {
      get() {
        return this.value
      },
      set(val) {
        inputDom.value = val
        divDom.innerHTML = val
      }
    })
    inputDom.addEventListener('input', (e) => {
      this.data.name = e.target.value
    })
  },
  methods: {
    changeDivValue() {
      this.data.name = 68788
    }
  }
}
</script>

