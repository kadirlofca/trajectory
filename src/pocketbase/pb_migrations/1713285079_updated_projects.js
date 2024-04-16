/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t4m91pc1ryi6wlm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uizlcfus",
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
    "id": "vkt6l5h2",
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
  const collection = dao.findCollectionByNameOrId("t4m91pc1ryi6wlm")

  // remove
  collection.schema.removeField("uizlcfus")

  // remove
  collection.schema.removeField("vkt6l5h2")

  return dao.saveCollection(collection)
})
