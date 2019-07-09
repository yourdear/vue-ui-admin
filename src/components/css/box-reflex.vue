<template>
    <div>
        <div class="loader">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        created() {

            setTimeout('console.log("ddd")' ,10)
        }
    }
</script>
<style lang="stylus" scoped>

</style>