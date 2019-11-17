import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import SingleReview from './SingleReview';
import AmazonReviews from './AmazonReviews';
import { Container, Content } from 'native-base';

const AllReviews = ({ asin }) => {
  return (
    <Container>
      {/* <Content> */}
      {/* <View style={styles.backgroundStyle}> */}
      <SingleReview reviewInfo={reviewsData[0]} />
      <SingleReview reviewInfo={reviewsData[1]} />
      <SingleReview reviewInfo={reviewsData[2]} />
      {/* <SingleReview />
        <SingleReview /> */}
      <AmazonReviews asin={asin} />
      {/* </View> */}
      {/* </Content> */}
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

const reviewsData = [
  {
    title: 'Great Product! Repurchased multiple time!',
    body: `My husband and I have been purchasing this products since it came out in 2016. We love it a lot`,
    name: `Margaret Strauff`
  },
  {
    title: 'Addictive! Year around.',
    body: `A bit dicy in the summer time as the dark chocolate can melt here in Florida but just perfect all the same. Love the taste explosion of dark chocolate and sea salt pretzel. This is Not just a Christmas time food. Thank you Walmart for putting them back on the shelf this June. Next time I'd order smaller packages to keep them fresher. `,
    name: `Tes Bauer`
  },
  {
    title: 'These are great for the price!',
    body: `I bought the for my hubby and son, both self proclaimed chocoholics, and they LOVE them! They really like all the flavors and they were delivered with ice packs to keep them from melting, how awesome is that??!! `,
    name: `EJ`
  }
];

export default AllReviews;
