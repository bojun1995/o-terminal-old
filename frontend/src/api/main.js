import request from '@/utils/request'
// import storage from 'store'

const mainApi = {
  openDir: '/api/v1/example/openLocalDir',
}

/**
 * local api
 */
export function localApi (uri, parameter) {
  return request({
    url: mainApi[uri],
    method: 'post',
    data: parameter
  })
}