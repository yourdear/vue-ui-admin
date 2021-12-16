import request from '@/service/service.js'

const getUserInfo = ()=> {
    return request({
        method: 'get',
        url: '/getUserInfo',
    })
}

export {
    getUserInfo
}
