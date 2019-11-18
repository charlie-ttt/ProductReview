import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import { ngrokSecret } from '../../secrets';

const NutritionScreen = ({ gtinupc }) => {
  const [nutrition, setNutrition] = useState({});

  useEffect(() => {
    lookup(gtinupc);
  }, []);

  const lookup = async gtinupc => {
    try {
      const { data } = await axios.get(
        `${ngrokSecret}/api/products/nutrition/${gtinupc}`
      );
      console.log('TCL: lookup -> data', data);
      setNutrition(data.foods[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card>
      <CardItem style={{ paddingVertical: 0 }}>
        <Text style={{ fontWeight: 'bold' }}>Full Nutritional Value{}</Text>
      </CardItem>

      <CardItem style={{ paddingVertical: 0 }}>
        <Body style={{ paddingVertical: 0 }}>
          <Text>Food name: {nutrition.food_name}</Text>
          <Text>
            Serving: {nutrition.serving_qty} {nutrition.serving_unit}
          </Text>
          <Text>Calories: {nutrition.nf_calories}</Text>
          <Text>Sugar: {nutrition.nf_sugars} gram(s)</Text>
          <Text>Carbohydrate: {nutrition.nf_total_carbohydrate} gram(s)</Text>
          <Text>Protein: {nutrition.nf_protein} gram(s)</Text>
          <Text>Fat: {nutrition.nf_total_fat} gram(s)</Text>
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

export default NutritionScreen;
