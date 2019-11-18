import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';
import AllReviews from '../components/AllReviews';
import BarCharts from '../components/BarChartsNew';
import axios from 'axios';
import { ngrokSecret } from '../../secrets';
import { Container, Content } from 'native-base';
import { white } from 'ansi-colors';

const SingleProductScreen = ({ navigation }) => {
  const [singleProduct, setSingleProduct] = useState(null);
  const [allergen, setAllergen] = useState([]);

  const gtinUPC = navigation.getParam('gtinupc');

  const getSingleProduct = async gtinUPC => {
    const { data } = await axios.get(`${ngrokSecret}/api/products/${gtinUPC}`);
    // console.log('TCL: data in singleproduct', data);

    console.log('here in getSingleProduct', singleProduct);

    //update Allergen warning on state
    if (singleProduct) {
      if (singleProduct.ingredientsEnglish.includes('soy')) {
        setAllergen(prev => [...prev, 'Soy']);
      }
      if (
        singleProduct.ingredientsEnglish.toLowerCase().includes('milk') ||
        singleProduct.ingredientsEnglish.toLowerCase().includes('butter')
      ) {
        setAllergen(prev => [...prev, 'Dairy']);
      }
    } else {
      setSingleProduct(data);
    }
  };
  useEffect(() => {
    getSingleProduct(gtinUPC);
  }, [singleProduct]);

  if (!singleProduct) {
    return null;
  }

  return (
    <View style={styles.backgroundStyle}>
      <Content>
        {/* <ScrollView
        style={styles.scrollStyle}
        showsVerticalScrollIndicator={false}
      > */}
        <Text style={styles.productName}>{singleProduct.longName}</Text>
        <View style={styles.suggestionStyle}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            Best Tasting!
          </Text>
        </View>
        <View style={styles.headerStyle}>
          <Image
            style={styles.image}
            source={{ uri: singleProduct.photoUrl }}
          ></Image>
          <BarCharts />
        </View>
        <Text style={{ ...styles.headerTitle, marginTop: 15 }}>
          Ingredients:
        </Text>
        <Text style={styles.ingredients}>
          {singleProduct.ingredientsEnglish}
        </Text>
        {allergen[0] ? (
          <Text style={styles.warningText}>
            Warning:{' '}
            <Text style={{ fontWeight: 'normal', color: 'black' }}>
              {allergen.join(', ')}
            </Text>
          </Text>
        ) : null}

        <View style={styles.lineStyle} />
        <Text style={styles.headerTitle}>Product Reviews</Text>
        <Text style={styles.subHeaderTitle}>
          Average Ratings:
          <Text> ⭐️⭐️⭐️⭐️</Text>
        </Text>
        <AllReviews asin={singleProduct.asin} />
        {/* </ScrollView> */}
      </Content>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    alignItems: 'center',
    flex: 1
  },
  image: {
    width: '55%',
    // height: 200,
    // marginLeft: 10,
    borderRadius: 4,
    marginBottom: 5
  },
  productName: {
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-start',
    marginHorizontal: 10
  },
  subHeaderTitle: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginHorizontal: 10
  },
  ingredients: {
    marginHorizontal: 10,
    marginTop: 10
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 200,
    marginBottom: 30
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    marginVertical: 15,
    marginHorizontal: 60
  },
  warningText: {
    marginVertical: 10,
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: 'red'
  },
  suggestionStyle: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: 'rgb(70,140,40)',
    borderRadius: 16,
    padding: 10,
    width: '30%',
    alignSelf: 'center',
    alignItems: 'center'
  },
  scrollStyle: {}
});

export default SingleProductScreen;
