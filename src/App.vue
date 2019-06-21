<template>
    <div class="app">
      <router-view class="app-router"/>
    </div>
</template>
<script>
  export default {
    data() {
        return {}
    },
    created() {
    }
  }
</script>
<style lang="stylus">
    html,body,.app,.app-router
        width 100%
        height 100%
        margin 0
        padding 0
        position relative
</style>
