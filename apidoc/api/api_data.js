define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/topics",
    "title": "Créer une veille",
    "name": "addTopic",
    "group": "Topics",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID unique des veilles.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Flask/main.py",
    "groupTitle": "Topics",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title",
        "description": "<p>description</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "description",
        "description": "<p>description]</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "url",
        "description": "<p>description</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "author",
        "description": "<p>description</p>"
      },
      {
        "group": "Body",
        "type": "String[]",
        "optional": false,
        "field": "tags",
        "description": "<p>description</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la veille.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Titre de la veille.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description de la veille.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Lien de la veille.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>Autheur de la veille.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Tags.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"title\": \"PyMongo\",\n    \"description\" : \"Une veille sur l'utilisation de PyMongo\",\n    \"url\" : \"https://flapymon.herokuapp.com/\",\n    \"author\" : \"John Doe\"\n    \"tags\" : [\"Flask\", \"Python\", \"MongoDB\"]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TopicFound",
            "description": "<p>L'id de la veille a été trouvé.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TopicNotFound",
            "description": "<p>L'id de la veille n'a pas été trouvé.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"Error : Topic not found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/topics/:id",
    "title": "Supprimer une veille",
    "name": "delTopic",
    "group": "Topics",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID unique des veilles.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Flask/main.py",
    "groupTitle": "Topics",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TopicFound",
            "description": "<p>L'id de la veille a été trouvé.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TopicNotFound",
            "description": "<p>L'id de la veille n'a pas été trouvé.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"Error : Topic not found\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"title\": \"PyMongo\",\n    \"description\" : \"Une veille sur l'utilisation de PyMongo\",\n    \"url\" : \"https://flapymon.herokuapp.com/\",\n    \"author\" : \"John Doe\"\n    \"tags\" : [\"Flask\", \"Python\", \"MongoDB\"]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/topics/:id",
    "title": "Modifier une veille",
    "name": "editTopic",
    "group": "Topics",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID unique des veilles.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Flask/main.py",
    "groupTitle": "Topics",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title",
        "description": "<p>description</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "description",
        "description": "<p>description]</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "url",
        "description": "<p>description</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "author",
        "description": "<p>description</p>"
      },
      {
        "group": "Body",
        "type": "String[]",
        "optional": false,
        "field": "tags",
        "description": "<p>description</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la veille.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Titre de la veille.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description de la veille.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Lien de la veille.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>Autheur de la veille.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Tags.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"title\": \"PyMongo\",\n    \"description\" : \"Une veille sur l'utilisation de PyMongo\",\n    \"url\" : \"https://flapymon.herokuapp.com/\",\n    \"author\" : \"John Doe\"\n    \"tags\" : [\"Flask\", \"Python\", \"MongoDB\"]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TopicFound",
            "description": "<p>L'id de la veille a été trouvé.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TopicNotFound",
            "description": "<p>L'id de la veille n'a pas été trouvé.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"Error : Topic not found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/topics/:id",
    "title": "Voir une veille",
    "name": "getTopic",
    "group": "Topics",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID unique des veilles.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Flask/main.py",
    "groupTitle": "Topics",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la veille.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Titre de la veille.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description de la veille.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Lien de la veille.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>Autheur de la veille.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Tags.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"title\": \"PyMongo\",\n    \"description\" : \"Une veille sur l'utilisation de PyMongo\",\n    \"url\" : \"https://flapymon.herokuapp.com/\",\n    \"author\" : \"John Doe\"\n    \"tags\" : [\"Flask\", \"Python\", \"MongoDB\"]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TopicFound",
            "description": "<p>L'id de la veille a été trouvé.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TopicNotFound",
            "description": "<p>L'id de la veille n'a pas été trouvé.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"Error : Topic not found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/topics",
    "title": "Voir la liste des veilles",
    "name": "getTopics",
    "group": "Topics",
    "version": "0.0.0",
    "filename": "Flask/main.py",
    "groupTitle": "Topics",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la veille.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Titre de la veille.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description de la veille.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Lien de la veille.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>Autheur de la veille.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Tags.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"title\": \"PyMongo\",\n    \"description\" : \"Une veille sur l'utilisation de PyMongo\",\n    \"url\" : \"https://flapymon.herokuapp.com/\",\n    \"author\" : \"John Doe\"\n    \"tags\" : [\"Flask\", \"Python\", \"MongoDB\"]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TopicFound",
            "description": "<p>L'id de la veille a été trouvé.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TopicNotFound",
            "description": "<p>L'id de la veille n'a pas été trouvé.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"Error : Topic not found\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
