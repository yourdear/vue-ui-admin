<template>
  <div>
    <el-table :data="tableData">
      <el-table-column v-for="(item, index) in tableCol"
                       :key="index"
                       :prop="item.keyval"
                       :label="item.label">
        <template slot-scope="scope">
          <renderSpan v-if="item.render"
                      :span-data="scope.row[item.keyval]"
                      :render-fun="item.render" />
          <span v-else>{{ scope.row[item.keyval] }}</span>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import renderSpan from './renderSpan'
export default {
  name: 'TestRenderVue',
  components: {
    renderSpan
  },
  data() {
    return {
      tableCol: [
        {
          keyval: 'name',
          label: '姓名',
          render: (val) => {
            if (val === '小明') {
              return '男小明'
            } else if (val === '小红') {
              return '女小红'
            } else {
              return val
            }
          }
        },
        {
          keyval: 'age',
          label: '年龄',
          render: (val) => {
            if (val >= 30) {
              return val + '太老了'
            } else {
              return val + '很年轻'
            }
          }
        }
      ],
      tableData: [
        {
          name: '小明',
          age: '29'
        },
        {
          name: '小红',
          age: '38'
        },
        {
          name: '小海',
          age: '25'
        }
      ]
    }
  }
}
</script>

<style scoped>
    .testClass {

    }
    .testClass2 {

    }
</style>
