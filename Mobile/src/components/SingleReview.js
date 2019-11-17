import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AllReviews = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Text>John Smith</Text>
      <Text>4.5</Text>
      <Text>
        Comments: lorem ipsuakdjfa;kdjf;ajdkfllkdkkajdfkl aksdjfkajdf great
        products.
      </Text>
      <Text>Date: Nov 16, 2019</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginVertical: 10
  }
});

export default AllReviews;
