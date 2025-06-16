#!/bin/bash

# Function to start backend
start_backend() {
  echo "🚀 Starting backend..."
  cd backend || exit
  npm i
  if [ "$1" = "dev" ]; then
    npm run dev
  else
    npm start
  fi
}

# Function to start frontend
start_frontend() {
  echo "⚛️ Starting frontend..."
  cd frontend || exit
  npm i
  if [ "$1" = "dev" ]; then
    npm run dev
  else
    # Production: build then preview
    npm run build
    npm run preview -- --port 3000
  fi
}

# Handle args
if [[ "$1" == "-d" || "$1" == "--dev" ]]; then
  echo "👨‍💻 Starting in dev mode..."
  # Run both in dev mode in parallel
  (start_backend dev) &
  (start_frontend dev) &
else
  echo "🚀 Starting both servers..."
  # Run both in prod mode in parallel
  (start_backend) &
  (start_frontend) &
fi

# Wait for both to complete (optional, useful for logs)
wait


