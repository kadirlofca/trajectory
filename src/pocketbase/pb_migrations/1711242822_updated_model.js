/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3tm5pk17aekzpzy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ggjfn6l4",
    "name": "Model",
    "type": "text",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3tm5pk17aekzpzy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ggjfn6l4",
    "name": "Model",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
