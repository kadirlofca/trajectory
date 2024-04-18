/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oc2d0dg2ulxcn9v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fsykmvig",
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
    "id": "fj4oukwk",
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
  const collection = dao.findCollectionByNameOrId("oc2d0dg2ulxcn9v")

  // remove
  collection.schema.removeField("fsykmvig")

  // remove
  collection.schema.removeField("fj4oukwk")

  return dao.saveCollection(collection)
})
