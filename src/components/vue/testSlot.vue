<template>
    <div>
        测试页面
        <test-slot>
            <template #test="{user}">
                <div>{{user.name}}</div>
                <div>{{user.age}}</div>
            </template>
        </test-slot>
    </div>
</template>

<script>
    import testSlot from './slot'
    export default {
        name: "test",
        data() {
            return {}
        },
        created() {
            const [a,...rest] = [1,2,3,4];
            console.log(a);
            console.log(rest);
        },
        components: {
            testSlot
        }
    }
</script>

<style scoped>

</style>