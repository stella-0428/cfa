# BCG Sales Tool
BCG Sales tool created for Showcasing sales report

## For installing UI
```
cd webapp

# Install dependencies 
npm install

# Runserver
npm start
```

## For installing Backend
```
cd backend

# Install dependencies 
pip install -r requirements.txt

# Create PSQL DB and update the config under -> backend/settings.py

# Migrate database so that basic Django DB is created
python manage.py migrate 

# Runserver
python manage.py runsever
```
