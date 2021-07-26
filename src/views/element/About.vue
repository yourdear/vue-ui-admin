<template>
  <div class="about">
    <el-date-picker
      v-model="date"
      type="date"
      placeholder="选择日期"
      @change="changeV" />
    <el-button @click="formatDate">格式化时间</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: ''
    }
  },
  methods: {
    changeV(val) {
      this.data = val
      console.log(val)
    },
    formatDate() {
     const date =  this.dateFormat('YYYY-mm-dd', '1620699075014')
      console.log(date)

    },
    dateFormat(fmt, date) {
      const separator = ['-', '/']

      if(typeof date === 'string') {
        for (let i = 0; i<separator.length;i++) {
          if(date.indexOf(separator[i]) !== -1) {
            return date
          }
        }
        date = new Date(parseInt(date))
      }
      let ret;
      const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
      }
      for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        console.log(k,ret)
        if (ret) {
          fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        }
      }
      return fmt;
    }
  }
}
</script>
