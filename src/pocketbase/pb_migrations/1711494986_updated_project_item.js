/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlg880t5xihmn0v")

  // remove
  collection.schema.removeField("z2s5eyyf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tt5og4ag",
    "name": "text",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlg880t5xihmn0v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z2s5eyyf",
    "name": "data",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // remove
  collection.schema.removeField("tt5og4ag")

  return dao.saveCollection(collection)
})
