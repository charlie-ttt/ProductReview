import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { ngrokSecret } from '../../secrets';

const generateImg = async productName => {
  console.log('Searching for TCL: productName', productName);
  const { data } = await axios.get(
    `${ngrokSecret}/api/products/generateImg/${productName}`
  );

  return data;
};

const ProductsDetail = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: product.photoUrl
        }}
      />
      <Text style={styles.name}>{product.longName}</Text>
      {/* <Text>
        {product.rating} Stars, {product.review_count} Reviews
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    alignItems: 'center'
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold',
    width: 200
  }
});

export default ProductsDetail;
