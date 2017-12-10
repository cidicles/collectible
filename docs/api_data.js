define({ "api": [
  {
    "type": "post",
    "url": "/collection",
    "title": "Create a new collectible",
    "name": "Create_a_Collectible",
    "group": "Collectibles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the collectible.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>Locale of the collectible.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/collectionController.js",
    "groupTitle": "Collectibles"
  },
  {
    "type": "delete",
    "url": "/collection/:collectionId",
    "title": "Delete a collectible",
    "name": "Delete_a_Collectible",
    "group": "Collectibles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "collectionId",
            "description": "<p>Id of the collectible.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/collectionController.js",
    "groupTitle": "Collectibles"
  },
  {
    "type": "get",
    "url": "/collection/:collectionId",
    "title": "Get a collectible",
    "name": "Get_a_Collectible",
    "group": "Collectibles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "collectionId",
            "description": "<p>Id of the collectible.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/collectionController.js",
    "groupTitle": "Collectibles"
  },
  {
    "type": "get",
    "url": "/collection/:locale/:page/:limit",
    "title": "Get a paginated list of all collectibles",
    "name": "List_All_Collectibles",
    "group": "Collectibles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>The sites current locale.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "page",
            "description": "<p>The current page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "limit",
            "description": "<p>The amount to return.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/collectionController.js",
    "groupTitle": "Collectibles"
  },
  {
    "type": "put",
    "url": "/collection/:collectionId",
    "title": "Update a collectible",
    "name": "Update_a_Collectible",
    "group": "Collectibles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "collectionId",
            "description": "<p>Id of the collectible.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/collectionController.js",
    "groupTitle": "Collectibles"
  }
] });
