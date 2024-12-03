#!/bin/bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
echo "Setup completed!" 