import {Dimensions} from 'react-native'

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}
  
export const colors  = {
  primary: '#64ce47',
  secondary: '#444444',
  tertiary: '#5DA6A7',
  subtle: '#a2a2a2',
  white: '#ffffff',
  black: '#000000',
  warning: '#e5c700',
  gradientOne: '#fff1eb',
  gradientTwo: '#ace0f9'
}

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
  android: 24
}

export const margin = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
}

export const fonts = {
  xs: 12,
  sm: 14,
  md: 22,
  lg: 30
}