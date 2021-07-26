import axios from 'axios'
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 30000,
  withCredentials: true
})

// 请求拦截
request.interceptors.request.use(
  config => {
        return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
request.interceptors.response.use(
  response => {
    if(response.headers.hasOwnProperty('content-disposition')) {
      return response
    }
    if (response.status === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    return Promise.reject(error)
  }
)
export default request
