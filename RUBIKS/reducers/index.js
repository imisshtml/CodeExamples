import { combineReducers } from 'redux';
import cubeReducer from './CubeReducer';

export default combineReducers({
   cubeReducer,
   auth: () => { return {} }
});