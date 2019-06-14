<template>
    <div>
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
        <el-button @click="submitUpload">保存</el-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                fileList: []
            };
        },
        methods: {
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
                // let formatData = new FormData() //用format保存上传的文件
                // console.log(this.fileList)
                // this.fileList.forEach(file => {
                //     formatData.append('file',file.raw)
                // })
                // this.$refs.upload.submit()
                console.log(this.fileList)
                this.$http.get('/api/bot-admin/api/main/validate/getSendCode',{params: {mobile: '18715258879', type: 'login'}}).then(
                    res => {
                        console.log(res)
                    }
                ).catch(
                    err => {
                        console.log(err)
                    }
                )
            }
        },
        created() {

        },
        mounted() {

        },

    }
</script>

<style scoped>

</style>
