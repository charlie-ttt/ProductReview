import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import CameraScreen from './src/screens/CameraScreen';

import { createBottomTabNavigator } from 'react-navigation-tabs';

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Camera: CameraScreen
  },
  {
    tabBarOptions: {
      inactiveBackgroundColor: 'lightgray',
      activeBackgroundColor: 'white',
      activeTintColor: 'red',
      inactiveTintColor: 'gray'
    }
  }
);

export default createAppContainer(TabNavigator);
