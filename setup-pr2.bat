@echo off
setlocal
echo.
echo ============================================
echo  Naveen Portfolio — PR Setup Script
echo ============================================
echo.

:: ── Safety check ────────────────────────────
if not exist "frontend" (
  echo ERROR: Run this script from the root of your cloned repo.
  echo        cd P:\GitHub\MyProfessionalPortfolio\MyProfessionalPortfolio
  pause
  exit /b 1
)

:: ── Create branch ───────────────────────────
git checkout -b feature/cleanup-and-fixes
echo Created branch: feature/cleanup-and-fixes
echo.

:: ── Delete unused folders and files ─────────
echo Removing unused files and folders...

if exist ".emergent"       rmdir /s /q ".emergent"
if exist "backend"         rmdir /s /q "backend"
if exist "tests"           rmdir /s /q "tests"
if exist ".gitconfig"      del /q ".gitconfig"
if exist "backend_test.py" del /q "backend_test.py"
if exist "contracts.md"    del /q "contracts.md"
if exist "test_result.md"  del /q "test_result.md"

echo Done removing unused items.
echo.

:: ── Copy updated files ──────────────────────
echo Copying updated files...
echo (Files must be in your Downloads folder)

set DOWNLOADS=%USERPROFILE%\Downloads

:: Hero.jsx — profile image fix
copy /Y "%DOWNLOADS%\Hero.jsx" "frontend\src\components\Hero.jsx"
if errorlevel 1 echo WARNING: Hero.jsx not found in Downloads

:: .gitignore — cleaned up
copy /Y "%DOWNLOADS%\.gitignore" ".gitignore"
if errorlevel 1 echo WARNING: .gitignore not found in Downloads

:: README.md — new version
copy /Y "%DOWNLOADS%\README.md" "README.md"
if errorlevel 1 echo WARNING: README.md not found in Downloads

echo.

:: ── Stage and commit ────────────────────────
git add .
git status
echo.
git commit -m "refactor: remove backend/emergent artifacts, fix profile image path, new README"
echo.

:: ── Push ────────────────────────────────────
git push origin feature/cleanup-and-fixes
echo.
echo ============================================
echo  Done! Now open a Pull Request on GitHub:
echo  https://github.com/naveennarahari/MyProfessionalPortfolio/compare
echo ============================================
pause
