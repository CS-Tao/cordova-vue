import Mock from 'mockjs'
{{#isEnabled plugins 'axios'}}
import urls from '../config/urls'
{{else}}
import urls from './urls'
{{/isEnabled}}
import demoMock from './demo.mock'

Mock.setup({
  timeout: '100-500'
})

// Get demo
Mock.mock(urls.demo.getRequest.regular, urls.demo.getRequest.method, demoMock.getRequest)

// Post demo
Mock.mock(urls.demo.postRequest.regular, urls.demo.postRequest.method, demoMock.postRequest)
