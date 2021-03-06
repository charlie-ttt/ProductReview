const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define(
  'product',
  {
    ndbNumber: {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false
    },
    longName: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    dataSource: {
      type: Sequelize.STRING
    },
    gtinupc: {
      type: Sequelize.STRING
    },
    manufacturer: {
      type: Sequelize.STRING
    },
    dateModified: {
      type: Sequelize.STRING
    },
    dateAvailable: {
      type: Sequelize.STRING
    },
    ingredientsEnglish: {
      type: Sequelize.TEXT
    },
    photoUrl: {
      type: Sequelize.STRING
    },
    asin: Sequelize.STRING
  },
  {
    timestamps: false
  }
)

module.exports = Product
