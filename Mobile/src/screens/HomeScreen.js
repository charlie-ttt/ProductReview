import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import SearchBar from '../components/SearchBar';
import ProductsList from '../components/ProductsList';
// import useResults from '../hooks/useResults';
import axios from 'axios';
import { ngrokSecret } from '../../secrets';

const HomeScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  // const [results, errorMessage] = useResults();

  return (
    <View style={styles.backgroundStyle}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => console.log('nothing right now')}
      />
      {/* {errorMessage ? <Text>{errorMessage}</Text> : null} */}
      <ScrollView>
        <ProductsList
          // results={filterResultsByPrice('$')}
          title="Chips"
        />
        <ProductsList
          // results={filterResultsByPrice('$$')}
          title="Chocolate"
        />
        <ProductsList
          // results={filterResultsByPrice('$$$')}
          title="Milk"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {}
});

export default HomeScreen;
