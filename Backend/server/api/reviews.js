const router = require('express').Router()
const {Product} = require('../db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const amazonScraper = require('amazon-buddy')

module.exports = router

router.get('/amazon/:asin', async (req, res, next) => {
  try {
    console.log('hellow')

    let reviews = await amazonScraper.reviews({
      asin: req.params.asin,
      number: 3,
      save: false
    })

    res.send(reviews)
  } catch (err) {
    next(err)
  }
})
