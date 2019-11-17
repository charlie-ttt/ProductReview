import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import axios from 'axios';
import { ngrokSecret } from '../../secrets';

const AmazonReviews = ({ asin }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    searchReviews(asin);
  }, []);

  const searchReviews = async asin => {
    try {
      const { data } = await axios.get(
        `${ngrokSecret}/api/reviews/amazon/${asin}`
      );
      setReviews(data);
      console.log('TCL: data', data);
    } catch (err) {
      console.log(err);
    }
  };

  const avgReview = () => {
    const total = reviews.reduce((accum, curVal) => {
      return accum + curVal.rating;
    }, 0);
    return (total / reviews.length).toFixed(2);
  };

  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.headerStyle}>Amazon Reviews</Text>
      <Text>Consensus: {avgReview()} / 5</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={reviews}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.eachReviewStyle}>
              <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
              <Text style={{ fontWeight: 'bold' }}>
                Rating:
                <Text> {item.rating}</Text>
              </Text>
              <Text style={styles.descriptionStyle}>
                Review: {item.review}{' '}
              </Text>
            </View>
          );
        }}
      />

      {/* <Text>Great Products; everyone should all buy this!!</Text>

<Text>Date: Nov 16, 2019</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    // paddingBottom: 40,
    marginHorizontal: 10,
    flex: 1
  },
  eachReviewStyle: {
    width: 300,
    padding: 5
  },
  headerStyle: {
    fontWeight: 'bold',
    fontSize: 20
  },
  descriptionStyle: {}
});

export default AmazonReviews;
