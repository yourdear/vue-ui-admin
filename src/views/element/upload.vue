<template>
  <div>
    <el-input v-model="fileInfo.name"></el-input>
    <el-input v-model="fileInfo.tag"></el-input>
<!--    <el-input v-model="fileInfo"></el-inpput>-->
<!--    <el-input v-model="fileInfo"></el-inpput>-->
    <el-upload
        class="upload-demo"
        ref="upload"
        action=""
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-upload="beforeUpload"
        :file-list="fileList"
        :http-request="customUpload"
        :auto-upload="false">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>
<script>
import { getFile, getZip , saveFile} from '../vue/api'
export default {
  data() {
    return {
      fileList: [],
      fileInfo: {
        name: '测试66',
        tag: 'test66'
      },
      params: {}
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    customUpload(param) {
      let fileObj = param.file
      let fd = new FormData()
      fd.append('file', fileObj)
      fd.append('name',this.fileInfo.name)
      fd.append('tag',this.fileInfo.tag)
      saveFile(fd).then(res => {
        console.log(res)
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeUpload(file) {
      // this.params = new FormData()
      // this.params.append('file', 'blob', file)
    }
  }
}
</script>
