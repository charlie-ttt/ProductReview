import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Button
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const ReviewSubmitForm = ({ asin }) => {
  return (
    <Card>
      <CardItem style={{ paddingVertical: 0 }}>
        <Button rounded info>
          <Ionicons style={styles.iconStyle} name="ios-add-circle-outline" />
          <Text style={{ fontWeight: 'bold' }}> Tap Here To Add Review </Text>
        </Button>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    alignSelf: 'flex-start',
    marginHorizontal: 10
    // marginTop: 5
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    paddingLeft: 10,
    color: 'white'
  }
});

export default ReviewSubmitForm;
