#!/bin/bash

# Start Rails backend server
echo "Starting Rails server..."
rails s &

# Wait for the Rails server to start (adjust the sleep time as needed)
echo "Waiting for Rails server to start..."
until $(curl --output /dev/null --silent --head --fail http://localhost:5000); do
    printf '.'
    sleep 1
done

# Move to the frontend directory
cd /frontend

# Start Node.js frontend server
echo "Starting Node.js server..."
npm start
