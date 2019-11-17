import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import AllReviews from '../components/AllReviews';
import axios from 'axios';
import { ngrokSecret } from '../../secrets';
// import yelp from '../api/yelp';

const SingleProductScreen = ({ navigation }) => {
  const [singleProduct, setSingleProduct] = useState(null);
  // const id = navigation.getParam('id');
  console.log('this ONE', navigation.getParam('gtinupc'));
  const gtinUPC = navigation.getParam('gtinupc');

  const getSingleProduct = async gtinUPC => {
    // const response = await yelp.get(`/${id}`);
    // const response = await axios.get(`/${id}`);
    // setSingleProduct(response.data);

    const { data } = await axios.get(`${ngrokSecret}/api/products/${gtinUPC}`);
    console.log('TCL: data in singleproduct', data);
    setSingleProduct(data);
  };
  useEffect(() => {
    getSingleProduct(gtinUPC);
  }, []);

  if (!singleProduct) {
    return null;
  }

  return (
    <View style={styles.backgroundStyle}>
      <ScrollView>
        <Image
          style={styles.image}
          source={{ uri: singleProduct.photoUrl }}
        ></Image>
        <Text style={styles.productName}>{singleProduct.longName}</Text>
        <Text style={styles.headerTitle}>Ingredients:</Text>
        <Text style={styles.ingredients}>
          {singleProduct.ingredientsEnglish}
        </Text>
        <Text style={styles.headerTitle}>
          Ratings:
          <Text> ⭐️⭐️⭐️⭐️</Text>
        </Text>
        <Text style={styles.headerTitle}>Food Reviews</Text>
        <AllReviews />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 200,
    borderRadius: 4,
    marginBottom: 5
  },
  productName: {
    marginTop: 10
  },
  headerTitle: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 15
  },
  ingredients: {
    marginHorizontal: 10,
    marginTop: 5
  },
  backgroundStyle: {
    marginTop: 15,
    alignItems: 'center'
  }
});

export default SingleProductScreen;
