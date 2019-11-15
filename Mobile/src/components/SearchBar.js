import * as React from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Feather, AntDesign } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit, navigation }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        returnKeyType="search"
        placeholder="search for products here"
        onChangeText={onTermChange}
        value={term}
        onEndEditing={onTermSubmit}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Camera')}
        style={{ alignSelf: 'center' }}
      >
        <AntDesign name="camerao" style={styles.iconStyle} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row'
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center'
  }
});

export default withNavigation(SearchBar);
