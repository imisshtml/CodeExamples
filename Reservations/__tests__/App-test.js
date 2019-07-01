import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

jest.mock("NativeModules", () => ({
  UIManager: {
    RCTView: () => ({
      directEventTypes: {}
    })
  },
  KeyboardObserver: {},
  RNGestureHandlerModule: {
    attachGestureHandler: jest.fn(),
    createGestureHandler: jest.fn(),
    dropGestureHandler: jest.fn(),
    updateGestureHandler: jest.fn(),
    State: {},
    Directions: {}
  }
}))

test('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});