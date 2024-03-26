/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "oc2d0dg2ulxcn9v",
    "created": "2024-03-26 02:12:39.263Z",
    "updated": "2024-03-26 02:12:39.263Z",
    "name": "project_category",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dnbxxzic",
        "name": "field",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "5emz3qy4z42v3xs",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("oc2d0dg2ulxcn9v");

  return dao.deleteCollection(collection);
})
