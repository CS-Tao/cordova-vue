import Vue from 'vue'
{{#if usesass}}
import './styles'
{{/if}}
{{#isEnabled plugins 'mockjs'}}
import './apis/mock'
{{/isEnabled}}

document.addEventListener('deviceready', () => {
  if (window.cordova) {
    Vue.cordova = Vue.prototype.$cordova = window.cordova
  }
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    template: '<App/>',
    components: { App: require('./App').default },
    {{#isEnabled plugins 'vue-router'}}
    router: require('./router').default,
    {{/isEnabled}}
    {{#isEnabled plugins 'vuex'}}
    store: require('./store').default
    {{/isEnabled}}
  })
}, false)
