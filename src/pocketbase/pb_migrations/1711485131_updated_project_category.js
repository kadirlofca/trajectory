/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oc2d0dg2ulxcn9v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jl7qqpls",
    "name": "category",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1d36f57yhwrvidb",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oc2d0dg2ulxcn9v")

  // remove
  collection.schema.removeField("jl7qqpls")

  return dao.saveCollection(collection)
})
