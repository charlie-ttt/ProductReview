const router = require('express').Router()
// const {User} = require('../db/models')
const {Product} = require('../db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
var gis = require('g-i-s')

// function logResults(error, results) {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log(JSON.stringify(results, null, '  '))
//   }
// }

module.exports = router

router.get('/:gtinUPC', async (req, res, next) => {
  try {
    // console.log('Here in backend gtinUPC ', req.params.gtinUPC)
    // const product = await Product.findOne({
    //   where: {
    //     ndbNumber: {
    //       [Op.iLike]: `%${req.params.gtinUPC}%`
    //     }
    //   }
    // })
    console.log('hello')
    // GoogleImageSearch.searchImage('cats').then(res => {
    //   console.log(res) // This will return array of image URLs
    // })
    const logResults = (error, results) => {
      if (error) {
        console.log(error)
      } else {
        // console.log(JSON.stringify(results, null, '  '))
        res.json(results[0].url)
      }
    }
    gis(req.params.gtinUPC, logResults)
  } catch (err) {
    // gis('req.params.gtinUPC', logResults)
    // const product = await firstImageLoad.getFirstImageURL('req.params.gtinUPC')
    // console.log('TCL: product NEW', product)

    next(err)
  }
})

router.get('/search/:term', async (req, res, next) => {
  try {
    const product = await Product.findAll({
      where: {
        longName: {
          [Op.iLike]: `%${req.params.term}%`
        }
      }
    })
    // console.log('product', product)

    // const img = await firstImageLoad.getFirstImageURL(
    //   `Hubert's Lemonade Original Glass Bottle, 40 fl oz`
    // )
    // console.log(img)
    // const product = await Product.findOne({
    //   where: {long_name: 45376430}
    // })
    // console.log('product', product)
    // const product = await Product.findAll()

    res.json(product)
  } catch (err) {
    next(err)
  }
})
