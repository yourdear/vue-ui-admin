<script>
    export default {
        props: ['vueName'],
        data() {
            return {}
        },
        created() {
            // this.$options.components[this.vueName] = require(this.vueName)
        },
        render: function (createElement) {
            return createElement(require(this.vueName))
        }
    }
</script>
