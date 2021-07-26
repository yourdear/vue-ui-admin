<template>
  <div>
    <el-button @click="tabChart">切换</el-button>
    <div id="chart" class="chart_wrapper"></div>
  </div>
</template>
<script>
import echarts from "echarts"
export default {
  data() {
    return {
      options: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }]
      }
    }
  },
  mounted() {
    this.init(this.options)
  },
  methods: {
    init(option) {
      console.log(option)
      const myChart = echarts.init(document.getElementById('chart'))
      myChart.setOption(option)
    },
    tabChart() {
      let option = {
        title: {
          text: '某站点用户访问来源',
          subtext: '纯属虚构',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
              {value: 1048, name: '搜索引擎'},
              {value: 735, name: '直接访问'},
              {value: 580, name: '邮件营销'},
              {value: 484, name: '联盟广告'},
              {value: 300, name: '视频广告'}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      this.init(option)
    }
  }
}
</script>
<style lang="stylus" scoped>
.chart_wrapper
  width: 500px;
  height: 500px;

</style>
