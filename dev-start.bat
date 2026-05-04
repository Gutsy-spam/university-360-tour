@echo off
setlocal

set "ROOT=%~dp0"
rem %~dp0 ends with a trailing backslash, which breaks quoted `cd` in cmd (it escapes the closing quote).
if "%ROOT:~-1%"=="\" set "ROOT=%ROOT:~0,-1%"

set "BACKEND_DIR=%ROOT%"
set "FRONTEND_DIR=%ROOT%\client"

where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js is not available in PATH.
  echo Install Node.js, then open a new terminal and try again.
  echo.
  pause
  exit /b 1
)

if not exist "%BACKEND_DIR%server.js" (
  echo ERROR: "%BACKEND_DIR%server.js" not found.
  echo.
  pause
  exit /b 1
)

if not exist "%FRONTEND_DIR%\\node_modules\\react-scripts\\bin\\react-scripts.js" (
  echo ERROR: Frontend dependencies missing in "%FRONTEND_DIR%".
  echo Run "npm install" inside the client folder, then try again.
  echo.
  pause
  exit /b 1
)

echo Starting backend on http://localhost:5000 ...
start "University API (5000)" cmd /k "cd /d \"%BACKEND_DIR%\" && node server.js"

echo Starting frontend on http://localhost:3000 ...
start "University Web (3000)" cmd /k "cd /d \"%FRONTEND_DIR%\" && set BROWSER=none && node node_modules\\react-scripts\\bin\\react-scripts.js start"

echo.
echo Two windows should be open now:
echo - University API (5000)
echo - University Web (3000)
echo.
echo Open: http://localhost:3000
echo (Make sure MongoDB is running on 127.0.0.1:27017)
echo.
pause
endlocal
