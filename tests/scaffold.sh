#!/bin/bash
set -e

# Scaffold boilerplate with given templateName
node scaffold.js "$1"

# Install dependecies
cd "$PWD/builds/$1"
yarn

# Run webpack and build website
yarn run test

# Clean up current scaffold
cd ..
rm -rf "$1"
