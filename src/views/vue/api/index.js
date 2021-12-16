
import request from '../../../utils/service'

const getZip = (data) => {
  return request({
    url: '/getZip',
    responseType: 'blob',
    method: 'post',
    data: data
  })
}
const getFile = (data) => {
  return request({
    url: '/getVueFile',
    method: 'post',
    data: data
  })
}
const saveFile = (data) => {
  return request({
    url: '/saveVueFile',
    method: 'post',
    data: data
  })
}

const getFileModel = (params)=> {
  return new Promise((resolve, reject) => {
     getFile(params).then(res=> {
       if(res.code && res.code.toString().startWith('2')) {
         // doSomeThing
         resolve(res)
       } else {
         reject(res)
       }
     })
  }).catch(err=> {
    throw err
  })
}


export {
  getZip,
  getFile,
  saveFile
}



