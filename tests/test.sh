#!/bin/bash
set -e

./scaffold.sh default
./scaffold.sh no-eslint
./scaffold.sh eslint-airbnb
./scaffold.sh eslint-none
./scaffold.sh no-axois
./scaffold.sh no-mockjs
./scaffold.sh no-router
./scaffold.sh no-vuex
./scaffold.sh no-router-vuex
./scaffold.sh no-router-vuex-axios
./scaffold.sh no-android
./scaffold.sh no-ios
./scaffold.sh no-android-ios
