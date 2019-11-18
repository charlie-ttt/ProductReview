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

const FullNutrition = ({ gtinupc }) => {
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
          <Text>Food Type: {nutrition.food_name}</Text>
          <Text>
            Serving: {nutrition.serving_qty}{' '}
            <Text>{nutrition.serving_unit}</Text>
          </Text>
          <Text>
            Calories: <Text>{nutrition.nf_calories}</Text>
          </Text>
          <Text>
            Sugar: <Text>{nutrition.nf_sugars} gram(s)</Text>
          </Text>
          <Text>
            Carbohydrate: <Text>{nutrition.nf_total_carbohydrate} gram(s)</Text>
          </Text>
          <Text>
            Protein: <Text>{nutrition.nf_protein} gram(s)</Text>
          </Text>
          <Text>
            Fat: <Text>{nutrition.nf_total_fat} gram(s)</Text>
          </Text>
        </Body>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginHorizontal: 10
  },
  headerTitle: {
    fontWeight: 'bold'
  }
});

export default FullNutrition;
