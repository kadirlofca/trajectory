/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("20oliwlf2oewdxb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tmksajka",
    "name": "field",
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
  const collection = dao.findCollectionByNameOrId("20oliwlf2oewdxb")

  // remove
  collection.schema.removeField("tmksajka")

  return dao.saveCollection(collection)
})
