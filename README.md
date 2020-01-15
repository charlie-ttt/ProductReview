# Product Review 

Product Review is an iOS & Android app that retrieves reviews for grocery items using React Native and USDA Food/Nutrition Database

## Installation

Download the git project to your local machine

```bash
git clone https://github.com/charlie-ttt/ProductReview.git
```

## Run
create a ngrokSecret.js file and include your password like below. Replace the secret appropriately.
```bash
const ngrokSecret = 'http://NGROCKSECRET-HERE.ngrok.io';
module.exports = { ngrokSecret };

```

1. Run the server, use ngrok to allows a phone's access to a local host network.
2. Run Expo native
```bash
npm run start-dev
expo start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
