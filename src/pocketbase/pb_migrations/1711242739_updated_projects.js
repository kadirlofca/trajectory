/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t4m91pc1ryi6wlm")

  // remove
  collection.schema.removeField("rfyzdhzg")

  // remove
  collection.schema.removeField("thaizd3y")

  // remove
  collection.schema.removeField("otgj1fzx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "az0dprzb",
    "name": "Make",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "4f023p5qmzah2gj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ycwdhsub",
    "name": "Model",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "3tm5pk17aekzpzy",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y6kchzrd",
    "name": "Year",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "7cfwz6k3exr8l29",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t4m91pc1ryi6wlm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rfyzdhzg",
    "name": "year",
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
    "id": "thaizd3y",
    "name": "make",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "otgj1fzx",
    "name": "model",
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

  // remove
  collection.schema.removeField("az0dprzb")

  // remove
  collection.schema.removeField("ycwdhsub")

  // remove
  collection.schema.removeField("y6kchzrd")

  return dao.saveCollection(collection)
})
