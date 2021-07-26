
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

export {
  getZip,
  getFile,
  saveFile
}



