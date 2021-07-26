<template>
  <div>
    <icon-svg icon-class="icon-bianji"
              @parengSvgClick="psvgClick" />
  </div>
</template>

<script>
export default {
  name: 'Svgicon',
  data() {
    return {}
  },
  methods: {
    psvgClick(e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>

</style>
