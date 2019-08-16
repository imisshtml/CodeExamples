import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';
import * as Screen from 'src/screens';

const MainNavigation = createBottomTabNavigator(
  {
    Users: {
      screen: createStackNavigator({
        Users: {
          screen: Screen.UsersScreen,
          navigationOptions: { title: 'Users' },
        },
      }),
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
              name="users"
              color={tintColor}
              size={24}
          />
        ),
      },
    },
    Feed: {
      screen: createStackNavigator({
        Feed: {
          screen: Screen.FeedScreen,
          navigationOptions: { title: 'Feed' },
        },
      }),
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
              name="list"
              color={tintColor}
              size={24}
          />
        ),
      },
    },
    Todo: {
      screen: createStackNavigator({
        Todo: {
          screen: Screen.TodoScreen,
          navigationOptions: { title: 'ToDo' },
        },
      }),
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
              name="check-circle"
              color={tintColor}
              size={24}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#007aff',
      labelStyle:{ fontWeight: 'bold' },
    },
  }
);

export default createAppContainer(MainNavigation);
