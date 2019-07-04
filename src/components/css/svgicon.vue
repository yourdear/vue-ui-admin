<template>
    <div>
        <icon-svg iconClass="icon-bianji" @parengSvgClick="psvgClick"></icon-svg>
    </div>
</template>

<script>
    export default {
        name: "svgicon",
        data () {
            return {}
        },
        methods: {
            psvgClick (e) {
                console.log(e)
            }
        }
    }
</script>

<style scoped>

</style>