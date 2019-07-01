import { Easing, Animated } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { winWidth } from '../constants/dimensions';
import HomeScreen from '../screens/Home/';
import DetailsScreen from '../screens/Details/';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  }
}, {
  initialRouteName: 'Home',
  headerMode: 'none', 
  mode: 'modal',
  transitionConfig: () => ({
    containerStyle: {
    },
    transitionSpec: {
      duration: 0,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {      
      const { position, scene } = sceneProps
      const thisSceneIndex = scene.index
      
      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [winWidth, 0, 0]
      })
      return { translateX } 
    },
  }),
});

export default createAppContainer(AppNavigator);
