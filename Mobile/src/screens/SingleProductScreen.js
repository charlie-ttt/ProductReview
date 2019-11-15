import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import axios from 'axios';
import { ngrokSecret } from '../../secrets';
// import yelp from '../api/yelp';

const SingleProductScreen = ({ navigation }) => {
  const [singleProduct, setSingleProduct] = useState(null);
  // const id = navigation.getParam('id');
  console.log('this ONE', navigation.getParam('data'));
  const gtinUPC = navigation.getParam('data');

  const getSingleProduct = async gtinUPC => {
    // const response = await yelp.get(`/${id}`);
    // const response = await axios.get(`/${id}`);
    // setSingleProduct(response.data);

    const { data } = await axios.get(`${ngrokSecret}/api/products/${gtinUPC}`);
    console.log('TCL: data', data);
  };
  useEffect(() => {
    getSingleProduct(gtinUPC);
  }, []);

  if (!singleProduct) {
    return null;
  }

  return (
    <View>
      <Text>{singleProduct.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default SingleProductScreen;
