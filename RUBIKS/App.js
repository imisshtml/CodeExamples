import React from 'react';
import { StyleSheet, Text, View, Image, Animated, Easing } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  AdMobBanner, AdMobInterstitial, PublisherBanner, AdMobRewarded, Constants, Svg
} from 'expo';

import store from './store';
import PlayOnline from './src/PlayOnline';
import AuthScreen from './src/AuthScreen';
import HomeScreen from './src/HomeScreen';
import WelcomeScreen from './src/WelcomeScreen';
import LoginScreen from './src/LoginScreen';
import AccountScreen from './src/AccountScreen';
import StandingsScreen from './src/StandingsScreen';
import SocialScreen from './src/SocialScreen';
import Game3x3 from './src/GameScreen_3x3';
import ForfeitScreen from './src/ForfeitScreen';

const ADUNITID = `ca-app-pub-4846990712111779~3774124099`;
const BANNER_ID = `ca-app-pub-4846990712111779/8204323692`;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lastRefresh: Date(Date.now()).toString(),
    }
    this.refreshScreen = this.refreshScreen.bind(this)
  }

  refreshScreen() {
    console.log('update');
    this.setState({ lastRefresh: Date(Date.now()).toString() })
  }

  _getCurrentRouteName(navState) {
    //this may not be needed
    if (navState.hasOwnProperty('index')) {
        this._getCurrentRouteName(navState.routes[navState.index])
    } else {
        console.log("Current Route Name:", navState.routeName)
        // can then save this to the state (I used redux)
        //store.dispatch(setCurrentRouteName(navState.routeName))
    }

}
  render() {
    const mainTabNavigator = createBottomTabNavigator(
      {
        GAME: HomeScreen,
        STANDINGS: StandingsScreen,
        SOCIAL: SocialScreen,
        ACCOUNT: AccountScreen
      },
      {
        lazy: false,
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            if (routeName === 'GAME') {
              return <Image source={focused ? require('./assets/game_tab_icon_active.png') : require('./assets/game_tab_icon.png')} 
                      style={{height: 25, width: 25}}/>;
            } else if (routeName === 'STANDINGS') {
            return <Image source={focused ? require('./assets/standings_tab_icon_active.png') : require('./assets/standings_tab_icon.png')} 
                    style={{height: 25, width: 42}}/>;
            } else  if (routeName === 'SOCIAL') {
              return <Image source={focused ? require('./assets/social_tab_icon_active.png') : require('./assets/social_tab_icon.png')} 
                    style={{height: 25, width: 38}}/>;
            }else  if (routeName === 'ACCOUNT') {
              return <Image source={focused ? require('./assets/account_tab_icon_active.png') : require('./assets/account_tab_icon.png')} 
                      style={{height: 25, width: 25}}/>;
            }
          },
        }),
        tabBarOptions: {
          activeTintColor: '#6e73ff',
          inactiveTintColor: 'gray',
          labelStyle:{ fontWeight: 'bold'},
        },
      }
    );

    /*
    const gameTabNavigator = createBottomTabNavigator(
      {
        FORFEIT: ForfeitScreen,
        SCRAMBLE: Game3x3
      },
      {
        initialRouteName: 'SCRAMBLE',
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            if (routeName === 'FORFEIT') {
              return <Image source={require('./assets/forfeit_tab_icon.png')} 
                      style={{height: 25, width: 25}}/>;
            } else if (routeName === 'SCRAMBLE') {
            return <Image source={require('./assets/mix_tab_icon.png')} 
                    style={{height: 25, width: 25}}/>;
            }
          },
          tabBarOnPress: ({ focused }) => {
                const { routeName } = navigation.state;
                console.log('test: '+this.state.lastRefresh);
                //this.refreshScreen();
          }
        }),
        tabBarOptions: {
          activeTintColor: 'gray',
          inactiveTintColor: 'gray',
          labelStyle:{ fontWeight: 'bold'},

        },
      }
    );
    */

    const RootStack = createStackNavigator(
      {
        Welcome: WelcomeScreen,
        Login: LoginScreen,
        Auth: AuthScreen,
        Home: mainTabNavigator,
        Play: Game3x3,
      },
      {
        initialRouteName: 'Home',
        navigationOptions:
        {
            headerStyle: { height: 0, backgroundColor: 'transparent', opacity: 1},
            headerLeft: null,
        },
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
            const opacity = position.interpolate({
              inputRange: [thisSceneIndex - 1, thisSceneIndex],
              outputRange: [0, 1],
            })
            return { opacity } 
          },
        }),
      }
    );


    return (
      <Provider store={store}>
          <RootStack 
            onNavigationStateChange={(prevState, newState) => {
              this._getCurrentRouteName(newState)
          }}
          />
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
