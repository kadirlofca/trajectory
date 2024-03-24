/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t02nkcwkrxx8dh3")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t02nkcwkrxx8dh3")

  // remove
  collection.schema.removeField("5wbbewb1")

  return dao.saveCollection(collection)
})
