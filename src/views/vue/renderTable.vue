<template>
  <compTable
    :table-header="tableHeader"
    :table-data="tableData"
    @sort-events="handleSort"
    @filter-events="filterHandler"
    @click-events="handleClick" />
</template>

<script>
import compTable from './tableTemplate'
export default {
  components: { compTable },
  data() {
    return {
      // 数据结构
      tableData: [], // 为请求到的table数据
      tableHeader: [ // 表头信息，可根据minWidth修改宽度
        { prop: 'uid', label: '订单号', minWidth: '160px' },
        {
          prop: 'peopleNumber',
          label: '人数',
          sortable: 'custom',
          minWidth: '75px'
        },
        {
          prop: 'source',
          label: '来源',
          columnKey: 'sourceList',
          minWidth: '90px',
          render: (h, params) => {
            return h('el-input', params.row.source)
          }
        }]
    }
  },
  mounted() {
    this.tableData = [
      { uid: '1', peopleNumber: '333', source: 'b' },
      { uid: '2', peopleNumber: '2333', source: 'g' },
      { uid: '3', peopleNumber: '1222', source: 's' }
    ]
  },
  methods: {

    handleSort() {},
    filterHandler() {},
    handleClick() {}
  }
}
</script>
