import Vue from 'vue'
{{#if usesass}}
import './styles'
{{/if}}
{{#if mockjs}}
import './apis/mock'
{{/if}}

if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

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
