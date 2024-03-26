/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jlg880t5xihmn0v",
    "created": "2024-03-26 02:11:38.489Z",
    "updated": "2024-03-26 02:11:38.489Z",
    "name": "project_item",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "z2s5eyyf",
        "name": "data",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
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
  const collection = dao.findCollectionByNameOrId("jlg880t5xihmn0v");

  return dao.deleteCollection(collection);
})
