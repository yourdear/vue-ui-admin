<template>
  <div class="about" @click="ss">
    <el-date-picker
            @change="changeV"
            v-model="date"
            type="date"
            placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        date: ''
      }
    },
    methods: {
      changeV(val) {
        console.log(val)
      },
      ss() {
        console.log('666')
      }
    }
  }
</script>