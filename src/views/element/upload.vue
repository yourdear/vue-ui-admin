<template>
 <div>
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
         type="webkitdirectory"
         :file-list="fileList"
         :http-request="customUpload"
         :auto-upload="false">
       <i class="el-icon-upload"></i>
       <!--      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>-->
       <el-button slot="trigger" size="small" type="primary">选取文件</el-button>

       <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
     </el-upload>
     <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
   </div>
   <el-button @click="downloadZip">获取zip包文件</el-button>
 </div>
</template>
<script>
import { getFile, getZip , saveFile} from '../vue/api'
import { loadZip } from '../../utils/tool'
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
  mounted() {
    this.$nextTick(()=> {
      document.getElementsByClassName('el-upload__input')[0].webkitDirectory = true
    })
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    customUpload(param) {

    },
    readerFile(file) {
      const reader = new FileReader()
      reader.readAsText(file)
      reader.onload = ()=> {
        console.log(reader.result)
      }
    },
    handleFile(source) {
      const parser = require('@babel/parser')
      const traverse = require('@babel/traverse').default
      const start = source.indexOf('<script>')
      const end = source.indexOf('\<\/script>')
      const code = source.substring(start + 8, end)
      const ast = parser.parse(code, {
        sourceType: 'module',
        plugins: ['flow']
      })
      const newAst = ast.program ? ast.program : null
      try {
        traverse(newAst, {
          ImportDeclaration: {
            exit (path) {
              const importUrl = path.node.source
              console.log(importUrl)
            }
          }
        })
      } catch (e) {
        console.log('')
      }
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    downloadZip() {
      getZip().then(res=> {
        loadZip(res)
      })
    },
  }
}
</script>
