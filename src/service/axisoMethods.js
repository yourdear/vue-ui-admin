import service from '@/service/service.js'

// eslint-disable-next-line no-undef
const serviceGet = function(api, data) {
  if (data === undefined) {
    data = {}
  }
  const ox = service.get(api, { params: data })
  return ox
}

const servicepPost = function(api, data) {
  const ox = service.post(api, data)
  return ox
}
export {
  serviceGet,
  servicepPost
}
