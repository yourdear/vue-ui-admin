<template>
    <svg class="svg-icon" aria-hidden="true" @click="svgClick($event)">
        <use :xlink:href="iconName"></use>
        </svg>
        </template>

        <script>
    export default {
        name: 'icon-svg',
        props: {
            iconClass: {
                type: String,
                required: true
            }
        },
        computed: {
            iconName() {
                return `#${this.iconClass}`
            }
        },
        methods: {
            svgClick(e) {
                this.$emit('parengSvgClick', e)
            }
        }
    }
</script>

<style>
    .svg-icon {
        width: 1em;
        height: 1em;
        font-size: 18px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>