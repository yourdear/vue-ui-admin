<template>
  <div>
    <div class="full-btn"
         @click="full">全屏</div>
    <div @click="exit">退出全屏</div>
    <div class="full"
         @click="full" />
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  created() {

  },
  mounted() {
    // launchFullscreen(document.documentElement) // 整个页面进入全屏
    // launchFullscreen(document.getElementById("id")) //某个元素进入全屏
    // exitFullscreen()
  },
  methods: {
    full(e) {
      console.log(e)
      this.launchFullscreen(e.target)
    },
    exit() {},
    launchFullscreen(element) {
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen()
      }
    },
    exitFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      }
    }

  }

}
</script>

<style scoped lang="stylus">
    .full
        width 200px
        height 200px
        background-color #ccc
</style>
