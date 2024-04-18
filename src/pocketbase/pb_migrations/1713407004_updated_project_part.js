/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5emz3qy4z42v3xs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mkzyyu2w",
    "name": "cart",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vf631pt7",
    "name": "spent",
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
  const collection = dao.findCollectionByNameOrId("5emz3qy4z42v3xs")

  // remove
  collection.schema.removeField("mkzyyu2w")

  // remove
  collection.schema.removeField("vf631pt7")

  return dao.saveCollection(collection)
})
