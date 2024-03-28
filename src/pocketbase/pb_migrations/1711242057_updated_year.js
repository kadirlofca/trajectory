/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7cfwz6k3exr8l29")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uyi6ok7u",
    "name": "year",
    "type": "number",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": 1990,
      "max": 2024,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7cfwz6k3exr8l29")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uyi6ok7u",
    "name": "year",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
