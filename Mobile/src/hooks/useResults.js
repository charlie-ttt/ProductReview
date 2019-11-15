import { useEffect, useState } from 'react';
// import yelp from '../api/yelp';
import axios from 'axios';
import { ngrokSecret } from '../../secrets';

//return an array of product objs

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    search('chimken');
  }, []);

  const search = async searchTerm => {
    try {
      const { data } = await axios.get(
        `${ngrokSecret}/api/products/${searchTerm}`
      );
      console.log('TCL: data', data);
      setResults(data);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  return [results, errorMessage];
};

// export default () => {
//   const [results, setResults] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');

//   const searchApi = async searchTerm => {
//     console.log('Hi there!');
//     try {
//       const response = await yelp.get('/search', {
//         params: {
//           limit: 50,
//           term: searchTerm,
//           location: 'san jose'
//         }
//       });
//       setResults(response.data.businesses);
//     } catch (err) {
//       setErrorMessage('Something went wrong');
//     }
//   };

//   // Call searchApi when component
//   // is first rendered.  BAD CODE!
//   // searchApi('pasta');
//   useEffect(() => {
//     searchApi('pasta');
//   }, []);

//   return [searchApi, results, errorMessage];
// };
