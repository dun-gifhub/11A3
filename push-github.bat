@echo off
chcp 65001 > nul
cls
echo =========================================================
echo    TOOL TU DONG DAY LEN GITHUB - LOP 11A3 THPT LUONG PHU
echo    De tai: Danh nhan Do Can ^& Thi pham Xuan Yen
echo =========================================================
echo.

where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [X] Loi: May tinh cua ban chua cai dat Git!
    echo Vui long tai va cai Git tai: https://git-scm.com/download/win
    pause
    exit /b
)

if not exist ".git" (
    echo [*] Dang khoi tao Git repository...
    git init
    git branch -M main
)

echo.
echo [1] Tao mot repository moi tren trang web GitHub (vi du: do-can-11a3)
set /p REPO_URL="[2] Dan link GitHub Repository cua ban vao day roi an Enter: "

if "%REPO_URL%"=="" (
    echo [!] Ban chua nhap link GitHub repository. Dung chuong trinh!
    pause
    exit /b
)

echo.
echo [*] Dang them tat ca cac file vao Git...
git add .

echo [*] Dang dong goi commit...
git commit -m "feat: Bao cao slide toan man hinh Do Can va Xuan Yen - Lop 11A3 THPT Luong Phu"

git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%

echo [*] Dang day code len GitHub...
git push -u origin main --force

echo.
echo =========================================================
echo [V] DA DAY LEN GITHUB THANH CONG!
echo.
echo De chay trang web truc tuyen mien phi tren GitHub Pages:
echo   1. Vao GitHub Repository cua ban
echo   2. Chon tab 'Settings' -> menu ben trai chon 'Pages'
echo   3. Tai 'Source', doi thanh: 'GitHub Actions'
echo   4. Doi khoang 1 phut, trang web se tu dong online!
echo =========================================================
pause
