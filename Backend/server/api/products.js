const router = require('express').Router()
// const {User} = require('../db/models')
const {Product} = require('../db/models')
const firstImageLoad = require('first-image-search-load')
module.exports = router

router.use(async (req, res, next) => {
  try {
    console.log('YES YES YES')
    // const product = await Product.findOne({
    //   where: {long_name: 'MOCHI ICE CREAM BONBONS'}
    // })
    // console.log('product', product)
  } catch (err) {
    console.log(err)
  }

  next()
})

router.get('/', async (req, res, next) => {
  try {
    console.log('in router.get - try')
    const img = await firstImageLoad.getFirstImageURL(
      `Hubert's Lemonade Original Glass Bottle, 40 fl oz`
    )
    console.log(img)
    // const product = await Product.findOne({
    //   where: {long_name: 45376430}
    // })
    // console.log('product', product)
    // const product = await Product.findAll()

    res.json('product')
  } catch (err) {
    next(err)
  }
})
