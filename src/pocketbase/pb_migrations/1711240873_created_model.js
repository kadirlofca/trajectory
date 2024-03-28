/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3tm5pk17aekzpzy",
    "created": "2024-03-24 00:41:13.971Z",
    "updated": "2024-03-24 00:41:13.971Z",
    "name": "model",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ggjfn6l4",
        "name": "Model",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dqdzevuc",
        "name": "Car_Make",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "4f023p5qmzah2gj",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3tm5pk17aekzpzy");

  return dao.deleteCollection(collection);
})
