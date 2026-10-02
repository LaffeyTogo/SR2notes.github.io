@echo off
cd /d "%~dp0"

node GenerateCatalogue.js
if errorlevel 1 (
    echo.
    echo [ERROR] GenerateCatalogue.js 执行失败
    echo 按任意键退出...
    pause >nul
    exit /b 1
)

exit /b 0
