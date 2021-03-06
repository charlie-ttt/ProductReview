import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import CameraScreen from './src/screens/CameraScreen';
import SingleProductScreen from './src/screens/SingleProductScreen';
import NutritionScreen from './src/screens/NutritionScreen';

import { createBottomTabNavigator } from 'react-navigation-tabs';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Camera: CameraScreen,
    SingleProduct: SingleProductScreen,
    NutritionScreen: NutritionScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Product Reviews'
    }
  }
);

export default createAppContainer(navigator);
