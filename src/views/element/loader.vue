<script>
export default {
  props: {
    vueName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  created() {
    // this.$options.components[this.vueName] = require(this.vueName)
  },
  render: function(createElement) {
    return createElement(require(this.vueName))
  }
}
</script>
