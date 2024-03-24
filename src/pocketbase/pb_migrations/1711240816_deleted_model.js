/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("t02nkcwkrxx8dh3");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "t02nkcwkrxx8dh3",
    "created": "2024-03-21 02:04:03.270Z",
    "updated": "2024-03-24 00:38:33.685Z",
    "name": "model",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lmaxxh3f",
        "name": "name",
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
        "id": "zlitlvsg",
        "name": "make",
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
        "id": "jdsmyczi",
        "name": "year",
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
        "id": "5wbbewb1",
        "name": "Car_Make",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "4f023p5qmzah2gj",
          "cascadeDelete": false,
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
})
