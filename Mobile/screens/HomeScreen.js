import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import SeachBar from '../components/SearchBar';

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  return (
    <View style={styles.container}>
      <SeachBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log('hey')}
      />
      <Text style={styles.MainText}>This is Home Screen</Text>
      <Button title="button" />
    </View>
  );
};

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
