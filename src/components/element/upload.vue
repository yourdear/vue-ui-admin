<template>
    <div class="upload">
        <el-upload
                ref="upload"
                class="upload-demo"
                action="http://oss.aliyuncs.com"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :http-request="uploadFile"
                :auto-upload="false"
                :before-upload="beforeUpload"
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <el-progress :percentage="num" :status="uploadFlag"></el-progress>
        <el-button @click="submitUpload">保存</el-button>
        <ctable></ctable>
    </div>
</template>
<script>
    import ctable from './table'
    export default {
        data() {
            return {
                fileList: [
                    {name: '222.txt'},
                    {name: '333.png'}
                ],
                num: 50,
                uploadFlag: 'success'
            };
        },
        components: {
            ctable
        },
        methods: {
            parserDate(date) {
                var t = Date.parse(date)
                if (!isNaN(t)) {
                    return new Date(Date.parse(date.replace(/-/g, '/')))
                }
            },
            uploadFile(file) {
                this.fileList.append('file', file.file)
            },
            beforeUpload(file) {
                debugger
                this.fileList.push(file)
                console.log(this.fileList)
                return false
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                if(fileList) {
                    //ddd
                }
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
            submitUpload() {
                console.log(this.fileList)
                this.num = 50
                this.uploadFlag = 'exception'
            }
        },
        created() {
            console.log('parent-c')
            let date = this.parserDate('2020-09-04')
            console.log(date)
        },
        mounted() {
            console.log('parent-m')
        },
        beforeDestroy() {
            console.log('parent-bd')
        },
        destroyed() {
            console.log('parent-d')
        },

    }
</script>

<style scoped lang="stylus">
    .upload
        padding  20px
        box-sizing border-box
</style>
