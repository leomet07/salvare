@echo off

cd web

npm run build && firebase deploy

cd ..