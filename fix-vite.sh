#!/bin/bash

# Fix Vite React Fast Refresh issues

echo "🔧 Fixing Vite configuration..."

# Remove node_modules and lock files
rm -rf node_modules
rm -rf package-lock.json
rm -rf yarn.lock
rm -rf .vite

# Clear npm cache
npm cache clean --force

echo "✅ Cache cleared"
echo ""
echo "Now run: npm install"
echo "Then: npm run dev"
