@echo off

echo Activating virtual environment...
call Scripts\activate

echo Starting Flask app...
start "Flask" cmd /c "python app2.py"
exit