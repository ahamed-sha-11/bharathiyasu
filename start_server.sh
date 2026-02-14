#!/bin/bash

#################################################################################
# Dr. Yasu Bharathi - Portfolio Website
# Frontend-only startup script for React + Vite application
#
# Usage:
#   ./start_server.sh           # Build and preview production
#   ./start_server.sh -d        # Start development server
#   ./start_server.sh --dev     # Start development server (alias)
#
#################################################################################

set -e  # Exit on any error

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FRONTEND_DIR="$SCRIPT_DIR/frontend"

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Ensure frontend directory exists
if [[ ! -d "$FRONTEND_DIR" ]]; then
  echo -e "${RED}❌ Error: frontend directory not found at $FRONTEND_DIR${NC}"
  exit 1
fi

# Install dependencies
echo -e "${BLUE}📦 Installing dependencies...${NC}"
cd "$FRONTEND_DIR" || exit
npm install

# Start based on argument
if [[ "$1" == "-d" || "$1" == "--dev" ]]; then
  echo -e "${GREEN}⚛️  Starting development server...${NC}"
  echo -e "${BLUE}📍 Server will be available at http://localhost:5173${NC}"
  npm run dev
else
  echo -e "${GREEN}🏗️  Building for production...${NC}"
  npm run build
  echo -e "${GREEN}👀 Starting preview server...${NC}"
  echo -e "${BLUE}📍 Server will be available at http://localhost:4173${NC}"
  npm run preview
fi
