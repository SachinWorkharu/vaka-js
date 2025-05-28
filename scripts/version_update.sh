#!/bin/bash

# Usage: ./replace-version.sh <new_version> [directory]
# Example: ./replace-version.sh 1.0.0 ./packages

NEW_VERSION="$1"
SEARCH_DIR="${2:-.}"

if [ -z "$NEW_VERSION" ]; then
  echo "Usage: $0 <new_version> [directory]"
  exit 1
fi

find "$SEARCH_DIR" \
  -type d \( -name node_modules -o -name dist -o -name build -o -name .yarn \) -prune -o \
  -type f -name "package.json" -print \
  | xargs sed -i "s/0\.0\.1-beta/$NEW_VERSION/g"

echo "Replaced all 0.0.1-beta with $NEW_VERSION in package.json files under $SEARCH_DIR (excluding node_modules, dist, build, .yarn)"