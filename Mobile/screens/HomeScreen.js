import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
    /* No more header config here! */
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.MainText}>This is Home Screen</Text>
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  MainText: {
    padding: 20,
    fontSize: 32,
    backgroundColor: 'lightgray'
  }
});

export default HomeStack;
