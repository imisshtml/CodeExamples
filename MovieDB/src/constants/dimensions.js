import { Dimensions } from 'react-native';

export const winWidth = Dimensions.get('window').width;
export const winHeight = Dimensions.get('window').height;

export const cardWidth = winWidth*.3;
export const cardHeight = cardWidth*1.5;

export const cardDetailWidth = winWidth;
export const cardDetailHeight = cardDetailWidth*1.5;

export const dropdownIconWidth = winWidth*.1;
export const dropdownIconHeight = dropdownIconWidth;

export const starsWidth = 15;
export const starsHeight = 15;

export const arrowWidth = 35;
export const arrowHeight = arrowWidth*.71;