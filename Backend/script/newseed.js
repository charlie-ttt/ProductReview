'use strict'

const db = require('../server/db')
// const {User} = require('../server/db/models')
const {Product} = require('../server/db/models')

async function seed() {
  // await db.sync()
  await db.sync({force: true})
  console.log('db synced!')

  // CHIPS
  const chipsProducts = await Promise.all([
    Product.create({
      ndbNumber: 11111,
      longName: 'Sea Salt Grain Free Tortilla chips, 5 oz',
      dataSource: 'wholefoods.com',
      gtinupc: '040201433658',
      manufacturer: 'Siete Family Foods',
      dateModified: '01/01/2019',
      dateAvailable: '01/01/2019',
      ingredientsEnglish:
        'Cassava Flour, Avocado Oil, Coconut Flour, Ground Chia Seed, Sea Salt',
      photoUrl:
        'https://sage.blob.core.windows.net/media/5be8c3910e91116dcd07dadb_upc-0851769007003-done-0-glamor-4da94f3f-681c-49cd-aa96-48dec5d638a6-h5pe0k.jpg',
      asin: 'B071XY8BDQ'
    }),
    Product.create({
      ndbNumber: 11112,
      longName: 'Organic Sea Salt Thin & Crispy Tortilla Chips, 11 oz',
      dataSource: 'wholefoods.com',
      gtinupc: '890444000298',
      manufacturer: 'LATE JULY ORGANIC SNACKS',
      dateModified: '01/01/2019',
      dateAvailable: '01/01/2019',
      ingredientsEnglish:
        'Organic Whole Ground Corn, Organic Sunflower Oil and/or Organic Safflower Oil, Sea Salt',
      photoUrl:
        'https://sage.blob.core.windows.net/media/5be8c44c8696df6d67451399_upc-0890444000298-done-0-glamor-7eee2baa-877b-4d24-a62d-55b27c5081e0-3tthhc.jpg',
      asin: 'B00IGHKC0M'
    }),
    Product.create({
      ndbNumber: 11113,
      longName: `Garden of Eatin' Blue Tortilla Chips, 16 oz`,
      dataSource: 'wholefoods.com',
      gtinupc: '015839008219',
      manufacturer: 'GARDEN OF EATIN',
      dateModified: '01/01/2019',
      dateAvailable: '01/01/2019',
      ingredientsEnglish:
        'Organic Blue Corn, Expeller Pressed Canola Oil and/or Safflower Oil and/or Sunflower Oil, Sea Salt',
      photoUrl:
        'https://sage.blob.core.windows.net/media/5be8c3d7eabd2b8c04e5952d_upc-0015839008219-done-0-glamor-0ad18dbd-a518-4e13-a9a0-52ee1d12c42f-9cgu60.jpg',
      asin: 'B001BM3CME'
    }),
    Product.create({
      ndbNumber: 11114,
      longName: '365 White Corn Restaurant Style Tortilla Chips Salted, 14 oz',
      dataSource: 'wholefoods.com',
      gtinupc: '099482471477',
      manufacturer: '365 EVERYDAY VALUE®',
      dateModified: '01/01/2019',
      dateAvailable: '01/01/2019',
      ingredientsEnglish: `Stone Ground White Corn, Expeller Pressed Oil (Sunflower Seed, Safflower Seed, and/or Canola Oil), Sea Salt. Produced in a facility that also processes Milk and Dairy, Soy`,
      photoUrl:
        'https://sage.blob.core.windows.net/media/5c1315083d4daf04b2657ff4_productdataa00099482471446-c1n1.jpg',
      asin: 'B07NQVC7VR'
    })
  ])

  const chocolate = await Promise.all([
    Product.create({
      ndbNumber: 11115,
      longName: 'Dark Chocolate Pretzel with Sea Salt Dark Chocolate, 4.7 oz',
      dataSource: 'wholefoods.com',
      gtinupc: '859686004013',
      manufacturer: 'barkTHINS',
      dateModified: '01/01/2019',
      dateAvailable: '01/01/2019',
      ingredientsEnglish:
        'Dark Chocolate [Chocolate Liquor*, Sugar*, Cocoa Butter*, Soy Lecithin (An Emulsifier), Vanilla], Pretzels [Wheat Flour, Salt, Soybean Oil, Barley Malt Flour], Sea Salt',
      photoUrl:
        'https://sage.blob.core.windows.net/media/5be8cb4ff91b938cd856be72_upc-0859686004013-done-0-glamor-82e67389-8080-49ee-a5ad-b9873d0ade7f-bhkfa0.jpg',
      asin: 'B00F9XTGI0'
    }),
    Product.create({
      ndbNumber: 11116,
      longName: 'Chimp Dark Chocolate, 3 oz',
      dataSource: 'wholefoods.com',
      gtinupc: '037014242379',
      manufacturer: 'ENDANGERED SPECIES CHOCOLATE',
      dateModified: '01/01/2019',
      dateAvailable: '01/01/2019',
      ingredientsEnglish:
        'Bittersweet Chocolate (Chocolate Liquor, Cane Sugar, Cocoa Butter, Soy Lecithin, Vanilla)',
      photoUrl:
        'https://sage.blob.core.windows.net/media/5be8c9efeabd2b8c04e59630_upc-0037014242379-done-0-glamor-1750f35c-0033-4101-8b47-b7049a9141e6-2u1lc0.jpg',
      asin: 'B004DIUN3Y'
    })
  ])

  const milks = await Promise.all([
    Product.create({
      ndbNumber: 11117,
      longName: 'OATLY Original Oat Milk, 64 fl. oz.',
      dataSource: 'wholefoods.com',
      gtinupc: '190646641016',
      manufacturer: 'OATLY',
      dateModified: '01/01/2019',
      dateAvailable: '01/01/2019',
      ingredientsEnglish:
        'Oat Milk (Water, Oats)., Contains 2% or Less of: Low Erucic Acid Rapeseed Oil, Dipotassium Phosphate, Calcium Carbonate, Tricalcium Phosphate, Sea Salt, Dicalcium Phosphate, Riboflavin, Vitamin A, Vitamin D2, Vitamin B12',
      photoUrl:
        'https://sage.blob.core.windows.net/media/5c093d726a8b8b9a9a402ac7_upc-0190646641016-done-0-glamor-5c6e0f62-4a16-482f-87e6-8d22a412e501-ouz43c.jpg',
      asin: 'B07D6TCPTZ'
    }),
    Product.create({
      ndbNumber: 11118,
      longName:
        '365 EVERYDAY VALUE® Almondmilk, Unsweetened, 64 Fl. Oz., 64 fl. oz.',
      dataSource: 'wholefoods.com',
      gtinupc: '0099482436285',
      manufacturer: '365 EVERYDAY VALUE',
      dateModified: '01/01/2019',
      dateAvailable: '01/01/2019',
      ingredientsEnglish:
        'Organic Almondmilk (Filtered Water, Organic Almonds), Sea Salt, Tricalcium Phosphate, Gellan Gum, Organic Locust Bean Gum, Vitamin A Palmitate, Ergocalciferol (Vitamin D2), Dl-alpha-tocopherol Acetate (Vitamin E), Cyanocobalamin (Vitamin B12).',
      photoUrl:
        'https://sage.blob.core.windows.net/media/5c12f36f3d4daf04b26552e6_productdataa00099482436285-c1n1.jpg',
      asin: 'B074MFT2LX'
    }),
    Product.create({
      ndbNumber: 11119,
      longName: 'CALIFIA FARMS Unsweetened Almond Milk, 48 fl. oz.',
      dataSource: 'wholefoods.com',
      gtinupc: '852909003305',
      manufacturer: 'CALIFIA FARMS',
      dateModified: '01/01/2019',
      dateAvailable: '01/01/2019',
      ingredientsEnglish:
        'Almondmilk (Water, Almonds), Calcium Carbonate, Sunflower Lecithin, Sea Salt, Potassium Citrate, Natural Flavors, Locust Bean Gum, Gellan Gum',
      photoUrl:
        'https://sage.blob.core.windows.net/media/5be8c3eae56b688c9a9322e9_upc-0852909003305-done-0-glamor-fdeb400b-4c65-425e-ada5-7188bc1985d9-b6f618.jpg',
      asin: null
    })
  ])

  console.log(`seeded ${chipsProducts.length} Chips products`)
  console.log(`seeded ${chocolate.length} Chocolate products`)
  console.log(`seeded ${milks.length} Milk products`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
