'use strict'

module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Application Name',
      default: 'cordova_vue_app'
    },
    appid: {
        type: 'string',
        required: true,
        message: 'Application Id',
        default: 'cc.cs_tao.cordova_vue'
    },
    appver: {
        type: 'string',
        required: true,
        message: 'Application Version',
        default: '0.0.0'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A cordova-vue project'
    },
    plugins: {
      type: 'checkbox',
      message: 'Select which Vue plugins to install',
      choices: ['axios', 'mockjs', 'vue-router', 'vuex'],
      default: ['axios', 'mockjs', 'vue-router', 'vuex']
    },
    usesass: {
        type: 'confirm',
        message: 'Use Sass / Scss?',
        required: true
    },
    platforms: {
      type: 'checkbox',
      message: 'Select which cordova platforms to install',
      choices: ['android', 'ios'],
      default: ['android', 'ios']
    },
    eslint: {
      type: 'confirm',
      require: true,
      message: 'Use linting with ESLint?',
      default: true
    },
    eslintConfig: {
      when: 'eslint',
      type: 'list',
      message: 'Which ESLint config would you like to use?',
      choices: [
        {
          name: 'Standard (https://github.com/feross/standard)',
          value: 'standard',
          short: 'Standard'
        },
        {
          name: 'Airbnb (https://github.com/airbnb/javascript)',
          value: 'airbnb',
          short: 'Airbnb'
        },
        {
          name: 'none (configure it yourself)',
          value: 'none',
          short: 'none'
        }
      ]
    },
    unit: {
      type: 'confirm',
      required: true,
      message: 'Setup unit tests with Karma + Mocha?',
      default: true
    },
    e2e: {
      type: 'confirm',
      required: true,
      message: 'Setup e2e tests with Nightwatch?',
      default: true
    },
    mainlandChina: {
      when: 'usesass || unit || e2e',
      type: 'confirm',
      message: 'Are you in mainland China (Use taobao mirror for necessary dependencies through .npmrc)?',
      default: false
    }
  },
  helpers: {
    isEnabled (list, check, opts) {
      if (list[check]) return opts.fn(this)
      else return opts.inverse(this)
    },
    deps (plugins) {
      let output = ''
      let dependencies = {
        'axios': '^0.18.0',
        'vue-router': '^3.0.1',
        'vuex': '^3.0.1',
        'mockjs': '^1.0.1-beta3'
      }

      if (Object.keys(plugins).length > 0) output += ',\n'

      Object.keys(plugins).forEach((p, i) => {
        output += `    "${p}": "${dependencies[p]}"`
        if (i !== Object.keys(plugins).length - 1) output += ',\n'
      })

      return output
    },
    if_or (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  filters: {
    'src/router/**/*': 'plugins[\'vue-router\']',
    'src/store/**/*': 'plugins[\'vuex\']',
    'src/apis/**/*': 'plugins[\'axios\']',
    'src/apis/config/*': 'plugins[\'axios\']',
    'src/apis/demo.api.js': 'plugins[\'axios\']',
    'src/apis/mock/demo.mock.js': 'plugins[\'mockjs\']',
    'src/apis/mock/index.js': 'plugins[\'mockjs\']',
    'src/apis/mock/urls.js': 'plugins[\'mockjs\'] && !plugins[\'axios\']',
    'src/styles/**/*': 'usesass',
    '.eslintignore': 'eslint',
    '.eslintrc.js': 'eslint',
    '.npmrc': '(usesass || unit || e2e) && mainlandChina'
  },
  complete (data) {
    console.log([
      '\n---',
      '',
      'All set. Welcome to your new cordova-vue project!',
      '',
      `Next Steps:\n${!data.inPlace ? '\n  \x1b[33m$\x1b[0m cd ' + data.destDirName : ''}`,
      '  \x1b[33m$\x1b[0m yarn (or `npm install`)',
      '  \x1b[33m$\x1b[0m yarn dev (or `npm run dev`)'
    ].join('\n'))
  }
}
