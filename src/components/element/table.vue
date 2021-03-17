<template>
    <div>
        <el-input v-model="inputValue" @change="changeTable"></el-input>
<!--   单击选中取消只能选一个实现-->
        <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @select="changeValue"
                @row-click="rowClick"
                @selection-change="handleSelectionChange">
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
            <el-table-column
                    label="日期"
                    width="120">
                <template slot-scope="scope">{{ scope.row.date }}- {{scope.$index}}</template>
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址"
                    show-overflow-tooltip>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                rows: '',
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                multipleSelection: [],
                inputValue: ''
            }
        },
        methods: {
            changeTable() {

            },
            rowClick(row){

                    if (JSON.stringify(row) === this.rows) {
                        this.$refs.multipleTable.toggleRowSelection(row)
                    } else {
                        this.$refs.multipleTable.clearSelection();
                        this.$refs.multipleTable.toggleRowSelection(row)
                    }
                    this.rows = JSON.stringify(row)
            },
            handleSelectionChange(selection) {
                if (selection.length === 1) {
                    return
                }
                let length = selection.length
                if (length >= 1){
                    selection.forEach((item,index)=> {
                        if(selection.length-1 !== index) {
                            this.$refs.multipleTable.toggleRowSelection(item, false)
                        }

                    })
                }
            },
            changeValue(selection) {
                console.log(selection)
            }
        }
    }
</script>
