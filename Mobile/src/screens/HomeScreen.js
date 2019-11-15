import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import SearchBar from '../components/SearchBar';
import ProductsList from '../components/ProductsList';
// import useResults from '../hooks/useResults';
import axios from 'axios';
import { ngrokSecret } from '../../secrets';

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  // const [results, errorMessage] = useResults();
  const [test, setTest] = useState('');

  const handlePress = async () => {
    console.log('click me');
    const { data } = await axios.get(
      `${ngrokSecret}/api/products/search/${term}`
    );
    console.log('TCL: data', data[0].longName);
    setTest(data);
  };

  return (
    <>
      <Button title={'Click me'} onPress={handlePress} />

      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => console.log('nothing right now')}
      />
      {/* {errorMessage ? <Text>{errorMessage}</Text> : null} */}
      <ScrollView>
        <ProductsList
          // results={filterResultsByPrice('$')}
          title="chips"
        />
        {/* <ProductsList
          // results={filterResultsByPrice('$$')}
          title="Chocolate"
        />
        <ProductsList
          // results={filterResultsByPrice('$$$')}
          title="Nondairy Milk"
        /> */}
      </ScrollView>
    </>
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
    fontSize: 15,
    backgroundColor: 'lightgray'
  }
});

export default HomeStack;
// export default HomeScreen;
