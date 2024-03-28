/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5emz3qy4z42v3xs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7zlz4hap",
    "name": "part",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "20oliwlf2oewdxb",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5emz3qy4z42v3xs")

  // remove
  collection.schema.removeField("7zlz4hap")

  return dao.saveCollection(collection)
})
