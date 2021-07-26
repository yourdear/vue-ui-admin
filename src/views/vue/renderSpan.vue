<script>
export default {
  name: 'RenderSpan',
  props: {
    spanData: {
      type: String,
      default: ''
    },
    renderFun: {
      type: Function,
      default: function() {
        return new Function()
      }
    }
  },
  methods: {},
  // eslint-disable-next-line vue/require-render-return
  render(createElement, context) {
    console.log(context)
    return createElement('span', {}, this.renderFun(this.spanData))
  }
}
</script>
