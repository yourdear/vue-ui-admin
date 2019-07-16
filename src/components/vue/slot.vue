<template>
    <div>
        <slot name="test" :user="user">
            我是默认选项
        </slot>
        <slot>默认插槽</slot>
    </div>
</template>

<script>
    export default {
        name: "TestSlot",
        data() {
            return {
                user: {
                    name: 'zxw',
                    age: 26
                }
            }
        }
    }
</script>

<style scoped>

</style>