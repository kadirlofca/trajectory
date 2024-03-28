/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7cfwz6k3exr8l29",
    "created": "2024-03-24 00:41:35.838Z",
    "updated": "2024-03-24 00:41:35.838Z",
    "name": "year",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qcjhfncz",
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
  const collection = dao.findCollectionByNameOrId("7cfwz6k3exr8l29");

  return dao.deleteCollection(collection);
})
