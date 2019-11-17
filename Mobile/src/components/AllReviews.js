import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import SingleReview from './SingleReview';
import AmazonReviews from './AmazonReviews';
import { Container } from 'native-base';

const AllReviews = ({ asin }) => {
  return (
    <Container>
      {/* <View style={styles.backgroundStyle}> */}
      <SingleReview />
      <SingleReview />
      <SingleReview />
      <AmazonReviews asin={asin} />
      {/* </View> */}
    </Container>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    alignSelf: 'flex-start',
    marginHorizontal: 10
    // marginTop: 5
  }
});

export default AllReviews;
