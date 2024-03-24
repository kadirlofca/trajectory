/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7cfwz6k3exr8l29")

  // remove
  collection.schema.removeField("qcjhfncz")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7cfwz6k3exr8l29")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qcjhfncz",
    "name": "year",
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

  // remove
  collection.schema.removeField("uyi6ok7u")

  return dao.saveCollection(collection)
})
