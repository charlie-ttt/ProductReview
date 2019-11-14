import { createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
// import CameraScreen from './screens/CameraScreen';

import { createBottomTabNavigator } from 'react-navigation-tabs';

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen
    // Camera: CameraScreen
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

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

// const AppNavigator = createStackNavigator(
//   {
//     Home: { screen: HomeScreen },
//     Details: { screen: DetailScreen }
//   },
// {
//   initialRouteName: 'Home',
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: '#f4511e'
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       fontWeight: 'bold'
//     }
//   }
// }
// );

// const AppContainer = createAppContainer(AppNavigator);
