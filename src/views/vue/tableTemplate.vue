<template>
  <el-table ref="multipleTable"
            :data="tableData"
            size="medium"
            fit
            :header-cell-style="{height: '40px',padding: '0',background: '#f7f9fa','font-size': '12px',color: '#8590a6'}"
            :row-style="{'font-size': '12px',color: '#212121'}"
            border
            stripe
            @sort-change="handleSort"
            @filter-change="filterHandler"
            @row-click="handleRowClick">
    <el-table-column v-for="(th, key) in tableHeader"
                     :key="key"
                     :prop="th.prop"
                     :label="th.label"
                     :fixed="th.fixed"
                     :sortable="th.sortable?'custom':false"
                     :filters="th.filters"
                     :column-key="th.columnKey"
                     :filtered-value="th.filteredValue"
                     :filter-multiple="th.filterMultiple"
                     :min-width="th.minWidth"
                     align="center">
      <template slot-scope="scope">
        <ex-slot v-if="th.render"
                 :render="th.render"
                 :row="scope.row"
                 :index="scope.$index"
                 :column="th" />
        <span v-else>{{ scope.row[th.prop] || '-' }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
// 自定义内容的组件
var exSlot = {
  functional: true,
  props: {
    row: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null
    }
  },
  render: (h, data) => {
    const params = {
      row: data.props.row,
      index: data.props.index
    }
    if (data.props.column) params.column = data.props.column
    return data.props.render(h, params)
  }
}
export default {
  name: 'CompTable',
  components: { exSlot },
  props: {
    // 表格数据
    tableData: {
      type: Array,
      default: function() {
        return []
      }
    },
    // 表头数据
    tableHeader: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  methods: {
    // 排序事件
    handleSort(sort) {
      this.$emit('sort-events', sort)
    },
    // 筛选事件
    filterHandler(filters) {
      this.$emit('filter-events', filters)
    },
    // 某一行被点击
    handleRowClick(row) {
      this.$emit('click-events', row)
    }
  }
}
</script>
