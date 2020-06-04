<template>
    <div>
        <div>{{num}}</div>
        <div>输出顺序--111，222，333，444</div>
        
    </div>
   
</template>

<script>
    export default {
        data() {
            num: ''   
        },
        mounted() {
            this.getData().then(()=> {
                console.log(this.num)
                console.log('444')
            })
        },
        methods: {
            async getData() {
                console.log('111')
               await this.time()
                console.log('222')
            },
            time(){
                return new Promise(resolve => {
                    this.num = '333'
                    resolve('333') //这个数据导不到下一级，只能通过上面的方式
                })
            }
        }
    }
</script>
