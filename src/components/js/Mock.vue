<template>
    <div></div>
</template>

<script>
    import axios from 'axios'
    import '@/mock'
    export default {
        name: '',
        data() {
            return {}
        },
        created() {
            // axios.post('/api/news').then(res=>{
            //     console.log(res.data)
            // })
            this.$post('/api/news').then(res=> {
                    console.log(res.data)
                }
            )
        }
    }
</script>
<style lang="scss" scoped>

</style>
