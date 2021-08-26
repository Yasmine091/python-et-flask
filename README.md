# API Rest - Python et Flask

## Guide d'installation
* Pour installer et configurer le site, fais ceci dans le terminal :
```
    git clone git@gitlab.com:Yasmine091/python-et-flask.git
    cd python-et-flask/
    python3 -m venv venv
    . venv/bin/activate
    pip3 install Flask
    pip3 install Flask-PyMongo
```
* Modifie la valeur app.config["MONGO_URI"] dans le fichier main.py
* Puis reviens au terminal et fais ceci pour lancer le site :
```
    flask run
```

## Dépendances
* MongoDB : https://docs.mongodb.com/manual/installation/

## Version en ligne
* https://flapymon.herokuapp.com/