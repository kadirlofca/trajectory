/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlg880t5xihmn0v")

  // remove
  collection.schema.removeField("tt5og4ag")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tztsw44h",
    "name": "text",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlg880t5xihmn0v")

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

  // remove
  collection.schema.removeField("tztsw44h")

  return dao.saveCollection(collection)
})
