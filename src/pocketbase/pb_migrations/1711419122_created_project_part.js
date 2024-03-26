/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5emz3qy4z42v3xs",
    "created": "2024-03-26 02:12:02.678Z",
    "updated": "2024-03-26 02:12:02.678Z",
    "name": "project_part",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fnxpzp61",
        "name": "items",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "jlg880t5xihmn0v",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
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
  const collection = dao.findCollectionByNameOrId("5emz3qy4z42v3xs");

  return dao.deleteCollection(collection);
})
