@echo off
SET var=%cd%

start cmd /c "cd %var%\diabetes-python && start run_py.bat"
start cmd /c "cd %var%\diabetes-prediction-react && npm start"

echo Application is running. Close this window to stop the servers.
