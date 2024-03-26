/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oc2d0dg2ulxcn9v")

  // remove
  collection.schema.removeField("dnbxxzic")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xsyqnnzo",
    "name": "project",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "t4m91pc1ryi6wlm",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dnbxxzic",
    "name": "parts",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "5emz3qy4z42v3xs",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("xsyqnnzo")

  return dao.saveCollection(collection)
})
