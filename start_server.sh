#!/bin/bash

# Wrapper script that proxies to start_servers.sh for backward compatibility
# Added support for -d / --dev to run both backend and frontend in dev mode.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "$1" == "-d" || "$1" == "--dev" ]]; then
  "$SCRIPT_DIR/start_servers.sh" --dev
else
  "$SCRIPT_DIR/start_servers.sh" "$@"
fi
