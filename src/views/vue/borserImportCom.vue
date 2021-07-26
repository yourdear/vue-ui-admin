<template>
  <div>
    <el-button @click="loadZipEvent">加载zip包</el-button>
    <el-button @click="savedFile">保存组件</el-button>
    <el-button @click="loadVue" class="primary">加载vue文件</el-button>
    <div id="test"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import { getFile, getZip , saveFile} from './api'
import { loadZip } from '../../utils/tool'
import { fileStr } from './vueFile'
// import sass from 'sass'
export default {
  data() {
    return {
      contentData: ''
    }
  },
  methods: {
    loadZipEvent() {
      getZip().then(res => {
        loadZip(res)
      })
    },
    loadVue() {
      // getFile().then(res=> {
      //   this.contentData = res
      //   console.log(res)
      //   this.bindComponent(this.contentData, '#test')
      // })
      this.bindComponent(fileStr, '#test')
    },
   async bindComponent(mainComponent, id) {
      const { loadModule, vueVersion } = window['vue2-sfc-loader']
     console.log(window['vue2-sfc-loader'])
      const options = {
        moduleCache: {
          myData: {
            vueVersion,
          },
          stylus: source => Object.assign(stylus(source), { deps: () => [] }),
          // stylus: source => {
          //   // const cssStr = sass.renderSync({
          //   //   data: source,
          //   //   outputStyle: 'expanded'
          //   // })
          //   const cssStr = `
          //   .btn {
          //       background-color: #ccc;
          //    }`
          //   return cssStr
          // },
        },
        getFile(url) {
          return Promise.resolve(mainComponent)
        },
        addStyle(textContent) {
          console.log(textContent)
          const style = Object.assign(document.createElement('style'), { textContent })
          const ref = document.head.getElementsByTagName('style')[0] || null
          console.log(style)
          console.log(ref)
          document.head.insertBefore(style, ref)
        },
      }

      const component = await loadModule('/test.vue', options)
          // .then(component => {
          //   console.log(component)
          //   console.log(new Vue(component))
          //   new Vue(component).$mount(id)
          //   Vue.component('goodTest', component)
          // })
      new Vue(component).$mount(id)
    },
    savedFile() {
      const blob = new Blob([fileStr], {type: 'text/plain;charset=utf-8'})
      const formData = new FormData()
      formData.append('file', blob, 'index.vue')
      formData.append('schema', {name: '测试组件', tag: 'test1'})
      saveFile(formData).then(res=> {
        console.log(res)
      })
    }
  }
}
</script>

<style>
  .primary {
    background-color: $--color-primary;
  }
</style>
