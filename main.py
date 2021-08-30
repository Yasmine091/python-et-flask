from flask import Flask, render_template, request, jsonify, redirect
from flask_pymongo import PyMongo
from bson.objectid import ObjectId



app = Flask(__name__,
            static_url_path='', 
            static_folder='static/',
            template_folder='templates/')


app.config["MONGO_URI"] = "mongodb+srv://Yasmine:TUk7taF38eWcx62X@flask-api.ty5l6.mongodb.net/Flask-API?retryWrites=true&w=majority"
mongo = PyMongo(app)


import crud
import pwa


@app.route("/")
def home():
    topic = mongo.db.topics
    output = []
    for search in topic.find():
        tags = str(search['tags']).replace("[", "")
        tags = tags.replace("]", "")
        tags = tags.replace("'", "")
        output.append({
                "_id": str(search['_id']),
                "title": search['title'], # Un titre (obligatoire)
                "description" : search['description'], # Une description courte (non obligatoire)
                "url" : search['url'], # Un lien (obligatoire)
                "author" : search['author'], # Un auteur (obligatoire)
                "tags" : tags, # Une liste de tags (non obligatoire)
            })
    return render_template("home.html", topics=output)


@app.route("/list")
def list():
    return home()


@app.route("/topic/<id>")
def topic(id):
    topic = mongo.db.topics
    search = topic.find_one({'_id': ObjectId(id)})
    if search:
        tags = str(search['tags']).replace("[", "")
        tags = tags.replace("]", "")
        tags = tags.replace("'", "")
        output = {
                "_id": str(search['_id']),
                "title": search['title'], # Un titre (obligatoire)
                "description" : search['description'], # Une description courte (non obligatoire)
                "url" : search['url'], # Un lien (obligatoire)
                "author" : search['author'], # Un auteur (obligatoire)
                "tags" : tags, # Une liste de tags (non obligatoire)
            }
        return render_template("topic.html", topic=output)
    else:
        output = {
            "type": "Erreur",
            "content": "Veille non trouvé"
        }
        return render_template("message.html", msg=output)
        

@app.route("/new")
def new():
    return render_template("new.html")        
        
        
@app.route("/add", methods=["POST"])
def add():
    topic = mongo.db.topics
    
    title = request.form['title']
    desc = request.form['desc']
    url = request.form['url']
    author = request.form['author']
    tags = request.form['tags'] or []
    
    if type(tags) == str:
        tags = tags.replace(" ", "")
        tags = tags.split(',')
    
    if title == '' or desc == '' or url == '' or author == '':
        output = {
            "type": "Erreur",
            "content": "Vous devez remplire tous les champs"
        }
        
        return render_template("message.html", msg=output)
    else: 
        topic.insert({
                    "title": title, # Un titre (obligatoire)
                    "description" : desc, # Une description courte (non obligatoire)
                    "url" : url, # Un lien (obligatoire)
                    "author" : author, # Un auteur (obligatoire)
                    "tags" : tags, # Une liste de tags (non obligatoire)
                })
    
        output = {
                "type": "Succès",
                "content": "Veille enregistrée"
        }
        
        return render_template("message.html", msg=output)


@app.route("/edit/<id>")
def edit(id):
    topic = mongo.db.topics
    search = topic.find_one({'_id': ObjectId(id)})
    if search:
        tags = str(search['tags']).replace("[", "")
        tags = tags.replace("]", "")
        tags = tags.replace("'", "")
        output = {
                "_id": str(search['_id']),
                "title": search['title'], # Un titre (obligatoire)
                "description" : search['description'], # Une description courte (non obligatoire)
                "url" : search['url'], # Un lien (obligatoire)
                "author" : search['author'], # Un auteur (obligatoire)
                "tags" : tags, # Une liste de tags (non obligatoire)
            }
        return render_template("edit.html", topic=output)
    else:
        output = {
            "type": "Erreur",
            "content": "Veille non trouvée"
        }
        return render_template("message.html", msg=output)

@app.route("/save/<id>", methods=["POST"])
def update(id):
    topic = mongo.db.topics
    search = topic.find_one({'_id': ObjectId(id)})
    
    title = request.form['title'] or search['title']
    desc = request.form['desc'] or search['description']
    url = request.form['url'] or search['url']
    author = request.form['author'] or search['author']
    tags = request.form['tags'] or []
    
    if type(tags) == str:
        tags = tags.replace(" ", "")
        tags = tags.split(',')
    
    if search:
        query = {
                "_id": ObjectId(search['_id'])
            }
    else:
        output = {
            "type": "Erreur",
            "content": "Veille non trouvée"
        }
        return render_template("message.html", msg=output)
    
    data = { 
            "$set": {
                    "title": title, # Un titre (obligatoire)
                    "description" : desc, # Une description courte (non obligatoire)
                    "url" : url, # Un lien (obligatoire)
                    "author" : author, # Un auteur (obligatoire)
                    "tags" : tags, # Une liste de tags (non obligatoire)
                }
            }
    
    topic_id = topic.update_one(query, data)
    
    output = {
            "type": "Succès",
            "content": "Veille enregistrée"
    }
    return render_template("message.html", msg=output)


@app.route("/delete/<id>")
def delete(id):
    topic = mongo.db.topics
    
    get_topic = topic.find_one({'_id': ObjectId(id)})
    
    if get_topic:
        del_topic = topic.delete_one({'_id': get_topic['_id']})
        output = {
            "type": "Succès",
            "content": "Veille supprimée"
        }
    else:
        output = {
            "type": "Erreur",
            "content": "Veille non trouvée"
        }
    
    
    return render_template("message.html", msg=output)


@app.route("/api")
def api_url():
    return redirect("/api/v1", code=302)
    
    
@app.route("/api/v1")
def documentation():
    return app.send_static_file("api/index.html")