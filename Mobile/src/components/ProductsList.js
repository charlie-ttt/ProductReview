import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { withNavigation } from 'react-navigation';
import ProductsDetail from './ProductsDetail';
import axios from 'axios';
import { ngrokSecret } from '../../secrets';

const ProductsList = ({ title, navigation }) => {
  // if (!results.length) {
  //   return null;
  // }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    searchDb(title);
  }, []);

  const searchDb = async term => {
    try {
      const { data } = await axios.get(
        `${ngrokSecret}/api/products/search/${title}`
      );
      setProducts(data);
    } catch (err) {
      // setErrorMessage('Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        keyExtractor={result => result.id.toString()}
        renderItem={({ item }) => {
          return (
            // <TouchableOpacity
            //   onPress={() =>
            //     navigation.navigate('ResultsShow', { id: item.id })
            //   }
            // >
            <ProductsDetail product={item} />
            // </TouchableOpacity>
          );
        }}
      />
    </View>
    // <></>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
});

export default withNavigation(ProductsList);
