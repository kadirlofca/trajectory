/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "hbchpya4005w29y",
    "created": "2024-03-14 19:49:31.019Z",
    "updated": "2024-03-14 19:49:31.019Z",
    "name": "make",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ekvqto4e",
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
        "id": "uhujtvxl",
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
        "id": "ohklznfz",
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
  const collection = dao.findCollectionByNameOrId("hbchpya4005w29y");

  return dao.deleteCollection(collection);
})
