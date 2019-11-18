const router = require('express').Router()
// const {User} = require('../db/models')
const {Product} = require('../db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const gis = require('g-i-s')
const nutritionix = require('./nutritionix')

module.exports = router

//scanning product - search by gtinupc
router.get('/:gtinupc', async (req, res, next) => {
  try {
    console.log('Here in backend gtinupc ', req.params.gtinupc)
    console.log(
      'Here in backend gtinupc altered ',
      req.params.gtinupc.slice(1, req.params.gtinupc.length - 1)
    )

    const product = await Product.findOne({
      where: {
        gtinupc: {
          [Op.iLike]: `%${req.params.gtinupc.slice(
            1,
            req.params.gtinupc.length - 1
          )}%`
        }
      }
    })

    if ((await product) && (await !product.photoUrl)) {
      console.log('generating image')
      const logResults = async (error, results) => {
        if (error) {
          console.log(error)
        } else {
          // console.log(JSON.stringify(results, null, '  '))
          console.log('One url', results[0].url)
          await product.update({photoUrl: results[0].url})
          res.json(product)
        }
      }
      gis(product.longName, logResults)
    } else {
      console.log('TC: product', product)
      res.json(product)
    }
  } catch (err) {
    console.log('in err')
    next(err)
  }
})

//this is used for category listing on homepage
router.get('/search/:term', async (req, res, next) => {
  try {
    const product = await Product.findAll({
      where: {
        longName: {
          [Op.iLike]: `%${req.params.term}%`
        },
        dataSource: 'wholefoods.com'
      }
    })

    res.json(product)
  } catch (err) {
    next(err)
  }
})

//Request for nutritional value
router.get('/nutrition/:gtinUPC', async (req, res, next) => {
  try {
    console.log('in try now, req.params.gtinUPC', req.params.gtinUPC)
    const {data} = await nutritionix.get(`item?upc=${req.params.gtinUPC}`)
    console.log('TCL: data hereee', data)

    res.json(data)
  } catch (err) {
    next(err)
  }
})
