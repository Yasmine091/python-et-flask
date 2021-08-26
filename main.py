from flask import Flask
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/Flask-API"
#'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
#'mongodb://Yasmine:*****@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false'
mongo = PyMongo(app)

@app.route('/')
def hello():
    return "Hello World!"