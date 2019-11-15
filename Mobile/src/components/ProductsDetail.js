import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ProductsDetail = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.photoUrl }} />
      <Text style={styles.name}>{product.longName}</Text>
      {/* <Text>
        {product.rating} Stars, {product.review_count} Reviews
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
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
