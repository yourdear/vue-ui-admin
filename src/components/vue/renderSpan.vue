<script>
    export default {
        name: 'RenderSpan',
        props: {
            spanData: String,
            renderFun: Function
        },
        // eslint-disable-next-line vue/require-render-return
        render(createElement, context) {
            console.log(context)
            return createElement('span',{}, this.renderFun(this.spanData))
        },
        methods: {},
    }
</script>