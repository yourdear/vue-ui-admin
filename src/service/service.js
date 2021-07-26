import axios from 'axios'
import qs from 'qs'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  // timeout: 5000, application/json;charset=UTF-8
  headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
  method: 'post', // 一般需要用post
  transformRequest: [function(data) {
    data = qs.stringify(data)
    return data
  }]
})

// request interceptor  请求之前的拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// respone interceptor 请求之后异常状态拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.statusCode === 201 || res.statusCode === 400 || res.statusCode === 401 || res.statusCode === 403 || res.statusCode === 404) {
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service
