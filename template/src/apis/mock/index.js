import Mock from 'mockjs'
import urls from '../config/urls'
import demoMock from './demo.mock'

Mock.setup({
  timeout: '100-500'
})

// Get demo
Mock.mock(urls.demo.getRequestDemo.regular, urls.demo.getRequestDemo.method, demoMock.getRequest)

// Post demo
Mock.mock(urls.demo.postRequestDemo.regular, urls.demo.postRequestDemo.method, demoMock.postRequest)
