const router = require('express').Router()
// const {User} = require('../db/models')
const {Product} = require('../db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const gis = require('g-i-s')

// function logResults(error, results) {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log(JSON.stringify(results, null, '  '))
//   }
// }

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
    // gis('req.params.gtinupc', logResults)
    // const product = await firstImageLoad.getFirstImageURL('req.params.gtinupc')
    // console.log('TCL: product NEW', product)
    console.log('in err')
    next(err)
  }
})

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
router.get('/generateImg/:productName', async (req, res, next) => {
  try {
    const logResults = (error, results) => {
      if (error) {
        console.log(error)
      } else {
        // console.log(JSON.stringify(results, null, '  '))
        res.json(results[0].url)
      }
    }
    gis(req.params.productName, logResults)
  } catch (err) {
    next(err)
  }
})
