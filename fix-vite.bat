@echo off
REM Fix Vite React Fast Refresh issues

echo 🔧 Fixing Vite configuration...

REM Remove node_modules and lock files
rmdir /s /q node_modules 2>nul
del package-lock.json 2>nul
del yarn.lock 2>nul
rmdir /s /q .vite 2>nul

REM Clear npm cache
npm cache clean --force

echo ✅ Cache cleared
echo.
echo Now run: npm install
echo Then: npm run dev
pause
