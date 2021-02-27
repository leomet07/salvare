@echo off

cd web

npm run build

firebase deploy --only hosting

cd ..