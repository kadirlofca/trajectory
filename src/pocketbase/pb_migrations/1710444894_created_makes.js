/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "icxccmqnhewne1l",
    "created": "2024-03-14 19:34:54.493Z",
    "updated": "2024-03-14 19:34:54.493Z",
    "name": "makes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ai59clj3",
        "name": "Mazda",
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
        "id": "fpdn2zdd",
        "name": "Toyota",
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
        "id": "z01pkbxl",
        "name": "Nissan",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("icxccmqnhewne1l");

  return dao.deleteCollection(collection);
})
