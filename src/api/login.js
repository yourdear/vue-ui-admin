// 测试提交远程github
import request from '@/utils/service'

export function getToken(param, cancelToken) {
  return request({
    method: 'post',
    url: '/v1/token',
    data: param,
    cancelToken: cancelToken
  })
}
export function verifyToken(param, cancelToken) {
  return request({
    method: 'post',
    url: '/v1/token/verify',
    data: param
  })
}
export function test(param, cancelToken) {
  return request({
    method: 'post',
    url: '/v1/token/verify',
    data: param
  })
}
