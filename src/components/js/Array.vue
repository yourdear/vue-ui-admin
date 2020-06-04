<template>
    <div>

    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        mounted() {

            let person = [
                {name:"Rom",age: '2019-11-12'},
                {name:"Bob",age: '2019-11-9'},
                {name:"Ma",age: '2019-11-10'},
                {name:"Tony",age: '2019-11-13'}
                ]

            person.sort((a,b)=>{ return new Date(b.age).getTime()  - new Date(a.age).getTime()})//升序
            console.log(person)

        },
        methods() {

        }
    }
</script>