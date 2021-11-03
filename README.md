# Reservations

## Backend
Inside this directory you can run the next commands:

```bash
sudo apt install python3-pip    # To install pip in the OS (Ubuntu based Linux)

pip install pipenv              # Install pipenv to create virtual enviroments

pipenv shell                    # to activate the virtual enviroment

pipenv install -r requirements  # To install the app requeriments

uvicorn main:app --reload       # Run the server
```
Once the server is run, we can go to our browser and put the next link in the address bar:

```
http://localhost:8000/docs
```

## Frontend
Inside that directory, you can run several commands:

```bash
yarn start  # Starts the development server.

yarn build  # Bundles the app into static files for production.

yarn test   # Starts the test runner.

yarn eject  # Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!
```

We suggest that you begin by typing:

```bash
cd frontend     # Enter the frontend folder

yarn install    # Only the first time, to install all dependencies

yarn start      # Run the server
```