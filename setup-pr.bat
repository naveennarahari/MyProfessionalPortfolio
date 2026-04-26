@echo off
echo Setting up dual deployment PR...

:: Create branch
git checkout -b feature/dual-deployment

:: Create folders if they don't exist
if not exist ".github\workflows" mkdir ".github\workflows"
if not exist "frontend\public" mkdir "frontend\public"

:: Copy workflow files (adjust source paths to where you downloaded the files)
copy /Y "%USERPROFILE%\Downloads\deploy-gh-pages.yml" ".github\workflows\deploy-gh-pages.yml"
copy /Y "%USERPROFILE%\Downloads\deploy-netlify.yml"  ".github\workflows\deploy-netlify.yml"
copy /Y "%USERPROFILE%\Downloads\404.html"             "frontend\public\404.html"
copy /Y "%USERPROFILE%\Downloads\netlify.toml"         "netlify.toml"

:: Remove old deploy.yml
if exist ".github\workflows\deploy.yml" del ".github\workflows\deploy.yml"

:: Commit and push
git add .
git commit -m "feat: parallel deployment to GitHub Pages and Netlify"
git push origin feature/dual-deployment

echo Done! Now open a Pull Request on GitHub.
pause
