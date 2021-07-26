<template>
  <div>
    fdfa
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    this.dealPlatData()
  },
  methods: {
    dealPlatData() {
      let arr = [
        {id: 1, name: '部门1', pid: 0},
        {id: 2, name: '部门2', pid: 1},
        {id: 3, name: '部门3', pid: 1},
        {id: 4, name: '部门4', pid: 3},
        {id: 5, name: '部门5', pid: 4},
      ]
      const resultArr = []
      this.dealPlatDataTool(arr, resultArr, 0)
      console.log(resultArr)
    },
    dealPlatDataTool(arr, resultArr, pid) {
      arr.forEach(item=> {
        if (item.pid === pid) {
          const newItem = {...item, children: []}
          this.dealPlatDataTool(arr, newItem.children, item.id)
          resultArr.push(newItem)
        }
      })
    },
    arrayToTree(items) {
      const result = [];   // 存放结果集
      const itemMap = {};  //
      for (const item of items) {
        const id = item.id;
        const pid = item.pid;

        if (!itemMap[id]) {
          itemMap[id] = {
            children: [],
          }
        }

        itemMap[id] = {
          ...item,
          children: itemMap[id]['children']
        }

        const treeItem =  itemMap[id];

        if (pid === 0) {
          result.push(treeItem);
        } else {
          if (!itemMap[pid]) {
            itemMap[pid] = {
              children: [],
            }
          }
          itemMap[pid].children.push(treeItem)
        }

      }
      return result;
    },
  }
}
</script>
