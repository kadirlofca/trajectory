/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlg880t5xihmn0v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ezews0xi",
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
  const collection = dao.findCollectionByNameOrId("jlg880t5xihmn0v")

  // remove
  collection.schema.removeField("ezews0xi")

  return dao.saveCollection(collection)
})
