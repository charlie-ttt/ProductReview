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

const AllReviews = () => {
  return (
    // <View style={styles.backgroundStyle}>
    <Container>
      <Header />
      <Content>
        <Card>
          <CardItem header>
            <Text>Great Product! Repurchased multiple time!</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Comments: lorem ipsuakdjfa;kdjf;ajdkfllkdkkajdfkl aksdjfkajdf
                great products.
              </Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text>- John Smith</Text>
          </CardItem>
        </Card>
      </Content>

      {/* <Text>John Smith</Text>
      <Text>4.5</Text>
      <Text>
        Comments: lorem ipsuakdjfa;kdjf;ajdkfllkdkkajdfkl aksdjfkajdf great
        products.
      </Text>
      <Text>Date: Nov 16, 2019</Text> */}
    </Container>
    // </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    // marginVertical: 10
  }
});

export default AllReviews;
