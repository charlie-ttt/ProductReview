import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body
} from 'native-base';

const AllReviews = ({ reviewInfo }) => {
  return (
    <Card>
      <CardItem style={{ paddingVertical: 0 }}>
        <Text style={{ fontWeight: 'bold' }}>{reviewInfo.title}</Text>
      </CardItem>
      <CardItem style={{ paddingVertical: 0 }}>
        <Body style={{ paddingVertical: 0 }}>
          <Text>{reviewInfo.body}</Text>
          <Text>- {reviewInfo.name}</Text>
        </Body>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    // marginVertical: 10
  }
});

export default AllReviews;
