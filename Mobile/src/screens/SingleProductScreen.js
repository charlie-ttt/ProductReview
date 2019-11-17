import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import AllReviews from '../components/AllReviews';
import BarCharts from '../components/BarCharts';
import axios from 'axios';
import { ngrokSecret } from '../../secrets';

const SingleProductScreen = ({ navigation }) => {
  const [singleProduct, setSingleProduct] = useState(null);
  console.log('this ONE', navigation.getParam('gtinupc'));
  const gtinUPC = navigation.getParam('gtinupc');

  const getSingleProduct = async gtinUPC => {
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
        <Text style={styles.productName}>{singleProduct.longName}</Text>
        <View style={styles.headerStyle}>
          <Image
            style={styles.image}
            source={{ uri: singleProduct.photoUrl }}
          ></Image>
          <BarCharts />
        </View>
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
    width: 230,
    height: 200,
    // marginLeft: 10,
    borderRadius: 4,
    marginBottom: 5
  },
  productName: {
    marginVertical: 10,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold'
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
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 200
  }
});

export default SingleProductScreen;
