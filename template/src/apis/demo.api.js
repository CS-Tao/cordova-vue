import request from './config/request'
import urls from './config/urls'

export default {
  // Get demo
  getRequest: (param1, param2) => {
    return request({
      url: urls.demo.getRequest.url(),
      method: urls.demo.getRequest.method,
      params: {
        param1, param2
      }
    })
  },
  // Post demo
  postRequest: (param1, param2) => {
    return request({
      url: urls.demo.postRequest.url(),
      method: urls.demo.postRequest.method,
      data: {
        param1, param2
      }
    })
  }
}
