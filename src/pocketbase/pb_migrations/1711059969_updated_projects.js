/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t4m91pc1ryi6wlm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xpjwdccm",
    "name": "items",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t4m91pc1ryi6wlm")

  // remove
  collection.schema.removeField("xpjwdccm")

  return dao.saveCollection(collection)
})
