from flask import Flask, render_template, request, jsonify, redirect
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from main import app, mongo

"""
@apiDefine TopicNotFoundError

@apiError TopicNotFound L'id de la veille n'a pas été trouvé.

@apiErrorExample Error-Response:
    HTTP/1.1 404 Not Found
    {
      "Error : Topic not found"
    }
"""

"""
@apiDefine TopicFound

@apiError TopicFound L'id de la veille a été trouvé.

@apiSuccessExample Success-Response:
    HTTP/1.1 200 OK
    {
        "title": "PyMongo",
        "description" : "Une veille sur l'utilisation de PyMongo",
        "url" : "https://flapymon.herokuapp.com/",
        "author" : "John Doe",
        "tags" : ["Flask", "Python", "MongoDB"]
    }
"""

"""
@apiDefine SuccessResult

@apiSuccess {Number} _id ID de la veille.
@apiSuccess {String} title Titre de la veille.
@apiSuccess {String} description Description de la veille.
@apiSuccess {String} url Lien de la veille.
@apiSuccess {String} author Autheur de la veille.
@apiSuccess {String[]} tags Tags.
"""

"""
@apiDefine TopicBody

@apiBody {String} title description
@apiBody {String} description description]
@apiBody {String} url description
@apiBody {String} author description
@apiBody {String[]} tags description
"""

"""
@api {get} /api/v1/topics Voir la liste des veilles
@apiName getTopics
@apiGroup Topics     

@apiUse SuccessResult

@apiUse TopicFound
@apiUse TopicNotFoundError
"""
@app.route("/api/v1/topics", methods=['GET'])
def getTopics():
    topic = mongo.db.topics
    output = []
    for search in topic.find():
        output.append({
                "_id": str(search['_id']),
                "title": search['title'], # Un titre (obligatoire)
                "description" : search['description'], # Une description courte (non obligatoire)
                "url" : search['url'], # Un lien (obligatoire)
                "author" : search['author'], # Un auteur (obligatoire)
                "tags" : search['tags'], # Une liste de tags (non obligatoire)
            })
    return jsonify({'result' : output})


"""
@api {get} /api/v1/topics/:id Voir une veille
@apiName getTopic
@apiGroup Topics

@apiParam {Number} id ID unique des veilles.

@apiUse SuccessResult

@apiUse TopicFound
@apiUse TopicNotFoundError
"""
@app.route("/api/v1/topics/<id>", methods=['GET'])
def getTopic(id):
    topic = mongo.db.topics
    search = topic.find_one({'_id': ObjectId(id)})
    if search:
        output = {
                "_id": str(search['_id']),
                "title": search['title'], # Un titre (obligatoire)
                "description" : search['description'], # Une description courte (non obligatoire)
                "url" : search['url'], # Un lien (obligatoire)
                "author" : search['author'], # Un auteur (obligatoire)
                "tags" : search['tags'], # Une liste de tags (non obligatoire)
            }
    else:
        output = "Error : Topic not found"
        
    return jsonify({'result' : output})


"""
@api {post} /api/v1/topics Créer une veille
@apiName addTopic
@apiGroup Topics

@apiParam {Number} id ID unique des veilles.

@apiUse TopicBody
@apiUse SuccessResult

@apiUse TopicFound
@apiUse TopicNotFoundError
"""
@app.route("/api/v1/topics", methods=['POST'])
def addTopic():
    topic = mongo.db.topics    
    title = request.json['title']
    desc = request.json['description']
    url = request.json['url']
    author = request.json['author']
    tags = request.json.get('tags', [])
    
    topic_id = topic.insert({
                "title": title, # Un titre (obligatoire)
                "description" : desc, # Une description courte (non obligatoire)
                "url" : url, # Un lien (obligatoire)
                "author" : author, # Un auteur (obligatoire)
                "tags" : tags, # Une liste de tags (non obligatoire)
            })
    
    new_topic = topic.find_one({'_id': topic_id })
    
    output = {  
                "_id": str(new_topic['_id']),
                "title": new_topic['title'], # Un titre (obligatoire)
                "description" : new_topic['description'], # Une description courte (non obligatoire)
                "url" : new_topic['url'], # Un lien (obligatoire)
                "author" : new_topic['author'], # Un auteur (obligatoire)
                "tags" : new_topic['tags'], # Une liste de tags (non obligatoire)
            }
    
    return jsonify({'result' : output})


"""
@api {put} /api/v1/topics/:id Modifier une veille
@apiName editTopic
@apiGroup Topics

@apiParam {Number} id ID unique des veilles.

@apiUse TopicBody
@apiUse SuccessResult

@apiUse TopicFound
@apiUse TopicNotFoundError
"""
@app.route("/api/v1/topics/<id>", methods=['PUT'])
def editTopic(id):
    topic = mongo.db.topics
    search = topic.find_one({'_id': ObjectId(id)})
    
    title = request.json.get('title', search['title'])
    desc = request.json.get('description', search['description'])
    url = request.json.get('url', search['url'])
    author = request.json.get('author', search['author'])
    tags = request.json.get('tags', search['tags'])
    
    if search:
        query = {
                "_id": ObjectId(search['_id'])
            }
    else:
        output = "Error : Topic not found"
        return jsonify({'result' : output})
    
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
    
    get_topic = topic.find_one({'_id': ObjectId(id)})
    
    output = {  
                "_id": str(get_topic['_id']),
                "title": get_topic['title'], # Un titre (obligatoire)
                "description" : get_topic['description'], # Une description courte (non obligatoire)
                "url" : get_topic['url'], # Un lien (obligatoire)
                "author" : get_topic['author'], # Un auteur (obligatoire)
                "tags" : get_topic['tags'], # Une liste de tags (non obligatoire)
            }
    
    return jsonify({'result' : output})

"""
@api {delete} /api/v1/topics/:id Supprimer une veille
@apiName delTopic
@apiGroup Topics

@apiParam {Number} id ID unique des veilles.

@apiUse TopicFound
@apiUse TopicNotFoundError
"""
@app.route("/api/v1/topics/<id>", methods=['DELETE'])
def delTopic(id):
    topic = mongo.db.topics
    
    get_topic = topic.find_one({'_id': ObjectId(id)})
    del_topic = topic.delete_one({'_id': get_topic['_id']})
    
    if del_topic:
        output = "Success : Topic deleted"
    else:
        output = "Error : Topic not found"
    
    return jsonify({'result' : output})