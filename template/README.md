# {{ name }}

> {{ description }}

## Build Setup

``` bash
# install dependencies
yarn # or npm install

# serve with hot reload at localhost:3000
yarn dev # or npm run dev

# build web for production (web)
yarn build # or npm run build

# build android app (debug apk)
yarn build:android # or npm run build:android

# generate release key store for android apk
yarn genkey:apk # or npm run genkey:apk

# build android app (release apk)
yarn release:android # or npm run release:android 
{{#unit}}

# run unit tests
yarn unit # or npm run unit
{{/unit}}
{{#e2e}}

# run e2e tests
yarn e2e # or npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
yarn test # or npm test
{{/if_or}}
```

To learn more about [cs-tao/cordova-vue](https://github.com/CS-Tao/cordova-vue), checkout the [document](https://cs-tao.github.io/cordova-vue).
