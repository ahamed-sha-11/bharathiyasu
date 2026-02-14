#!/bin/bash

# Frontend-only startup script
# Starts the React development server

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "⚛️ Starting frontend..."
cd "$SCRIPT_DIR/frontend" || exit

npm install

if [[ "$1" == "-d" || "$1" == "--dev" ]]; then
  npm run dev
else
  npm run build && npm run preview
fi
