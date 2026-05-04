@echo off
setlocal

for %%P in (3000 5000) do (
  for /f "tokens=5" %%A in ('netstat -ano ^| findstr /R /C:":%%P .*LISTENING"') do (
    echo Stopping PID %%A (port %%P)...
    taskkill /F /PID %%A >nul 2>nul
  )
)

echo Done.
endlocal

