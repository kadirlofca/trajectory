/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "20oliwlf2oewdxb",
    "created": "2024-03-21 17:02:50.177Z",
    "updated": "2024-03-21 17:02:50.177Z",
    "name": "part",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rrdxz4lj",
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
        "id": "lmnwiihu",
        "name": "category",
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
  const collection = dao.findCollectionByNameOrId("20oliwlf2oewdxb");

  return dao.deleteCollection(collection);
})
