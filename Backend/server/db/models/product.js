const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  ndb_number: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  long_name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  data_source: {
    type: Sequelize.STRING
  },
  gtin_upc: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  manufacturer: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  date_modified: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  date_available: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  ingredients_english: {
    type: Sequelize.TEXT,
    unique: true,
    allowNull: false
  }
})

module.exports = Product
