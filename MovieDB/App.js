import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import MainNavigation from './src/components/MainNavigation';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    );
  }
}