/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5emz3qy4z42v3xs")

  // remove
  collection.schema.removeField("fnxpzp61")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nbvden0d",
    "name": "category",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "oc2d0dg2ulxcn9v",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5emz3qy4z42v3xs")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("nbvden0d")

  return dao.saveCollection(collection)
})
