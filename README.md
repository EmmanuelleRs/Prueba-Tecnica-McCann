# McCann Prove
Stack
- Python > 3.9 
- Node > 16
- MySQL (optional)
- Sass

## Project Requirements

## Getting Started
You will need 3 development server.

### Python
First of all creat your virtualenv and install the dependencies

```bash
python3.x -m venv virtualenv && pip install -r requeriments.txt
```

Next create a `.env` file at /mccann_prove white the following variables

```bash 
SECRET_KEY=
DEBUG=True
ALLOWED_HOSTS='*'
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=
```

Once your done, load the initian data on your database

```bash
python manage.py loaddata fixtures/brands.json fixtures/cars.json
```

Finally just run the django server

```bash
python manage.py runserver
```

### Node
If you nead to update the react form component ypu will nead to run the node server with webpack for the first time.

```bash
cd apps/registry && npm i
```

Once you have your dependencies installed. run

```bash
npm run dev
```


### SASS

If you nead to update css styles run the following command

```bash
cd static/css && sass --watch global.scss global.css
```



