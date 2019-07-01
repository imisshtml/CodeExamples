import { Easing, Animated } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { dimensions } from 'src/styles/base.js';
import ReservationsScreen from 'src/screens/Reservations/ReservationsScreen';
import DetailsScreen from 'src/screens/Details/DetailsScreen';
import CreateScreen from 'src/screens/Create/CreateScreen';

const AppNavigator = createStackNavigator({
  Reservations: {
    screen: ReservationsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Reservations',
      headerLeft: null
    }),
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: ({ navigation }) => ({
      title: `Reservation: ${navigation.state.params.name}`,
      headerLeft: null
    }),
  },
  Create: {
    screen: CreateScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Create New Reservation',
      headerLeft: null
    }),
  }
}, {
  initialRouteName: 'Reservations',
  headerBackTitleVisible: false,
  headerLayoutPreset: 'left',
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
        outputRange: [dimensions.fullWidth, 0, 0]
      })
      return { translateX } 
    },
  }),
});

export default createAppContainer(AppNavigator);
