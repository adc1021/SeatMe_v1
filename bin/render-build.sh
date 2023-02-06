#!/usr/bin/env bash

# exit on error
set -o errexit

npm run build
bundle install --with development
rails db:migrate
rails db:seed #if needed
