#!/usr/bin/env bash

# exit on error
set -o errexit

npm run build
bundle install --without somerandomstring
rails db:migrate
rails db:seed #if needed
