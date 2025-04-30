# BCG Sales Tool
BCG Sales tool created for Showcasing sales report

### Pre Requisite
Python 2 or 3 needs to be installed For running this app in local set path for python: 
```
export PYTHON=/usr/local/bin/python2
```

## For installing UI
```
cd webapp

# Install dependencies 
npm install --legacy-peer-deps

# Runserver
npm start
```

## For installing Backend

### Prerequisite
if using venv install the following
```
brew install pyenv
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init --path)"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
source ~/.zshrc
pyenv install 3.11.9
pyenv local 3.11.9

#Recreate your virtual env
rm -rf venv
python -m venv venv
source venv/bin/activate
pip install --upgrade pip setuptools wheel
pip install -r requirements.txt

```

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
