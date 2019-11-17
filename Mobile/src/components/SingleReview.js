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
      <CardItem header>
        <Text>{reviewInfo.title}</Text>
      </CardItem>
      <CardItem>
        <Body>
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
