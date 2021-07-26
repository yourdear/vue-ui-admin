<template>
  <div>
    <Header />
    <Left />
    <keep-alive>
      <router-view class="count" />
    </keep-alive>

  </div>
</template>
<script>
import Header from './header'
import Left from './leftMenu'
export default {
  components: {
    Header,
    Left
  },
  data() {
    return {}
  },
  created() {

  },
  mounted() {

  },
  methods: {

  }

}
</script>

<style scoped lang="stylus">
    .count
        position absolute
        left 220px
        top 65px
        width calc(100% - 220px)
        height calc(100% - 65px)
        background: #EEEFF3

</style>
