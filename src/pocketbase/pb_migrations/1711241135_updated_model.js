/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3tm5pk17aekzpzy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "odiymqf7",
    "name": "Car_Year",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "7cfwz6k3exr8l29",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3tm5pk17aekzpzy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "odiymqf7",
    "name": "Car_Year",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "7cfwz6k3exr8l29",
      "cascadeDelete": false,
      "minSelect": 1,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
