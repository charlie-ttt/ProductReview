const axios = require('axios')

module.exports = axios.create({
  baseURL: 'https://trackapi.nutritionix.com/v2/search',
  headers: {
    'x-app-id': 'cce8da77',
    'x-app-key': 'b1190da1cbf0a9863ab932558dda5044'
  }
})
