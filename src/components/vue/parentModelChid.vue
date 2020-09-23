<template>
    <div>
        <span>父子组件双向绑定</span>
        <modelChild v-model="value"></modelChild>
        {{value}}
    </div>
</template>

<script>
    import modelChild from "./modelChild";
    export default {
        name: '',
        components: {
            modelChild
        },
        data() {
            return {
                value: ''
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>
