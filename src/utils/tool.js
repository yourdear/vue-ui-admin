import {Message} from "element-ui";

const tools = {
  install(Vue, option) {
    Vue.prototype.add = function(val) {
      console.log(val + 1)
    }
    Vue.prototype.reduce = function(val) {
      console.log(val - 1)
    }
  }
}
// 对象排序
const unordered = { 'b': 'foo', 'c': 'bar', 'a': 'baz' }
console.log(JSON.stringify(unordered)) // → '{"b":"foo","c":"bar","a":"baz"}'
const ordered = {}
Object.keys(unordered).sort().forEach(function(key) {
  ordered[key] = unordered[key]
})

const loadZip = (res)=> {
  if (res.code === 1000 || res.msg === '未知错误') {
    Message.error('下载失败')
  }
  const blob = new Blob([res.data], {
    type: res.headers['content-type']
  })
  const filename = (res.headers['content-disposition'] &&
                      res.headers['content-disposition']
                        .split(';')[1].split('=')[1].replace(/"/g, '')) || 'test.zip'
  if('msSaveOrOpenBlob' in navigator) {
    window.navigator.msSaveOrOpenBlob(blob, filename)
  } else {
    const aTag = document.createElement('a')
    aTag.download = filename
    aTag.href = URL.createObjectURL(blob)
    aTag.click()
    URL.revokeObjectURL(aTag.href)
  }
}
export {
  tools,
  loadZip
}




