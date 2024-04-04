/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlg880t5xihmn0v")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p8noxxw5",
    "name": "mark",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "none",
        "selected",
        "bought"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlg880t5xihmn0v")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p8noxxw5",
    "name": "field",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "none",
        "selected",
        "bought"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
